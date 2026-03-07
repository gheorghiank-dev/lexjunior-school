import React from "react";
import { Navigate } from "react-router-dom";
import { futureContinuousMapPath } from "../future-paths.js";

/**
 * Future Continuous landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function FutureContinuousPage() {
  return <Navigate to={futureContinuousMapPath()} replace />;
}
