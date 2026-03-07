import React from "react";
import { Navigate } from "react-router-dom";
import { futureSimpleMapPath } from "../future-paths.js";

/**
 * Future Simple landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function FutureSimplePage() {
  return <Navigate to={futureSimpleMapPath()} replace />;
}
