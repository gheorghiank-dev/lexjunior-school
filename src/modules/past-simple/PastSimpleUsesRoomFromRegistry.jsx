import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import {
  pastSimpleMapPath,
  pastSimpleTheoryPath,
  pastSimpleRoomPath,
} from "./past-paths.js";
import {
  getPastSimpleUsesExercises,
  getPastSimpleUsesGlossaryItems,
} from "./rooms/past-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Simple – Uses – Camera 1",
  2: "Past Simple – Uses – Camera 2",
  3: "Past Simple – Uses – Camera 3",
  4: "Past Simple – Uses – Camera 4",
  5: "Past Simple – Uses – Camera 5",
  6: "Past Simple – Uses – Camera 6",
  7: "Past Simple – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastSimpleUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPastSimpleUsesExercises,
  getDictionaryItems: getPastSimpleUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: pastSimpleTheoryPath,
  getMapRoute: pastSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Simple – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Simple – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
