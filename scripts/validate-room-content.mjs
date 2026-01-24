#!/usr/bin/env node
/**
 * Universal Room Content Validator ("industrial" edition)
 *
 * What it validates (and ONLY these):
 *   - room.exercises
 *   - room.dictionaryItems
 *   - room.lexHints
 *
 * What it intentionally ignores:
 *   - JSX (cardIntro / renderBody / afterBody etc.)
 *   - React components (ExerciseListComponent)
 *   - gating / keys / progress / routing
 *   - registries & pages (we never mutate anything)
 *
 * How it stays architecture-compatible:
 *   - It discovers real registries by scanning src/** for *_ROOMS arrays.
 *   - It loads the actual modules via esbuild (JSX-safe), but forces
 *     import.meta.env.DEV=false so dev-only throwers don't explode.
 *   - It exports internal (non-exported) registries by wrapping the source.
 *
 * Usage:
 *   node scripts/validate-room-content.mjs
 *   node scripts/validate-room-content.mjs --json
 *   node scripts/validate-room-content.mjs --strict
 */

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { pathToFileURL } from "node:url";

const PROJECT_ROOT = process.cwd();
const SRC_ROOT = path.join(PROJECT_ROOT, "src");

const ARGS = new Set(process.argv.slice(2));
const WANT_JSON = ARGS.has("--json");
const STRICT = ARGS.has("--strict");
const ONLY_PATTERN = getArgValue("--only"); // regex

function getArgValue(flag) {
  const idx = process.argv.indexOf(flag);
  if (idx === -1) return null;
  return process.argv[idx + 1] || null;
}

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

function normalizeId(id) {
  if (typeof id === "number") return String(id);
  if (typeof id === "string") return id.trim();
  return "";
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

// ---------- Logging / report helpers ----------

const LEVEL = {
  VALID: 0,
  WARN: 1,
  ERROR: 2,
};

function makeIssue(level, message, where = null) {
  return { level, message, where };
}

function bumpMaxLevel(cur, next) {
  return LEVEL[next] > LEVEL[cur] ? next : cur;
}

function formatIssue(issue) {
  const where = issue.where ? `${issue.where}: ` : "";
  return `${issue.level}: ${where}${issue.message}`;
}

// ---------- File discovery ----------

async function walk(dir) {
  const out = [];
  const entries = await fsp.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip node_modules/dist caches etc if any
      if (e.name === "node_modules" || e.name === "dist") continue;
      out.push(...(await walk(full)));
    } else {
      out.push(full);
    }
  }
  return out;
}

