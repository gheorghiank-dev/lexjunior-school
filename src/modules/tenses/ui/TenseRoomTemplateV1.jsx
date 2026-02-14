import React from "react";
import { TenseRoomPageShell } from "./TenseRoomPageShell.jsx";

/**
 * TenseRoomTemplateV1
 *
 * Generic room template for tense-based rooms.
 *
 * Responsibilities:
 *  - wires the tense-specific room engine hook (useRoomEngineHook)
 *    with {{ sectionId, roomNumber, exercises }}
 *  - renders the shared TenseRoomPageShell (header + HUD)
 *  - delegates the inner exercise layout to a render prop (children)
 *
 * This keeps:
 *  - engine + HUD wiring in one place
 *  - room components focused on:
 *      * defining exercises
 *      * rendering their specific exercise UI
 */
export function TenseRoomTemplateV1({
  useRoomEngineHook,
  sectionId,
  roomNumber,
  pageTitle,
  roomLabel,
  sectionLabel,
  theoryRoute,
  mapRoute,
  retryForKeyTestId,
  exercises,
  renderDevTools,
  renderLex,
  children,
}) {
  const {
    answers,
    feedback,
    roomState,
    hudRootRef,
    keyButtonVisible,
    practiceResetVisible,
    handleChange,
    handleVerify,
    startKeyAttempt,
    handleDevAutofill,
    handleDevReset,
    handlePracticeReset,
  } = useRoomEngineHook({ sectionId, roomNumber, exercises });

  const devTools =
    typeof renderDevTools === "function"
      ? renderDevTools({
          answers,
          feedback,
          roomState,
          handleChange,
          handleVerify,
          startKeyAttempt,
          handleDevAutofill,
          handleDevReset,
          handlePracticeReset,
        })
      : undefined;

  const lex =
    typeof renderLex === "function"
      ? renderLex({
          answers,
          feedback,
          roomState,
          handleChange,
          handleVerify,
          roomNumber,
          sectionId,
          sectionLabel,
        })
      : undefined;

  return (
    <TenseRoomPageShell
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      sectionLabel={sectionLabel}
      theoryRoute={theoryRoute}
      mapRoute={mapRoute}
      hudRootRef={hudRootRef}
      onRetryForKey={startKeyAttempt}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={handlePracticeReset}
      retryForKeyTestId={retryForKeyTestId}
      devTools={devTools}
      lex={lex}
    >
      {children({
        answers,
        feedback,
        roomState,
        handleChange,
        handleVerify,
      })}
    </TenseRoomPageShell>
  );
}
