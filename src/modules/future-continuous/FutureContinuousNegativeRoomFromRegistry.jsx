import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureContinuousMapPath,
  futureContinuousTheoryPath,
  futureContinuousRoomPath,
} from "./future-paths.js";
import {
  getFutureContinuousNegativeExercises,
  getFutureContinuousNegativeGlossaryItems,
} from "./rooms/future-continuous-negative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Continuous – Negative – Camera 1",
  2: "Future Continuous – Negative – Camera 2",
  3: "Future Continuous – Negative – Camera 3",
  4: "Future Continuous – Negative – Camera 4",
  5: "Future Continuous – Negative – Camera 5",
  6: "Future Continuous – Negative – Camera 6",
  7: "Future Continuous – Negative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Continuous – Negative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureContinuousNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getFutureContinuousNegativeExercises,
  getDictionaryItems: getFutureContinuousNegativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futureContinuousTheoryPath,
  getMapRoute: futureContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Continuous – Negative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-negative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Continuous – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
