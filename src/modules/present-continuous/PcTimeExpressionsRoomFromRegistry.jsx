import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcTimeExpressionsExercises,
  getPcTimeExpressionsGlossaryItems,
} from "./rooms/pc-time-expressions-rooms.jsx";
import { presentContinuousTimeExpressionsLexHints } from "../lex-hints/present-continuous/time-expressions.js";

const cardTitleByRoom = {
  1: "Completează cu expresii de timp potrivite",
  2: "Potrivește propozițiile cu expresiile de timp",
  3: "Completează propozițiile cu now / at the moment / today",
  4: "Scrie propoziții folosind expresiile de timp date",
  5: "Corectează propozițiile cu expresii de timp greșite",
  6: "Ordinea cuvintelor + expresii de timp",
  7: "Tradu folosind Present Continuous și expresii de timp",
};

const cardIntroByRoom = {
  1: "Alege expresia de timp corectă pentru fiecare propoziție.",
  2: "Leagă propozițiile de expresia de timp care se potrivește cel mai bine.",
  3: "Completează spațiile cu now, at the moment, today etc.",
  4: "Scrie propoziții proprii, folosind expresiile de timp din paranteză.",
  5: "Unele expresii de timp sunt greșite – scrie varianta corectă.",
  6: "Pune cuvintele în ordinea corectă, având grijă și la expresia de timp.",
  7: "Tradu propozițiile în engleză, folosind Present Continuous + expresii de timp.",
};

export default createRegistryRoomComponent({
  displayName: "PcTimeExpressionsRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "time-expressions",
  sectionLabel: "Time expressions",
  getExercises: getPcTimeExpressionsExercises,
  getDictionaryItems: getPcTimeExpressionsGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentContinuousTimeExpressionsLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PC_LEX_HEAD_SVG,
  getTheoryRoute: pcTheoryPath,
  getMapRoute: pcMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: (roomNumber) =>
    `Camera ${roomNumber} – Present Continuous – Time expressions`,
  getRetryForKeyTestId: (roomNumber) =>
    `pc-retry-for-key-time-expressions-${roomNumber}`,
  getTestIdPrefix: (roomNumber) => `pc-time-expressions-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) =>
    `pc-time-expressions-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Continuous – Time expressions",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [],
    MCQ_ROOMS: [],
    TEXTAREA_ROOMS: [],
  },
});
