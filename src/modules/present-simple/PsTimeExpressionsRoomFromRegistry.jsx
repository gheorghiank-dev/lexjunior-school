import React, { useMemo } from "react";
import { TenseExerciseRoomShell } from "../tenses/ui/TenseExerciseRoomShell.jsx";
import { renderExercisesFromRoomComponentMap } from "../tenses/exercises/renderExercisesFromRoomComponentMap.jsx";
import { useRoomEngine } from "./ps-core/useRoomEngine.js";
import { PS_LEX_HEAD_SVG } from "./ps-core/assets.js";
import { psMapPath, psTheoryPath, psRoomPath } from "./ps-paths.js";
import {
  getPsTimeExpressionsExercises,
  getPsTimeExpressionsGlossaryItems,
} from "./rooms/ps-time-expressions-rooms.jsx";
import { presentSimpleTimeExpressionsLexHints as timeExpressionsLexHints } from "../lex-hints/present-simple/time-expressions.js";
import { MatchingPairsExerciseList } from "../../shared/exercises/MatchingPairsExerciseList.jsx";
import { McqExerciseList } from "../../shared/exercises/McqExerciseList.jsx";
import { SentenceBuilderExerciseList } from "../../shared/exercises/SentenceBuilderExerciseList.jsx";
import { FrequencyAdverbExerciseList } from "./components/FrequencyAdverbExerciseList.jsx";
import { RuneTranslationExerciseList } from "./components/RuneTranslationExerciseList.jsx";
import { AdverbPositionExerciseList } from "./components/AdverbPositionExerciseList.jsx";

const ROOM_COMPONENT_MAP = {
  1: MatchingPairsExerciseList,
  2: MatchingPairsExerciseList,
  3: McqExerciseList,
  4: AdverbPositionExerciseList,
  5: SentenceBuilderExerciseList,
  6: FrequencyAdverbExerciseList,
  7: RuneTranslationExerciseList,
};

const ROOM_COMPONENT_PROPS = {
  1: { showIndex: true },
  2: { showIndex: true },
  4: { showIndex: true },
  5: { showIndex: true },
  6: { showIndex: true },
  7: { showIndex: true },
};

const cardTitleByRoom = {
  1: "Potrivește propozițiile cu expresiile de timp corecte",
  2: "Potrivește procentele cu adverbele de frecvență corecte",
  3: "Alege propoziția în care adverbul de frecvență este în locul potrivit",
  4: "Alege poziția corectă a adverbului de frecvență în propoziție",
  5: "Construiește răspunsuri complete la întrebările cu How often...?",
  6: "Completează propozițiile în funcție de rutina ta",
  7: "Tradu propozițiile din română în engleză folosind expresii de timp",
};

const cardIntroByRoom = {
  1: "Potrivește fiecare propoziție cu expresia de timp corectă din partea dreaptă. Uită-te la momentul și frecvența acțiunii.",
  2: "Potrivește fiecare procent cu adverbul de frecvență care exprimă cel mai bine cât de des se întâmplă acțiunea.",
  3: "Bifează propoziția în care adverbul de frecvență este în locul potrivit în raport cu verbul.",
  4: "Alege locul corect pentru adverbul de frecvență în fiecare propoziție, ținând cont de regulile pentru Present Simple.",
  5: "Construiește răspunsuri complete la întrebările cu How often...?, folosind cuvintele din bancă și expresiile de timp corecte.",
  6: "Completează propozițiile în funcție de rutina ta zilnică sau săptămânală. Alege variantele care te descriu cel mai bine.",
  7: "Tradu propozițiile din română în engleză, folosind Present Simple și expresiile de timp potrivite. Folosește dicționarul camerei pentru ajutor.",
};

export default function PsTimeExpressionsRoomFromRegistry({ roomNumber }) {
  const exercises = useMemo(
    () => getPsTimeExpressionsExercises(roomNumber),
    [roomNumber],
  );

  if (!exercises || exercises.length === 0) {
    return null;
  }

  const sectionId = "time-expressions";
  const sectionLabel = "Time Expressions";
  const pageTitle = "Present Simple – Time Expressions";
  const roomLabel = `Camera ${roomNumber}`;
  const retryForKeyTestId = `ps-timeexp-room${roomNumber}-retry-key`;
  const testIdPrefix = `ps-te-room${roomNumber}`;

  const cardTitle =
    cardTitleByRoom[roomNumber] ??
    "Exerciții – Present Simple – Time Expressions";
  const cardIntro = cardIntroByRoom[roomNumber] ?? "";

  const dictionaryItems = getPsTimeExpressionsGlossaryItems(roomNumber);

  const renderExercises = ({
    exercises,
    answers,
    feedback,
    handleChange,
    testIdPrefix,
  }) =>
    renderExercisesFromRoomComponentMap({
      roomNumber,
      exercises,
      answers,
      feedback,
      handleChange,
      testIdPrefix,
      roomComponentMap: ROOM_COMPONENT_MAP,
      fallback: MatchingPairsExerciseList,
      perRoomProps: ROOM_COMPONENT_PROPS,
    });

  const lexHintsForRoom = timeExpressionsLexHints?.[`room${roomNumber}`] ?? [];

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
      lexTestIdPrefix={`ps-timeexp-room${roomNumber}-lexbubble`}
      nextTo={nextTo}
    />
  );
}
