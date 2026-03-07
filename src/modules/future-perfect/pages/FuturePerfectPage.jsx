import React from "react";
import { Navigate } from "react-router-dom";
import { futurePerfectMapPath } from "../future-paths.js";

/**
 * Future Perfect landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function FuturePerfectPage() {
  return <Navigate to={futurePerfectMapPath()} replace />;
}
