// src/access/passwords/config.js

// Normalizare booleeni din env: "true", "1", "yes", "on" => true
function envBool(value) {
  if (value == null) return false;
  const v = String(value).trim().toLowerCase();
  return v === "true" || v === "1" || v === "yes" || v === "on";
}

export function isGlobalPasswordGateEnabled() {
  return envBool(import.meta.env.VITE_ENABLE_PASSWORDS_GLOBAL);
}

export function isTensePasswordGateEnabled() {
  return envBool(import.meta.env.VITE_ENABLE_PASSWORDS_BY_TENSE);
}

export function getGlobalPassword() {
  const p = import.meta.env.VITE_PASSWORD_GLOBAL;
  return typeof p === "string" && p.trim() ? p.trim() : "";
}

// Map fix: tenseId -> env var
// (Păstrăm simplu, fără importuri din modules, ca să rămână izolată zona de access.)
const TENSE_ENV_KEYS = {
  "present-simple": "VITE_PASSWORD_PRESENT_SIMPLE",
  "present-continuous": "VITE_PASSWORD_PRESENT_CONTINUOUS",
  "past-simple": "VITE_PASSWORD_PAST_SIMPLE",
  "future-simple": "VITE_PASSWORD_FUTURE_SIMPLE",
};

export function getTensePassword(tenseId) {
  const key = TENSE_ENV_KEYS[String(tenseId || "")] || "";
  if (!key) return "";
  const p = import.meta.env[key];
  return typeof p === "string" && p.trim() ? p.trim() : "";
}

// Label pentru UI (opțional)
const TENSE_LABELS = {
  "present-simple": "Present Simple",
  "present-continuous": "Present Continuous",
  "past-simple": "Past Simple",
  "future-simple": "Future Simple",
};

export function getTenseLabel(tenseId) {
  return TENSE_LABELS[String(tenseId || "")] || "";
}
