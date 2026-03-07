// Be Going To > Interrogative content registry (playable preview scaffold)
import { BE_GOING_TO_ROOMS_PER_SECTION, BE_GOING_TO_SECTIONS } from "../be-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const BE_GOING_TO_INTERROGATIVE_SECTION_ID = "interrogative";
const BE_GOING_TO_INTERROGATIVE_SECTION_LABEL =
  BE_GOING_TO_SECTIONS.find((s) => s.id === BE_GOING_TO_INTERROGATIVE_SECTION_ID)?.title ?? "Interrogative";

export const BE_GOING_TO_INTERROGATIVE_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "be-going-to-interrogative",
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_INTERROGATIVE_SECTION_LABEL,
});

export function getBeGoingToInterrogativeExercises(roomNumber) {
  return BE_GOING_TO_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const BE_GOING_TO_INTERROGATIVE_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Be Going To",
  sectionLabel: BE_GOING_TO_INTERROGATIVE_SECTION_LABEL,
});

export function getBeGoingToInterrogativeGlossaryItems(roomNumber) {
  return BE_GOING_TO_INTERROGATIVE_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const BE_GOING_TO_INTERROGATIVE_ROOMS = Array.from(
  { length: BE_GOING_TO_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: BE_GOING_TO_INTERROGATIVE_SECTION_ID,
      sectionLabel: BE_GOING_TO_INTERROGATIVE_SECTION_LABEL,
      roomNumber,
      exercises: BE_GOING_TO_INTERROGATIVE_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
