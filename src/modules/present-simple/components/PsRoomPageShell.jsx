import React from "react";
import { PsRoomHeaderHud } from "./PsRoomHeaderHud.jsx";
import { PsRoomDevToolsAndStatus } from "./PsRoomDevToolsAndStatus.jsx";
import LexJunior from "./LexJunior.jsx";

/**
 * Shell generic pentru o cameră Present Simple.
 * Se ocupă de:
 * - layout-ul principal (<main className="page page-pastel">)
 * - header-ul cu HUD (PsRoomHeaderHud)
 * - cardul de Dev Tools + Status (PsRoomDevToolsAndStatus)
 * - Lex Junior (bulina flotantă + hinturi)
 *
 * Conținutul specific camerei este trimis ca `children`.
 */
export function PsRoomPageShell({
  roomNumber,
  sectionLabel,
  theoryRoute,
  hudRootRef,
  onRetryForKey,
  keyButtonVisible,
  practiceResetVisible,
  onPracticeReset,
  roomState,
  onDevAutofill,
  onDevReset,
  lexHints,
  children,
}) {
  return (
    <main className="page page-pastel">
      <PsRoomHeaderHud
        roomNumber={roomNumber}
        sectionLabel={sectionLabel}
        theoryRoute={theoryRoute}
        hudRootRef={hudRootRef}
        onRetryForKey={onRetryForKey}
        keyButtonVisible={keyButtonVisible}
        practiceResetVisible={practiceResetVisible}
        onPracticeReset={onPracticeReset}
      />

      {children}

      <PsRoomDevToolsAndStatus
        roomState={roomState}
        onDevAutofill={onDevAutofill}
        onDevReset={onDevReset}
      />

      {/* Lex Junior UI is position: fixed via CSS; rendering it here keeps the page UX unchanged. */}
      <LexJunior hints={lexHints} />
    </main>
  );
}
