import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectMapPath,
  futurePerfectTheoryPath,
  futurePerfectRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectTimeExpressionsExercises,
  getFuturePerfectTimeExpressionsGlossaryItems,
} from "./rooms/future-perfect-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect – Time Expressions – Camera 1",
  2: "Future Perfect – Time Expressions – Camera 2",
  3: "Future Perfect – Time Expressions – Camera 3",
  4: "Future Perfect – Time Expressions – Camera 4",
  5: "Future Perfect – Time Expressions – Camera 5",
  6: "Future Perfect – Time Expressions – Camera 6",
  7: "Future Perfect – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getFuturePerfectTimeExpressionsExercises,
  getDictionaryItems: getFuturePerfectTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectTheoryPath,
  getMapRoute: futurePerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
