#!/usr/bin/env node
/**
 * backup-project.js
 *
 * Creates a FULL project backup ZIP (for humans), excluding heavy/build artifacts.
 *
 * Always excludes:
 *  - node_modules/, dist/, backups/, exports/
 *  - .git/, .vscode/, .netlify/
 *  - common caches + test artifacts
 *
 * It can also read extra EXCLUDE patterns from .zipignore.
 * NOTE: Many .zipignore files (like yours) contain an "OK de inclus" allowlist section.
 * For FULL backups we ONLY apply the EXCLUDE section (❌ / "NU include") and ignore the allowlist.
 *
 * Output: ./backups/lex-project-backup_YYYY-MM-DD_HH-MM-SS.zip
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const archiver = require("archiver");

// Use the script's folder as the project root (more robust than process.cwd()).
const projectRoot = path.resolve(__dirname);
const backupDir = path.join(projectRoot, "backups");

function getTimestamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}_${hh}-${min}-${ss}`;
}

function normalizeIgnoreRule(rule) {
  // strip leading ./ and trailing spaces
  let r = String(rule || "").trim().replace(/^\.\//, "");
  if (!r) return null;

  // zipignore often uses trailing slashes for folders
  if (r.endsWith("/")) return `${r}**`;

  // If it's a folder name without globbing and that folder exists, ignore all inside it.
  const hasGlob = /[*?\[]/.test(r);
  const looksLikePath = r.includes("/") || r.includes("\\");
  if (!hasGlob && !looksLikePath) {
    const maybeDir = path.join(projectRoot, r);
    try {
      if (fs.existsSync(maybeDir) && fs.statSync(maybeDir).isDirectory()) {
        return `${r}/**`;
      }
    } catch {
      // ignore
    }
  }

  return r;
}

/**
 * Reads .zipignore but returns ONLY the EXCLUDE rules.
 * If the file has a "✔ OK de inclus" section, we DO NOT treat those as excludes.
 *
 * Heuristic:
 *  - Start in EXCLUDE mode.
 *  - Any comment line containing "OK de inclus" / "include" / "✔" switches to INCLUDE mode.
 *  - Any comment line containing "NU include" / "exclude" / "❌" switches back to EXCLUDE mode.
 *  - Non-comment lines are collected ONLY while in EXCLUDE mode.
 */
function readZipIgnoreExcludes(zipIgnorePath) {
  try {
    if (!fs.existsSync(zipIgnorePath)) return [];

    const raw = fs.readFileSync(zipIgnorePath, "utf8");
    const lines = raw.split(/\r?\n/g);

    let mode = "exclude"; // default
    const rules = [];

    for (const lineRaw of lines) {
      const line = (lineRaw || "").trim();
      if (!line) continue;

      if (line.startsWith("#")) {
        const lower = line.toLowerCase();

        const isIncludeHeader =
          lower.includes("ok de inclus") ||
          lower.includes("de inclus") ||
          lower.includes("include") ||
          line.includes("✔");

        const isExcludeHeader =
          lower.includes("nu include") ||
          lower.includes("exclude") ||
          line.includes("❌");

        if (isIncludeHeader) mode = "include";
        if (isExcludeHeader) mode = "exclude";
        continue;
      }

      if (mode === "exclude") rules.push(line);
    }

    return rules;
  } catch {
    return [];
  }
}

const alwaysIgnore = [
  // explicitly requested
  "node_modules/**",
  "dist/**",

  // safety + common project noise
  "backups/**",
  "exports/**",
  ".git/**",
  ".vscode/**",
  ".netlify/**",
  "test-results/**",
  "coverage/**",
  ".cache/**",
  ".turbo/**",
  ".parcel-cache/**",
  "*.log",
];

const zipIgnorePath = path.join(projectRoot, ".zipignore");
const extraIgnore = readZipIgnoreExcludes(zipIgnorePath)
  .map(normalizeIgnoreRule)
  .filter(Boolean);

const ignore = Array.from(new Set([...alwaysIgnore, ...extraIgnore]));

// Ensure /backups exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const timestamp = getTimestamp();
const outputName = path.join(backupDir, `lex-project-backup_${timestamp}.zip`);

const output = fs.createWriteStream(outputName);
const archive = archiver("zip", { zlib: { level: 9 } });

archive.on("warning", (err) => {
  if (err.code === "ENOENT") {
    console.warn("⚠️ Minor archiver warning:", err.message);
    return;
  }
  throw err;
});

archive.on("error", (err) => {
  console.error("❌ Archiver error:", err);
  process.exit(1);
});

output.on("close", () => {
  const sizeMB = (archive.pointer() / (1024 * 1024)).toFixed(2);
  console.log(
    `\n🗄️ Backup COMPLET creat cu succes!\n\n📦 Fișier: ${outputName}\n📏 Mărime: ${sizeMB} MB\n🕒 Timestamp: ${timestamp}\n📁 Folder: /backups\n`
  );
  process.exit(0);
});

archive.pipe(output);

// Add everything under project root, respecting ignore patterns.
archive.glob("**/*", {
  cwd: projectRoot,
  dot: true,
  ignore,
  follow: false,
});

archive.finalize();
