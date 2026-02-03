import React from "react";
import { Navigate } from "react-router-dom";
import { pcMapPath } from "./pc-paths.js";

/**
 * Present Continuous landing
 *
 * Sprint 12-14 change: landing-ul tensului intră direct în hartă (Map)
 * în toate modurile.
 */
export default function PresentContinuousPage() {
  return <Navigate to={pcMapPath()} replace />;
}