function looksLikeRoomsFile(sourceText) {
  // We want the REAL architecture, not guesses.
  // This heuristic is intentionally narrow: *_ROOMS array + exercises field.
  const hasRoomsArray = /(?:^|\n)\s*(?:export\s+)?const\s+[A-Z0-9_]+_ROOMS\s*=\s*\[/m.test(
    sourceText
  );
  const hasRoomsArrayNonExport = /(?:^|\n)\s*const\s+[A-Z0-9_]+_ROOMS\s*=\s*\[/m.test(
    sourceText
  );
  const hasExercisesField = /\bexercises\s*:\s*/.test(sourceText);
  return (hasRoomsArray || hasRoomsArrayNonExport) && hasExercisesField;
}

function extractRoomsConstNames(sourceText) {
  const names = [];
  const re = /(?:^|\n)\s*(?:export\s+)?const\s+([A-Z0-9_]+_ROOMS)\s*=\s*\[/g;
  let m;
  while ((m = re.exec(sourceText))) {
    names.push(m[1]);
  }
  return uniq(names);
}

// ---------- Module loading via esbuild ----------

async function buildAndImportModule(sourcePath, sourceText, roomsConstNames) {
  const esbuild = await import("esbuild");

  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), "lex-content-"));
  const outFile = path.join(tmpDir, "bundle.mjs");

  const captureLines = roomsConstNames
    .map((n) => `  ${n}: (typeof ${n} !== 'undefined' ? ${n} : undefined),`)
    .join("\n");

  const wrapped =
    sourceText +
    `\n\n// --- validator capture (auto-generated) ---\n` +
    `export const __VALIDATOR_CAPTURE__ = {\n${captureLines}\n};\n`;

  await esbuild.build({
    stdin: {
      contents: wrapped,
      resolveDir: path.dirname(sourcePath),
      sourcefile: sourcePath,
      loader: (() => {
        const ext = path.extname(sourcePath);
        if (ext === ".tsx") return "tsx";
        if (ext === ".ts") return "ts";
        // .js and .jsx may both contain JSX in this codebase
        return "jsx";
      })(),
    },
    outfile: outFile,
    bundle: true,
    format: "esm",
    platform: "node",
    target: ["node18"],
    sourcemap: false,
    // We stub React/react-router-dom so the validator can run in pure Node
    // (even if node_modules are not installed). We only need JSX to evaluate,
    // not to actually render.
    plugins: [
      {
        name: "lex-validator-stubs",
        setup(build) {
          const stubs = new Map([
            [
              "react",
              `// react stub for validator\nexport const Fragment = Symbol.for('react.fragment');\nexport function createElement(){ return { $$typeof: Symbol.for('react.element') }; }\nexport function useState(v){ return [v, () => {}]; }\nexport function useRef(v){ return { current: v }; }\nexport function useMemo(fn){ return fn(); }\nexport default { createElement, Fragment };\n`,
            ],
            [
              "react-router-dom",
              `// react-router-dom stub for validator\nexport const Link = (...args) => null;\nexport const NavLink = (...args) => null;\nexport function useNavigate(){ return () => {}; }\nexport function useLocation(){ return { pathname: '/' }; }\nexport function useParams(){ return {}; }\nexport default {};\n`,
            ],
            [
              "react-dom",
              `// react-dom stub for validator\nexport function createRoot(){ return { render(){} }; }\nexport default {};\n`,
            ],
          ]);

          build.onResolve({ filter: /^(react|react-dom|react-router-dom)$/ }, (args) => {
            return { path: args.path, namespace: "lex-stub" };
          });

          build.onLoad({ filter: /.*/, namespace: "lex-stub" }, (args) => {
            const contents = stubs.get(args.path) || "export default {};";
            return { contents, loader: "js" };
          });
        },
      },
    ],
    define: {
      "import.meta.env": "{}",
      "import.meta.env.DEV": "false",
      "import.meta.env.MODE": '"production"',
    },
    loader: {
      ".js": "jsx",
      ".jsx": "jsx",
      ".ts": "ts",
      ".tsx": "tsx",
      ".css": "text",
      ".svg": "dataurl",
      ".png": "dataurl",
      ".jpg": "dataurl",
      ".jpeg": "dataurl",
      ".webp": "dataurl",
      ".woff": "dataurl",
      ".woff2": "dataurl",
    },
    logLevel: "silent",
  });

  const mod = await import(pathToFileURL(outFile).href);
  return { mod, tmpDir, outFile };
}

// ---------- Content validators ----------

function validateLexHints(lexHints, ctx) {
  const issues = [];

  if (lexHints == null) {
    issues.push(makeIssue("WARN", "lexHints missing (room has no hints)", ctx));
    return issues;
  }

  if (Array.isArray(lexHints)) {
    if (lexHints.length === 0) {
      issues.push(makeIssue("WARN", "lexHints is an empty array", ctx));
      return issues;
    }
    for (let i = 0; i < lexHints.length; i++) {
      const v = lexHints[i];
      if (typeof v !== "string" || !v.trim()) {
        issues.push(
          makeIssue("ERROR", `lexHints[${i}] must be a non-empty string`, ctx)
        );
      }
    }
    return issues;
  }

  // Some future registries may keep lexHints as an object map.
  // We don't block, but we surface it.
  if (isPlainObject(lexHints)) {
    issues.push(
      makeIssue(
        "WARN",
        "lexHints is an object (expected array in current rooms). Validator skipped deep validation.",
        ctx
      )
    );
    return issues;
  }

  issues.push(
    makeIssue(
      "ERROR",
      `lexHints must be an array (or object map), got ${typeof lexHints}`,
      ctx
    )
  );
  return issues;
}

