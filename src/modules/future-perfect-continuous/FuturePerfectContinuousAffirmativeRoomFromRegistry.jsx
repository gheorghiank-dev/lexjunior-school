import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectContinuousAffirmativeExercises,
  getFuturePerfectContinuousAffirmativeGlossaryItems,
} from "./rooms/future-perfect-continuous-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect Continuous – Affirmative – Camera 1",
  2: "Future Perfect Continuous – Affirmative – Camera 2",
  3: "Future Perfect Continuous – Affirmative – Camera 3",
  4: "Future Perfect Continuous – Affirmative – Camera 4",
  5: "Future Perfect Continuous – Affirmative – Camera 5",
  6: "Future Perfect Continuous – Affirmative – Camera 6",
  7: "Future Perfect Continuous – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect Continuous – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectContinuousAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getFuturePerfectContinuousAffirmativeExercises,
  getDictionaryItems: getFuturePerfectContinuousAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectContinuousTheoryPath,
  getMapRoute: futurePerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect Continuous – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect Continuous – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
