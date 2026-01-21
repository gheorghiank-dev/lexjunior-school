import { ENV } from "../../environment.js";
import { tenseModules } from "../../modules/tenses/registry.js";

function readString(key, fallback = "") {
  const v = import.meta && import.meta.env ? import.meta.env[key] : undefined;
  if (typeof v === "string") return v;
  return fallback;
}

export function isGlobalPasswordGateEnabled() {
  return Boolean(ENV.ENABLE_PASSWORDS_GLOBAL);
}

export function isTensePasswordGateEnabled() {
  return Boolean(ENV.ENABLE_PASSWORDS_BY_TENSE);
}

export function getGlobalPassword() {
  // Empty password means no lock even if the gate is enabled.
  return String(ENV.PASSWORD_GLOBAL || "").trim();
}

export function deriveTensePasswordEnvKey(tenseId) {
  const id = String(tenseId || "").trim();
  if (!id) return "";
  return `VITE_PASSWORD_${id.toUpperCase().replace(/-/g, "_")}`;
}

export function getTenseModuleById(tenseId) {
  const id = String(tenseId || "").trim();
  return tenseModules.find((m) => m && m.id === id) || null;
}

export function getTensePasswordEnvKey(tenseId) {
  const mod = getTenseModuleById(tenseId);
  if (mod && typeof mod.passwordEnvKey === "string" && mod.passwordEnvKey.trim()) {
    return mod.passwordEnvKey.trim();
  }
  return deriveTensePasswordEnvKey(tenseId);
}

export function getTensePassword(tenseId) {
  const key = getTensePasswordEnvKey(tenseId);
  if (!key) return "";
  return readString(key, "").trim();
}

export function getTenseLabel(tenseId) {
  const mod = getTenseModuleById(tenseId);
  return mod && typeof mod.label === "string" ? mod.label : "";
}
