import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectContinuousMapPath,
  presentPerfectContinuousTheoryPath,
  presentPerfectContinuousRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectContinuousInterrogativeExercises,
  getPresentPerfectContinuousInterrogativeGlossaryItems,
} from "./rooms/present-perfect-continuous-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect Continuous – Interrogative – Camera 1",
  2: "Present Perfect Continuous – Interrogative – Camera 2",
  3: "Present Perfect Continuous – Interrogative – Camera 3",
  4: "Present Perfect Continuous – Interrogative – Camera 4",
  5: "Present Perfect Continuous – Interrogative – Camera 5",
  6: "Present Perfect Continuous – Interrogative – Camera 6",
  7: "Present Perfect Continuous – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect Continuous – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectContinuousInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPresentPerfectContinuousInterrogativeExercises,
  getDictionaryItems: getPresentPerfectContinuousInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectContinuousTheoryPath,
  getMapRoute: presentPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
