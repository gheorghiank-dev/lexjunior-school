// Future Simple > Interrogative content registry (skeleton)
import { FUTURE_SIMPLE_ROOMS_PER_SECTION, FUTURE_SIMPLE_SECTIONS } from "../future-core/config.js";

export const FUTURE_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM = {};

export function getFutureSimpleInterrogativeExercises(roomNumber) {
  return FUTURE_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_INTERROGATIVE_GLOSSARY_BY_ROOM = {};

export function getFutureSimpleInterrogativeGlossaryItems(roomNumber) {
  return FUTURE_SIMPLE_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_INTERROGATIVE_SECTION_ID = "interrogative";
const FUTURE_SIMPLE_INTERROGATIVE_SECTION_LABEL =
  FUTURE_SIMPLE_SECTIONS.find((s) => s.id === FUTURE_SIMPLE_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const FUTURE_SIMPLE_INTERROGATIVE_ROOMS = Array.from(
  { length: FUTURE_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_SIMPLE_INTERROGATIVE_SECTION_ID,
      sectionLabel: FUTURE_SIMPLE_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        FUTURE_SIMPLE_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
