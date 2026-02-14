import React from "react";
import RoomHeaderHud from "../../../layout/RoomShell/RoomHeaderHud.jsx";
import { psMapPath } from "../ps-paths.js";

/**
 * PsRoomHeaderHud
 *
 * Thin Present Simple-specific wrapper over the global RoomHeaderHud.
 * Keeps the same public API used by Present Simple rooms, but delegates
 * the actual header + HUD rendering to the tense-agnostic RoomHeaderHud.
 *
 * This ensures that Present Simple and other tenses share a single
 * header implementation while preserving all existing UX and test ids.
 */
export function PsRoomHeaderHud({
  roomNumber,
  sectionLabel,
  theoryRoute,
  hudRootRef,
  onRetryForKey,
  keyButtonVisible,
  // global feature: practice reset (visible only when the room has the key)
  practiceResetVisible,
  onPracticeReset,
}) {
  const pageTitle = `Camera ${roomNumber} – Present Simple ${sectionLabel}`;
  const roomLabel = `Camera ${roomNumber}`;
  const mapRoute = psMapPath();

  return (
    <RoomHeaderHud
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
      retryForKeyTestId="ps-retry-for-key"
    />
  );
}
