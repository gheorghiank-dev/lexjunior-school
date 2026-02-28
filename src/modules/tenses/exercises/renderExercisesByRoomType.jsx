import React from "react";

import TextInputExerciseList from "./TextInputExerciseList.jsx";
import { McqExerciseList } from "../../../shared/exercises/McqExerciseList.jsx";
import { GapSentenceExerciseList } from "../../../shared/exercises/GapSentenceExerciseList.jsx";
import { TextareaExerciseList } from "../../../shared/exercises/TextareaExerciseList.jsx";
import { InterrogativeYesNoPairsExerciseList } from "../../../shared/exercises/InterrogativeYesNoPairsExerciseList.jsx";
/**
 * Helper comun pentru toate camerele:
 * alege componenta de exerciții în funcție de tipul camerei.
 */
export function renderExercisesByRoomType({
  roomNumber,
  exercises,
  answers,
  feedback,
  handleChange,
  testIdPrefix,
  TEXT_INPUT_WITH_LISTEN_ROOMS = [],
  GAP_ROOMS = [],
  MCQ_ROOMS = [],
  TEXTAREA_ROOMS = [],
  YESNO_PAIRS_ROOMS = [],
}) {
  // 1) Text input + TTS la răspunsuri corecte
  if (TEXT_INPUT_WITH_LISTEN_ROOMS.includes(roomNumber)) {
    return (
      <TextInputExerciseList
        exercises={exercises}
        answers={answers}
        feedback={feedback}
        onChange={handleChange}
        testIdPrefix={testIdPrefix}
        withListenOnCorrect={true}
      />
    );
  }

  // 2) Gap sentence rooms
  if (GAP_ROOMS.includes(roomNumber)) {
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

  // 3) MCQ rooms
  if (MCQ_ROOMS.includes(roomNumber)) {
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

  // 4) Yes/No pairs rooms
  if (YESNO_PAIRS_ROOMS.includes(roomNumber)) {
    return (
      <InterrogativeYesNoPairsExerciseList
        exercises={exercises}
        answers={answers}
        feedback={feedback}
        onChange={handleChange}
      />
    );
  }

  // 5) Textarea rooms
  if (TEXTAREA_ROOMS.includes(roomNumber)) {
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

  // 6) Fallback – comportamentul actual: simplu text input
  return (
    <TextInputExerciseList
      exercises={exercises}
      answers={answers}
      feedback={feedback}
      onChange={handleChange}
      testIdPrefix={testIdPrefix}
    />
  );
}
