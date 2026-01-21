import { useCallback, useEffect, useMemo, useState } from "react";
import { getBrowserStorage } from "../../core/platform/browser-storage.js";

// Sprint 12 – Student Name
// - School Mode only
// - Stored per tense in localStorage
// - Separate namespace from gameplay progress

const KEY_PREFIX = "lex_school.student_name.";
const MAX_NAME_LENGTH = 40;

function keyFor(tenseId) {
  return `${KEY_PREFIX}${tenseId}`;
}

function safeGet(key) {
  try {
    const storage = getBrowserStorage();
    if (!storage) return null;
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key, value) {
  try {
    const storage = getBrowserStorage();
    if (!storage) return false;
    storage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function safeRemove(key) {
  try {
    const storage = getBrowserStorage();
    if (!storage) return false;
    storage.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export function normalizeStudentName(input) {
  const raw = (input ?? "").toString();
  const normalized = raw.replace(/\s+/g, " ").trim();
  return normalized.slice(0, MAX_NAME_LENGTH);
}

export function getStudentName(tenseId) {
  const raw = safeGet(keyFor(tenseId)) || "";
  return normalizeStudentName(raw);
}

export function setStudentName(tenseId, name) {
  const normalized = normalizeStudentName(name);
  const key = keyFor(tenseId);

  if (!normalized) {
    safeRemove(key);
    return "";
  }

  safeSet(key, normalized);
  return normalized;
}

export function clearStudentName(tenseId) {
  safeRemove(keyFor(tenseId));
}

// Convenience React hook for UI usage in School Mode.
export function useStudentName(tenseId) {
  const [studentName, setStudentNameState] = useState(() =>
    getStudentName(tenseId),
  );

  useEffect(() => {
    setStudentNameState(getStudentName(tenseId));
  }, [tenseId]);

  const saveStudentName = useCallback(
    (name) => {
      const next = setStudentName(tenseId, name);
      setStudentNameState(next);
      return next;
    },
    [tenseId],
  );

  const clear = useCallback(() => {
    clearStudentName(tenseId);
    setStudentNameState("");
  }, [tenseId]);

  return useMemo(
    () => ({ studentName, saveStudentName, clearStudentName: clear }),
    [studentName, saveStudentName, clear],
  );
}
