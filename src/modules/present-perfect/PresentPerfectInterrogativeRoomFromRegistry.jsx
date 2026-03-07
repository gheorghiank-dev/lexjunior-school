import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectMapPath,
  presentPerfectTheoryPath,
  presentPerfectRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectInterrogativeExercises,
  getPresentPerfectInterrogativeGlossaryItems,
} from "./rooms/present-perfect-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect – Interrogative – Camera 1",
  2: "Present Perfect – Interrogative – Camera 2",
  3: "Present Perfect – Interrogative – Camera 3",
  4: "Present Perfect – Interrogative – Camera 4",
  5: "Present Perfect – Interrogative – Camera 5",
  6: "Present Perfect – Interrogative – Camera 6",
  7: "Present Perfect – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPresentPerfectInterrogativeExercises,
  getDictionaryItems: getPresentPerfectInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectTheoryPath,
  getMapRoute: presentPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
