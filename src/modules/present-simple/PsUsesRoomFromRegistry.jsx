import { renderExercisesFromRoomComponentMap } from "../tenses/exercises/renderExercisesFromRoomComponentMap.jsx";
import { createRegistryRoomComponent } from "../tenses/rooms/createRegistryRoomComponent.jsx";
import { createRoomTypeRenderer } from "../tenses/rooms/createRoomTypeRenderer.js";
import { CheckboxExerciseList } from "../../shared/exercises/CheckboxExerciseList.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsUsesExercises,
  getPsUsesGlossaryItems,
} from "./rooms/ps-uses-rooms.jsx";
import { presentSimpleUsesLexHints } from "../lex-hints/present-simple/uses.js";
import { RuneTranslationExerciseList } from "./components/RuneTranslationExerciseList.jsx";

const ROOM_COMPONENT_MAP = {
  2: CheckboxExerciseList,
  4: CheckboxExerciseList,
  7: RuneTranslationExerciseList,
};

const cardTitleByRoom = {
  1: "Alege corect între rutină și non-rutină",
  2: "Bifează propozițiile care descriu obiceiuri / rutine",
  3: "Completează propozițiile cu forma corectă a verbului (Present Simple)",
  4: "Bifează propozițiile care descriu situații permanente",
  5: "Alege tipul propoziției: instrucțiune, direcție sau alt tip",
  6: "Alege propoziția corectă la Present Simple în context",
  7: "Tradu propozițiile din română în engleză (întrebuințări ale Present Simple)",
};

const cardIntroByRoom = {
  1: "Pentru fiecare propoziție, alege dacă descrie o rutină (obicei) sau nu. Gândește-te dacă acțiunea se repetă în mod regulat.",
  2: "Bifează propozițiile care descriu rutine sau obiceiuri în Present Simple. Uită-te după adverbe de frecvență și expresii de rutină.",
  3: "Completează spațiile libere cu forma corectă a verbului la Present Simple, folosind informațiile din propoziție și mini-dicționarul.",
  4: "Bifează propozițiile care descriu situații permanente sau adevăruri generale, nu acțiuni temporare.",
  5: "Pentru fiecare propoziție, alege categoria corectă: instrucțiune, direcție sau alt tip. Gândește-te la rolul propoziției în comunicare.",
  6: "Alege varianta corectă în context, ținând cont de ideea de rutină sau program fix la Present Simple.",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple pentru a exprima rutine, programe fixe sau adevăruri generale.",
};

const fallbackRendererConfig = {
  TEXT_INPUT_WITH_LISTEN_ROOMS: [],
  GAP_ROOMS: [3],
  MCQ_ROOMS: [1, 5, 6],
  TEXTAREA_ROOMS: [],
};

export default createRegistryRoomComponent({
  displayName: "PsUsesRoomFromRegistry",
  useRoomEngineHook: useRoomEngine,
  sectionId: "uses",
  sectionLabel: "Uses",
  getExercises: getPsUsesExercises,
  getDictionaryItems: getPsUsesGlossaryItems,
  getLexHintsForRoom: (roomNumber) => presentSimpleUsesLexHints?.[`room${roomNumber}`] ?? [],
  lexAvatarSrc: PS_LEX_HEAD_SVG,
  getTheoryRoute: psTheoryPath,
  getMapRoute: psMapPath,
  getNextTo: (roomNumber, sectionId) => roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null,
  getPageTitle: "Present Simple – Uses",
  getRetryForKeyTestId: (roomNumber) => `ps-uses-room${roomNumber}-retry-key`,
  getTestIdPrefix: (roomNumber) => `ps-uses-room${roomNumber}`,
  getLexTestIdPrefix: (roomNumber) => `ps-uses-room${roomNumber}-lexbubble`,
  cardTitleByRoom,
  cardIntroByRoom,
  defaultCardTitle: "Exerciții – Present Simple – Uses",
  renderExercises: (roomNumber) => {
    const fallbackRenderer = createRoomTypeRenderer(roomNumber, fallbackRendererConfig);
    return (props) => {
      const specialRenderer = renderExercisesFromRoomComponentMap({
        roomNumber,
        exercises: props.exercises,
        answers: props.answers,
        feedback: props.feedback,
        handleChange: props.handleChange,
        testIdPrefix: props.testIdPrefix,
        roomComponentMap: ROOM_COMPONENT_MAP,
      });
      return specialRenderer ?? fallbackRenderer(props);
    };
  },
});
