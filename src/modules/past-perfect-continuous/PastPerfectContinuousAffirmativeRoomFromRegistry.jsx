import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-perfect-continuous-core/useRoomEngine.js";
import { PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG } from "./past-perfect-continuous-core/assets.js";
import {
  pastPerfectContinuousMapPath,
  pastPerfectContinuousTheoryPath,
  pastPerfectContinuousRoomPath,
} from "./past-perfect-continuous-paths.js";
import {
  getPastPerfectContinuousAffirmativeExercises,
  getPastPerfectContinuousAffirmativeGlossaryItems,
} from "./rooms/past-perfect-continuous-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Perfect Continuous – Affirmative – Camera 1",
  2: "Past Perfect Continuous – Affirmative – Camera 2",
  3: "Past Perfect Continuous – Affirmative – Camera 3",
  4: "Past Perfect Continuous – Affirmative – Camera 4",
  5: "Past Perfect Continuous – Affirmative – Camera 5",
  6: "Past Perfect Continuous – Affirmative – Camera 6",
  7: "Past Perfect Continuous – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Perfect Continuous – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastPerfectContinuousAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPastPerfectContinuousAffirmativeExercises,
  getDictionaryItems: getPastPerfectContinuousAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_PERFECT_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastPerfectContinuousTheoryPath,
  getMapRoute: pastPerfectContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastPerfectContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Perfect Continuous – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Perfect Continuous – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
