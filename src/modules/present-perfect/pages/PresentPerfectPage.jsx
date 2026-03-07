import React from "react";
import { Navigate } from "react-router-dom";
import { presentPerfectMapPath } from "../present-paths.js";

/**
 * Present Perfect landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PresentPerfectPage() {
  return <Navigate to={presentPerfectMapPath()} replace />;
}
