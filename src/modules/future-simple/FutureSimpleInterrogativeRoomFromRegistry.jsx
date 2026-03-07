import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_SIMPLE_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureSimpleMapPath,
  futureSimpleTheoryPath,
  futureSimpleRoomPath,
} from "./future-paths.js";
import {
  getFutureSimpleInterrogativeExercises,
  getFutureSimpleInterrogativeGlossaryItems,
} from "./rooms/future-simple-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Simple – Interrogative – Camera 1",
  2: "Future Simple – Interrogative – Camera 2",
  3: "Future Simple – Interrogative – Camera 3",
  4: "Future Simple – Interrogative – Camera 4",
  5: "Future Simple – Interrogative – Camera 5",
  6: "Future Simple – Interrogative – Camera 6",
  7: "Future Simple – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Simple – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureSimpleInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getFutureSimpleInterrogativeExercises,
  getDictionaryItems: getFutureSimpleInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: futureSimpleTheoryPath,
  getMapRoute: futureSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Simple – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Simple – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
