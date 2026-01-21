import { getBrowserStorage } from "../../core/platform/browser-storage.js";

const STORAGE_PREFIX = "lex_access";

export function getGlobalUnlockKey() {
  return `${STORAGE_PREFIX}.global_unlocked`;
}

export function getTenseUnlockKey(tenseId) {
  const id = String(tenseId || "").trim();
  return `${STORAGE_PREFIX}.tense.${id}.unlocked`;
}

export function readFlag(key) {
  const storage = getBrowserStorage();
  if (!storage) return false;
  try {
    return storage.getItem(key) === "1";
  } catch {
    return false;
  }
}

export function writeFlag(key, value) {
  const storage = getBrowserStorage();
  if (!storage) return;
  try {
    storage.setItem(key, value ? "1" : "0");
  } catch {
    // ignore
  }
}
