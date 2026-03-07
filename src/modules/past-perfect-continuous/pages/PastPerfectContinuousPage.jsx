import React from "react";
import { Navigate } from "react-router-dom";
import { pastPerfectContinuousMapPath } from "../past-perfect-continuous-paths.js";

/**
 * Past Perfect Continuous landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PastPerfectContinuousPage() {
  return <Navigate to={pastPerfectContinuousMapPath()} replace />;
}
