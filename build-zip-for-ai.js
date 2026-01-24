// build-zip-for-ai.js
// Creates a CLEAN SAFE ZIP for ChatGPT (no node_modules, no .git, no caches)

const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const exportDir = "./exports";

// Ensure /exports exists
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir);
}

// Timestamped filename
function getTimestamp() {
  const now = new Date();
  return now
    .toISOString()
    .replace(/[:.]/g, "-")
    .replace("T", "_")
    .replace("Z", "");
}

const timestamp = getTimestamp();
const outputName = `${exportDir}/lex-project-for-ai_${timestamp}.zip`;
const output = fs.createWriteStream(outputName);
const archive = archiver("zip", { zlib: { level: 9 } });

// LISTA FINALĂ DE FOLDERE INCLUSE
const INCLUDE_DIRS = ["src", "public", "tests", "scripts"];

// LISTA FINALĂ DE FIȘIERE INCLUSE
const INCLUDE_FILES = [
  "package.json",
  "package-lock.json",
  "vite.config.js",
  "playwright.config.js",
];

// TOT CE EXCLUD (blindat)
const ALWAYS_EXCLUDE = [
  "node_modules",
  ".git",
  ".vscode",
  "dist",
  "test-results",
  "coverage",
  "exports",
  ".cache",
  ".turbo",
  "pnpm-lock.yaml",
];

// Helper pentru excludere
function shouldExclude(name) {
  return ALWAYS_EXCLUDE.some((bad) => name.startsWith(bad));
}

// ZIP START
archive.pipe(output);

// Include folders
for (const folder of INCLUDE_DIRS) {
  if (fs.existsSync(folder)) {
    console.log(`➡ Adding folder: ${folder}`);
    archive.directory(folder, folder);
  }
}

// Include root files
for (const file of INCLUDE_FILES) {
  if (fs.existsSync(file)) {
    console.log(`➡ Adding file: ${file}`);
    archive.file(file, { name: file });
  }
}

archive.finalize();

output.on("close", () => {
  const sizeMB = (archive.pointer() / (1024 * 1024)).toFixed(2);

  console.log(`
==============================
  ZIP GENERATED SUCCESSFULLY
==============================

📦 File: ${outputName}
📏 Size: ${sizeMB} MB
🕒 Timestamp: ${timestamp}

`);

  if (sizeMB > 200) {
    console.log(
      "⚠ WARNING: ZIP size is too large. Something unintended may be included.",
    );
  } else {
    console.log("✨ ZIP is clean and ready for ChatGPT 5.2 thinking!");
  }
});
