// Be Going To > Time Expressions content registry (skeleton)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";

export const BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM = {};

export function getBeGoingToTimeExpressionsExercises(roomNumber) {
  return BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM = {};

export function getBeGoingToTimeExpressionsGlossaryItems(roomNumber) {
  return BE_GOING_TO_TIME_EXPRESSIONS_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID = "time-expressions";
const BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID)?.title ?? "Time Expressions";

export const BE_GOING_TO_TIME_EXPRESSIONS_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_ID,
      sectionLabel: BE_GOING_TO_TIME_EXPRESSIONS_SECTION_LABEL,
      roomNumber,
      exercises:
        BE_GOING_TO_TIME_EXPRESSIONS_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
