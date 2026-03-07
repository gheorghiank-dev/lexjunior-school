import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import {
  pastSimpleMapPath,
  pastSimpleTheoryPath,
  pastSimpleRoomPath,
} from "./past-paths.js";
import {
  getPastSimpleTimeExpressionsExercises,
  getPastSimpleTimeExpressionsGlossaryItems,
} from "./rooms/past-time-expressions-rooms.jsx";

const cardTitleByRoom = {
  1: "Past Simple – Time Expressions – Camera 1",
  2: "Past Simple – Time Expressions – Camera 2",
  3: "Past Simple – Time Expressions – Camera 3",
  4: "Past Simple – Time Expressions – Camera 4",
  5: "Past Simple – Time Expressions – Camera 5",
  6: "Past Simple – Time Expressions – Camera 6",
  7: "Past Simple – Time Expressions – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Time Expressions. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "PastSimpleTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time Expressions",
  getExercises: getPastSimpleTimeExpressionsExercises,
  getDictionaryItems: getPastSimpleTimeExpressionsGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: PAST_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: pastSimpleTheoryPath,
  getMapRoute: pastSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Past Simple – Time Expressions`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Past Simple – Time Expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
