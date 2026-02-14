import React from "react";
import { Link } from "react-router-dom";
import RoomHud from "../../shared/components/RoomHud.jsx";

/**
 * RoomHeaderHud v2
 *
 * Tense-agnostic header for all room pages.
 * Combines:
 *  - page title
 *  - optional back links to theory / map
 *  - generic RoomHud (progress + key state + message)
 *  - key/practice controls rendered via `actions`
 *
 * This component is meant to be used by tense-specific shells
 * (e.g. TenseRoomHeaderHud, PsRoomHeaderHud in a future refactor),
 * so that the HUD markup and behaviour stay identical across tenses.
 */
export default function RoomHeaderHud({
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
  const resolvedRoomLabel = roomLabel || "";
  const resolvedRetryTestId = retryForKeyTestId || "retry-for-key";

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

        <RoomHud
          ref={hudRootRef}
          sectionLabel={sectionLabel}
          roomLabel={resolvedRoomLabel}
          actions={
            <>
              <button
                type="button"
                className="retry-for-key"
                onClick={onRetryForKey}
                data-testid={resolvedRetryTestId}
                style={{
                  display: keyButtonVisible ? "inline-flex" : "none",
                }}
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
            </>
          }
        />
      </section>
    </>
  );
}
