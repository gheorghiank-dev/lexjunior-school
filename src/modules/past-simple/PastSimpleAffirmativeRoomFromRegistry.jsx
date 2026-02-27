import React, { useMemo } from "react";
import { renderExercisesByRoomType } from "../tenses/exercises/renderExercisesByRoomType.jsx";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./past-core/useRoomEngine.js";
import { PAST_SIMPLE_LEX_HEAD_SVG } from "./past-core/assets.js";
import { pastSimpleMapPath, pastSimpleTheoryPath, pastSimpleRoomPath } from "./past-paths.js";
import {
  getPastSimpleAffirmativeExercises,
  getPastSimpleAffirmativeGlossaryItems,
} from "./rooms/past-affirmative-rooms.jsx";

const TEXT_INPUT_WITH_LISTEN_ROOMS = [];
const GAP_ROOMS = [];
const MCQ_ROOMS = [];
const TEXTAREA_ROOMS = [];

export default function PastSimpleAffirmativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPastSimpleAffirmativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "affirmative";
  const sectionLabel = "Affirmative";

  const roomLabel = `Camera ${roomNumber}`;
  const pageTitle = `Camera ${roomNumber} – Past Simple – Affirmative`;

  const retryForKeyTestId = `past-retry-for-key-affirmative-${roomNumber}`;
  const testIdPrefix = `past-affirmative-room${roomNumber}`;

  const hasNextRoom = roomNumber < 7;
  const nextTo = hasNextRoom
    ? pastSimpleRoomPath(sectionId, roomNumber + 1)
    : null;

  const cardTitleByRoom = {
    1: "Past Simple – Affirmative – Camera 1",
    2: "Past Simple – Affirmative – Camera 2",
    3: "Past Simple – Affirmative – Camera 3",
    4: "Past Simple – Affirmative – Camera 4",
    5: "Past Simple – Affirmative – Camera 5",
    6: "Past Simple – Affirmative – Camera 6",
    7: "Past Simple – Affirmative – Camera 7",
  };

  const cardIntroByRoom = {
    1: "Schelet de cameră pentru Past Simple – Affirmative. Aici vei defini exercițiile finale.",
  };

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Past Simple – Affirmative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPastSimpleAffirmativeGlossaryItems(roomNumber);

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
      lexTestIdPrefix={`past-affirmative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
