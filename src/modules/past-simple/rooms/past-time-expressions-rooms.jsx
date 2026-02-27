// Past Simple > Time Expressions content registry (skeleton)
import { PAST_SIMPLE_ROOMS_PER_SECTION, PAST_SIMPLE_SECTIONS } from "../past-core/config.js";

export const PAST_SIMPLE_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = {};

export function getPastSimpleTimeExpressionsExercises(roomNumber) {
  return PAST_SIMPLE_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {};

export function getPastSimpleTimeExpressionsGlossaryItems(roomNumber) {
  return PAST_SIMPLE_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PAST_SIMPLE_TIME_EXPRESSIONS_SECTION_LABEL =
  PAST_SIMPLE_SECTIONS.find((s) => s.id === PAST_SIMPLE_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PAST_SIMPLE_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PAST_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_SIMPLE_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PAST_SIMPLE_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_SIMPLE_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
