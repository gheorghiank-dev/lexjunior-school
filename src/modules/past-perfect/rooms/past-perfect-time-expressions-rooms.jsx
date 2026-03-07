// Past Perfect > Time Expressions content registry (skeleton)
import { PAST_PERFECT_ROOMS_PER_SECTION, PAST_PERFECT_SECTIONS } from "../past-perfect-core/config.js";

export const PAST_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = {};

export function getPastPerfectTimeExpressionsExercises(roomNumber) {
  return PAST_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {};

export function getPastPerfectTimeExpressionsGlossaryItems(roomNumber) {
  return PAST_PERFECT_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PAST_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL =
  PAST_PERFECT_SECTIONS.find((s) => s.id === PAST_PERFECT_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PAST_PERFECT_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PAST_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PAST_PERFECT_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_PERFECT_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
