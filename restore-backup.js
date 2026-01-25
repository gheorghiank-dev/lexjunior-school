// restore-backup.js
// Restores a selected ZIP backup from /backups (overwrites files in-place).

const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");

const projectRoot = process.cwd();
const backupDir = path.join(projectRoot, "backups");

// Check backup folder
if (!fs.existsSync(backupDir)) {
  console.log("❌ Folderul /backups nu există. Nu am ce restaura.");
  process.exit(0);
}

// List backups (newest first)
const backups = fs
  .readdirSync(backupDir)
  .filter((f) => f.endsWith(".zip"))
  .sort((a, b) => b.localeCompare(a));

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

    console.log(
      `\n⚠️ ATENȚIE: restaurarea va SUPRASCRIE fișierele curente din proiect.\n`,
    );

    readline.question("Continui? (y/n): ", (confirm) => {
      if (!/^y(es)?$/i.test(String(confirm).trim())) {
        console.log("\n❎ Restaurare anulată.\n");
        readline.close();
        return;
      }

      console.log(`\n🔄 Restaurăm backup-ul: ${selectedBackup}...`);

      fs.createReadStream(backupPath)
        .pipe(unzipper.Extract({ path: projectRoot }))
        .on("error", (err) => {
          console.error("\n❌ Eroare la restaurare:", err);
          readline.close();
          process.exit(1);
        })
        .on("close", () => {
          console.log(`
✅ Restaurare completă!
Proiectul tău a fost readus la versiunea: ${selectedBackup}
`);
          readline.close();
          process.exit(0);
        });
    });
  },
);
