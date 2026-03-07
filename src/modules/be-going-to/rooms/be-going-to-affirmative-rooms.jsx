// Be Going To > Affirmative content registry (playable preview scaffold)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const BE_GOING_TO_AFFIRMATIVE_SECTION_ID = "affirmative";
const BE_GOING_TO_AFFIRMATIVE_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_AFFIRMATIVE_SECTION_ID)?.title ?? "Affirmative";

export const BE_GOING_TO_AFFIRMATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "be-going-to-affirmative",
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_AFFIRMATIVE_SECTION_LABEL,
});

export function getBeGoingToAffirmativeExercises(roomNumber) {
  return BE_GOING_TO_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_AFFIRMATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_AFFIRMATIVE_SECTION_LABEL,
});

export function getBeGoingToAffirmativeGlossaryItems(roomNumber) {
  return BE_GOING_TO_AFFIRMATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const BE_GOING_TO_AFFIRMATIVE_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_AFFIRMATIVE_SECTION_ID,
      sectionLabel: BE_GOING_TO_AFFIRMATIVE_SECTION_LABEL,
      roomNumber,
      exercises: BE_GOING_TO_AFFIRMATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
