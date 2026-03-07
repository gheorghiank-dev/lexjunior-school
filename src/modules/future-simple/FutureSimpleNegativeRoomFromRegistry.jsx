import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_SIMPLE_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureSimpleMapPath,
  futureSimpleTheoryPath,
  futureSimpleRoomPath,
} from "./future-paths.js";
import {
  getFutureSimpleNegativeExercises,
  getFutureSimpleNegativeGlossaryItems,
} from "./rooms/future-simple-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Simple – Negative – Camera 1",
  2: "Future Simple – Negative – Camera 2",
  3: "Future Simple – Negative – Camera 3",
  4: "Future Simple – Negative – Camera 4",
  5: "Future Simple – Negative – Camera 5",
  6: "Future Simple – Negative – Camera 6",
  7: "Future Simple – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Simple – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureSimpleNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getFutureSimpleNegativeExercises,
  getDictionaryItems: getFutureSimpleNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: futureSimpleTheoryPath,
  getMapRoute: futureSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Simple – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Simple – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
