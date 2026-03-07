import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./future-core/useRoomEngine.js";
import { FUTURE_CONTINUOUS_LEX_HEAD_SVG } from "./future-core/assets.js";
import {
  futureContinuousMapPath,
  futureContinuousTheoryPath,
  futureContinuousRoomPath,
} from "./future-paths.js";
import {
  getFutureContinuousAffirmativeExercises,
  getFutureContinuousAffirmativeGlossaryItems,
} from "./rooms/future-continuous-affirmative-rooms.jsx";

const cardTitleByRoom = {
  1: "Future Continuous – Affirmative – Camera 1",
  2: "Future Continuous – Affirmative – Camera 2",
  3: "Future Continuous – Affirmative – Camera 3",
  4: "Future Continuous – Affirmative – Camera 4",
  5: "Future Continuous – Affirmative – Camera 5",
  6: "Future Continuous – Affirmative – Camera 6",
  7: "Future Continuous – Affirmative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Future Continuous – Affirmative. Aici vei defini exercițiile finale.",
};

export default createRegistryRoomComponent({
  displayName: "FutureContinuousAffirmativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "affirmative",
  sectionLabel: "Affirmative",
  getExercises: getFutureContinuousAffirmativeExercises,
  getDictionaryItems: getFutureContinuousAffirmativeGlossaryItems,
  getLexHintsForRoom: () => [],
  lexAvatarSrc: FUTURE_CONTINUOUS_LEX_HEAD_SVG,
  getTheoryRoute: futureContinuousTheoryPath,
  getMapRoute: futureContinuousMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? futureContinuousRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) => `Camera ${roomNumber} – Future Continuous – Affirmative`,
  getRetryForKeyTestId: (roomNumber) => `past-retry-for-key-affirmative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `past-affirmative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Future Continuous – Affirmative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
