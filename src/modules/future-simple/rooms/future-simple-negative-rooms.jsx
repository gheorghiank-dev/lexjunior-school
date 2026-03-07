// Future Simple > Negative content registry (skeleton)
import { FUTURE_SIMPLE_ROOMS_PER_SECTION, FUTURE_SIMPLE_SECTIONS } from "../future-core/config.js";

export const FUTURE_SIMPLE_NEGATIVE_EXERCISES_BY_ROOM = {};

export function getFutureSimpleNegativeExercises(roomNumber) {
  return FUTURE_SIMPLE_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_NEGATIVE_GLOSSARY_BY_ROOM = {};

export function getFutureSimpleNegativeGlossaryItems(roomNumber) {
  return FUTURE_SIMPLE_NEGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_NEGATIVE_SECTION_ID = "negative";
const FUTURE_SIMPLE_NEGATIVE_SECTION_LABEL =
  FUTURE_SIMPLE_SECTIONS.find((s) => s.id === FUTURE_SIMPLE_NEGATIVE_SECTION_ID)?.title ?? "Negative";

export const FUTURE_SIMPLE_NEGATIVE_ROOMS = Array.from(
  { length: FUTURE_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_SIMPLE_NEGATIVE_SECTION_ID,
      sectionLabel: FUTURE_SIMPLE_NEGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        FUTURE_SIMPLE_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
