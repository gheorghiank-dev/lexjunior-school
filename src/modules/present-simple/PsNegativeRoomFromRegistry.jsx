import React, { useMemo } from "react";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsNegativeExercises,
  getPsNegativeGlossaryItems,
} from "./rooms/ps-negative-rooms.jsx";
import { presentSimpleNegativeLexHints as negativeLexHints } from "../lex-hints/present-simple/negative.js";
import { GapSentenceExerciseList } from "../../shared/exercises/GapSentenceExerciseList.jsx";
import { McqExerciseList } from "../../shared/exercises/McqExerciseList.jsx";
import { TextareaExerciseList } from "../../shared/exercises/TextareaExerciseList.jsx";

export default function PsNegativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsNegativeExercises(roomNumber),
    [roomNumber]
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "negative";
  const sectionLabel = "Negative";
  const pageTitle = "Present Simple – Negative";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-neg-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-neg-room${roomNumber}`;

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

  const cardTitle =
    cardTitleByRoom[roomNumber] ??
    "Exerciții – Present Simple – Negative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsNegativeGlossaryItems(roomNumber);

  const renderExercises = ({
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
  }) => {
    if (roomNumber === 1 || roomNumber === 2 || roomNumber === 3 || roomNumber === 6) {
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

    if (roomNumber === 4) {
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

    if (roomNumber === 5 || roomNumber === 7) {
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
    negativeLexHints?.[`room${roomNumber}`] ?? [];

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
      lexTestIdPrefix={`ps-negative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
