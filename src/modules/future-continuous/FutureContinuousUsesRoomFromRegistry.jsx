import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureContinuousMapPath,
  futureContinuousTheoryPath,
  futureContinuousRoomPath,
} from "./future-paths.js";
import {
  getFutureContinuousUsesExercises,
  getFutureContinuousUsesGlossaryItems,
} from "./rooms/future-continuous-uses-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Continuous – Uses – Camera 1",
  2: "Future Continuous – Uses – Camera 2",
  3: "Future Continuous – Uses – Camera 3",
  4: "Future Continuous – Uses – Camera 4",
  5: "Future Continuous – Uses – Camera 5",
  6: "Future Continuous – Uses – Camera 6",
  7: "Future Continuous – Uses – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Continuous – Uses. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureContinuousUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getFutureContinuousUsesExercises,
  getDictionaryItems: getFutureContinuousUsesGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futureContinuousTheoryPath,
  getMapRoute: futureContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Continuous – Uses`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-uses-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Continuous – Uses",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
