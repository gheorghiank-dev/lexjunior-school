// Future Simple > Affirmative content registry (playable preview scaffold)
import { FUTURE_SIMPLE_ROOMS_PER_SECTION, FUTURE_SIMPLE_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_SIMPLE_AFFIRMATIVE_SECTION_ID = "affirmative";
const FUTURE_SIMPLE_AFFIRMATIVE_SECTION_LABEL =
  FUTURE_SIMPLE_SECTIONS.find((s) => s.id === FUTURE_SIMPLE_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const FUTURE_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-simple-affirmative",
  tenseLabel: "Future Simple",
  sectionLabel: FUTURE_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
});

export function getFutureSimpleAffirmativeExercises(roomNumber) {
  return FUTURE_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Simple",
  sectionLabel: FUTURE_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
});

export function getFutureSimpleAffirmativeGlossaryItems(roomNumber) {
  return FUTURE_SIMPLE_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_SIMPLE_AFFIRMATIVE_ROOMS = Array.from(
  { length: FUTURE_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_SIMPLE_AFFIRMATIVE_SECTION_ID,
      sectionLabel: FUTURE_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
