import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_SIMPLE_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureSimpleMapPath,
  futureSimpleTheoryPath,
  futureSimpleRoomPath,
} from "./future-paths.js";
import {
  getFutureSimpleAffirmativeExercises,
  getFutureSimpleAffirmativeGlossaryItems,
} from "./rooms/future-simple-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Simple – Affirmative – Camera 1",
  2: "Future Simple – Affirmative – Camera 2",
  3: "Future Simple – Affirmative – Camera 3",
  4: "Future Simple – Affirmative – Camera 4",
  5: "Future Simple – Affirmative – Camera 5",
  6: "Future Simple – Affirmative – Camera 6",
  7: "Future Simple – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Simple – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureSimpleAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getFutureSimpleAffirmativeExercises,
  getDictionaryItems: getFutureSimpleAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: futureSimpleTheoryPath,
  getMapRoute: futureSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Simple – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Simple – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
