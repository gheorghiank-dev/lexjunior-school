import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futurePerfectContinuousMapPath,
  futurePerfectContinuousTheoryPath,
  futurePerfectContinuousRoomPath,
} from "./future-paths.js";
import {
  getFuturePerfectContinuousUsesExercises,
  getFuturePerfectContinuousUsesGlossaryItems,
} from "./rooms/future-perfect-continuous-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Perfect Continuous – Uses – Camera 1",
  2: "Future Perfect Continuous – Uses – Camera 2",
  3: "Future Perfect Continuous – Uses – Camera 3",
  4: "Future Perfect Continuous – Uses – Camera 4",
  5: "Future Perfect Continuous – Uses – Camera 5",
  6: "Future Perfect Continuous – Uses – Camera 6",
  7: "Future Perfect Continuous – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Perfect Continuous – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FuturePerfectContinuousUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getFuturePerfectContinuousUsesExercises,
  getDictionaryItems: getFuturePerfectContinuousUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futurePerfectContinuousTheoryPath,
  getMapRoute: futurePerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futurePerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Perfect Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Perfect Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
