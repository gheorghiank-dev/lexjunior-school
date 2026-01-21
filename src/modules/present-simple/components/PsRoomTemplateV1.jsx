import React from "react";

import { useRoomEngine } from "../ps-core/useRoomEngine.js";
import { useLexJuniorChrome } from "../ps-core/useLexJuniorChrome.js";
import { psRoomPath, psTheoryPath } from "../ps-paths.js";

import PsExerciseActions from "./PsExerciseActions.jsx";
import PsResultSummary from "./PsResultSummary.jsx";
import { PsMiniDictionaryCard } from "./PsMiniDictionaryCard.jsx";
import { PsRoomPageShell } from "./PsRoomPageShell.jsx";

/**
 * V1 Room template: keeps the classic Present Simple Room UX,
 * but centralizes the repetitive wiring (engine + shell + actions + summary).
 *
 * Goal: allow gradual migration from "RoomXPage" files to registry-driven content.
 */
function PsRoomTemplateV1Render({
  sectionId,
  sectionLabel,
  roomNumber,
  exercises,
  lexHints,
  ExerciseListComponent,
  exerciseListProps,
  cardIntro,
  nextTo,
  verifyLabel,
  verifyTransform,
  verifyTestId = "ps-check",
  feedbackTestId = "ps-feedback",
  showResultSummary = true,
  afterExercises,
  renderBody,
  afterBody,
  showDictionaryCard = true,
  errorText,
  successText,
  dictionaryDescription,
  dictionaryItems,
  // engine + shell wiring
  engine,
  theoryRoute,
}) {
  const {
    answers,
    feedback,
    lastResult,
    roomState,
    keyButtonVisible,
    practiceResetVisible,
    hudRootRef,
    onRetryForKey,
    onPracticeReset,
    onDevAutofill,
    onDevReset,
    onChange,
    onVerify,
  } = engine;

  const computedTheoryRoute = theoryRoute ?? psTheoryPath(sectionId);
  const computedNextTo =
    nextTo === null ? null : nextTo ?? psRoomPath(sectionId, roomNumber + 1);

  // MiniDictionary should appear right after the task (intro) and before questions.
  // For custom bodies (renderBody), we expose it via templateCtx so the room can place it
  // in the exact same spot.
  const dictionaryNode =
    showDictionaryCard && Array.isArray(dictionaryItems) && dictionaryItems.length > 0 ? (
      <PsMiniDictionaryCard
        description={
          dictionaryDescription ??
          "Apasă pe butonul 🔊 pentru pronunție, apoi citește traducerea."
        }
        items={dictionaryItems}
      />
    ) : null;

  function handleVerifyClick() {
    if (typeof onVerify === "function") {
      onVerify();
      return;
    }

    // Default verify behavior for engine-backed rooms.
    if (typeof verifyTransform !== "function") {
      engine.handleVerify?.();
      return;
    }

    const payload = verifyTransform({ answers, exercises });
    if (payload == null) {
      engine.handleVerify?.();
      return;
    }
    engine.handleVerify?.(payload);
  }

  const templateCtx = {
    sectionId,
    sectionLabel,
    roomNumber,
    exercises,
    answers,
    feedback,
    lastResult,
    roomState,
    onChange,
    onVerify: handleVerifyClick,
    nextTo: computedNextTo,
    dictionaryNode,
  };

  return (
    <PsRoomPageShell
      roomNumber={roomNumber}
      sectionLabel={sectionLabel}
      theoryRoute={computedTheoryRoute}
      hudRootRef={hudRootRef}
      onRetryForKey={onRetryForKey}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={onPracticeReset}
      roomState={roomState}
      onDevAutofill={onDevAutofill}
      onDevReset={onDevReset}
      lexHints={lexHints}
    >
      {typeof renderBody === "function" ? (
        renderBody(templateCtx)
      ) : (
        <>
          {cardIntro ? <section className="card">{cardIntro}</section> : null}

          {dictionaryNode}

          <section className="card">
            {ExerciseListComponent ? (
              <ExerciseListComponent
                exercises={exercises}
                answers={answers}
                feedback={feedback}
                onChange={onChange}
                {...(exerciseListProps ?? {})}
              />
            ) : null}

            {afterExercises ?? null}

            <PsExerciseActions
              onVerify={handleVerifyClick}
              nextTo={computedNextTo}
              passed={roomState?.passed}
              verifyLabel={verifyLabel ?? "Verifică răspunsurile"}
              verifyTestId={verifyTestId}
            />

            {showResultSummary ? (
              <PsResultSummary
                lastResult={lastResult}
                errorText={
                  errorText ??
                  "Mai ai câteva răspunsuri de corectat – verifică ce este marcat cu roșu."
                }
                successText={
                  successText ??
                  "Bravo! Ai completat corect toate exercițiile din această cameră!"
                }
                testId={feedbackTestId}
              />
            ) : null}
          </section>
        </>
      )}

      {typeof afterBody === "function" ? afterBody(templateCtx) : afterBody ?? null}
    </PsRoomPageShell>
  );
}

function PsRoomTemplateV1WithEngine(props) {
  const {
    sectionId,
    roomNumber,
    exercises,
  } = props;

  const {
    answers,
    feedback,
    lastResult,
    roomState,
    keyButtonVisible,
    practiceResetVisible,
    hudRootRef,
    handleChange,
    handleVerify,
    startKeyAttempt,
    handleDevAutofill,
    handleDevReset,
    handlePracticeReset,
  } = useRoomEngine({
    sectionId,
    roomNumber,
    exercises,
  });

  const engine = {
    answers,
    feedback,
    lastResult,
    roomState,
    keyButtonVisible,
    practiceResetVisible,
    hudRootRef,
    onRetryForKey: startKeyAttempt,
    onPracticeReset: handlePracticeReset,
    onDevAutofill: handleDevAutofill,
    onDevReset: handleDevReset,
    onChange: handleChange,
    handleVerify,
  };

  return <PsRoomTemplateV1Render {...props} engine={engine} />;
}

function PsRoomTemplateV1Stateless(props) {
  const { engine, shell, ...rest } = props;

  const resolvedEngine = engine ?? shell;
  return <PsRoomTemplateV1Render {...rest} engine={resolvedEngine} />;
}

export default function PsRoomTemplateV1(props) {
  // 🔧 keep theme + Lex Junior available
  useLexJuniorChrome();

  // If `engine`/`shell` is provided, the template becomes a pure shell renderer
  // (useful for special pages like Badge that manage their own logic).
  if (props.engine || props.shell) {
    return <PsRoomTemplateV1Stateless {...props} />;
  }

  return <PsRoomTemplateV1WithEngine {...props} />;
}
