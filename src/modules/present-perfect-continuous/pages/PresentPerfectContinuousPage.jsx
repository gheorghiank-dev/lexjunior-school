import React from "react";
import { Navigate } from "react-router-dom";
import { presentPerfectContinuousMapPath } from "../present-paths.js";

/**
 * Present Perfect Continuous landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PresentPerfectContinuousPage() {
  return <Navigate to={presentPerfectContinuousMapPath()} replace />;
}
