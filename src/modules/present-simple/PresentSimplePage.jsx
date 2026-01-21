import React from "react";
import { Navigate } from "react-router-dom";
import { psMapPath } from "./ps-paths.js";

/**
 * Present Simple landing
 *
 * Sprint 12-14 change: landing-ul tensului NU mai este un hub.
 * Intrarea principală este harta (Map) în toate modurile.
 */
export default function PresentSimplePage() {
  return <Navigate to={psMapPath()} replace />;
}
