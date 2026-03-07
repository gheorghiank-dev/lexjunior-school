import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_SIMPLE_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureSimpleMapPath,
  futureSimpleTheoryPath,
  futureSimpleRoomPath,
} from "./future-paths.js";
import {
  getFutureSimpleUsesExercises,
  getFutureSimpleUsesGlossaryItems,
} from "./rooms/future-simple-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Simple – Uses – Camera 1",
  2: "Future Simple – Uses – Camera 2",
  3: "Future Simple – Uses – Camera 3",
  4: "Future Simple – Uses – Camera 4",
  5: "Future Simple – Uses – Camera 5",
  6: "Future Simple – Uses – Camera 6",
  7: "Future Simple – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Simple – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureSimpleUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getFutureSimpleUsesExercises,
  getDictionaryItems: getFutureSimpleUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_SIMPLE_LEX_HEAD_SVG,
  getTheoryRoute: futureSimpleTheoryPath,
  getMapRoute: futureSimpleMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureSimpleRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Simple – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Simple – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