function validateDictionaryItems(dictionaryItems, ctx) {
  const issues = [];

  if (dictionaryItems == null) {
    issues.push(makeIssue("WARN", "dictionaryItems missing", ctx));
    return issues;
  }

  if (!Array.isArray(dictionaryItems)) {
    issues.push(makeIssue("ERROR", "dictionaryItems must be an array", ctx));
    return issues;
  }

  if (dictionaryItems.length === 0) {
    issues.push(makeIssue("WARN", "dictionaryItems is an empty array", ctx));
    return issues;
  }

  const seenWords = new Map();

  for (let i = 0; i < dictionaryItems.length; i++) {
    const it = dictionaryItems[i];
    const p = `${ctx}[${i}]`;

    if (!isPlainObject(it)) {
      issues.push(
        makeIssue(
          "ERROR",
          `dictionaryItems[${i}] must be an object`,
          ctx
        )
      );
      continue;
    }

    if (typeof it.word !== "string" || !it.word.trim()) {
      issues.push(makeIssue("ERROR", "word is missing/invalid", p));
    }

    if (typeof it.meaning !== "string" || !it.meaning.trim()) {
      issues.push(makeIssue("ERROR", "meaning is missing/invalid", p));
    }

    // tts can be string or null/undefined
    if (it.tts != null && typeof it.tts !== "string") {
      issues.push(makeIssue("ERROR", "tts must be a string when provided", p));
    }

    const w = typeof it.word === "string" ? it.word.trim().toLowerCase() : "";
    if (w) {
      if (seenWords.has(w)) {
        issues.push(
          makeIssue(
            "WARN",
            `duplicate dictionary word '${it.word}' (also at index ${seenWords.get(
              w
            )})`,
            ctx
          )
        );
      } else {
        seenWords.set(w, i);
      }
    }
  }

  return issues;
}

function validateOptionsArray(options, ctx, issues) {
  if (!Array.isArray(options) || options.length === 0) {
    issues.push(makeIssue("ERROR", "options must be a non-empty array", ctx));
    return;
  }
  const values = new Set();
  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const p = `${ctx}.options[${i}]`;
    if (!isPlainObject(opt)) {
      issues.push(makeIssue("ERROR", "option must be an object", p));
      continue;
    }
    if (typeof opt.value !== "string" || !opt.value.trim()) {
      issues.push(makeIssue("ERROR", "option.value missing/invalid", p));
    }
    if (typeof opt.label !== "string" || !opt.label.trim()) {
      issues.push(makeIssue("ERROR", "option.label missing/invalid", p));
    }
    const v = typeof opt.value === "string" ? opt.value : "";
    if (v) {
      if (values.has(v)) {
        issues.push(makeIssue("ERROR", `duplicate option.value '${v}'`, ctx));
      }
      values.add(v);
    }
  }
}

function detectExerciseKind(ex) {
  // Heuristics based on actual component contracts in this repo.
  if (Object.prototype.hasOwnProperty.call(ex, "template")) return "gap";
  if (Object.prototype.hasOwnProperty.call(ex, "leftText")) return "matching";
  if (Object.prototype.hasOwnProperty.call(ex, "wordBank")) return "sentence-builder";
  if (Object.prototype.hasOwnProperty.call(ex, "native")) return "translation";
  if (
    Object.prototype.hasOwnProperty.call(ex, "before") &&
    Object.prototype.hasOwnProperty.call(ex, "between") &&
    Object.prototype.hasOwnProperty.call(ex, "word")
  )
    return "adverb-position";
  if (
    Object.prototype.hasOwnProperty.call(ex, "before") &&
    Object.prototype.hasOwnProperty.call(ex, "after") &&
    Object.prototype.hasOwnProperty.call(ex, "options")
  )
    return "frequency-adverb";
  if (Object.prototype.hasOwnProperty.call(ex, "options")) return "mcq";
  // Checkbox exercises still look like prompt-based, but correct is "true"/"false".
  if (ex && (ex.correct === "true" || ex.correct === "false")) return "checkbox";
  return "prompt";
}

