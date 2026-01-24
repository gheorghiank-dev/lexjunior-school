#!/usr/bin/env node
/**
 * Lex Debugger (non-interactive)
 *
 * Usage:
 *   npm run lex-debug -- affirmative 3
 *
 * Goal:
 *   - load the Present Simple registry (content-only)
 *   - validate a SINGLE room (section + number)
 *   - print: exercises summary, dictionary items, lexHints, exercise type detection, warnings/errors
 *   - exit codes: 0=ok, 1=warnings, 2=errors
 *
 * Notes:
 *   - NO JSX execution / rendering. We only import the registry module via esbuild bundling
 *     and inspect plain JS content fields (exercises/dictionaryItems/lexHints).
 */

const fs = require("node:fs");
const fsp = require("node:fs/promises");
const path = require("node:path");
const os = require("node:os");
const { pathToFileURL } = require("node:url");

const PROJECT_ROOT = process.cwd();

function die(msg, code = 2) {
  console.error(msg);
  process.exit(code);
}

function normalizeSection(input) {
  return String(input || "")
    .trim()
    .toLowerCase()
    .replace(/_/g, "-")
    .replace(/\s+/g, "-");
}

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

const LEVEL = {
  VALID: 0,
  WARN: 1,
  ERROR: 2,
};

function makeIssue(level, message, where = null) {
  return { level, message, where };
}

function computeStatus(issues) {
  const hasError = issues.some((i) => i.level === "ERROR");
  const hasWarn = issues.some((i) => i.level === "WARN");
  if (hasError) return "ERROR";
  if (hasWarn) return "WARN";
  return "VALID";
}

function formatIssue(issue) {
  const where = issue.where ? `${issue.where}: ` : "";
  return `${issue.level}: ${where}${issue.message}`;
}

function detectExerciseKind(ex) {
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
  if (ex && (ex.correct === "true" || ex.correct === "false")) return "checkbox";
  return "prompt";
}

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
        issues.push(makeIssue("ERROR", `lexHints[${i}] must be a non-empty string`, ctx));
      }
    }
    return issues;
  }
  if (isPlainObject(lexHints)) {
    issues.push(
      makeIssue(
        "WARN",
        "lexHints is an object (expected array in current rooms). Debugger skipped deep validation.",
        ctx,
      ),
    );
    return issues;
  }
  issues.push(makeIssue("ERROR", `lexHints must be an array (or object map), got ${typeof lexHints}`, ctx));
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
  const seen = new Map();
  for (let i = 0; i < dictionaryItems.length; i++) {
    const it = dictionaryItems[i];
    const p = `${ctx}[${i}]`;
    if (!isPlainObject(it)) {
      issues.push(makeIssue("ERROR", `dictionaryItems[${i}] must be an object`, ctx));
      continue;
    }
    if (typeof it.word !== "string" || !it.word.trim()) issues.push(makeIssue("ERROR", "word is missing/invalid", p));
    if (typeof it.meaning !== "string" || !it.meaning.trim())
      issues.push(makeIssue("ERROR", "meaning is missing/invalid", p));
    if (it.tts != null && typeof it.tts !== "string") issues.push(makeIssue("ERROR", "tts must be a string", p));

    const w = typeof it.word === "string" ? it.word.trim().toLowerCase() : "";
    if (w) {
      if (seen.has(w)) {
        issues.push(makeIssue("WARN", `duplicate dictionary word '${it.word}' (also at index ${seen.get(w)})`, ctx));
      } else {
        seen.set(w, i);
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
    if (typeof opt.value !== "string" || !opt.value.trim()) issues.push(makeIssue("ERROR", "option.value missing/invalid", p));
    if (typeof opt.label !== "string" || !opt.label.trim()) issues.push(makeIssue("ERROR", "option.label missing/invalid", p));
    const v = typeof opt.value === "string" ? opt.value : "";
    if (v) {
      if (values.has(v)) issues.push(makeIssue("ERROR", `duplicate option.value '${v}'`, ctx));
      values.add(v);
    }
  }
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

  const ids = new Set();
  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i];
    const p = `${ctx}[${i}]`;
    if (!isPlainObject(ex)) {
      issues.push(makeIssue("ERROR", `exercise[${i}] must be an object`, ctx));
      continue;
    }
    if (ex.id == null) issues.push(makeIssue("WARN", "exercise is missing id", p));
    else {
      const idKey = String(ex.id);
      if (ids.has(idKey)) issues.push(makeIssue("ERROR", `duplicate exercise id '${idKey}'`, ctx));
      ids.add(idKey);
    }

    const kind = detectExerciseKind(ex);
    // minimal kind-specific checks (match validator behavior enough for debugging)
    if (kind === "mcq") validateOptionsArray(ex.options, p, issues);
    if (kind === "checkbox") {
      if (typeof ex.prompt !== "string" || !ex.prompt.trim()) issues.push(makeIssue("ERROR", "prompt missing/invalid", p));
      if (!(ex.correct === "true" || ex.correct === "false"))
        issues.push(makeIssue("ERROR", "checkbox correct must be 'true' or 'false'", p));
    }
    if (kind === "prompt") {
      if (typeof ex.prompt !== "string" || !ex.prompt.trim()) issues.push(makeIssue("ERROR", "prompt missing/invalid", p));
      if (typeof ex.correct !== "string" || !ex.correct.trim()) issues.push(makeIssue("ERROR", "correct missing/invalid", p));
    }
  }
  return issues;
}

