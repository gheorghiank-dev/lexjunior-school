// Be Going To > Uses content registry (skeleton)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";

export const BE_GOING_TO_USES_EXERCISES_BY_ROOM = {};

export function getBeGoingToUsesExercises(roomNumber) {
  return BE_GOING_TO_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_USES_GLOSSARY_BY_ROOM = {};

export function getBeGoingToUsesGlossaryItems(roomNumber) {
  return BE_GOING_TO_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_USES_SECTION_ID = "uses";
const BE_GOING_TO_USES_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_USES_SECTION_ID)?.title ?? "Uses";

export const BE_GOING_TO_USES_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_USES_SECTION_ID,
      sectionLabel: BE_GOING_TO_USES_SECTION_LABEL,
      roomNumber,
      exercises:
        BE_GOING_TO_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
