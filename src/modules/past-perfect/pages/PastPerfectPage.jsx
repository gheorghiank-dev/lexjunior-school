import React from "react";
import { Navigate } from "react-router-dom";
import { pastPerfectMapPath } from "../past-perfect-paths.js";

/**
 * Past Perfect landing
 *
 * Mirrors the other tenses: main entry is always the map.
 */
export default function PastPerfectPage() {
  return <Navigate to={pastPerfectMapPath()} replace />;
}
