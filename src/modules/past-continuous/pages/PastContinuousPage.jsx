import React from "react";
import { Navigate } from "react-router-dom";
import { pastContinuousMapPath } from "../past-continuous-paths.js";

/**
 * Past Continuous landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PastContinuousPage() {
  return <Navigate to={pastContinuousMapPath()} replace />;
}
