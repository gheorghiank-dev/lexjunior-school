import React, { useMemo } from "react";

import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcInterrogativeExercises,
  getPcInterrogativeGlossaryItems,
} from "./rooms/pc-interrogative-rooms.jsx";
import { presentContinuousInterrogativeLexHints } from "../lex-hints/present-continuous/interrogative.js";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [1, 3, 4];
const MCQ_ROOMS = [2];
const YESNO_PAIRS_ROOMS = [5];
const TEXTAREA_ROOMS = [6, 7];

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

export default function PcInterrogativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPcInterrogativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "interrogative";
  const sectionLabel = "Interrogative";
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Present Continuous – Interrogative`;
  const retryForKeyTestId = `pc-retry-for-key-interrogative-${roomNumber}`;
  const testIdPrefix = `pc-interrogative-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ??
    "Exerciții – Present Continuous – Interrogative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcInterrogativeGlossaryItems(roomNumber);
  const lexHintsForRoom =
    presentContinuousInterrogativeLexHints?.[`room${roomNumber}`] ?? [];

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
    });

  const nextTo = roomNumber < 7 ? pcRoomPath(sectionId, roomNumber + 1) : null;

  return (
    <TenseExerciseRoomShell
      useRoomEngineHook={useRoomEngine}
      sectionId={sectionId}
      sectionLabel={sectionLabel}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      theoryRoute={pcTheoryPath(sectionId)}
      mapRoute={pcMapPath()}
      retryForKeyTestId={retryForKeyTestId}
      exercises={exercises}
      testIdPrefix={testIdPrefix}
      cardTitle={cardTitle}
      cardIntro={cardIntro}
      renderExercises={renderExercises}
      dictionaryItems={dictionaryItems}
      lexHints={lexHintsForRoom}
      lexAvatarSrc={PC_LEX_HEAD_SVG}
      lexTestIdPrefix={`pc-interrogative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
