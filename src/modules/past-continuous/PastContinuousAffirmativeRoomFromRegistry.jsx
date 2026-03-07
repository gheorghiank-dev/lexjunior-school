import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-continuous-core/useRoomEngine.js";
import { PAST_CONTINUOUS_LEX_HEAD_SVG } from "./past-continuous-core/assets.js";
import {
  pastContinuousMapPath,
  pastContinuousTheoryPath,
  pastContinuousRoomPath,
} from "./past-continuous-paths.js";
import {
  getPastContinuousAffirmativeExercises,
  getPastContinuousAffirmativeGlossaryItems,
} from "./rooms/past-continuous-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Continuous – Affirmative – Camera 1",
  2: "Past Continuous – Affirmative – Camera 2",
  3: "Past Continuous – Affirmative – Camera 3",
  4: "Past Continuous – Affirmative – Camera 4",
  5: "Past Continuous – Affirmative – Camera 5",
  6: "Past Continuous – Affirmative – Camera 6",
  7: "Past Continuous – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Continuous – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastContinuousAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPastContinuousAffirmativeExercises,
  getDictionaryItems: getPastContinuousAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: pastContinuousTheoryPath,
  getMapRoute: pastContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Continuous – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Continuous – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
