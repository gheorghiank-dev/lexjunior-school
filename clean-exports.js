// clean-exports.js
// Deletes all ZIP files inside the /exports folder.

const fs = require("fs");
const path = require("path");

const exportDir = "./exports";

// Dacă folderul nu există, nu avem ce șterge
if (!fs.existsSync(exportDir)) {
  console.log("📁 Folderul /exports nu există încă. Nimic de șters.");
  process.exit(0);
}

const files = fs.readdirSync(exportDir);

let deletedCount = 0;

for (const file of files) {
  if (file.endsWith(".zip")) {
    const filePath = path.join(exportDir, file);
    fs.unlinkSync(filePath);
    deletedCount++;
  }
}

console.log(`
🧹 Curățare finalizată!
🗑 Șterse: ${deletedCount} arhive ZIP
📁 Folder: /exports
`);
