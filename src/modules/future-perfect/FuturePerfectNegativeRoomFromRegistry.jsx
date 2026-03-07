import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectMapPath,
  futurePerfectTheoryPath,
  futurePerfectRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectNegativeExercises,
  getFuturePerfectNegativeGlossaryItems,
} from "./rooms/future-perfect-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect – Negative – Camera 1",
  2: "Future Perfect – Negative – Camera 2",
  3: "Future Perfect – Negative – Camera 3",
  4: "Future Perfect – Negative – Camera 4",
  5: "Future Perfect – Negative – Camera 5",
  6: "Future Perfect – Negative – Camera 6",
  7: "Future Perfect – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getFuturePerfectNegativeExercises,
  getDictionaryItems: getFuturePerfectNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectTheoryPath,
  getMapRoute: futurePerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
