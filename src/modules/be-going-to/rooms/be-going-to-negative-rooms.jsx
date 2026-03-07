// Be Going To > Negative content registry (playable preview scaffold)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const BE_GOING_TO_NEGATIVE_SECTION_ID = "negative";
const BE_GOING_TO_NEGATIVE_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_NEGATIVE_SECTION_ID)?.title ?? "Negative";

export const BE_GOING_TO_NEGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "be-going-to-negative",
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_NEGATIVE_SECTION_LABEL,
});

export function getBeGoingToNegativeExercises(roomNumber) {
  return BE_GOING_TO_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_NEGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_NEGATIVE_SECTION_LABEL,
});

export function getBeGoingToNegativeGlossaryItems(roomNumber) {
  return BE_GOING_TO_NEGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const BE_GOING_TO_NEGATIVE_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_NEGATIVE_SECTION_ID,
      sectionLabel: BE_GOING_TO_NEGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: BE_GOING_TO_NEGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
