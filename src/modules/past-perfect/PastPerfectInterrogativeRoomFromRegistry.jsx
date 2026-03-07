import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-core/useRoomEngine.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "./past-perfect-core/assets.js";
import {
  pastPerfectMapPath,
  pastPerfectTheoryPath,
  pastPerfectRoomPath,
} from "./past-perfect-paths.js";
import {
  getPastPerfectInterrogativeExercises,
  getPastPerfectInterrogativeGlossaryItems,
} from "./rooms/past-perfect-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect – Interrogative – Camera 1",
  2: "Past Perfect – Interrogative – Camera 2",
  3: "Past Perfect – Interrogative – Camera 3",
  4: "Past Perfect – Interrogative – Camera 4",
  5: "Past Perfect – Interrogative – Camera 5",
  6: "Past Perfect – Interrogative – Camera 6",
  7: "Past Perfect – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPastPerfectInterrogativeExercises,
  getDictionaryItems: getPastPerfectInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectTheoryPath,
  getMapRoute: pastPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
