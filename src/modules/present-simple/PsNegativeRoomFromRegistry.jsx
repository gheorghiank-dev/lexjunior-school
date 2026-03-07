import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsNegativeExercises,
  getPsNegativeGlossaryItems,
} from "./rooms/ps-negative-rooms.jsx";
import { presentSimpleNegativeLexHints } from "../lex-hints/present-simple/negative.js";

const cardTitleByRoom = {
  1: "Completează propozițiile cu don't / doesn't (forma negativă)",
  2: "Completează propozițiile cu don't / doesn't (persoana corectă)",
  3: "Completează propozițiile cu forma corectă la negativ",
  4: "Alege varianta corectă la negativ",
  5: "Scrie propoziții la Present Simple negativ în ordinea corectă",
  6: "Transformă propozițiile la Present Simple negativ",
  7: "Scrie propoziții la Present Simple negativ (scrie tu propozițiile)",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu don't sau doesn't pentru a forma propoziții corecte la negativ.",
  2: "Alege forma corectă de don't sau doesn't pentru fiecare persoană.",
  3: "Completează spațiile libere cu forma corectă a verbului la negativ (de exemplu, doesn't like).",
  4: "Bifează varianta corectă la negativ în fiecare propoziție.",
  5: "Scrie cuvintele date în ordinea corectă pentru a forma propoziții la Present Simple negativ.",
  6: "Transformă propozițiile la forma negativă a timpului Present Simple.",
  7: "Scrie propoziții la Present Simple negativ, folosind ideile date în română ca ajutor.",
};

export default createRegistryRoomComponent({
  displayName: "PsNegativeRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "negative",
  sectionLabel: "Negative",
  getExercises: getPsNegativeExercises,
  getDictionaryItems: getPsNegativeGlossaryItems,
  getLexHintsForRoom: (roomNumber) =>
    presentSimpleNegativeLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PS_LEX_HEAD_SVG,
  getTheoryRoute: psTheoryPath,
  getMapRoute: psMapPath,
  getNextTo: (roomNumber, sectionId) =>
    roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: "Present Simple – Negative",
  getRetryForKeyTestId: (roomNumber) => `ps-neg-room${roomNumber}-retry-key`,
  getTestIdPrefix: (roomNumber) => `ps-neg-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `ps-negative-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Simple – Negative",
  renderConfig: {
    TEXT_INPUT_WITH_LISTEN_ROOMS: [],
    GAP_ROOMS: [1, 2, 3, 6],
    MCQ_ROOMS: [4],
    TEXTAREA_ROOMS: [5, 7],
  },
});
