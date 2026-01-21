import React from "react";
import SharedTextInputExerciseList from "../../../shared/exercises/TextInputExerciseList.jsx";

/**
 * Generic text-input exercise list.
 *
 * This module-level wrapper keeps existing Present Continuous UX stable
 * (no listen-on-correct button, but preserves the fixed right-column spacing)
 * while delegating the actual implementation to the shared exercise component.
 */
export default function TextInputExerciseList(props) {
  // Enforce current behavior for tenses that use this wrapper.
  const { withListenOnCorrect, rightPlaceholderWidth, ...rest } = props;

  return (
    <SharedTextInputExerciseList
      {...rest}
      withListenOnCorrect={false}
      rightPlaceholderWidth={40}
    />
  );
}
