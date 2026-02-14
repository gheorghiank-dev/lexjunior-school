import React from "react";
import { TenseRoomHeaderHud } from "./TenseRoomHeaderHud.jsx";
import RoomPageShell from "../../../layout/RoomShell/RoomPageShell.jsx";

/**
 * Minimal, tense-agnostic room page shell.
 * Present Simple keeps its own richer shell; this is used for new tenses.
 *
 * Layout-ul structural (<main className="page page-pastel">) este
 * delegat către RoomPageShell v2.
 */
export function TenseRoomPageShell({
  pageTitle,
  roomLabel,
  sectionLabel,
  theoryRoute,
  mapRoute,
  hudRootRef,
  onRetryForKey,
  keyButtonVisible,
  practiceResetVisible,
  onPracticeReset,
  retryForKeyTestId,
  devTools,
  lex,
  children,
}) {
  const header = (
    <TenseRoomHeaderHud
      pageTitle={pageTitle}
      roomLabel={roomLabel}
      sectionLabel={sectionLabel}
      theoryRoute={theoryRoute}
      mapRoute={mapRoute}
      hudRootRef={hudRootRef}
      onRetryForKey={onRetryForKey}
      keyButtonVisible={keyButtonVisible}
      practiceResetVisible={practiceResetVisible}
      onPracticeReset={onPracticeReset}
      retryForKeyTestId={retryForKeyTestId}
    />
  );

  return (
    <RoomPageShell
      className="page page-pastel"
      header={header}
      devTools={devTools}
      lex={lex}
    >
      {children}
    </RoomPageShell>
  );
}
