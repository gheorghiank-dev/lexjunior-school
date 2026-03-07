import React, { useMemo } from "react";

import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./pc-core/useRoomEngine.js";
import { PC_LEX_HEAD_SVG } from "./pc-core/assets.js";
import { pcMapPath, pcTheoryPath, pcRoomPath } from "./pc-paths.js";
import {
  getPcUsesExercises,
  getPcUsesGlossaryItems,
} from "./rooms/pc-uses-rooms.jsx";
import { presentContinuousUsesLexHints } from "../lex-hints/present-continuous/uses.js";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [];
const MCQ_ROOMS = [];
const TEXTAREA_ROOMS = [];

const cardTitleByRoom = {
  1: "Use 1 – Actions happening now",
  2: "Use 2 – Temporary actions",
  3: "Use 3 – Future arrangements",
  4: "Use 4 – Changing and developing situations",
  5: "Use 5 – Annoying habits with always",
  6: "Use 6 – Repeated actions around now",
  7: "Use 7 – Alte situații speciale",
};

const cardIntroByRoom = {
  1: "Completează sau rescrie propoziții despre acțiuni care se întâmplă chiar acum.",
  2: "Lucruri temporare – ce se întâmplă doar pentru o perioadă scurtă.",
  3: "Planuri și programări de viitor folosind Present Continuous.",
  4: "Situații care se schimbă treptat sau se dezvoltă.",
  5: "Plângeri și obiceiuri enervante cu always.",
  6: "Acțiuni repetate în jurul momentului prezent.",
  7: "Alte utilizări interesante ale timpului.",
};

export default function PcUsesRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(() => getPcUsesExercises(roomNumber), [roomNumber]);

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "uses";
  const sectionLabel = "Uses";
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Present Continuous – Uses`;
  const retryForKeyTestId = `pc-retry-for-key-uses-${roomNumber}`;
  const testIdPrefix = `pc-uses-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Present Continuous – Uses";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPcUsesGlossaryItems(roomNumber);
  const lexHintsForRoom =
    presentContinuousUsesLexHints?.[`room${roomNumber}`] ?? [];

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
      lexTestIdPrefix={`pc-uses-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
