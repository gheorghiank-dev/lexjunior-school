import React from "react";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import GrammarPage from "./pages/grammar/GrammarPage";
import TensesPage from "./pages/tenses/TensesPage";
import { getTenseRouteEntries, getTenseThemeClassForPath, getDefaultBrandAvatarSrc } from "./modules/tenses/registry.js";
import { getAppNavItems } from "./modules/app-nav/registry.js";
import GlobalPasswordGate from "./access/passwords/GlobalPasswordGate.jsx";
import TensePasswordGate from "./access/passwords/TensePasswordGate.jsx";
import PsCopyrightFooter from "./modules/present-simple/components/PsCopyrightFooter.jsx";

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
            <img
              src={getDefaultBrandAvatarSrc()}
              alt="Lex Junior avatar"
            />
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
  const tenseRoutes = getTenseRouteEntries();

  return (
    <GlobalPasswordGate>
      <div className={themeClass ? `app-shell ${themeClass}` : "app-shell"}>
        <AppHeader />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/grammar/tenses" element={<TensesPage />} />

            {tenseRoutes.map((r) => (
              <Route
                key={r.path}
                path={r.path}
                element={
                  <TensePasswordGate tenseId={r.tenseId}>
                    {r.element}
                  </TensePasswordGate>
                }
              />
            ))}

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <PsCopyrightFooter />
        </main>
      </div>
    </GlobalPasswordGate>
  );
}