// Past Simple > Affirmative content registry (playable preview scaffold)
import { PAST_SIMPLE_ROOMS_PER_SECTION, PAST_SIMPLE_SECTIONS } from "../past-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const PAST_SIMPLE_AFFIRMATIVE_SECTION_ID = "affirmative";
const PAST_SIMPLE_AFFIRMATIVE_SECTION_LABEL =
  PAST_SIMPLE_SECTIONS.find((s) => s.id === PAST_SIMPLE_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const PAST_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "past-simple-affirmative",
  tenseLabel: "Past Simple",
  sectionLabel: PAST_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastSimpleAffirmativeExercises(roomNumber) {
  return PAST_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const PAST_SIMPLE_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Past Simple",
  sectionLabel: PAST_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
});

export function getPastSimpleAffirmativeGlossaryItems(roomNumber) {
  return PAST_SIMPLE_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const PAST_SIMPLE_AFFIRMATIVE_ROOMS = Array.from(
  { length: PAST_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: PAST_SIMPLE_AFFIRMATIVE_SECTION_ID,
      sectionLabel: PAST_SIMPLE_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: PAST_SIMPLE_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
