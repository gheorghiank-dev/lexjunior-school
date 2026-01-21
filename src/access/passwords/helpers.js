// src/access/passwords/helpers.js

const LS_KEYS = {
  global: "lj_pw_global_ok",
  tense: (tenseId) => `lj_pw_tense_${String(tenseId)}_ok`,
};

function safeGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore (Safari private mode / blocked storage)
  }
}

export function isGlobalUnlocked() {
  return safeGet(LS_KEYS.global) === "true";
}

export function setGlobalUnlocked(ok) {
  safeSet(LS_KEYS.global, ok ? "true" : "false");
}

export function isTenseUnlocked(tenseId) {
  if (!tenseId) return false;
  return safeGet(LS_KEYS.tense(tenseId)) === "true";
}

export function setTenseUnlocked(tenseId, ok) {
  if (!tenseId) return;
  safeSet(LS_KEYS.tense(tenseId), ok ? "true" : "false");
}
