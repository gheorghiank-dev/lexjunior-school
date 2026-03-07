export function ensureObject(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`[TenseKit] ${label} must be an object.`);
  }
}

export function ensureNonEmptyString(value, label) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`[TenseKit] ${label} must be a non-empty string.`);
  }
}

export function ensureArray(value, label) {
  if (!Array.isArray(value)) {
    throw new Error(`[TenseKit] ${label} must be an array.`);
  }
}

export function ensureUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) {
      throw new Error(`[TenseKit] ${label} contains duplicate value '${value}'.`);
    }
    seen.add(value);
  }
}

export function getSectionIds(sections, label = "sections") {
  ensureArray(sections, label);
  if (sections.length === 0) {
    throw new Error(`[TenseKit] ${label} must not be empty.`);
  }

  const ids = sections.map((section, index) => {
    if (!section || typeof section !== "object") {
      throw new Error(`[TenseKit] ${label}[${index}] must be an object.`);
    }
    ensureNonEmptyString(section.id, `${label}[${index}].id`);
    return section.id;
  });

  ensureUnique(ids, `${label}.id`);
  return ids;
}

export function assertRoomSequence(sectionId, rooms) {
  ensureArray(rooms, `roomRegistries.${sectionId}`);
  rooms.forEach((room, index) => {
    if (!room || typeof room !== "object") {
      throw new Error(
        `[TenseKit] roomRegistries.${sectionId}[${index}] must be an object.`,
      );
    }

    const expectedRoomNumber = index + 1;
    if (room.roomNumber !== expectedRoomNumber) {
      throw new Error(
        `[TenseKit] roomRegistries.${sectionId}[${index}] should have roomNumber ${expectedRoomNumber}, received ${room.roomNumber}.`,
      );
    }

    if (room.sectionId && room.sectionId !== sectionId) {
      throw new Error(
        `[TenseKit] roomRegistries.${sectionId}[${index}] has mismatched sectionId '${room.sectionId}'.`,
      );
    }
  });
}
