import React from "react";
import { Navigate } from "react-router-dom";
import { beGoingToMapPath } from "../be-paths.js";

/**
 * Be Going To landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function BeGoingToPage() {
  return <Navigate to={beGoingToMapPath()} replace />;
}
