import React from "react";
import { PsRoomHeaderHud } from "./PsRoomHeaderHud.jsx";
import { PsRoomDevToolsAndStatus } from "./PsRoomDevToolsAndStatus.jsx";
import LexJunior from "./LexJunior.jsx";
import RoomPageShell from "../../../layout/RoomShell/RoomPageShell.jsx";

/**
 * Shell generic pentru o cameră Present Simple.
 * Se ocupă de:
 * - header-ul cu HUD (PsRoomHeaderHud)
 * - cardul de Dev Tools + Status (PsRoomDevToolsAndStatus)
 * - Lex Junior (bulina flotantă + hinturi)
 *
 * Layout-ul structural (<main className="page page-pastel">) este
 * acum delegat către RoomPageShell v2.
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
  const header = (
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
  );

  const devTools = (
    <PsRoomDevToolsAndStatus
      roomState={roomState}
      onDevAutofill={onDevAutofill}
      onDevReset={onDevReset}
    />
  );

  const lex = <LexJunior hints={lexHints} />;

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
