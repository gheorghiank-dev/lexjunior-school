// Past Perfect Continuous > Interrogative content registry (skeleton)
import { PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION, PAST_PERFECT_CONTINUOUS_SECTIONS } from "../past-perfect-continuous-core/config.js";

export const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM = {};

export function getPastPerfectContinuousInterrogativeExercises(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_GLOSSARY_BY_ROOM = {};

export function getPastPerfectContinuousInterrogativeGlossaryItems(roomNumber) {
  return PAST_PERFECT_CONTINUOUS_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID = "interrogative";
const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL =
  PAST_PERFECT_CONTINUOUS_SECTIONS.find((s) => s.id === PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const PAST_PERFECT_CONTINUOUS_INTERROGATIVE_ROOMS = Array.from(
  { length: PAST_PERFECT_CONTINUOUS_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_ID,
      sectionLabel: PAST_PERFECT_CONTINUOUS_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_PERFECT_CONTINUOUS_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
