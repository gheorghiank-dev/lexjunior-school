import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-core/useRoomEngine.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "./past-perfect-core/assets.js";
import {
  pastPerfectMapPath,
  pastPerfectTheoryPath,
  pastPerfectRoomPath,
} from "./past-perfect-paths.js";
import {
  getPastPerfectNegativeExercises,
  getPastPerfectNegativeGlossaryItems,
} from "./rooms/past-perfect-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect – Negative – Camera 1",
  2: "Past Perfect – Negative – Camera 2",
  3: "Past Perfect – Negative – Camera 3",
  4: "Past Perfect – Negative – Camera 4",
  5: "Past Perfect – Negative – Camera 5",
  6: "Past Perfect – Negative – Camera 6",
  7: "Past Perfect – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPastPerfectNegativeExercises,
  getDictionaryItems: getPastPerfectNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectTheoryPath,
  getMapRoute: pastPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
