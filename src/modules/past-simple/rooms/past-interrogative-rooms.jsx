// Past Simple > Interrogative content registry (skeleton)
import { PAST_SIMPLE_ROOMS_PER_SECTION, PAST_SIMPLE_SECTIONS } from "../past-core/config.js";

export const PAST_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM = {};

export function getPastSimpleInterrogativeExercises(roomNumber) {
  return PAST_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_INTERROGATIVE_GLOSSARY_BY_ROOM = {};

export function getPastSimpleInterrogativeGlossaryItems(roomNumber) {
  return PAST_SIMPLE_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_INTERROGATIVE_SECTION_ID = "interrogative";
const PAST_SIMPLE_INTERROGATIVE_SECTION_LABEL =
  PAST_SIMPLE_SECTIONS.find((s) => s.id === PAST_SIMPLE_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const PAST_SIMPLE_INTERROGATIVE_ROOMS = Array.from(
  { length: PAST_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_SIMPLE_INTERROGATIVE_SECTION_ID,
      sectionLabel: PAST_SIMPLE_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        PAST_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
