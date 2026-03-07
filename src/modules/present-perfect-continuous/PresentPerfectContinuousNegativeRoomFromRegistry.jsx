import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectContinuousMapPath,
  presentPerfectContinuousTheoryPath,
  presentPerfectContinuousRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectContinuousNegativeExercises,
  getPresentPerfectContinuousNegativeGlossaryItems,
} from "./rooms/present-perfect-continuous-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect Continuous – Negative – Camera 1",
  2: "Present Perfect Continuous – Negative – Camera 2",
  3: "Present Perfect Continuous – Negative – Camera 3",
  4: "Present Perfect Continuous – Negative – Camera 4",
  5: "Present Perfect Continuous – Negative – Camera 5",
  6: "Present Perfect Continuous – Negative – Camera 6",
  7: "Present Perfect Continuous – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect Continuous – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectContinuousNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPresentPerfectContinuousNegativeExercises,
  getDictionaryItems: getPresentPerfectContinuousNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectContinuousTheoryPath,
  getMapRoute: presentPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect Continuous – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect Continuous – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
