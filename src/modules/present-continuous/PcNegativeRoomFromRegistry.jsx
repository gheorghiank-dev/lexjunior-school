import React, { useMemo } from "react";
import TextInputExerciseList from "../tenses/exercises/TextInputExerciseList.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import { getPcNegativeExercises, getPcNegativeGlossaryItems } from "./rooms/pc-negative-rooms.jsx";
import { presentContinuousNegativeLexHints } from "../lex-hints/present-continuous/negative.js";

export default function PcNegativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPcNegativeExercises(roomNumber),
    [roomNumber]
  );

  const sectionId = "negative";
  const sectionLabel = "Negative";

  const lexHintsForRoom = presentContinuousNegativeLexHints[`room${roomNumber}`] || [];
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Present Continuous – Negative`;

  const retryForKeyTestId = `pc-retry-for-key-negative-${roomNumber}`;
  const testIdPrefix = `pc-negative-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom ? pcRoomPath(sectionId, roomNumber + 1) : null;

  const cardTitleByRoom = {
    1: "Transformă propozițiile în forma negativă (I / you / we / they)",
    2: "Transformă propozițiile în forma negativă (he / she / it)",
    3: "Completează cu don't / doesn't",
    4: "Scrie forma negativă cu verbe de rutină",
    5: "Corectează propozițiile la forma negativă",
    6: "Pune verbele în forma negativă corectă",
    7: "Traduceri în forma negativă",
  };

  const cardIntroByRoom = {
    1: "Rescrie propozițiile la forma negativă, folosind timpul Present Continuous.",
    2: "Ai grijă la he / she / it – acordă corect auxiliarul.",
    3: "Alege sau scrie forma corectă a lui don't / doesn't în propoziții.",
    4: "Transformă propozițiile astfel încât să fie la forma negativă.",
    5: "Unele propoziții sunt greșite – scrie varianta negativă corectă.",
    6: "Concentrează-te pe ordinea cuvintelor și forma lui to be.",
    7: "Tradu propozițiile în engleză, folosind Present Continuous negativ.",
  };

  const cardTitle = cardTitleByRoom[roomNumber] ?? "Exerciții – Present Continuous – Negative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcNegativeGlossaryItems(roomNumber);

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
      theoryRoute={pcTheoryPath("negative")}
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
      lexTestIdPrefix={`pc-negative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
