import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./present-core/useRoomEngine.js";
import { PRESENT_PERFECT_LEX_HEAD_SVG } from "./present-core/assets.js";
import {
  presentPerfectMapPath,
  presentPerfectTheoryPath,
  presentPerfectRoomPath,
} from "./present-paths.js";
import {
  getPresentPerfectUsesExercises,
  getPresentPerfectUsesGlossaryItems,
} from "./rooms/present-perfect-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Present Perfect – Uses – Camera 1",
  2: "Present Perfect – Uses – Camera 2",
  3: "Present Perfect – Uses – Camera 3",
  4: "Present Perfect – Uses – Camera 4",
  5: "Present Perfect – Uses – Camera 5",
  6: "Present Perfect – Uses – Camera 6",
  7: "Present Perfect – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Present Perfect – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PresentPerfectUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPresentPerfectUsesExercises,
  getDictionaryItems: getPresentPerfectUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PRESENT_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: presentPerfectTheoryPath,
  getMapRoute: presentPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? presentPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Present Perfect – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Perfect – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
