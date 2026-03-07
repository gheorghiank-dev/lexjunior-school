import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import {
  pastSimpleMapPath,
  pastSimpleTheoryPath,
  pastSimpleRoomPath,
} from "./past-paths.js";
import {
  getPastSimpleNegativeExercises,
  getPastSimpleNegativeGlossaryItems,
} from "./rooms/past-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Simple – Negative – Camera 1",
  2: "Past Simple – Negative – Camera 2",
  3: "Past Simple – Negative – Camera 3",
  4: "Past Simple – Negative – Camera 4",
  5: "Past Simple – Negative – Camera 5",
  6: "Past Simple – Negative – Camera 6",
  7: "Past Simple – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastSimpleNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPastSimpleNegativeExercises,
  getDictionaryItems: getPastSimpleNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: pastSimpleTheoryPath,
  getMapRoute: pastSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Simple – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Simple – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
