/**
 * Dev-only validation helpers for content registries.
 *
 * Guardrails:
 * - NO imports from modules (core must stay agnostic)
 * - No runtime behavior changes (use behind import.meta.env.DEV)
 */

function isPlainObject(x) {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

function fmt(path, msg) {
  return `${path}: ${msg}`;
}

/**
 * @param {any} rooms
 * @param {{ registryName?: string; sectionId?: string; expectedRoomNumbers?: number[] }} opts
 */
export function validateRoomRegistry(rooms, opts = {}) {
  const registryName = opts.registryName ?? "<rooms-registry>";
  const expectedRoomNumbers = opts.expectedRoomNumbers ?? null;

  const errors = [];

  if (!Array.isArray(rooms)) {
    throw new Error(`[${registryName}] expected an array, got ${typeof rooms}`);
  }

  const seenRoomNumbers = new Map();

  rooms.forEach((room, idx) => {
    const base = `[${registryName}][${idx}]`;

    if (!isPlainObject(room)) {
      errors.push(fmt(base, `expected object, got ${Array.isArray(room) ? "array" : typeof room}`));
      return;
    }

    // sectionId
    if (typeof room.sectionId !== "string" || !room.sectionId.trim()) {
      errors.push(fmt(`${base}.sectionId`, "missing/invalid (expected non-empty string)"));
    } else if (opts.sectionId && room.sectionId !== opts.sectionId) {
      errors.push(fmt(`${base}.sectionId`, `expected '${opts.sectionId}', got '${room.sectionId}'`));
    }

    // sectionLabel
    if (typeof room.sectionLabel !== "string" || !room.sectionLabel.trim()) {
      errors.push(fmt(`${base}.sectionLabel`, "missing/invalid (expected non-empty string)"));
    }

    // roomNumber
    if (typeof room.roomNumber !== "number" || !Number.isInteger(room.roomNumber) || room.roomNumber <= 0) {
      errors.push(fmt(`${base}.roomNumber`, "missing/invalid (expected positive integer)"));
    } else {
      const prevIdx = seenRoomNumbers.get(room.roomNumber);
      if (prevIdx != null) {
        errors.push(fmt(`${base}.roomNumber`, `duplicate roomNumber ${room.roomNumber} (also at index ${prevIdx})`));
      } else {
        seenRoomNumbers.set(room.roomNumber, idx);
      }
    }

    // exercises
    if (!Array.isArray(room.exercises) || room.exercises.length === 0) {
      errors.push(fmt(`${base}.exercises`, "missing/invalid (expected non-empty array)"));
    } else {
      validateExercises(room.exercises, `${base}.exercises`, errors);
    }

    // lexHints (allow undefined; warn if missing)
    if (room.lexHints == null) {
      // Not fatal; some rooms might intentionally omit hints.
      // Still useful to surface during dev.
      // eslint-disable-next-line no-console
      console.warn(`[${registryName}] missing lexHints for roomNumber=${room.roomNumber ?? "?"}`);
    }

    // Rendering contract: either provide ExerciseListComponent (standard rooms)
    // OR provide renderBody (custom room that renders its own body).
    // This keeps validation compatible with rooms like Negative Room 7.
    const hasExerciseList = room.ExerciseListComponent != null;
    const hasRenderBody = typeof room.renderBody === "function";
    if (!hasExerciseList && !hasRenderBody) {
      errors.push(
        fmt(
          base,
          "missing renderer: expected either ExerciseListComponent (standard) or renderBody() (custom)"
        )
      );
    }

    // dictionaryItems, if present
    if (room.dictionaryItems != null && !Array.isArray(room.dictionaryItems)) {
      errors.push(fmt(`${base}.dictionaryItems`, "invalid (expected array when provided)"));
    }

    // exerciseListProps, if present
    if (room.exerciseListProps != null && !isPlainObject(room.exerciseListProps)) {
      errors.push(fmt(`${base}.exerciseListProps`, "invalid (expected object when provided)"));
    }

    // nextTo, if present
    if (room.nextTo != null && typeof room.nextTo !== "string") {
      errors.push(fmt(`${base}.nextTo`, "invalid (expected string when provided)"));
    }
  });

  if (expectedRoomNumbers) {
    const missing = expectedRoomNumbers.filter((n) => !seenRoomNumbers.has(n));
    const extras = Array.from(seenRoomNumbers.keys()).filter((n) => !expectedRoomNumbers.includes(n));

    if (missing.length) {
      errors.push(fmt(`[${registryName}]`, `missing roomNumbers: ${missing.join(", ")}`));
    }
    if (extras.length) {
      errors.push(fmt(`[${registryName}]`, `unexpected roomNumbers: ${extras.join(", ")}`));
    }
  }

  if (errors.length) {
    const msg = [`[${registryName}] content registry validation failed:`, ...errors.map((e) => `- ${e}`)].join("\n");
    throw new Error(msg);
  }
}

function validateExercises(exercises, basePath, errors) {
  const seenIds = new Set();

  exercises.forEach((ex, i) => {
    const p = `${basePath}[${i}]`;
    if (!isPlainObject(ex)) {
      errors.push(fmt(p, `expected object, got ${Array.isArray(ex) ? "array" : typeof ex}`));
      return;
    }

    // id
    const idOk = typeof ex.id === "number" || (typeof ex.id === "string" && ex.id.trim());
    if (!idOk) {
      errors.push(fmt(`${p}.id`, "missing/invalid (expected number or non-empty string)"));
    } else {
      const key = String(ex.id);
      if (seenIds.has(key)) errors.push(fmt(`${p}.id`, `duplicate id '${key}' within the same room`));
      seenIds.add(key);
    }

    // correct
    if (!Object.prototype.hasOwnProperty.call(ex, "correct") || ex.correct == null || ex.correct === "") {
      errors.push(fmt(`${p}.correct`, "missing/invalid (expected a value)"));
    }

    // options shape (if present)
    if (ex.options != null) {
      if (!Array.isArray(ex.options) || ex.options.length === 0) {
        errors.push(fmt(`${p}.options`, "invalid (expected non-empty array when provided)"));
      }
    }
  });
}
