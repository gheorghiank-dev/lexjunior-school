import React, { useMemo } from "react";

import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsInterrogativeExercises,
  getPsInterrogativeGlossaryItems,
} from "./rooms/ps-interrogative-rooms.jsx";
import { presentSimpleInterrogativeLexHints } from "../lex-hints/present-simple/interrogative.js";

// Room type configuration – keeps things clear and scalable.
const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [1, 2, 4];
const TEXTAREA_ROOMS = [3, 7];
const MCQ_ROOMS = [5];
const YESNO_PAIRS_ROOMS = [6];

const cardTitleByRoom = {
  1: "Completează spațiile libere cu Do sau Does",
  2: "Completează spațiile libere cu forma de interogativ a verbului din propoziția dată",
  3: "Scrie cuvintele date în ordinea corectă pentru a forma propoziții la Present Simple interogativ",
  4: "Corectează propozițiile completând spațiile libere cu forma corectă a verbului la Present Simple interogativ",
  5: "Bifează propoziția corectă la Present Simple interogativ",
  6: "Scrie răspunsuri scurte (Yes / No) pentru întrebările la Present Simple",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple interogativ",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu do sau does pentru a forma întrebări corecte la Present Simple.",
  2: "Completează spațiile libere cu forma de interogativ a verbului din propoziția dată.",
  3: "Scrie cuvintele în ordinea corectă pentru a transforma șirurile date în întrebări la Present Simple interogativ.",
  4: "Corectează întrebările greșite completând spațiile libere cu forma corectă a verbului auxiliar la Present Simple interogativ.",
  5: "Alege propoziția corectă la Present Simple interogativ în fiecare set.",
  6: "Pentru fiecare întrebare, scrie răspunsul scurt afirmativ și răspunsul scurt negativ, folosind pronumele și auxiliarul potrivit.",
  7: "Tradu întrebările din română în engleză, folosind structura cu do / does și mini-dicționarul camerei.",
};

export default function PsInterrogativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsInterrogativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "interrogative";
  const sectionLabel = "Interrogative";
  const pageTitle = "Present Simple – Interrogative";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-int-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-int-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Present Simple – Interrogative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsInterrogativeGlossaryItems(roomNumber);

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
      YESNO_PAIRS_ROOMS,
      TEXTAREA_ROWS: 1,
      TEXTAREA_STACKED: true,
      TEXTAREA_SHOW_INDEX: true,
    });

  const lexHintsForRoom =
    presentSimpleInterrogativeLexHints?.[`room${roomNumber}`] ?? [];

  const nextTo = roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null;

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
      lexTestIdPrefix={`ps-interrogative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
