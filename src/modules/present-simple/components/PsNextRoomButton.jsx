import React from "react";
import { TenseNextRoomButton } from "../../tenses/ui/TenseNextRoomButton.jsx";

/**
 * Wrapper Present Simple peste butonul generic "Camera următoare".
 *
 * Păstrăm numele PsNextRoomButton pentru compatibilitate,
 * dar delegăm logica și markup-ul către TenseNextRoomButton,
 * care este folosit de toate timpurile.
 */
export function PsNextRoomButton(props) {
  return <TenseNextRoomButton {...props} />;
}
