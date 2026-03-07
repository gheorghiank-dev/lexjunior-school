import React, { useMemo } from "react";

import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import { pastSimpleMapPath, pastSimpleTheoryPath, pastSimpleRoomPath } from "./past-paths.js";
import {
  getPastSimpleInterrogativeExercises,
  getPastSimpleInterrogativeGlossaryItems,
} from "./rooms/past-interrogative-rooms.jsx";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [];
const MCQ_ROOMS = [];
const TEXTAREA_ROOMS = [];

const cardTitleByRoom = {
  1: "Past Simple – Interrogative – Camera 1",
  2: "Past Simple – Interrogative – Camera 2",
  3: "Past Simple – Interrogative – Camera 3",
  4: "Past Simple – Interrogative – Camera 4",
  5: "Past Simple – Interrogative – Camera 5",
  6: "Past Simple – Interrogative – Camera 6",
  7: "Past Simple – Interrogative – Camera 7",
};

const cardIntroByRoom = {
  1: "Schelet de cameră pentru Past Simple – Interrogative. Aici vei defini exercițiile finale.",
};

export default function PastSimpleInterrogativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(() => getPastSimpleInterrogativeExercises(roomNumber), [roomNumber]);

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "interrogative";
  const sectionLabel = "Interrogative";
  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Past Simple – Interrogative`;
  const retryForKeyTestId = `past-retry-for-key-interrogative-${roomNumber}`;
  const testIdPrefix = `past-interrogative-room${roomNumber}`;

  const cardTitle = cardTitleByRoom[roomNumber] ?? "Exerciții – Past Simple – Interrogative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPastSimpleInterrogativeGlossaryItems(roomNumber);

  const renderExercises = (props) =>
    renderExercisesByRoomType({
      roomNumber,
      TEXT_INPUT_WITH_LISTEN_ROOMS,
      GAP_ROOMS,
      MCQ_ROOMS,
      TEXTAREA_ROOMS,
      ...props,
    });

  const nextTo =
    roomNumber < 7 ? pastSimpleRoomPath(sectionId, roomNumber + 1) : null;

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
      lexTestIdPrefix={`past-interrogative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
