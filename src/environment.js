// Centralized environment flags for the app (Sprint 10+).
// We keep this file dependency-free so it can be imported anywhere safely.

function readString(key, fallback = "") {
  const v = import.meta && import.meta.env ? import.meta.env[key] : undefined;
  if (typeof v === "string") return v;
  return fallback;
}

function readBool(key, fallback = false) {
  const raw = readString(key, "").trim().toLowerCase();
  if (!raw) return fallback;
  if (["1", "true", "yes", "y", "on"].includes(raw)) return true;
  if (["0", "false", "no", "n", "off"].includes(raw)) return false;
  return fallback;
}

function normalizeBuildMode(v) {
  const s = (v || "").trim().toLowerCase();
  if (s === "school") return "school";
  if (s === "production") return "production";
  // Backward compatible aliases.
  if (s === "prod") return "production";
  if (s === "sch") return "school";
  return "production";
}

export const ENV = {
  // Sprint 10
  BUILD_MODE: normalizeBuildMode(readString("VITE_BUILD_MODE", "production")),

  // Sprint 11
  ENABLE_PASSWORDS_GLOBAL: readBool("VITE_ENABLE_PASSWORDS_GLOBAL", false),
  ENABLE_PASSWORDS_BY_TENSE: readBool("VITE_ENABLE_PASSWORDS_BY_TENSE", false),

  // Password values (kept optional; empty means "no lock")
  PASSWORD_GLOBAL: readString("VITE_PASSWORD_GLOBAL", ""),

  // Dev helpers
  // IMPORTANT: never enable in School mode (even if env var is set).
  SHOW_DEV_TOOLS:
    readBool("VITE_SHOW_DEV_TOOLS", false) &&
    normalizeBuildMode(readString("VITE_BUILD_MODE", "production")) !== "school",
};

export function getEnv() {
  return ENV;
}

export function parseEnvBool(value, fallback = false) {
  const s = (value || "").trim().toLowerCase();
  if (!s) return fallback;
  if (["1", "true", "yes", "y", "on"].includes(s)) return true;
  if (["0", "false", "no", "n", "off"].includes(s)) return false;
  return fallback;
}