function validateExercises(exercises, ctx) {
  const issues = [];

  if (!Array.isArray(exercises)) {
    issues.push(makeIssue("ERROR", "exercises must be an array", ctx));
    return issues;
  }
  if (exercises.length === 0) {
    issues.push(makeIssue("ERROR", "exercises array is empty", ctx));
    return issues;
  }

  const seenIds = new Set();
  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const p = `${ctx}[${i}]`;

    if (!isPlainObject(ex)) {
      issues.push(makeIssue("ERROR", "exercise must be an object", p));
      continue;
    }

    // id
    const id = normalizeId(ex.id);
    if (!id) {
      issues.push(makeIssue("ERROR", "id missing/invalid", p));
    } else {
      if (seenIds.has(id)) {
        issues.push(makeIssue("ERROR", `duplicate id '${id}' within room`, p));
      }
      seenIds.add(id);
    }

    // correct
    if (!Object.prototype.hasOwnProperty.call(ex, "correct")) {
      issues.push(makeIssue("ERROR", "correct is missing", p));
    } else if (ex.correct == null || ex.correct === "") {
      issues.push(makeIssue("ERROR", "correct is empty", p));
    } else if (typeof ex.correct !== "string" && typeof ex.correct !== "number") {
      issues.push(
        makeIssue("ERROR", `correct must be string/number, got ${typeof ex.correct}`, p)
      );
    }

    // tts (optional; allow null)
    if (Object.prototype.hasOwnProperty.call(ex, "tts")) {
      if (ex.tts != null && typeof ex.tts !== "string") {
        issues.push(makeIssue("ERROR", "tts must be a string or null", p));
      }
      if (typeof ex.tts === "string" && !ex.tts.trim()) {
        issues.push(makeIssue("WARN", "tts is an empty string", p));
      }
    }

    const kind = detectExerciseKind(ex);

    // Kind-specific rules
    switch (kind) {
      case "gap": {
        if (typeof ex.template !== "string" || !ex.template.trim()) {
          issues.push(makeIssue("ERROR", "template missing/invalid", p));
        } else if (!ex.template.includes("[gap]")) {
          issues.push(makeIssue("ERROR", "template must include '[gap]'", p));
        }
        break;
      }

      case "matching": {
        if (typeof ex.leftText !== "string" || !ex.leftText.trim()) {
          issues.push(makeIssue("ERROR", "leftText missing/invalid", p));
        }
        validateOptionsArray(ex.options, p, issues);
        // correct should match an option.value
        if (Array.isArray(ex.options)) {
          const set = new Set(ex.options.map((o) => (o ? o.value : "")));
          if (ex.correct != null && !set.has(ex.correct)) {
            issues.push(
              makeIssue(
                "ERROR",
                `correct ('${ex.correct}') must match one of options.value`,
                p
              )
            );
          }
        }
        break;
      }

      case "sentence-builder": {
        if (typeof ex.question !== "string" || !ex.question.trim()) {
          issues.push(makeIssue("ERROR", "question missing/invalid", p));
        }
        if (!Array.isArray(ex.wordBank) || ex.wordBank.length === 0) {
          issues.push(makeIssue("ERROR", "wordBank must be a non-empty array", p));
        } else {
          for (let j = 0; j < ex.wordBank.length; j++) {
            if (typeof ex.wordBank[j] !== "string" || !ex.wordBank[j].trim()) {
              issues.push(
                makeIssue(
                  "ERROR",
                  `wordBank[${j}] must be a non-empty string`,
                  p
                )
              );
            }
          }
        }
        break;
      }

      case "translation": {
        if (typeof ex.native !== "string" || !ex.native.trim()) {
          issues.push(makeIssue("ERROR", "native missing/invalid", p));
        }
        if (Object.prototype.hasOwnProperty.call(ex, "hint")) {
          if (ex.hint != null && (typeof ex.hint !== "string" || !ex.hint.trim())) {
            issues.push(makeIssue("WARN", "hint is empty/invalid", p));
          }
        }
        break;
      }

      case "adverb-position": {
        if (typeof ex.before !== "string") {
          issues.push(makeIssue("ERROR", "before missing/invalid", p));
        } else if (!ex.before.trim()) {
          // In this repo, 'before' can legitimately be empty for some items.
          issues.push(makeIssue("WARN", "before is empty (allowed, but double-check)", p));
        }
        if (typeof ex.between !== "string" || !ex.between.trim()) {
          issues.push(makeIssue("ERROR", "between missing/invalid", p));
        }
        if (typeof ex.after !== "string" || !ex.after.trim()) {
          issues.push(makeIssue("ERROR", "after missing/invalid", p));
        }
        if (typeof ex.word !== "string" || !ex.word.trim()) {
          issues.push(makeIssue("ERROR", "word missing/invalid", p));
        }
        if (ex.correct !== "slot-1" && ex.correct !== "slot-2") {
          issues.push(makeIssue("ERROR", "correct must be 'slot-1' or 'slot-2'", p));
        }
        break;
      }

      case "frequency-adverb": {
        if (typeof ex.before !== "string" || !ex.before.trim()) {
          issues.push(makeIssue("ERROR", "before missing/invalid", p));
        }
        if (typeof ex.after !== "string" || !ex.after.trim()) {
          issues.push(makeIssue("ERROR", "after missing/invalid", p));
        }
        validateOptionsArray(ex.options, p, issues);
        if (Array.isArray(ex.options)) {
          const set = new Set(ex.options.map((o) => (o ? o.value : "")));
          if (ex.correct != null && !set.has(ex.correct)) {
            issues.push(
              makeIssue(
                "ERROR",
                `correct ('${ex.correct}') must match one of options.value`,
                p
              )
            );
          }
          if (ex.defaultAdverb != null && !set.has(ex.defaultAdverb)) {
            issues.push(
              makeIssue(
                "WARN",
                `defaultAdverb ('${ex.defaultAdverb}') is not present in options`,
                p
              )
            );
          }
        }
        break;
      }

      case "mcq": {
        if (typeof ex.prompt !== "string" || !ex.prompt.trim()) {
          issues.push(makeIssue("ERROR", "prompt missing/invalid", p));
        }
        validateOptionsArray(ex.options, p, issues);
        if (Array.isArray(ex.options)) {
          const set = new Set(ex.options.map((o) => (o ? o.value : "")));
          if (ex.correct != null && !set.has(ex.correct)) {
            issues.push(
              makeIssue(
                "ERROR",
                `correct ('${ex.correct}') must match one of options.value`,
                p
              )
            );
          }
        }
        break;
      }

      case "checkbox": {
        if (typeof ex.prompt !== "string" || !ex.prompt.trim()) {
          issues.push(makeIssue("ERROR", "prompt missing/invalid", p));
        }
        if (ex.correct !== "true" && ex.correct !== "false") {
          issues.push(makeIssue("ERROR", "correct must be 'true' or 'false'", p));
        }
        break;
      }

      case "prompt":
      default: {
        if (typeof ex.prompt !== "string" || !ex.prompt.trim()) {
          issues.push(makeIssue("ERROR", "prompt missing/invalid", p));
        }
        break;
      }
    }
  }

  return issues;
}

