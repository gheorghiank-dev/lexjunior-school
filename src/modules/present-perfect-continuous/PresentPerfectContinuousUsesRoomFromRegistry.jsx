import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectContinuousMapPath,
  presentPerfectContinuousTheoryPath,
  presentPerfectContinuousRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectContinuousUsesExercises,
  getPresentPerfectContinuousUsesGlossaryItems,
} from "./rooms/present-perfect-continuous-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect Continuous – Uses – Camera 1",
  2: "Present Perfect Continuous – Uses – Camera 2",
  3: "Present Perfect Continuous – Uses – Camera 3",
  4: "Present Perfect Continuous – Uses – Camera 4",
  5: "Present Perfect Continuous – Uses – Camera 5",
  6: "Present Perfect Continuous – Uses – Camera 6",
  7: "Present Perfect Continuous – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect Continuous – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectContinuousUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPresentPerfectContinuousUsesExercises,
  getDictionaryItems: getPresentPerfectContinuousUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectContinuousTheoryPath,
  getMapRoute: presentPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
