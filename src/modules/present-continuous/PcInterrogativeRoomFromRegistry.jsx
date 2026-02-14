import React, { useMemo } from "react";
import TextInputExerciseList from "../tenses/exercises/TextInputExerciseList.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import { getPcInterrogativeExercises, getPcInterrogativeGlossaryItems } from "./rooms/pc-interrogative-rooms.jsx";
import { presentContinuousInterrogativeLexHints } from "../lex-hints/present-continuous/interrogative.js";

export default function PcInterrogativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPcInterrogativeExercises(roomNumber),
    [roomNumber]
  );

  const sectionId = "interrogative";
  const sectionLabel = "Interrogative";

  const lexHintsForRoom = presentContinuousInterrogativeLexHints[`room${roomNumber}`] || [];
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Present Continuous – Interrogative`;

  const retryForKeyTestId = `pc-retry-for-key-interrogative-${roomNumber}`;
  const testIdPrefix = `pc-interrogative-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom ? pcRoomPath(sectionId, roomNumber + 1) : null;

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

  const cardTitle = cardTitleByRoom[roomNumber] ?? "Exerciții – Present Continuous – Interrogative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcInterrogativeGlossaryItems(roomNumber);

  const renderExercises = ({ exercises, answers, feedback, handleChange, testIdPrefix }) => (
    <TextInputExerciseList
      exercises={exercises}
      answers={answers}
      feedback={feedback}
      onChange={handleChange}
      testIdPrefix={testIdPrefix}
    />
  );

  return (
    <TenseExerciseRoomShell
      useRoomEngineHook={useRoomEngine}
      sectionId={sectionId}
      sectionLabel={sectionLabel}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      theoryRoute={pcTheoryPath("interrogative")}
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
