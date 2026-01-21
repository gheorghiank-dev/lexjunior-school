import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { isTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcProgressManager } from "../pc-core/progress-manager.js";
import "../../../styles/map.css";
import { isSchoolMode } from "../../../modes/mode-registry.js";
import { SchoolStudentNameCard, SchoolCertificateCard } from "../../../modes/school/index.js";

const TENSE_ID = "present-continuous";
const TENSE_LABEL = "Present Continuous";

export default function PcMapPage() {
  const theoryDone = useMemo(() => {
    try {
      return isTheoryCompleted("basics");
    } catch (e) {
      return false;
    }
  }, []);

  const room1State = useMemo(() => {
    try {
      return pcProgressManager.getRoomState("basics", 1);
    } catch (e) {
      return { passed: false, hasKey: false, firstAttemptScore: null };
    }
  }, []);

  const room1Locked = !theoryDone;
  const room1Class =
    "map-node " +
    (room1Locked
      ? "map-node--locked"
      : room1State.passed
      ? "map-node--done"
      : "map-node--available");

  const keysInfo = useMemo(() => {
    try {
      return pcProgressManager.getTotalKeysInfo();
    } catch (e) {
      return { obtainedKeys: 0, totalRequired: 0, hasAllKeys: false };
    }
  }, []);

  return (
    <main className="page page-pastel map-wrapper">
      <header className="map-header">
        <h1 className="page-title">Present Continuous – Hartă</h1>
        <p className="page-subtitle" style={{ marginTop: "0.4rem" }}>
          (Scaffold Sprint 3) – aici vei avea traseele pentru Present Continuous.
        </p>

        <div className="map-overview-row">
          <Link to="/grammar/tenses/present-continuous/overview" className="map-overview-link">
            Overview
          </Link>
        </div>

        {isSchoolMode() ? (
          <>
            <SchoolStudentNameCard tenseId={TENSE_ID} title="School Mode" />
            <SchoolCertificateCard
              tenseId={TENSE_ID}
              tenseLabel={TENSE_LABEL}
              templateUrl="/pdf/certificates/present-continuous-certificate-template.pdf"
            />
          </>
        ) : null}
      </header>

      <section className="map-main">
        <div className="map-grid">
          <article className="map-path">
            <div className="map-path-header">
              <div className="map-path-title">Basics</div>
              <div className="map-path-meta">
                <span className="map-pill">🔑 {keysInfo.obtainedKeys}/{keysInfo.totalRequired}</span>
                <span className={theoryDone ? "map-pill map-pill--ok" : "map-pill map-pill--warn"}>
                  {theoryDone ? "Teorie ✅" : "Teorie 🔒"}
                </span>
              </div>
            </div>

            <div className="map-path-body">
              <div className="map-theory">
                <div className="map-theory-title">
                  <span>Începe teoria</span>
                  {theoryDone ? <span className="map-pill map-pill--ok">gata</span> : null}
                </div>
                <div className="map-theory-desc">
                  Citește teoria înainte să intri în camere.
                </div>
                <div className="map-theory-actions">
                  <Link to="/grammar/tenses/present-continuous/basics" className="btn btn-soft">
                    Deschide teoria
                  </Link>
                </div>
              </div>

              <div className="map-rooms">
                <Link
                  to="/grammar/tenses/present-continuous/basics/room-1"
                  className={room1Class}
                  aria-disabled={room1Locked}
                  onClick={(e) => {
                    if (room1Locked) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                >
                  <div className="map-node-left">
                    <div className="map-node-title">Camera 1</div>
                    <div className="map-node-sub">Intro – formă de bază</div>
                  </div>
                  <div className="map-node-right">
                    {room1Locked ? "🔒" : room1State.hasKey ? "🔑" : room1State.passed ? "✅" : "→"}
                  </div>
                </Link>
              </div>
            </div>
          </article>
        </div>

        <div className="map-info">
          <Link to="/grammar/tenses" className="btn btn-outline">
            ← Înapoi la Present Continuous
          </Link>
        </div>
      </section>
    </main>
  );
}
