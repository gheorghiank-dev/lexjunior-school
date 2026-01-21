import React from "react";
import { Link } from "react-router-dom";

/**
 * Generic room header + back links + HUD + key/practice controls.
 * Keeps the same class names as the Present Simple header for consistent styling.
 */
export function TenseRoomHeaderHud({
  pageTitle,
  roomLabel,
  sectionLabel,
  theoryRoute,
  mapRoute,
  hudRootRef,
  onRetryForKey,
  keyButtonVisible,
  practiceResetVisible,
  onPracticeReset,
  retryForKeyTestId,
}) {
  return (
    <>
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title" style={{ textAlign: "center" }}>
            {pageTitle}
          </h1>
        </div>
      </header>

      <section style={{ marginBottom: "1.5rem" }}>
        <div
          className="back-link"
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          {theoryRoute ? (
            <Link to={theoryRoute} className="btn btn-outline">
              ← Înapoi la teorie
            </Link>
          ) : null}

          {mapRoute ? (
            <Link to={mapRoute} className="btn btn-outline">
              ← Înapoi la hartă
            </Link>
          ) : null}
        </div>

        <div className="hud" ref={hudRootRef}>
          <canvas data-hud-pie width="120" height="120"></canvas>
          <div className="info">
            <div>
              <strong>Sectiune:</strong> {sectionLabel} – <strong>{roomLabel}</strong>
            </div>
            <div className="key-status">
              <span className="icon" data-hud-key>
                🔒
              </span>
              <span data-hud-key-label>Cheia nu este obtinuta.</span>
            </div>
            <div className="message" data-hud-message></div>

            <div
              style={{
                marginTop: "0.5rem",
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                className="retry-for-key"
                onClick={onRetryForKey}
                data-testid={retryForKeyTestId}
                style={{ display: keyButtonVisible ? "inline-flex" : "none" }}
              >
                Reîncearcă pentru cheie 🔑
              </button>

              {practiceResetVisible ? (
                <button
                  type="button"
                  className="retry-for-key"
                  onClick={onPracticeReset}
                >
                  Resetează pentru exersare ↺
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
