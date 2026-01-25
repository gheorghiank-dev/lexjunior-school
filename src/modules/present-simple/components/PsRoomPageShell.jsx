import React from "react";
import { PsRoomHeaderHud } from "./PsRoomHeaderHud.jsx";
import { PsRoomDevToolsAndStatus } from "./PsRoomDevToolsAndStatus.jsx";
// import { PsLexJuniorPanel } from "./PsLexJuniorPanel.jsx";*/>

/**
 * Shell generic pentru o cameră Present Simple.
 * Se ocupă de:
 * - layout-ul principal (<main className="page page-pastel">)
 * - header-ul cu HUD (PsRoomHeaderHud)
 * - cardul de Dev Tools + Status (PsRoomDevToolsAndStatus)
 * - panoul lui Lex Junior (PsLexJuniorPanel)
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
      {/*<PsLexJuniorPanel lexHints={lexHints} /> */}
    </main>
  );
}
