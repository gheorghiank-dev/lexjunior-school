import React, { useMemo } from "react";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsInterrogativeExercises,
  getPsInterrogativeGlossaryItems,
} from "./rooms/ps-interrogative-rooms.jsx";
import { presentSimpleInterrogativeLexHints as interrogativeLexHints } from "../lex-hints/present-simple/interrogative.js";
import { GapSentenceExerciseList } from "../../shared/exercises/GapSentenceExerciseList.jsx";
import { McqExerciseList } from "../../shared/exercises/McqExerciseList.jsx";
import { TextareaExerciseList } from "../../shared/exercises/TextareaExerciseList.jsx";
import { InterrogativeYesNoPairsExerciseList } from "./components/InterrogativeYesNoPairsExerciseList.jsx";

export default function PsInterrogativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsInterrogativeExercises(roomNumber),
    [roomNumber]
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

  const cardTitleByRoom = {
    1: "Completează spațiile libere cu Do sau Does",
    2: "Copletează spațiile libere cu forma de interogativ a verbului din propoziția dată",
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

  const cardTitle =
    cardTitleByRoom[roomNumber] ??
    "Exerciții – Present Simple – Interrogative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsInterrogativeGlossaryItems(roomNumber);

  const renderExercises = ({
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
  }) => {
    if (roomNumber === 1 || roomNumber === 2 || roomNumber === 4) {
      return (
        <GapSentenceExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          showIndex={true}
          testIdPrefix={testIdPrefix}
        />
      );
    }

    if (roomNumber === 3 || roomNumber === 7) {
      return (
        <TextareaExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          rows={1}
          stacked={true}
          showIndex={true}
          testIdPrefix={testIdPrefix}
        />
      );
    }

    if (roomNumber === 5) {
      return (
        <McqExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          testIdPrefix={testIdPrefix}
        />
      );
    }

    if (roomNumber === 6) {
      return (
        <InterrogativeYesNoPairsExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
        />
      );
    }

    // Fallback safety
    return (
      <GapSentenceExerciseList
        exercises={exercises}
        answers={answers}
        feedback={feedback}
        onChange={handleChange}
        showIndex={true}
        testIdPrefix={testIdPrefix}
      />
    );
  };

  const lexHintsForRoom =
    interrogativeLexHints?.[`room${roomNumber}`] ?? [];

  const nextTo =
    roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null;

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
