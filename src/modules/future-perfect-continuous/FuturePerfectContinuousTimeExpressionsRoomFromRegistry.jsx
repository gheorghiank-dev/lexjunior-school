import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectContinuousTimeExpressionsExercises,
  getFuturePerfectContinuousTimeExpressionsGlossaryItems,
} from "./rooms/future-perfect-continuous-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect Continuous – Time Expressions – Camera 1",
  2: "Future Perfect Continuous – Time Expressions – Camera 2",
  3: "Future Perfect Continuous – Time Expressions – Camera 3",
  4: "Future Perfect Continuous – Time Expressions – Camera 4",
  5: "Future Perfect Continuous – Time Expressions – Camera 5",
  6: "Future Perfect Continuous – Time Expressions – Camera 6",
  7: "Future Perfect Continuous – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect Continuous – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectContinuousTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getFuturePerfectContinuousTimeExpressionsExercises,
  getDictionaryItems: getFuturePerfectContinuousTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectContinuousTheoryPath,
  getMapRoute: futurePerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect Continuous – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect Continuous – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
