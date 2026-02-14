import React, { useMemo } from "react";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsUsesExercises,
  getPsUsesGlossaryItems,
} from "./rooms/ps-uses-rooms.jsx";
import { presentSimpleUsesLexHints as usesLexHints } from "../lex-hints/present-simple/uses.js";
import { McqExerciseList } from "../../shared/exercises/McqExerciseList.jsx";
import { CheckboxExerciseList } from "../../shared/exercises/CheckboxExerciseList.jsx";
import { GapSentenceExerciseList } from "../../shared/exercises/GapSentenceExerciseList.jsx";
import { RuneTranslationExerciseList } from "./components/RuneTranslationExerciseList.jsx";

export default function PsUsesRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsUsesExercises(roomNumber),
    [roomNumber]
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "uses";
  const sectionLabel = "Uses";
  const pageTitle = "Present Simple – Uses";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-uses-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-uses-room${roomNumber}`;

  const cardTitleByRoom = {
    1: "Alege corect între rutină și non-rutină",
    2: "Bifează propozițiile care descriu obiceiuri / rutine",
    3: "Completează propozițiile cu forma corectă a verbului (Present Simple)",
    4: "Bifează propozițiile care descriu situații permanente",
    5: "Alege tipul propoziției: instrucțiune, direcție sau alt tip",
    6: "Alege propoziția corectă la Present Simple în context",
    7: "Tradu propozițiile din română în engleză (întrebuințări ale Present Simple)",
  };

  const cardIntroByRoom = {
    1: "Pentru fiecare propoziție, alege dacă descrie o rutină (obicei) sau nu. Gândește-te dacă acțiunea se repetă în mod regulat.",
    2: "Bifează propozițiile care descriu rutine sau obiceiuri în Present Simple. Uită-te după adverbe de frecvență și expresii de rutină.",
    3: "Completează spațiile libere cu forma corectă a verbului la Present Simple, folosind informațiile din propoziție și mini-dicționarul.",
    4: "Bifează propozițiile care descriu situații permanente sau adevăruri generale, nu acțiuni temporare.",
    5: "Pentru fiecare propoziție, alege categoria corectă: instrucțiune, direcție sau alt tip. Gândește-te la rolul propoziției în comunicare.",
    6: "Alege varianta corectă în context, ținând cont de ideea de rutină sau program fix la Present Simple.",
    7: "Tradu propozițiile din română în engleză, folosind Present Simple pentru a exprima rutine, programe fixe sau adevăruri generale.",
  };

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Present Simple – Uses";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsUsesGlossaryItems(roomNumber);

  const renderExercises = ({
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
  }) => {
    if (roomNumber === 1 || roomNumber === 5 || roomNumber === 6) {
      return (
        <McqExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          showIndex={true}
          testIdPrefix={testIdPrefix}
        />
      );
    }

    if (roomNumber === 2 || roomNumber === 4) {
      return (
        <CheckboxExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          showIndex={true}
          testIdPrefix={testIdPrefix}
        />
      );
    }

    if (roomNumber === 3) {
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

    if (roomNumber === 7) {
      return (
        <RuneTranslationExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          showIndex={true}
        />
      );
    }

    // Fallback safety
    return (
      <McqExerciseList
        exercises={exercises}
        answers={answers}
        feedback={feedback}
        onChange={handleChange}
        showIndex={true}
        testIdPrefix={testIdPrefix}
      />
    );
  };

  const lexHintsForRoom = usesLexHints?.[`room${roomNumber}`] ?? [];

  const nextTo =
    roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null;

  return (
    <TenseExerciseRoomShell
      useRoomEngineHook={useRoomEngine}
      sectionId={sectionId}
      sectionLabel={sectionLabel}
      roomNumber={roomNumber}
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      theoryRoute={psTheoryPath(sectionId)}
      mapRoute={psMapPath()}
      retryForKeyTestId={retryForKeyTestId}
      exercises={exercises}
      testIdPrefix={testIdPrefix}
      cardTitle={cardTitle}
      cardIntro={cardIntro}
      renderExercises={renderExercises}
      dictionaryItems={dictionaryItems}
      lexHints={lexHintsForRoom}
      lexAvatarSrc={PS_LEX_HEAD_SVG}
      lexTestIdPrefix={`ps-uses-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
