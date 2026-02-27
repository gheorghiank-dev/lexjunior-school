import React, { useMemo } from "react";
import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import { pastSimpleMapPath, pastSimpleTheoryPath, pastSimpleRoomPath } from "./past-paths.js";
import {
  getPastSimpleUsesExercises,
  getPastSimpleUsesGlossaryItems,
} from "./rooms/past-uses-rooms.jsx";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [];
const MCQ_ROOMS = [];
const TEXTAREA_ROOMS = [];

export default function PastSimpleUsesRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPastSimpleUsesExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "uses";
  const sectionLabel = "Uses";

  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Past Simple – Uses`;

  const retryForKeyTestId = `past-retry-for-key-uses-${roomNumber}`;
  const testIdPrefix = `past-uses-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom
    ? pastSimpleRoomPath(sectionId, roomNumber + 1)
    : null;

  const cardTitleByRoom = {
    1: "Past Simple – Uses – Camera 1",
    2: "Past Simple – Uses – Camera 2",
    3: "Past Simple – Uses – Camera 3",
    4: "Past Simple – Uses – Camera 4",
    5: "Past Simple – Uses – Camera 5",
    6: "Past Simple – Uses – Camera 6",
    7: "Past Simple – Uses – Camera 7",
  };

  const cardIntroByRoom = {
    1: "Schelet de cameră pentru Past Simple – Uses. Aici vei defini exercițiile finale.",
  };

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Past Simple – Uses";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPastSimpleUsesGlossaryItems(roomNumber);

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
      lexTestIdPrefix={`past-uses-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
