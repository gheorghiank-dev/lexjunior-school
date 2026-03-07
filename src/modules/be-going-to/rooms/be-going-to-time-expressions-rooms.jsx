// Be Going To > Time Expressions content registry (playable preview scaffold)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "be-going-to-time-expressions",
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getBeGoingToTimeExpressionsExercises(roomNumber) {
  return BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL,
});

export function getBeGoingToTimeExpressionsGlossaryItems(roomNumber) {
  return BE_GOING_TO_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const BE_GOING_TO_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises: BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
