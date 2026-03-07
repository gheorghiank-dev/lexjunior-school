import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-core/useRoomEngine.js";
import { PAST_PERFECT_LEX_HEAD_SVG } from "./past-perfect-core/assets.js";
import {
  pastPerfectMapPath,
  pastPerfectTheoryPath,
  pastPerfectRoomPath,
} from "./past-perfect-paths.js";
import {
  getPastPerfectAffirmativeExercises,
  getPastPerfectAffirmativeGlossaryItems,
} from "./rooms/past-perfect-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect – Affirmative – Camera 1",
  2: "Past Perfect – Affirmative – Camera 2",
  3: "Past Perfect – Affirmative – Camera 3",
  4: "Past Perfect – Affirmative – Camera 4",
  5: "Past Perfect – Affirmative – Camera 5",
  6: "Past Perfect – Affirmative – Camera 6",
  7: "Past Perfect – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPastPerfectAffirmativeExercises,
  getDictionaryItems: getPastPerfectAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectTheoryPath,
  getMapRoute: pastPerfectMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