function validateRoomContent(room, ctx) {
  const issues = [];
  const exercisesCtx = `${ctx}.exercises`;
  const dictionaryCtx = `${ctx}.dictionaryItems`;
  const lexCtx = `${ctx}.lexHints`;

  issues.push(...validateExercises(room.exercises, exercisesCtx));
  issues.push(...validateDictionaryItems(room.dictionaryItems, dictionaryCtx));
  issues.push(...validateLexHints(room.lexHints, lexCtx));

  return issues;
}

function computeStatus(issues) {
  let status = "VALID";
  for (const it of issues) {
    status = bumpMaxLevel(status, it.level);
  }
  return status;
}

// ---------- Main ----------

async function main() {
  if (!fs.existsSync(SRC_ROOT)) {
    console.error(`ERROR: src/ not found at ${SRC_ROOT}`);
    process.exitCode = 2;
    return;
  }

  const allFiles = (await walk(SRC_ROOT)).filter((f) =>
    /\.(js|jsx|ts|tsx)$/.test(f)
  );

  const candidates = [];
  for (const filePath of allFiles) {
    const text = await fsp.readFile(filePath, "utf8");
    if (!looksLikeRoomsFile(text)) continue;

    const rel = path.relative(PROJECT_ROOT, filePath);
    if (ONLY_PATTERN) {
      const re = new RegExp(ONLY_PATTERN);
      if (!re.test(rel)) continue;
    }

    const names = extractRoomsConstNames(text);
    if (names.length === 0) continue;
    candidates.push({ filePath, rel, text, names });
  }

  if (candidates.length === 0) {
    console.log("No *_ROOMS registries found in src/. Nothing to validate.");
    return;
  }

  const registryReports = [];

  for (const c of candidates) {
    let loaded;
    try {
      loaded = await buildAndImportModule(c.filePath, c.text, c.names);
    } catch (err) {
      registryReports.push({
        file: c.rel,
        status: "ERROR",
        registries: [],
        issues: [
          makeIssue(
            "ERROR",
            `Failed to load module via esbuild: ${err && err.message ? err.message : String(err)}`,
            c.rel
          ),
        ],
      });
      continue;
    }

    const capture = loaded.mod.__VALIDATOR_CAPTURE__ || {};
    const localReports = [];
    const fileIssues = [];

    for (const [name, maybeRegistry] of Object.entries(capture)) {
      if (!Array.isArray(maybeRegistry)) continue;

      // A room registry is an array of objects that contains exercises arrays.
      const looksLikeRegistry = maybeRegistry.every(
        (r) => isPlainObject(r) && Array.isArray(r.exercises)
      );
      if (!looksLikeRegistry) continue;

      const rooms = maybeRegistry;
      const regIssues = [];
      const roomReports = [];

      for (let idx = 0; idx < rooms.length; idx++) {
        const room = rooms[idx];
        const roomNumber = room && room.roomNumber != null ? room.roomNumber : "?";
        const roomCtx = `${name}[roomNumber=${roomNumber}]`;

        if (!isPlainObject(room)) {
          regIssues.push(makeIssue("ERROR", "room entry must be an object", roomCtx));
          continue;
        }

        const issues = validateRoomContent(room, roomCtx);
        const status = computeStatus(issues);
        roomReports.push({ roomNumber, status, issues });
        regIssues.push(...issues);
      }

      // Registry-level sanity checks (still content-only-ish)
      const roomNums = rooms
        .map((r) => (r && typeof r.roomNumber === "number" ? r.roomNumber : null))
        .filter((n) => n != null);

      if (roomNums.length !== rooms.length) {
        regIssues.push(
          makeIssue(
            "WARN",
            "Some rooms are missing roomNumber; report will show roomNumber='?'",
            name
          )
        );
      }

      const duplicates = findDuplicates(roomNums);
      if (duplicates.length) {
        regIssues.push(
          makeIssue(
            "ERROR",
            `duplicate roomNumber(s): ${duplicates.join(", ")}`,
            name
          )
        );
      }

      localReports.push({
        name,
        status: computeStatus(regIssues),
        rooms: roomReports,
        issues: regIssues,
      });
    }

    if (localReports.length === 0) {
      fileIssues.push(
        makeIssue(
          "WARN",
          "Found *_ROOMS arrays, but none looked like room registries (array of rooms with exercises).",
          c.rel
        )
      );
    }

    const fileStatus = computeStatus([...fileIssues, ...localReports.flatMap((r) => r.issues)]);

    registryReports.push({
      file: c.rel,
      status: fileStatus,
      registries: localReports,
      issues: fileIssues,
    });

    // cleanup temp dir
    try {
      await fsp.rm(loaded.tmpDir, { recursive: true, force: true });
    } catch {
      // ignore
    }
  }

  const overallIssues = registryReports.flatMap((r) => [
    ...r.issues,
    ...r.registries.flatMap((x) => x.issues),
  ]);
  const overallStatus = computeStatus(overallIssues);

  if (WANT_JSON) {
    const payload = {
      status: overallStatus,
      strict: STRICT,
      projectRoot: PROJECT_ROOT,
      validatedAt: new Date().toISOString(),
      files: registryReports,
    };
    console.log(JSON.stringify(payload, null, 2));
  } else {
    printHumanReport(registryReports, overallStatus);
  }

  if (STRICT) {
    process.exitCode = overallStatus === "ERROR" ? 2 : 0;
  } else {
    // non-strict: WARN doesn't fail
    process.exitCode = overallStatus === "ERROR" ? 2 : 0;
  }
}

