import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-continuous-core/useRoomEngine.js";
import { PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./past-perfect-continuous-core/assets.js";
import {
  pastPerfectContinuousMapPath,
  pastPerfectContinuousTheoryPath,
  pastPerfectContinuousRoomPath,
} from "./past-perfect-continuous-paths.js";
import {
  getPastPerfectContinuousInterrogativeExercises,
  getPastPerfectContinuousInterrogativeGlossaryItems,
} from "./rooms/past-perfect-continuous-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect Continuous – Interrogative – Camera 1",
  2: "Past Perfect Continuous – Interrogative – Camera 2",
  3: "Past Perfect Continuous – Interrogative – Camera 3",
  4: "Past Perfect Continuous – Interrogative – Camera 4",
  5: "Past Perfect Continuous – Interrogative – Camera 5",
  6: "Past Perfect Continuous – Interrogative – Camera 6",
  7: "Past Perfect Continuous – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect Continuous – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectContinuousInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPastPerfectContinuousInterrogativeExercises,
  getDictionaryItems: getPastPerfectContinuousInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectContinuousTheoryPath,
  getMapRoute: pastPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
