import React, { useMemo } from "react";
import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import { pastSimpleMapPath, pastSimpleTheoryPath, pastSimpleRoomPath } from "./past-paths.js";
import {
  getPastSimpleTimeExpressionsExercises,
  getPastSimpleTimeExpressionsGlossaryItems,
} from "./rooms/past-time-expressions-rooms.jsx";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [];
const MCQ_ROOMS = [];
const TEXTAREA_ROOMS = [];

export default function PastSimpleTimeExpressionsRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPastSimpleTimeExpressionsExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "time-expressions";
  const sectionLabel = "Time Expressions";

  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Past Simple – Time Expressions`;

  const retryForKeyTestId = `past-retry-for-key-time-expressions-${roomNumber}`;
  const testIdPrefix = `past-time-expressions-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom
    ? pastSimpleRoomPath(sectionId, roomNumber + 1)
    : null;

  const cardTitleByRoom = {
    1: "Past Simple – Time Expressions – Camera 1",
    2: "Past Simple – Time Expressions – Camera 2",
    3: "Past Simple – Time Expressions – Camera 3",
    4: "Past Simple – Time Expressions – Camera 4",
    5: "Past Simple – Time Expressions – Camera 5",
    6: "Past Simple – Time Expressions – Camera 6",
    7: "Past Simple – Time Expressions – Camera 7",
  };

  const cardIntroByRoom = {
    1: "Schelet de cameră pentru Past Simple – Time Expressions. Aici vei defini exercițiile finale.",
  };

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Past Simple – Time Expressions";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPastSimpleTimeExpressionsGlossaryItems(roomNumber);

  const renderExercises = (props) =>
    renderExercisesByRoomType({
      roomNumber,
      TEXT_INPUT_WITH_LISTEN_ROOMS,
      GAP_ROOMS,
      MCQ_ROOMS,
      TEXTAREA_ROOMS,
      ...props,
    });

  return (
    <TenseExerciseRoomShell
      useRoomEngineHook={useRoomEngine}
      sectionId={sectionId}
      sectionLabel={sectionLabel}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      theoryRoute={pastSimpleTheoryPath(sectionId)}
      mapRoute={pastSimpleMapPath()}
      retryForKeyTestId={retryForKeyTestId}
      exercises={exercises}
      testIdPrefix={testIdPrefix}
      cardTitle={cardTitle}
      cardIntro={cardIntro}
      renderExercises={renderExercises}
      dictionaryItems={dictionaryItems}
      lexHints={[]}
      lexAvatarSrc={PAST_SIMPLE_LEX_HEAD_SVG}
      lexTestIdPrefix={`past-time-expressions-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
