import React from "react";

/**
 * Generic helper for sections that use custom exercise components by room number.
 *
 * Keeps special sections declarative:
 * room 1 -> ComponentA
 * room 2 -> ComponentB
 * etc.
 */
export function renderExercisesFromRoomComponentMap({
  roomNumber,
  exercises,
  answers,
  feedback,
  handleChange,
  testIdPrefix,
  roomComponentMap = {},
  fallback: FallbackComponent = null,
  defaultProps = {},
  perRoomProps = {},
}) {
  const ExerciseComponent = roomComponentMap[roomNumber] ?? FallbackComponent;

  if (!ExerciseComponent) {
    return null;
  }

  const extraProps = perRoomProps[roomNumber] ?? {};

  return (
    <ExerciseComponent
      exercises={exercises}
      answers={answers}
      feedback={feedback}
      onChange={handleChange}
      testIdPrefix={testIdPrefix}
      {...defaultProps}
      {...extraProps}
    />
  );
}
