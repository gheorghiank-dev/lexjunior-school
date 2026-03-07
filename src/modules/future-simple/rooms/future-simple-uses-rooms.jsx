// Future Simple > Uses content registry (playable preview scaffold)
import { FUTURE_SIMPLE_ROOMS_PER_SECTION, FUTURE_SIMPLE_SECTIONS } from "../future-core/config.js";
import {
  createPreviewExercisesByRoom,
  createPreviewGlossaryByRoom,
} from "../../tenses/scaffold-preview.js";

const FUTURE_SIMPLE_USES_SECTION_ID = "uses";
const FUTURE_SIMPLE_USES_SECTION_LABEL =
  FUTURE_SIMPLE_SECTIONS.find((s) => s.id === FUTURE_SIMPLE_USES_SECTION_ID)?.title ?? "Uses";

export const FUTURE_SIMPLE_USES_EXERCISES_BY_ROOM = createPreviewExercisesByRoom({
  prefix: "future-simple-uses",
  tenseLabel: "Future Simple",
  sectionLabel: FUTURE_SIMPLE_USES_SECTION_LABEL,
});

export function getFutureSimpleUsesExercises(roomNumber) {
  return FUTURE_SIMPLE_USES_EXERCISES_BY_ROOM[roomNumber] ?? [];
}

const FUTURE_SIMPLE_USES_GLOSSARY_BY_ROOM = createPreviewGlossaryByRoom({
  tenseLabel: "Future Simple",
  sectionLabel: FUTURE_SIMPLE_USES_SECTION_LABEL,
});

export function getFutureSimpleUsesGlossaryItems(roomNumber) {
  return FUTURE_SIMPLE_USES_GLOSSARY_BY_ROOM[roomNumber] ?? [];
}

export const FUTURE_SIMPLE_USES_ROOMS = Array.from(
  { length: FUTURE_SIMPLE_ROOMS_PER_SECTION },
  (_, idx) => {
    const roomNumber = idx + 1;
    return {
      sectionId: FUTURE_SIMPLE_USES_SECTION_ID,
      sectionLabel: FUTURE_SIMPLE_USES_SECTION_LABEL,
      roomNumber,
      exercises: FUTURE_SIMPLE_USES_EXERCISES_BY_ROOM[roomNumber] ?? [],
    };
  },
);
