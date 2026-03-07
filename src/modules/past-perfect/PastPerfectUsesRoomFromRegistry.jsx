import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-core/useRoomEngine.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "./past-perfect-core/assets.js";
import {
  pastPerfectMapPath,
  pastPerfectTheoryPath,
  pastPerfectRoomPath,
} from "./past-perfect-paths.js";
import {
  getPastPerfectUsesExercises,
  getPastPerfectUsesGlossaryItems,
} from "./rooms/past-perfect-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect – Uses – Camera 1",
  2: "Past Perfect – Uses – Camera 2",
  3: "Past Perfect – Uses – Camera 3",
  4: "Past Perfect – Uses – Camera 4",
  5: "Past Perfect – Uses – Camera 5",
  6: "Past Perfect – Uses – Camera 6",
  7: "Past Perfect – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPastPerfectUsesExercises,
  getDictionaryItems: getPastPerfectUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectTheoryPath,
  getMapRoute: pastPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
