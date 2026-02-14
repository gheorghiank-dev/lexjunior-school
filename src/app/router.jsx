import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ScrollToTop from "../components/ScrollToTop";

/**
 * AppRouter v2 skeleton
 *
 * For Sprint 1 this is a thin wrapper around the existing <App />.
 * In later sprints we'll move the <Routes> definition out of App
 * and into a dedicated router module.
 */
export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}
