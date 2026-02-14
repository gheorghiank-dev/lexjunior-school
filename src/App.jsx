import React from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import {
  getTenseThemeClassForPath,
  getDefaultBrandAvatarSrc,
} from "./core/manifest/tense-registry.js";
import { createAppRoutes } from "./core/routing/createAppRoutes.jsx";
import { getAppNavItems } from "./modules/app-nav/registry.js";
import GlobalPasswordGate from "./access/passwords/GlobalPasswordGate.jsx";
import TensePasswordGate from "./access/passwords/TensePasswordGate.jsx";
import LexCopyrightFooter from "./components/LexCopyrightFooter.jsx";

function AppHeader() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = getAppNavItems();

  const isActive = (href) => {
    if (href === "/") return path === "/";
    return path.startsWith(href);
  };

  return (
    <header className="app-header">
      <div className="app-header-inner">
        <Link to="/" className="brand-mark">
          <div className="brand-avatar">
            <img src={getDefaultBrandAvatarSrc()} alt="Lex Junior avatar" />
          </div>
          <div className="brand-title">
            <span className="brand-title-main">Lex Junior English Lab</span>
            <span className="brand-title-sub">
              Escape Room • English Grammar
            </span>
          </div>
        </Link>
        <nav className="header-nav">
          {navItems.map((item) => {
            if (item.status === "ready") {
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={
                    isActive(item.href)
                      ? "nav-link nav-link-active"
                      : "nav-link"
                  }
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <button
                key={item.id}
                type="button"
                className="nav-link"
                style={{ opacity: 0.5, cursor: "not-allowed" }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const location = useLocation();
  const themeClass = getTenseThemeClassForPath(location.pathname);
  const appRoutes = createAppRoutes();

  return (
    <GlobalPasswordGate>
      <div className={themeClass ? `app-shell ${themeClass}` : "app-shell"}>
        <AppHeader />
        <main className="app-main">
          <Routes>
            {appRoutes.map((r) => {
              if (r.tenseId) {
                return (
                  <Route
                    key={r.path}
                    path={r.path}
                    element={
                      <TensePasswordGate tenseId={r.tenseId}>
                        {r.element}
                      </TensePasswordGate>
                    }
                  />
                );
              }

              return <Route key={r.path} path={r.path} element={r.element} />;
            })}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <LexCopyrightFooter />
        </main>
      </div>
    </GlobalPasswordGate>
  );
}
