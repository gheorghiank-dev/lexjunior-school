import React, { useMemo } from "react";
import TextInputExerciseList from "../tenses/exercises/TextInputExerciseList.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import { getPcTimeExpressionsExercises, getPcTimeExpressionsGlossaryItems } from "./rooms/pc-time-expressions-rooms.jsx";
import { presentContinuousTimeExpressionsLexHints } from "../lex-hints/present-continuous/time-expressions.js";

export default function PcTimeExpressionsRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPcTimeExpressionsExercises(roomNumber),
    [roomNumber]
  );

  const sectionId = "time-expressions";
  const sectionLabel = "Time expressions";

  const lexHintsForRoom = presentContinuousTimeExpressionsLexHints[`room${roomNumber}`] || [];
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Present Continuous – Time expressions`;

  const retryForKeyTestId = `pc-retry-for-key-time-expressions-${roomNumber}`;
  const testIdPrefix = `pc-time-expressions-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom ? pcRoomPath(sectionId, roomNumber + 1) : null;

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

  const cardTitle = cardTitleByRoom[roomNumber] ?? "Exerciții – Present Continuous – Time expressions";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcTimeExpressionsGlossaryItems(roomNumber);

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
      theoryRoute={pcTheoryPath("time-expressions")}
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
      lexTestIdPrefix={`pc-time-expressions-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
