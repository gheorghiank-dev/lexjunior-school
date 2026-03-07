// Present Perfect > Time Expressions content registry (skeleton)
import { PRESENT_PERFECT_ROOMS_PER_SECTION, PRESENT_PERFECT_SECTIONS } from "../present-core/config.js";

export const PRESENT_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = {};

export function getPresentPerfectTimeExpressionsExercises(roomNumber) {
  return PRESENT_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {};

export function getPresentPerfectTimeExpressionsGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PRESENT_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL =
  PRESENT_PERFECT_SECTIONS.find((s) => s.id === PRESENT_PERFECT_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PRESENT_PERFECT_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PRESENT_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises:
        PRESENT_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
