// scripts/validate-content.js
// ==========================================================
// UNIVERSAL ROOM CONTENT VALIDATOR — FINAL SENIOR VERSION
// Works with registry-based structure like:
// export const PS_AFFIRMATIVE_ROOMS = [
//    { roomNumber, exercises: [...], dictionaryItems: [...], ... }
// ];
//
// Scans all modules inside src/modules/* and finds *-content folders.
// Validates every room + every exercise individually.
//
// ==========================================================

const fs = require("fs");
const path = require("path");

// --------------------------------------------
// CONFIG
// --------------------------------------------
const SRC_ROOT = path.join(__dirname, "..", "src", "modules");
const SUPPORTED_EXT = [".jsx", ".js"];

// Exercise rules
const REQUIRED_EX_KEYS = ["id", "correct", "tts"];
const OPTIONAL_EX_KEYS = ["prompt", "template", "options"];

// --------------------------------------------
// HELPERS
// --------------------------------------------
function logTitle(title) {
  console.log("\n=======================================");
  console.log(title);
  console.log("=======================================\n");
}

function color(text, code) {
  return `\x1b[${code}m${text}\x1b[0m`;
}

function green(t) {
  return color(t, "32");
}
function yellow(t) {
  return color(t, "33");
}
function red(t) {
  return color(t, "31");
}

// --------------------------------------------
// FILE SCANNING
// --------------------------------------------
function findContentFolders() {
  const modules = fs.readdirSync(SRC_ROOT);

  const out = [];

  modules.forEach((moduleName) => {
    const modulePath = path.join(SRC_ROOT, moduleName);
    if (!fs.statSync(modulePath).isDirectory()) return;

    const sub = fs.readdirSync(modulePath);
    sub.forEach((entry) => {
      if (entry.includes("content")) {
        out.push({
          moduleName,
          folderPath: path.join(modulePath, entry),
        });
      }
    });
  });

  return out;
}

function findRoomFiles(folderPath) {
  return fs
    .readdirSync(folderPath)
    .filter((f) => SUPPORTED_EXT.includes(path.extname(f)))
    .map((f) => path.join(folderPath, f));
}

// --------------------------------------------
// PARSING EXPORTS
// --------------------------------------------
function extractRoomExports(rawCode) {
  // extract patterns like: export const PS_AFFIRMATIVE_ROOMS = [ ... ];
  const regex = /export\s+const\s+([A-Z0-9_]+)\s*=\s*(\[[\s\S]*?\]);/gm;

  const results = [];
  let match;

  while ((match = regex.exec(rawCode))) {
    results.push({
      exportName: match[1],
      arrayText: match[2],
    });
  }
  return results;
}

function safeEvalArray(arrText) {
  try {
    return eval(arrText);
  } catch (err) {
    return null;
  }
}

// --------------------------------------------
// VALIDATION LOGIC
// --------------------------------------------
function validateExercise(ex, index) {
  const errors = [];
  const warnings = [];
  const label = `Exercise ${index + 1}`;

  REQUIRED_EX_KEYS.forEach((key) => {
    if (!(key in ex)) errors.push(`${label}: missing key "${key}"`);
  });

  if (typeof ex.correct !== "string") {
    errors.push(`${label}: correct must be a string`);
  }

  if (ex.tts && !ex.tts.trim().endsWith(".")) {
    warnings.push(
      `${label}: tts should end with a period (.) — found "${ex.tts}"`,
    );
  }

  // template vs prompt consistency (optional warning)
  if (!ex.prompt && !ex.template) {
    warnings.push(
      `${label}: no "prompt" or "template" field — may be intentional, but verify`,
    );
  }

  return { errors, warnings };
}

function validateRoom(roomObj, exportName, roomIndex) {
  const errors = [];
  const warnings = [];

  const label = `Room ${roomObj.roomNumber || roomIndex + 1}`;

  if (!roomObj.exercises || !Array.isArray(roomObj.exercises)) {
    errors.push(`${label}: "exercises" should be an array`);
    return { errors, warnings };
  }

  // Enforce at least 1 exercise
  if (roomObj.exercises.length === 0) {
    errors.push(`${label}: exercises array is EMPTY`);
  }

  roomObj.exercises.forEach((ex, i) => {
    const res = validateExercise(ex, i);
    errors.push(...res.errors);
    warnings.push(...res.warnings);
  });

  return { errors, warnings };
}

// --------------------------------------------
// MAIN RUNNER
// --------------------------------------------
logTitle("UNIVERSAL ROOM CONTENT VALIDATOR — FINAL VERSION");

const contentFolders = findContentFolders();

if (contentFolders.length === 0) {
  console.log(yellow("⚠ No *-content folders found."));
  process.exit(0);
}

contentFolders.forEach(({ moduleName, folderPath }) => {
  logTitle(`Module: ${moduleName} | Folder: ${path.basename(folderPath)}`);

  const roomFiles = findRoomFiles(folderPath);
  if (roomFiles.length === 0) {
    console.log(yellow("⚠ No room files found.\n"));
    return;
  }

  roomFiles.forEach((filePath) => {
    const fileName = path.basename(filePath);
    console.log(`📄 File: ${fileName}`);

    const rawCode = fs.readFileSync(filePath, "utf8");
    const exportsFound = extractRoomExports(rawCode);

    if (exportsFound.length === 0) {
      console.log(yellow(`   ⚠ No room arrays exported in this file.\n`));
      return;
    }

    exportsFound.forEach(({ exportName, arrayText }) => {
      console.log(`\n🔎 Export: ${exportName}`);

      const arr = safeEvalArray(arrayText);

      if (!Array.isArray(arr)) {
        console.log(red(`   ❌ Export is NOT an array — SKIPPING\n`));
        return;
      }

      let totalErrors = 0;
      let totalWarnings = 0;

      arr.forEach((roomObj, idx) => {
        const { errors, warnings } = validateRoom(roomObj, exportName, idx);

        if (errors.length === 0 && warnings.length === 0) {
          console.log(green(`   ✓ Room ${idx + 1} VALID`));
        } else {
          if (errors.length > 0) {
            console.log(
              red(`   ❌ Room ${idx + 1} has ${errors.length} errors:`),
            );
            errors.forEach((e) => console.log("       - " + e));
            totalErrors += errors.length;
          }

          if (warnings.length > 0) {
            console.log(
              yellow(`   ⚠ Room ${idx + 1} has ${warnings.length} warnings:`),
            );
            warnings.forEach((w) => console.log("       - " + w));
            totalWarnings += warnings.length;
          }
        }
      });

      console.log(
        `\n   Summary for ${exportName}: ${green(
          `${arr.length} rooms`,
        )}, ${red(`${totalErrors} errors`)}, ${yellow(
          `${totalWarnings} warnings`,
        )}\n`,
      );
    });
  });
});
