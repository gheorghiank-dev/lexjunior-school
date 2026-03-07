// Future Perfect > Negative content registry (skeleton)
import { FUTURE_PERFECT_ROOMS_PER_SECTION, FUTURE_PERFECT_SECTIONS } from "../future-core/config.js";

export const FUTURE_PERFECT_NEGATIVE_EXERCISES_BY_ROOM = {};

export function getFuturePerfectNegativeExercises(roomNumber) {
  return FUTURE_PERFECT_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_NEGATIVE_GLOSSARY_BY_ROOM = {};

export function getFuturePerfectNegativeGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_NEGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_NEGATIVE_SECTION_ID = "negative";
const FUTURE_PERFECT_NEGATIVE_SECTION_LABEL =
  FUTURE_PERFECT_SECTIONS.find((s) => s.id === FUTURE_PERFECT_NEGATIVE_SECTION_ID)?.title ?? "Negative";

export const FUTURE_PERFECT_NEGATIVE_ROOMS = Array.from(
  { length: FUTURE_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_NEGATIVE_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_NEGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        FUTURE_PERFECT_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
