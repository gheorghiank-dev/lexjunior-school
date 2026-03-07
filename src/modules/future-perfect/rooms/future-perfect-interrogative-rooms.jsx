// Future Perfect > Interrogative content registry (playable preview scaffold)
import { FUTURE_PERFECT_ROOMS_PER_SECTION, FUTURE_PERFECT_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_PERFECT_INTERROGATIVE_SECTION_ID = "interrogative";
const FUTURE_PERFECT_INTERROGATIVE_SECTION_LABEL =
  FUTURE_PERFECT_SECTIONS.find((s) => s.id === FUTURE_PERFECT_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const FUTURE_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-perfect-interrogative",
  tenseLabel: "Future Perfect",
  sectionLabel: FUTURE_PERFECT_INTERROGATIVE_SECTION_LABEL,
});

export function getFuturePerfectInterrogativeExercises(roomNumber) {
  return FUTURE_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Perfect",
  sectionLabel: FUTURE_PERFECT_INTERROGATIVE_SECTION_LABEL,
});

export function getFuturePerfectInterrogativeGlossaryItems(roomNumber) {
  return FUTURE_PERFECT_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_PERFECT_INTERROGATIVE_ROOMS = Array.from(
  { length: FUTURE_PERFECT_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_PERFECT_INTERROGATIVE_SECTION_ID,
      sectionLabel: FUTURE_PERFECT_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_PERFECT_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
