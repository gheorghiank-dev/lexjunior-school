import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectContinuousNegativeExercises,
  getFuturePerfectContinuousNegativeGlossaryItems,
} from "./rooms/future-perfect-continuous-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect Continuous – Negative – Camera 1",
  2: "Future Perfect Continuous – Negative – Camera 2",
  3: "Future Perfect Continuous – Negative – Camera 3",
  4: "Future Perfect Continuous – Negative – Camera 4",
  5: "Future Perfect Continuous – Negative – Camera 5",
  6: "Future Perfect Continuous – Negative – Camera 6",
  7: "Future Perfect Continuous – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect Continuous – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectContinuousNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getFuturePerfectContinuousNegativeExercises,
  getDictionaryItems: getFuturePerfectContinuousNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectContinuousTheoryPath,
  getMapRoute: futurePerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect Continuous – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect Continuous – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
