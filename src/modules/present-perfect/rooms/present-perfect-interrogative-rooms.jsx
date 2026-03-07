// Present Perfect > Interrogative content registry (playable preview scaffold)
import { PRESENT_PERFECT_ROOMS_PER_SECTION, PRESENT_PERFECT_SECTIONS } from "../present-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PRESENT_PERFECT_INTERROGATIVE_SECTION_ID = "interrogative";
const PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL =
  PRESENT_PERFECT_SECTIONS.find((s) => s.id === PRESENT_PERFECT_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "present-perfect-interrogative",
  tenseLabel: "Present Perfect",
  sectionLabel: PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL,
});

export function getPresentPerfectInterrogativeExercises(roomNumber) {
  return PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PRESENT_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Present Perfect",
  sectionLabel: PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL,
});

export function getPresentPerfectInterrogativeGlossaryItems(roomNumber) {
  return PRESENT_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PRESENT_PERFECT_INTERROGATIVE_ROOMS = Array.from(
  { length: PRESENT_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PRESENT_PERFECT_INTERROGATIVE_SECTION_ID,
      sectionLabel: PRESENT_PERFECT_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PRESENT_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
