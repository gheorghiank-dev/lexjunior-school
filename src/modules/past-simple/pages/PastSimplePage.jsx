import React from "react";
import { Navigate } from "react-router-dom";
import { pastSimpleMapPath } from "../past-paths.js";

/**
 * Past Simple landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PastSimplePage() {
  return <Navigate to={pastSimpleMapPath()} replace />;
}
