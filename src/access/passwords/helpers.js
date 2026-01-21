import { getGlobalUnlockKey, getTenseUnlockKey, readFlag, writeFlag } from "./storage.js";

export function isGlobalUnlocked() {
  return readFlag(getGlobalUnlockKey());
}

export function setGlobalUnlocked(unlocked) {
  writeFlag(getGlobalUnlockKey(), Boolean(unlocked));
}

export function isTenseUnlocked(tenseId) {
  return readFlag(getTenseUnlockKey(tenseId));
}

export function setTenseUnlocked(tenseId, unlocked) {
  writeFlag(getTenseUnlockKey(tenseId), Boolean(unlocked));
}
