import React from "react";
import SharedTextInputExerciseList from "../../../shared/exercises/TextInputExerciseList.jsx";

/**
 * Generic text-input exercise list.
 *
 * Wrapper peste componenta shared, ca să păstrăm layout-ul
 * (dreapta are coloană fixă), dar să putem controla dacă
 * apare sau nu butonul de „Ascultă” pe răspunsurile corecte.
 */
export default function TextInputExerciseList(props) {
  const {
    // implicit păstrăm comportamentul vechi = fără listen
    withListenOnCorrect = false,
    rightPlaceholderWidth = 40,
    ...rest
  } = props;

  return (
    <SharedTextInputExerciseList
      {...rest}
      withListenOnCorrect={withListenOnCorrect}
      rightPlaceholderWidth={rightPlaceholderWidth}
    />
  );
}