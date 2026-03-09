/**
 * createAppRoutes (v2)
 *
 * Single source of truth for all top-level routes in the app.
 * App.jsx is responsible for wrapping tense routes with any
 * additional gates (e.g. TensePasswordGate).
 */

import HomePage from "../pages/home/HomePage";
import GrammarPage from "../pages/grammar/GrammarPage";
import TensesPage from "../pages/tenses/TensesPage";
import PlatformProbePage from "../pages/dev/PlatformProbePage.jsx";
import { getTenseRouteEntries } from "../modules/tenses/registry.js";

export function createAppRoutes() {
  const tenseRoutes = getTenseRouteEntries();

  // Core routes + tense-specific routes.
  // Wildcard / 404 handling remains in App.jsx so it can keep using
  // <Navigate /> without this module depending on react-router.
  return [
    { path: "/", element: <HomePage /> },
    { path: "/grammar", element: <GrammarPage /> },
    { path: "/grammar/tenses", element: <TensesPage /> },
    { path: "/dev/platform-probe", element: <PlatformProbePage /> },
    ...tenseRoutes,
  ];
}
