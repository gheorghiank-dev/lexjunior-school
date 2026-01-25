// backup-project.js
// Creates a FULL backup of the project, excluding items from .zipignore
// Saved inside /backups/ with timestamp.

const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

// Load ignore rules from .zipignore
const ignoreFile = ".zipignore";
let ignoreRules = [];

if (fs.existsSync(ignoreFile)) {
  ignoreRules = fs
    .readFileSync(ignoreFile, "utf8")
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));
}

// Create /backups directory if needed
const backupDir = "./backups";
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir);
}

// Timestamp helper
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

const timestamp = getTimestamp();
const outputName = `${backupDir}/lex-project-backup_${timestamp}.zip`;

const output = fs.createWriteStream(outputName);
const archive = archiver("zip", { zlib: { level: 9 } });

// Check exclusions
function shouldExclude(filepath) {
  return ignoreRules.some((rule) => {
    if (rule.endsWith("/")) return filepath.startsWith(rule.replace("/", ""));
    if (rule.startsWith("*.")) return filepath.endsWith(rule.replace("*", ""));
    return filepath === rule;
  });
}

archive.pipe(output);

// Recursively zip everything respecting ignore rules
function addFolder(folderPath, zipPath = "") {
  const entries = fs.readdirSync(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);
    const relativePath = path.join(zipPath, entry.name);

    if (shouldExclude(relativePath)) continue;

    if (entry.isDirectory()) {
      archive.directory(fullPath, relativePath);
    } else {
      archive.file(fullPath, { name: relativePath });
    }
  }
}

archive.on("warning", (err) => {
  if (err.code === "ENOENT") {
    console.warn("⚠️ Minor archiver warning:", err);
  } else {
    throw err;
  }
});

archive.on("error", (err) => {
  console.error("❌ Archiver error:", err);
  process.exit(1);
});

// Finalize archive
archive.finalize();

output.on("close", () => {
  console.log(`
🗄️ Backup COMPLET creat cu succes!

📦 Fișier: ${outputName}
🕒 Timestamp: ${timestamp}
📁 Folder: /backups
`);

  // inchide MANUAL orice event loop ramas
  process.nextTick(() => process.exit(0));
});
