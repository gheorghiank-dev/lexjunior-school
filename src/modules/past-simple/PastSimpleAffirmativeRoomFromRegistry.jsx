import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import {
  pastSimpleMapPath,
  pastSimpleTheoryPath,
  pastSimpleRoomPath,
} from "./past-paths.js";
import {
  getPastSimpleAffirmativeExercises,
  getPastSimpleAffirmativeGlossaryItems,
} from "./rooms/past-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Simple – Affirmative – Camera 1",
  2: "Past Simple – Affirmative – Camera 2",
  3: "Past Simple – Affirmative – Camera 3",
  4: "Past Simple – Affirmative – Camera 4",
  5: "Past Simple – Affirmative – Camera 5",
  6: "Past Simple – Affirmative – Camera 6",
  7: "Past Simple – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastSimpleAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getPastSimpleAffirmativeExercises,
  getDictionaryItems: getPastSimpleAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: pastSimpleTheoryPath,
  getMapRoute: pastSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Simple – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Simple – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
