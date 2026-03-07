// Present Perfect > Interrogative content registry (skeleton)
import { PRESENT_PERFECT_ROOMS_PER_SECTION, PRESENT_PERFECT_SECTIONS } from "../present-core/config.js";

export const PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM = {};

export function getPresentPerfectInterrogativeExercises(roomNumber) {
  return PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM = {};

export function getPresentPerfectInterrogativeGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_INTERROGATIVE_SECTION_ID = "interrogative";
const PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL =
  PRESENT_PERFECT_SECTIONS.find((s) => s.id === PRESENT_PERFECT_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const PRESENT_PERFECT_INTERROGATIVE_ROOMS = Array.from(
  { length: PRESENT_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_INTERROGATIVE_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises:
        PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
