import React from "react";
import { Navigate } from "react-router-dom";
import { futurePerfectContinuousMapPath } from "../future-paths.js";

/**
 * Future Perfect Continuous landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function FuturePerfectContinuousPage() {
  return <Navigate to={futurePerfectContinuousMapPath()} replace />;
}
