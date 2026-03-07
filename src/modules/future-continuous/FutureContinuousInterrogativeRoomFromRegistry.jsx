import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureContinuousMapPath,
  futureContinuousTheoryPath,
  futureContinuousRoomPath,
} from "./future-paths.js";
import {
  getFutureContinuousInterrogativeExercises,
  getFutureContinuousInterrogativeGlossaryItems,
} from "./rooms/future-continuous-interrogative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Continuous – Interrogative – Camera 1",
  2: "Future Continuous – Interrogative – Camera 2",
  3: "Future Continuous – Interrogative – Camera 3",
  4: "Future Continuous – Interrogative – Camera 4",
  5: "Future Continuous – Interrogative – Camera 5",
  6: "Future Continuous – Interrogative – Camera 6",
  7: "Future Continuous – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Continuous – Interrogative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureContinuousInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getFutureContinuousInterrogativeExercises,
  getDictionaryItems: getFutureContinuousInterrogativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futureContinuousTheoryPath,
  getMapRoute: futureContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
