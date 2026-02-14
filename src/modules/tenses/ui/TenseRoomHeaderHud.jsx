import React from "react";
import RoomHeaderHud from "../../../layout/RoomShell/RoomHeaderHud.jsx";

/**
 * TenseRoomHeaderHud
 *
 * Thin wrapper over the global RoomHeaderHud, used by tense-agnostic
 * room shells (e.g. Present Continuous rooms and future tenses).
 *
 * It simply forwards all props to RoomHeaderHud so that the header
 * behaviour and markup stay consistent across tenses.
 */
export function TenseRoomHeaderHud(props) {
  return <RoomHeaderHud {...props} />;
}
