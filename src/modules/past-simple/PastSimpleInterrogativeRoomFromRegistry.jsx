import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import {
  pastSimpleMapPath,
  pastSimpleTheoryPath,
  pastSimpleRoomPath,
} from "./past-paths.js";
import {
  getPastSimpleInterrogativeExercises,
  getPastSimpleInterrogativeGlossaryItems,
} from "./rooms/past-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Simple – Interrogative – Camera 1",
  2: "Past Simple – Interrogative – Camera 2",
  3: "Past Simple – Interrogative – Camera 3",
  4: "Past Simple – Interrogative – Camera 4",
  5: "Past Simple – Interrogative – Camera 5",
  6: "Past Simple – Interrogative – Camera 6",
  7: "Past Simple – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastSimpleInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPastSimpleInterrogativeExercises,
  getDictionaryItems: getPastSimpleInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: pastSimpleTheoryPath,
  getMapRoute: pastSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Simple – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Simple – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
