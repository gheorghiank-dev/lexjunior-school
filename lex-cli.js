#!/usr/bin/env node

// LEX CLI: the ultimate DevOps tool for Lex Junior English Lab
// Interactive console: generate AI ZIP, clean exports, backup, restore, etc.

const inquirer = require("inquirer");
const { spawn, execSync } = require("child_process");
const readline = require("readline");

function pause(message = "\n↩️  Apasă ENTER ca să te întorci în meniu...") {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question(message, () => {
      rl.close();
      resolve();
    });
  });
}

function runCommand(command) {
  // Use spawn instead of exec to avoid stdout buffer limits on long commands (e.g., vite build).
  console.log(`\n▶ Running: ${command}\n`);
  const child = spawn(command, {
    stdio: "inherit",
    shell: true, // cross-platform (Windows) compatibility for npm scripts
  });

  child.on("close", async (code) => {
    if (code !== 0) {
      console.error(`\n❌ Command failed with exit code ${code}.`);
    }
    await pause();
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
          { name: "6️⃣  Debug a room (lex debugger)", value: "debug_room" },
          { name: "7️⃣  Run pre-deploy check", value: "predeploy_check" },
          { name: "❌ Exit CLI", value: "exit" },
        ],
      },
    ])
    .then((answer) => {
      switch (answer.action) {
        case "generate_zip":
          runCommand("npm run zip-for-ai");
          break;

        case "clean_exports":
          runCommand("npm run clean-exports");
          break;

        case "create_backup":
          runCommand("npm run backup-project");
          break;

        case "restore_backup":
          runCommand("npm run restore-backup");
          break;

        case "validate_rooms":
          console.log("\n🔎 Running Present Simple room validator...\n");

          try {
            execSync(
              "node scripts/validate-room-content.mjs --only present-simple/ps-content",
              { stdio: "inherit" },
            );
          } catch (err) {
            console.error("\n❌ Validator reported errors.\n");
          }

          pause().then(showMenu);

          break;

        case "debug_room": {
          inquirer
            .prompt([
              {
                type: "list",
                name: "section",
                message: "Pick a Present Simple section:",
                choices: [
                  { name: "affirmative", value: "affirmative" },
                  { name: "negative", value: "negative" },
                  { name: "interrogative", value: "interrogative" },
                  { name: "uses", value: "uses" },
                  { name: "time-expressions", value: "time-expressions" },
                ],
              },
              {
                type: "input",
                name: "roomNumber",
                message: "Room number:",
                validate(input) {
                  const n = Number(input);
                  if (!Number.isFinite(n) || n <= 0)
                    return "Enter a valid room number.";
                  return true;
                },
              },
            ])
            .then(({ section, roomNumber }) => {
              console.log(`\n🧪 Debugging: ${section} / room ${roomNumber}\n`);
              try {
                execSync(
                  `node scripts/lex-debugger.js ${section} ${roomNumber}`,
                  {
                    stdio: "inherit",
                  },
                );
              } catch {
                // lex-debugger handles its own printing
              }
              pause().then(showMenu);
            });
          break;
        }

        case "predeploy_check": {
          const { execSync } = require("child_process");
          console.log("\n🧰 Running pre-deploy check...\n");
          try {
            execSync("node scripts/predeploy-check.js", { stdio: "inherit" });
          } catch {
            // predeploy-check handles its own printing
          }
          pause().then(showMenu);
          break;
        }

        case "exit":
          console.log("\nBye, Anca! 👋\n");
          process.exit(0);
      }
    });
}

// Start the CLI menu
showMenu();
