#!/usr/bin/env node
"use strict";

const { spawnSync } = require("node:child_process");

function banner(title) {
  console.log("\n=====================================");
  console.log(` ${title}`);
  console.log("=====================================\n");
}

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: false,
    ...opts,
  });
  return res.status ?? 0;
}

function runCapture(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    shell: false,
    ...opts,
  });

  return {
    status: res.status ?? 0,
    stdout: res.stdout || "",
    stderr: res.stderr || "",
  };
}

function getNpmCmd() {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

async function main() {
  banner("LEX PREDEPLOY CHECK");

  // 1) Validator
  console.log("1) Room validation (Present Simple)\n");

  const validator = runCapture(
    "node",
    [
      "scripts/validate-room-content.mjs",
      "--only",
      "present-simple/ps-content",
      "--json",
    ],
    { cwd: process.cwd() },
  );

  let report;
  try {
    report = JSON.parse(validator.stdout.trim());
  } catch (e) {
    console.error("❌ Validator output was not valid JSON.");
    if (validator.stdout) console.error(validator.stdout);
    if (validator.stderr) console.error(validator.stderr);
    process.exit(1);
  }

  const status = report.status || "UNKNOWN";
  const errors = Number(report.errors || 0);
  const warnings = Number(report.warnings || 0);

  console.log(`Validator status: ${status}`);
  console.log(`Issues: ${errors} error(s), ${warnings} warning(s)\n`);

  if (status === "ERROR" || errors > 0) {
    console.log("❌ NOT OK: Room validation has errors. Deployment blocked.");
    process.exit(1);
  }

  // 2) Tense module contract validator
  console.log("2) Tense module contract validation\n");

  const tenseValidator = runCapture(
    "node",
    ["scripts/validate-tense-modules.mjs", "--json"],
    { cwd: process.cwd() },
  );

  let tenseReport;
  try {
    tenseReport = JSON.parse(tenseValidator.stdout.trim());
  } catch (e) {
    console.error("❌ Tense validator output was not valid JSON.");
    if (tenseValidator.stdout) console.error(tenseValidator.stdout);
    if (tenseValidator.stderr) console.error(tenseValidator.stderr);
    process.exit(1);
  }

  const tenseStatus = tenseReport.status || "UNKNOWN";
  const tenseErrors = (tenseReport.issues || []).filter((i) => i.level === "ERROR").length;
  const tenseWarnings = (tenseReport.issues || []).filter((i) => i.level === "WARN").length;

  console.log(`Tense validator status: ${tenseStatus}`);
  console.log(`Issues: ${tenseErrors} error(s), ${tenseWarnings} warning(s)\n`);

  if (tenseStatus === "ERROR" || tenseErrors > 0) {
    console.log("❌ NOT OK: Tense module validation has errors. Deployment blocked.");
    process.exit(1);
  }

  // 3) Build
  console.log("3) Build check (vite build)\n");

  const npmCmd = getNpmCmd();
  const buildExit = run(npmCmd, ["run", "build"], { cwd: process.cwd() });

  if (buildExit !== 0) {
    console.log(
      "\n❌ NOT OK: Build failed (non-zero exit code). Deployment blocked.",
    );
    process.exit(1);
  }

  console.log("\n✅ OK: Predeploy check passed.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
