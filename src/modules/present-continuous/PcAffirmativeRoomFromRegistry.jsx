import React, { useMemo } from "react";

import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcAffirmativeExercises,
  getPcAffirmativeGlossaryItems,
} from "./rooms/pc-affirmative-rooms.jsx";
import { presentContinuousAffirmativeLexHints } from "../lex-hints/present-continuous/affirmative.js";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [1];
const GAP_ROOMS = [2, 4, 5];
const MCQ_ROOMS = [3];
const TEXTAREA_ROOMS = [6, 7];

const cardTitleByRoom = {
  1: "Verbele la -ing (spelling)",
  2: "Completează cu am / is / are",
  3: "Alege forma corectă (MCQ)",
  4: "Transformă din Present Simple în Present Continuous",
  5: "Corectează propoziția",
  6: "Pune cuvintele în ordinea corectă",
  7: "Tradu în engleză (Present Continuous)",
};

const cardIntroByRoom = {
  1: "Scrie forma corectă cu -ing pentru fiecare verb.",
  2: "Alege forma corectă a lui to be pentru fiecare propoziție.",
  3: "Bifează varianta corectă pentru fiecare propoziție.",
  4: "Transformă propoziția din Present Simple în Present Continuous.",
  5: "Propoziția este greșită. Scrie varianta corectă.",
  6: "Rearanjează cuvintele în minte și scrie propoziția corectă.",
  7: "Tradu propoziția în engleză, folosind Present Continuous.",
};

export default function PcAffirmativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPcAffirmativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "affirmative";
  const sectionLabel = "Affirmative";
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle =
    roomNumber === 1
      ? "Camera 1 – Present Continuous – Affirmative"
      : `Present Continuous – Camera ${roomNumber}`;
  const retryForKeyTestId =
    roomNumber === 1
      ? "pc-retry-for-key"
      : `pc-affirmative-room${roomNumber}-retry-for-key`;
  const testIdPrefix = `pc-affirmative-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ??
    "Exerciții – Present Continuous – Affirmative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcAffirmativeGlossaryItems(roomNumber);
  const lexHintsForRoom =
    presentContinuousAffirmativeLexHints?.[`room${roomNumber}`] ?? [];

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
      lexTestIdPrefix={`pc-affirmative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
