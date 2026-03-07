import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcInterrogativeExercises,
  getPcInterrogativeGlossaryItems,
} from "./rooms/pc-interrogative-rooms.jsx";
import { presentContinuousInterrogativeLexHints } from "../lex-hints/present-continuous/interrogative.js";

const cardTitleByRoom = {
  1: "Formează întrebări cu am / is / are",
  2: "Rescrie propozițiile la forma interogativă",
  3: "Completează cu am / is / are în întrebări",
  4: "Corectează întrebările greșite",
  5: "Pune cuvintele în ordinea corectă pentru întrebări",
  6: "Întrebări cu cuvinte interrogative (Wh-questions)",
  7: "Tradu întrebările în engleză",
};

const cardIntroByRoom = {
  1: "Scrie întrebări corecte în Present Continuous, folosind am / is / are.",
  2: "Transformă propozițiile afirmative în întrebări.",
  3: "Completează spațiile libere cu forma corectă a lui to be.",
  4: "Unele întrebări sunt greșite – scrie varianta corectă.",
  5: "Rearanjează cuvintele pentru a obține întrebări corecte.",
  6: "Folosește who, what, where, when, why, how pentru a forma întrebări.",
  7: "Tradu propozițiile în întrebări corecte în Present Continuous.",
};

export default createRegistryRoomComponent({
  displayName: "PcInterrogativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "interrogative",
  sectionLabel: "Interrogative",
  getExercises: getPcInterrogativeExercises,
  getDictionaryItems: getPcInterrogativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentContinuousInterrogativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PC_LEX_HEAD_SVG,
  getTheoryRoute: pcTheoryPath,
  getMapRoute: pcMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) =>
    `Camera ${roomNumber} – Present Continuous – Interrogative`,
  getRetryForKeyTestId: (roomNumber) =>
    `pc-retry-for-key-interrogative-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `pc-interrogative-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) =>
    `pc-interrogative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Continuous – Interrogative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [1, 3, 4],
    MCQ_ROOMS: [2],
    YESNO_PAIRS_ROOMS: [5],
    TEXTAREA_ROOMS: [6, 7],
  },
});