function validateRoomContent(room, ctx) {
  const issues = [];
  issues.push(...validateExercises(room.exercises, `${ctx}.exercises`));
  issues.push(...validateDictionaryItems(room.dictionaryItems, `${ctx}.dictionaryItems`));
  issues.push(...validateLexHints(room.lexHints, `${ctx}.lexHints`));
  return issues;
}

function extractRoomsConstNames(sourceText) {
  const names = [];
  const re = /(?:^|\n)\s*(?:export\s+)?const\s+([A-Z0-9_]+_ROOMS)\s*=\s*\[/g;
  let m;
  while ((m = re.exec(sourceText))) names.push(m[1]);
  return Array.from(new Set(names));
}

async function buildAndImportModule(sourcePath, sourceText, roomsConstNames) {
  const esbuild = await import("esbuild");

  const tmpDir = await fsp.mkdtemp(path.join(os.tmpdir(), "lex-debug-"));
  const outFile = path.join(tmpDir, "bundle.mjs");

  const captureLines = roomsConstNames
    .map((n) => `  ${n}: (typeof ${n} !== 'undefined' ? ${n} : undefined),`)
    .join("\n");

  const wrapped =
    sourceText +
    `\n\n// --- debugger capture (auto-generated) ---\n` +
    `export const __DEBUGGER_CAPTURE__ = {\n${captureLines}\n};\n`;

  await esbuild.build({
    stdin: {
      contents: wrapped,
      resolveDir: path.dirname(sourcePath),
      sourcefile: sourcePath,
      loader: "jsx",
    },
    outfile: outFile,
    bundle: true,
    format: "esm",
    platform: "node",
    target: ["node18"],
    sourcemap: false,
    plugins: [
      {
        name: "lex-debugger-stubs",
        setup(build) {
          const stubs = new Map([
            [
              "react",
              `export const Fragment = Symbol.for('react.fragment');\nexport function createElement(){ return { $$typeof: Symbol.for('react.element') }; }\nexport default { createElement, Fragment };\n`,
            ],
            [
              "react-router-dom",
              `export const Link = () => null;\nexport const NavLink = () => null;\nexport function useNavigate(){ return () => {}; }\nexport function useLocation(){ return { pathname: '/' }; }\nexport function useParams(){ return {}; }\nexport default {};\n`,
            ],
            ["react-dom", `export function createRoot(){ return { render(){} }; }\nexport default {};\n`],
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
  return { mod, tmpDir };
}

function pickRegistryFromCapture(capture, wantedSection) {
  const registries = [];
  for (const [name, maybeRegistry] of Object.entries(capture || {})) {
    if (!Array.isArray(maybeRegistry)) continue;
    const looksLikeRegistry = maybeRegistry.every((r) => isPlainObject(r) && Array.isArray(r.exercises));
    if (!looksLikeRegistry) continue;

    const sectionId = maybeRegistry[0] && typeof maybeRegistry[0].sectionId === "string" ? maybeRegistry[0].sectionId : null;
    registries.push({ name, sectionId, rooms: maybeRegistry });
  }

  if (registries.length === 0) return null;

  if (!wantedSection) return registries[0];

  const exact = registries.find((r) => normalizeSection(r.sectionId) === wantedSection);
  return exact || registries[0];
}

function printDivider() {
  console.log("\n----------------------------------------\n");
}

async function main() {
  const rawArgs = process.argv.slice(2).filter((a) => a !== "--");
  const section = normalizeSection(rawArgs[0]);
  const roomNumber = Number(rawArgs[1]);

  if (!section) {
    die(
      "Usage: npm run lex-debug -- <section> <roomNumber>\nExample: npm run lex-debug -- affirmative 3",
      2,
    );
  }
  if (!Number.isFinite(roomNumber)) {
    die(`Invalid room number: '${rawArgs[1]}'`, 2);
  }

  const fileBySection = {
    affirmative: "ps-affirmative-rooms.jsx",
    negative: "ps-negative-rooms.jsx",
    interrogative: "ps-interrogative-rooms.jsx",
    uses: "ps-uses-rooms.jsx",
    "time-expressions": "ps-time-expressions-rooms.jsx",
  };

  const fileName = fileBySection[section];
  if (!fileName) {
    die(
      `Unknown section '${section}'. Allowed: ${Object.keys(fileBySection).join(", ")}`,
      2,
    );
  }

  const sourcePath = path.join(
    PROJECT_ROOT,
    "src",
    "modules",
    "present-simple",
    "ps-content",
    fileName,
  );

  if (!fs.existsSync(sourcePath)) {
    die(`Registry file not found: ${path.relative(PROJECT_ROOT, sourcePath)}`, 2);
  }

  const sourceText = await fsp.readFile(sourcePath, "utf8");
  const roomsConstNames = extractRoomsConstNames(sourceText);

  if (roomsConstNames.length === 0) {
    die("No *_ROOMS registries found in that file.", 2);
  }

  let loaded;
  try {
    loaded = await buildAndImportModule(sourcePath, sourceText, roomsConstNames);
  } catch (err) {
    die(`Failed to load registry via esbuild: ${err && err.message ? err.message : String(err)}`, 2);
  }

  const capture = loaded.mod.__DEBUGGER_CAPTURE__ || {};
  const picked = pickRegistryFromCapture(capture, section);
  if (!picked) {
    die("Could not detect a room registry array in the module capture.", 2);
  }

  const room = picked.rooms.find((r) => r && r.roomNumber === roomNumber);
  if (!room) {
    die(`Room not found: section='${section}', roomNumber=${roomNumber}`, 2);
  }

  const ctx = `${picked.name}[roomNumber=${roomNumber}]`;
  const issues = validateRoomContent(room, ctx);
  const status = computeStatus(issues);

  // --- Print summary ---
  console.log("\n=== Lex Debugger ===");
  console.log(`File: ${path.relative(PROJECT_ROOT, sourcePath)}`);
  console.log(`Registry: ${picked.name}`);
  console.log(`Room: ${room.sectionId} / #${room.roomNumber}`);
  console.log(`Status: ${status}`);

  printDivider();

  // Exercises summary
  const exercises = Array.isArray(room.exercises) ? room.exercises : [];
  const kinds = new Map();
  for (const ex of exercises) {
    const k = detectExerciseKind(ex || {});
    kinds.set(k, (kinds.get(k) || 0) + 1);
  }
  console.log(`Exercises: ${exercises.length}`);
  if (kinds.size) {
    console.log("Detected types:");
    for (const [k, c] of Array.from(kinds.entries()).sort((a, b) => b[1] - a[1])) {
      console.log(`  - ${k}: ${c}`);
    }
  }

  // Show a compact listing (id + prompt-ish)
  console.log("\nExercise list:");
  for (let i = 0; i < exercises.length; i++) {
    const ex = exercises[i] || {};
    const id = ex.id != null ? ex.id : i + 1;
    const kind = detectExerciseKind(ex);
    const label =
      typeof ex.prompt === "string"
        ? ex.prompt
        : typeof ex.template === "string"
          ? ex.template
          : typeof ex.native === "string"
            ? ex.native
            : "(no prompt/template)";
    console.log(`  #${id} [${kind}] ${String(label).slice(0, 160)}`);
  }

  printDivider();

  // Dictionary
  const dict = Array.isArray(room.dictionaryItems) ? room.dictionaryItems : [];
  console.log(`Dictionary items: ${dict.length}`);
  if (dict.length) {
    for (let i = 0; i < dict.length; i++) {
      const it = dict[i] || {};
      console.log(`  - ${it.word || "?"} → ${it.meaning || "?"}`);
    }
  }

  printDivider();

  // Lex hints
  const lh = room.lexHints;
  if (Array.isArray(lh)) {
    console.log(`lexHints: ${lh.length}`);
    lh.forEach((h, i) => {
      console.log(`  [${i}] ${String(h)}`);
    });
  } else if (lh && typeof lh === "object") {
    const keys = Object.keys(lh);
    console.log(`lexHints: object (${keys.length} keys)`);
    for (const k of keys) {
      const v = lh[k];
      console.log(`  ${k}: ${typeof v === "string" ? v : JSON.stringify(v)}`);
    }
  } else {
    console.log("lexHints: (missing)");
  }

  printDivider();

  // Issues
  const errors = issues.filter((i) => i.level === "ERROR");
  const warns = issues.filter((i) => i.level === "WARN");

  if (!issues.length) {
    console.log("No issues found.");
  } else {
    if (errors.length) {
      console.log(`ERRORS (${errors.length})`);
      for (const i of errors) console.log("  - " + formatIssue(i));
      console.log("");
    }
    if (warns.length) {
      console.log(`WARNINGS (${warns.length})`);
      for (const i of warns) console.log("  - " + formatIssue(i));
    }
  }

  // cleanup tmp dir
  try {
    await fsp.rm(loaded.tmpDir, { recursive: true, force: true });
  } catch {
    // ignore
  }

  if (status === "ERROR") process.exit(2);
  if (status === "WARN") process.exit(1);
  process.exit(0);
}

main().catch((err) => {
  die(err && err.stack ? err.stack : String(err), 2);
});
