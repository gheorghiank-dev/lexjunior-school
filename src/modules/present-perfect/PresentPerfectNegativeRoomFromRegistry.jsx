import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectMapPath,
  presentPerfectTheoryPath,
  presentPerfectRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectNegativeExercises,
  getPresentPerfectNegativeGlossaryItems,
} from "./rooms/present-perfect-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect – Negative – Camera 1",
  2: "Present Perfect – Negative – Camera 2",
  3: "Present Perfect – Negative – Camera 3",
  4: "Present Perfect – Negative – Camera 4",
  5: "Present Perfect – Negative – Camera 5",
  6: "Present Perfect – Negative – Camera 6",
  7: "Present Perfect – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPresentPerfectNegativeExercises,
  getDictionaryItems: getPresentPerfectNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectTheoryPath,
  getMapRoute: presentPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
