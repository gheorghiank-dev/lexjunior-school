// restore-backup.js
// Restores a selected ZIP backup from /backups.

const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");

const backupDir = "./backups";

// Check backup folder
if (!fs.existsSync(backupDir)) {
  console.log("❌ Folderul /backups nu există. Nu am ce restaura.");
  process.exit(0);
}

// List backups
const backups = fs.readdirSync(backupDir).filter((f) => f.endsWith(".zip"));

if (backups.length === 0) {
  console.log("❌ Nu există backup-uri în folderul /backups.");
  process.exit(0);
}

// Show backup list
console.log("📦 Backup-uri disponibile:\n");
backups.forEach((file, index) => {
  console.log(`${index + 1}. ${file}`);
});

// Ask user which backup to restore
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "\n🔄 Introdu numărul backup-ului pe care vrei să-l restaurezi: ",
  (choice) => {
    const index = parseInt(choice) - 1;

    if (index < 0 || index >= backups.length) {
      console.log("❌ Alegere invalidă.");
      readline.close();
      return;
    }

    const selectedBackup = backups[index];
    const backupPath = path.join(backupDir, selectedBackup);

    console.log(`\n🔄 Restaurăm backup-ul: ${selectedBackup}...`);

    fs.createReadStream(backupPath)
      .pipe(unzipper.Extract({ path: "." }))
      .on("close", () => {
        console.log(`
✅ Restaurare completă!
Proiectul tău a fost readus la versiunea: ${selectedBackup}
`);
        readline.close();
      });
  },
);
