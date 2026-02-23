import React, { useMemo } from "react";

import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";

import {
  getPsAffirmativeExercises,
  getPsAffirmativeGlossaryItems,
} from "./rooms/ps-affirmative-rooms.jsx";

import { presentSimpleAffirmativeLexHints } from "../lex-hints/present-simple/affirmative.js";

import TextInputExerciseList from "../tenses/exercises/TextInputExerciseList.jsx";
import { GapSentenceExerciseList } from "../../shared/exercises/GapSentenceExerciseList.jsx";
import { McqExerciseList } from "../../shared/exercises/McqExerciseList.jsx";
import { TextareaExerciseList } from "../../shared/exercises/TextareaExerciseList.jsx";

// Config de tipuri pe camere
const TEXT_INPUT_WITH_LISTEN_ROOMS = [1];
const GAP_ROOMS = [2, 3, 5];
const MCQ_ROOMS = [4];
const TEXTAREA_ROOMS = [6, 7];

const cardTitleByRoom = {
  1: "Completează cu forma corectă la persoana a III-a singular",
  2: "Completează cu forma corectă a verbului din paranteză",
  3: "Completează cu forma corectă a verbului din propoziția dată",
  4: "Bifează varianta corectă a verbului",
  5: "Corectează propozițiile completând verbul corect",
  6: "Pune cuvintele în ordinea corectă (Present Simple afirmativ)",
  7: "Tradu propozițiile din română în engleză (Present Simple afirmativ)",
};

const cardIntroByRoom = {
  1: "Completează spațiile libere cu forma corectă a verbului la persoana a III-a singular.",
  2: "Completează spațiile libere cu forma corectă a verbului din paranteză.",
  3: "Completează spațiile libere cu forma corectă a verbului din propoziția dată.",
  4: "Alege forma corectă a verbului în fiecare propoziție.",
  5: "Propoziția este greșită. Completează spațiul liber cu forma corectă a verbului.",
  6: "Scrie cuvintele date în ordinea corectă pentru a obține propoziții la Present Simple afirmativ.",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple afirmativ. Folosește mini-dicționarul pentru cuvintele necunoscute.",
};

export default function PsAffirmativeRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsAffirmativeExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "affirmative";
  const sectionLabel = "Afirmativ";
  const pageTitle = "Present Simple – Affirmative";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-aff-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-aff-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ?? "Exerciții – Present Simple – Affirmative";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsAffirmativeGlossaryItems(roomNumber);

  const renderExercises = ({
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
  }) => {
    // 1) Text input + listen (doar room 1 în momentul ăsta)
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

    // 2) Gap sentence rooms (2, 3, 5) – room 2 fără index, celelalte cu index
    if (GAP_ROOMS.includes(roomNumber)) {
      const showIndex = roomNumber !== 2;

      return (
        <GapSentenceExerciseList
          exercises={exercises}
          answers={answers}
          feedback={feedback}
          onChange={handleChange}
          showIndex={showIndex}
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

    // 4) Textarea rooms (word order, translation)
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

    // 5) Fallback – ar trebui să nu intre niciodată, dar păstrează shell-ul safe
    return (
      <TextInputExerciseList
        exercises={exercises}
        answers={answers}
        feedback={feedback}
        onChange={handleChange}
        testIdPrefix={testIdPrefix}
      />
    );
  };

  const lexHintsForRoom =
    presentSimpleAffirmativeLexHints?.[`room${roomNumber}`] ?? [];

  const nextTo = roomNumber < 7 ? psRoomPath(sectionId, roomNumber + 1) : null;

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
      lexTestIdPrefix={`ps-affirmative-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
