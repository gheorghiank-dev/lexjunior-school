import React from "react";
import TenseExerciseActions from "../../tenses/ui/TenseExerciseActions.jsx";

/**
 * Present Simple wrapper peste bara generică de acțiuni pentru camere.
 *
 * Păstrează:
 * - aceeași semnătură a props-urilor ca înainte (onVerify, nextTo, passed, verifyLabel, verifyTestId)
 * - aceleași className-uri în DOM (exercise-actions, btn btn-primary)
 * - aceleași data-testid-uri pentru Playwright.
 *
 * Implementarea reală este delegată către TenseExerciseActions,
 * care este folosită și de celelalte timpuri.
 */
export default function PsExerciseActions(props) {
  return <TenseExerciseActions {...props} />;
}
