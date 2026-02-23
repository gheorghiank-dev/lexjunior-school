import React, { useMemo } from "react";
import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";

import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";

import {
  getPsAffirmativeExercises,
  getPsAffirmativeGlossaryItems,
} from "./rooms/ps-affirmative-rooms.jsx";

import { presentSimpleAffirmativeLexHints } from "../lex-hints/present-simple/affirmative.js";


// Room type configuration – keeps things clean and scalable.
const TEXT_INPUT_WITH_LISTEN_ROOMS = [1];
const GAP_ROOMS = [2, 3, 5];
const MCQ_ROOMS = [4];
const TEXTAREA_ROOMS = [6, 7];

const cardTitleByRoom = {
  1: "Completează cu forma corectă la persoana a III-a singular",
  2: "Completează cu forma corectă a verbului din paranteză",
  3: "Completează cu forma corectă a verbului din propoziția dată",
  4: "Bifează varianta corectă a verbului",
  5: "Corectează propozițiile completând verbul corect",
  6: "Pune cuvintele în ordinea corectă (Present Simple afirmativ)",
  7: "Tradu propozițiile din română în engleză (Present Simple afirmativ)",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu forma corectă a verbului la persoana a III-a singular.",
  2: "Completează spațiile libere cu forma corectă a verbului din paranteză.",
  3: "Completează spațiile libere cu forma corectă a verbului din propoziția dată.",
  4: "Alege forma corectă a verbului în fiecare propoziție.",
  5: "Propoziția este greșită. Completează spațiul liber cu forma corectă a verbului.",
  6: "Scrie cuvintele date în ordinea corectă pentru a obține propoziții la Present Simple afirmativ.",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple afirmativ. Folosește mini-dicționarul pentru cuvintele necunoscute.",
};

export default function PsAffirmativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsAffirmativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "affirmative";
  const sectionLabel = "Afirmativ";
  const pageTitle = "Present Simple – Affirmative";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-aff-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-aff-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Present Simple – Affirmative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsAffirmativeGlossaryItems(roomNumber);

  const renderExercises = ({
  exercises,
  answers,
  feedback,
  handleChange,
  testIdPrefix,
}) =>
  renderExercisesByRoomType({
    roomNumber,
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
    TEXT_INPUT_WITH_LISTEN_ROOMS,
    GAP_ROOMS,
    MCQ_ROOMS,
    TEXTAREA_ROOMS,
  });


  return (
    <TenseExerciseRoomShell
      useRoomEngineHook={useRoomEngine}
      sectionId={sectionId}
      sectionLabel={sectionLabel}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      theoryRoute={psTheoryPath(sectionId)}
      mapRoute={psMapPath()}
      retryForKeyTestId={retryForKeyTestId}
      exercises={exercises}
      testIdPrefix={testIdPrefix}
      cardTitle={cardTitle}
      cardIntro={cardIntro}
      renderExercises={renderExercises}
      dictionaryItems={dictionaryItems}
      lexHints={lexHintsForRoom}
      lexAvatarSrc={PS_LEX_HEAD_SVG}
      lexTestIdPrefix={`ps-affirmative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}