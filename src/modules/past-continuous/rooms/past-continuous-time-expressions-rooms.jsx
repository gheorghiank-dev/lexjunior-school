// Past Continuous > Time Expressions content registry (skeleton)
import { PAST_CONTINUOUS_ROOMS_PER_SECTION, PAST_CONTINUOUS_SECTIONS } from "../past-continuous-core/config.js";

export const PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = {};

export function getPastContinuousTimeExpressionsExercises(roomNumber) {
  return PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {};

export function getPastContinuousTimeExpressionsGlossaryItems(roomNumber) {
  return PAST_CONTINUOUS_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL =
  PAST_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const PAST_CONTINUOUS_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: PAST_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: PAST_CONTINUOUS_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_CONTINUOUS_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