function findDuplicates(nums) {
  const seen = new Set();
  const dups = new Set();
  for (const n of nums) {
    if (seen.has(n)) dups.add(n);
    seen.add(n);
  }
  return Array.from(dups).sort((a, b) => a - b);
}

function printHumanReport(registryReports, overallStatus) {
  const pad = (s, n) => (s + " ".repeat(n)).slice(0, n);

  console.log("\n=== LexJunior Content Validator ===");
  console.log(`Project: ${PROJECT_ROOT}`);
  console.log(`Overall: ${overallStatus}`);

  for (const file of registryReports) {
    console.log("\n---");
    console.log(`${file.status}  ${file.file}`);

    for (const issue of file.issues || []) {
      console.log("  " + formatIssue(issue));
    }

    for (const reg of file.registries || []) {
      console.log(`\n  ${reg.status}  ${reg.name}`);

      // summary per room (compact)
      const roomsLine = reg.rooms
        .map((r) => `${r.roomNumber}:${r.status === "VALID" ? "✓" : r.status === "WARN" ? "!" : "✗"}`)
        .join("  ");
      console.log("    Rooms: " + roomsLine);

      // Show issues (grouped by ERROR/WARN)
      const errors = reg.issues.filter((i) => i.level === "ERROR");
      const warns = reg.issues.filter((i) => i.level === "WARN");

      if (errors.length) {
        console.log(`\n    ERRORS (${errors.length})`);
        for (const i of errors) console.log("      - " + formatIssue(i));
      }

      if (warns.length) {
        console.log(`\n    WARNINGS (${warns.length})`);
        for (const i of warns) console.log("      - " + formatIssue(i));
      }
    }
  }

  console.log("\n=== End ===\n");
}

await main();
