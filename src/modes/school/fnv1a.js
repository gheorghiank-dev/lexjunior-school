// Sprint 13 – Deterministic code (FNV-1a)
// Pure, deterministic hash – no randomness.

// 32-bit FNV-1a
// Returns unsigned 32-bit integer.
export function fnv1a32(input) {
  const str = (input ?? "").toString();
  let hash = 0x811c9dc5; // offset basis

  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    // hash *= 16777619 (FNV prime) with 32-bit overflow
    hash = (hash >>> 0) * 0x01000193;
    hash >>>= 0;
  }

  return hash >>> 0;
}

export function fnv1aHex(input) {
  const n = fnv1a32(input);
  return n.toString(16).padStart(8, "0").toUpperCase();
}

// Human-friendly short code derived from name + tense.
// Stable for the same input.
export function buildStudentCode(studentName, tenseId) {
  const base = `${(studentName || "").trim()}|${tenseId}`;
  return fnv1aHex(base);
}
