import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectMapPath,
  futurePerfectTheoryPath,
  futurePerfectRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectUsesExercises,
  getFuturePerfectUsesGlossaryItems,
} from "./rooms/future-perfect-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect – Uses – Camera 1",
  2: "Future Perfect – Uses – Camera 2",
  3: "Future Perfect – Uses – Camera 3",
  4: "Future Perfect – Uses – Camera 4",
  5: "Future Perfect – Uses – Camera 5",
  6: "Future Perfect – Uses – Camera 6",
  7: "Future Perfect – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getFuturePerfectUsesExercises,
  getDictionaryItems: getFuturePerfectUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectTheoryPath,
  getMapRoute: futurePerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
