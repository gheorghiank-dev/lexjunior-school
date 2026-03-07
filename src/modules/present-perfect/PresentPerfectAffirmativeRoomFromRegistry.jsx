import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectMapPath,
  presentPerfectTheoryPath,
  presentPerfectRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectAffirmativeExercises,
  getPresentPerfectAffirmativeGlossaryItems,
} from "./rooms/present-perfect-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect – Affirmative – Camera 1",
  2: "Present Perfect – Affirmative – Camera 2",
  3: "Present Perfect – Affirmative – Camera 3",
  4: "Present Perfect – Affirmative – Camera 4",
  5: "Present Perfect – Affirmative – Camera 5",
  6: "Present Perfect – Affirmative – Camera 6",
  7: "Present Perfect – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPresentPerfectAffirmativeExercises,
  getDictionaryItems: getPresentPerfectAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectTheoryPath,
  getMapRoute: presentPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
