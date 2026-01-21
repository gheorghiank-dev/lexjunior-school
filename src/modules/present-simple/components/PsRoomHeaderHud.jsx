import React from "react";
import { Link } from "react-router-dom";
import RoomHud from "../../../shared/components/RoomHud.jsx";
import { psMapPath } from "../ps-paths.js";

/**
 * Header + back links + HUD + butoanele:
 * - "Reîncearcă pentru cheie"
 * - "Resetează pentru exersare" (vizibil doar când camera are cheia)
 *
 * Refolosit în camerele Present Simple.
 */
export function PsRoomHeaderHud({
  roomNumber,
  sectionLabel,
  theoryRoute,
  hudRootRef,
  onRetryForKey,
  keyButtonVisible,
  // noul feature global
  practiceResetVisible,
  onPracticeReset,
}) {
  const pageTitle = `Camera ${roomNumber} – Present Simple ${sectionLabel}`;
  const roomLabel = `Camera ${roomNumber}`;

  return (
    <>
      {/* HUD extins – titlu cameră */}
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title" style={{ textAlign: "center" }}>
            {pageTitle}
          </h1>
        </div>
      </header>

      {/* butoane înapoi + HUD */}
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
          <Link to={theoryRoute} className="btn btn-outline">
            ← Înapoi la teorie
          </Link>

          <Link to={psMapPath()} className="btn btn-outline">
            ← Înapoi la hartă
          </Link>
        </div>

        <RoomHud
          ref={hudRootRef}
          sectionLabel={sectionLabel}
          roomLabel={roomLabel}
          actions={
            <>
              {/* Reîncearcă pentru cheie – logică existentă, vizibil doar când keyButtonVisible */}
              <button
                type="button"
                className="retry-for-key"
                onClick={onRetryForKey}
                data-testid="ps-retry-for-key"
                style={{
                  display: keyButtonVisible ? "inline-flex" : "none",
                }}
              >
                Reîncearcă pentru cheie 🔑
              </button>

              {/* Resetează pentru exersare – nou, vizibil doar când camera are cheia */}
              {practiceResetVisible && (
                <button
                  type="button"
                  className="retry-for-key"
                  onClick={onPracticeReset}
                >
                  Resetează pentru exersare ↺
                </button>
              )}
            </>
          }
        />
      </section>
    </>
  );
}
