import React from "react";
import { TenseRoomHeaderHud } from "./TenseRoomHeaderHud.jsx";

/**
 * Minimal, tense-agnostic room page shell.
 * Present Simple keeps its own richer shell; this is used for new tenses.
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
  children,
}) {
  return (
    <main className="page page-pastel">
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

      {children}
    </main>
  );
}
