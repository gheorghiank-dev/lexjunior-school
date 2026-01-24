#!/usr/bin/env node

// LEX CLI: the ultimate DevOps tool for Lex Junior English Lab
// Interactive console: generate AI ZIP, clean exports, backup, restore, etc.

const inquirer = require("inquirer");
const { exec } = require("child_process");

function runCommand(command) {
  console.log(`\n▶ Running: ${command}\n`);
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(`❌ Error:\n${stderr}`);
    } else {
      console.log(stdout);
    }
    showMenu();
  });
}

function showMenu() {
  console.clear();
  console.log(`
=====================================
   🚀 LEX JUNIOR DEV CONSOLE 🚀
=====================================

Hello, Anca! Choose your action:
`);

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",

        choices: [
          { name: "1️⃣  Generate AI ZIP", value: "generate_zip" },
          { name: "2️⃣  Clean exports folder", value: "clean_exports" },
          { name: "3️⃣  Create FULL project backup", value: "create_backup" },
          { name: "4️⃣  Restore a backup", value: "restore_backup" },
          {
            name: "5️⃣  Validate Present Simple rooms",
            value: "validate_rooms",
          },
          { name: "❌ Exit CLI", value: "exit" },
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "zip":
          runCommand("npm run zip-for-ai");
          break;

        case "clean":
          runCommand("npm run clean-exports");
          break;

        case "backup":
          runCommand("npm run backup-project");
          break;

        case "restore":
          runCommand("npm run restore-backup");
          break;

        case "validate_rooms":
          console.log("\n🔎 Running Present Simple room validator...\n");

          const { execSync } = require("child_process");

          try {
            execSync(
              "node scripts/validate-room-content.mjs --only present-simple/ps-content",
              { stdio: "inherit" },
            );
          } catch (err) {
            console.error("\n❌ Validator reported errors.\n");
          }

          break;

        case "exit":
          console.log("\nBye, Anca! 👋\n");
          process.exit(0);
      }
    });
}

// Start the CLI menu
showMenu();
