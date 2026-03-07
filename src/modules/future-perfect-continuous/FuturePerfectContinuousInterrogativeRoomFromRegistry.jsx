import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectContinuousInterrogativeExercises,
  getFuturePerfectContinuousInterrogativeGlossaryItems,
} from "./rooms/future-perfect-continuous-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect Continuous – Interrogative – Camera 1",
  2: "Future Perfect Continuous – Interrogative – Camera 2",
  3: "Future Perfect Continuous – Interrogative – Camera 3",
  4: "Future Perfect Continuous – Interrogative – Camera 4",
  5: "Future Perfect Continuous – Interrogative – Camera 5",
  6: "Future Perfect Continuous – Interrogative – Camera 6",
  7: "Future Perfect Continuous – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect Continuous – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectContinuousInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getFuturePerfectContinuousInterrogativeExercises,
  getDictionaryItems: getFuturePerfectContinuousInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectContinuousTheoryPath,
  getMapRoute: futurePerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
