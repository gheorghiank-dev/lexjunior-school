/* eslint-disable no-console */

/**
 * Guardrail: src/core/** must not import from src/modules/**.
 *
 * This is intentionally lightweight (no AST). It's meant as a fast sanity check.
 *
 * Usage:
 *   npm run guard:core-boundaries
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CORE_DIR = path.join(ROOT, "src", "core");

const EXTENSIONS = new Set([".js", ".jsx", ".ts", ".tsx"]);

function walk(dir) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...walk(full));
      continue;
    }
    const ext = path.extname(ent.name);
    if (EXTENSIONS.has(ext)) out.push(full);
  }
  return out;
}

function findViolations(filePath) {
  const rel = path.relative(ROOT, filePath);
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/);

  const violations = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Basic import patterns: import ... from "...";  /  require("...")
    const importMatch = line.match(/from\s+["']([^"']+)["']/);
    const requireMatch = line.match(/require\(\s*["']([^"']+)["']\s*\)/);

    const spec = (importMatch && importMatch[1]) || (requireMatch && requireMatch[1]) || "";
    if (!spec) continue;

    // We only care about imports pointing into modules.
    const normalized = spec.replace(/\\/g, "/");

    const isModulesImport =
      normalized.includes("/modules/") ||
      normalized.startsWith("../modules/") ||
      normalized.startsWith("../../modules/") ||
      normalized.startsWith("../../../modules/") ||
      normalized.startsWith("src/modules/") ||
      normalized.startsWith("/src/modules/");

    if (isModulesImport) {
      violations.push({
        file: rel,
        line: i + 1,
        spec,
      });
    }
  }

  return violations;
}

function main() {
  if (!fs.existsSync(CORE_DIR)) {
    console.log("[guard] No src/core directory found. Nothing to check.");
    return;
  }

  const files = walk(CORE_DIR);
  const all = [];
  for (const f of files) {
    all.push(...findViolations(f));
  }

  if (all.length === 0) {
    console.log("[guard] OK: src/core has no imports from src/modules.");
    return;
  }

  console.error("[guard] FAIL: src/core imports from src/modules were found:\n");
  for (const v of all) {
    console.error(` - ${v.file}:${v.line}  ->  ${v.spec}`);
  }
  console.error("\nFix: move shared logic into src/core or reverse the dependency via injection.");
  process.exit(1);
}

main();
