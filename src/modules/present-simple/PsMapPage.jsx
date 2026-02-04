import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../../styles/map.css";

import { progressManager } from "./ps-core/progress-manager.js";
import { ROOMS_PER_SECTION } from "./ps-core/config.js";
import { isTheoryCompleted } from "./ps-core/theory-progress.js";

import { isSchoolMode } from "../../modes/mode-registry.js";
import { SchoolStudentNameCard, SchoolCertificateCard } from "../../modes/school/index.js";

import {
  psBadgePath,
  psOverviewPath,
  psRoomPath,
  psTheoryPath,
} from "./ps-paths.js";

const TOTAL_ROOMS = ROOMS_PER_SECTION;
const TENSE_ID = "present-simple";
const TENSE_LABEL = "Present Simple";

// ---------- Theory completed helpers ----------
function safeIsTheoryCompleted(sectionId) {
  try {
    return isTheoryCompleted(sectionId) === true;
  } catch (e) {
    return false;
  }
}


// ---------- Progress helpers ----------
function getSectionOverview(sectionId) {
  const rooms = [];
  for (let room = 1; room <= TOTAL_ROOMS; room++) {
    try {
      rooms.push(progressManager.getRoomState(sectionId, room));
    } catch (e) {
      rooms.push({ passed: false, hasKey: false });
    }
  }
  return rooms;
}

function computeRoomStatus(overview, theoryDone, roomIndex) {
  const roomNumber = roomIndex + 1;
  const state = overview[roomIndex] || { passed: false, hasKey: false };

  if (!theoryDone) {
    return { status: "locked", state };
  }

  if (roomNumber === 1) {
    if (state.passed) return { status: "done", state };
    return { status: "available", state };
  }

  const prevState = overview[roomIndex - 1] || { passed: false, hasKey: false };

  if (!prevState.passed) return { status: "locked", state };
  if (state.passed) return { status: "done", state };

  return { status: "available", state };
}

function buildKeysInfoBySection() {
  const infoById = Object.create(null);
  try {
    const allKeys = progressManager.getAllKeysPerSection();
    for (const s of allKeys || []) {
      if (s?.id) infoById[s.id] = s;
    }
  } catch (e) {
    // ignore
  }
  return infoById;
}

function getTotalKeysMeta() {
  try {
    return progressManager.getTotalKeysInfo();
  } catch (e) {
    return { obtainedKeys: 0, totalRequired: 0, hasAllKeys: false };
  }
}

// ---------- Final card ----------
function FinalCard() {
  const { obtainedKeys, totalRequired, hasAllKeys } = getTotalKeysMeta();

  let hasBadge = false;
  try {
    const badgeState = progressManager.getRoomState("badge", 1);
    hasBadge = badgeState.passed === true;
  } catch (e) {
    hasBadge = false;
  }

  const metaText =
    totalRequired > 0
      ? `Chei: ${obtainedKeys}/${totalRequired}`
      : "Cheile vor fi disponibile pe măsură ce apar mai multe camere.";

  let cardClass = "map-final-card";
  let subtitle = "";
  let title = "Camera finală – Badge";

  if (!hasAllKeys) {
    cardClass += " map-final-card--locked";
    subtitle = "Se deblochează după ce strângi toate cheile.";
    title = "Încă e blocată. Strânge toate cheile.";
    return (
      <section className="map-final">
        <div className={cardClass} title={title}>
          <div className="map-final-title">Provocarea finală – Badge</div>
          <div className="map-final-sub">{subtitle}</div>
          <div className="map-final-meta">{metaText}</div>
        </div>
      </section>
    );
  }

  if (hasAllKeys && !hasBadge) {
    subtitle = "Ai toate cheile! Intră în provocarea finală.";
  } else {
    cardClass += " map-final-card--done";
    subtitle =
      "Felicitări! Ai câștigat deja badge-ul. Poți reface provocarea oricând.";
  }

  return (
    <section className="map-final">
      <Link
        to={psBadgePath()}
        className={cardClass}
        title="Deschide provocarea finală – Badge"
      >
        <div className="map-final-title">Provocarea finală – Badge</div>
        <div className="map-final-sub">{subtitle}</div>
        <div className="map-final-meta">{metaText}</div>
      </Link>
    </section>
  );
}

function MapPathCard({
  sectionId,
  title,
  description,
  theoryDone,
  overview,
  obtainedKeys,
  pathTestId,
  startTheoryTestId,
  roomTestIdPrefix,
}) {
  const theoryPath = psTheoryPath(sectionId);

  return (
    <article className="map-path" data-testid={pathTestId}>
      <div className="map-path-header">
        <div className="map-path-title">{title}</div>
        <div className="map-path-meta">
          <span className="map-pill">
            🔑 {obtainedKeys || 0}/{TOTAL_ROOMS}
          </span>
        </div>
      </div>

      <div className="map-path-body">
        <p>{description}</p>

        <div className="map-theory-actions">
          <Link
            to={theoryPath}
            className="btn btn-outline btn-sm"
            data-testid={startTheoryTestId}
          >
            Deschide teoria – {title}
          </Link>
        </div>

        <div className="map-rooms">
          {Array.from({ length: TOTAL_ROOMS }).map((_, index) => {
            const roomNumber = index + 1;
            const { status, state } = computeRoomStatus(
              overview,
              theoryDone,
              index,
            );

            const testId = `${roomTestIdPrefix}-${roomNumber}`;
            const hasKeyAttr = state?.hasKey ? "true" : "false";

            let subText = "";
            let iconText = "🔒";
            let classNames = ["map-node"];

            if (!theoryDone) {
              subText = "Fă teoria înainte.";
              iconText = "📘";
              classNames.push("map-node--locked");
            } else if (status === "locked") {
              subText = "Blocat: termină camera anterioară.";
              iconText = "🔒";
              classNames.push("map-node--locked");
            } else if (status === "available") {
              subText = state?.hasKey ? "Ai cheia, poți reface." : "Disponibilă acum.";
              iconText = state?.hasKey ? "🔑" : "▶️";
              classNames.push("map-node--available");
            } else if (status === "done") {
              subText = state?.hasKey ? "Completată + cheie." : "Completată.";
              iconText = state?.hasKey ? "🔑" : "✅";
              classNames.push("map-node--done");
            }

            const content = (
              <>
                <div className="map-node-left">
                  <div className="map-node-title">Camera {roomNumber}</div>
                  <div className="map-node-sub">{subText}</div>
                </div>
                <div className="map-node-status">{iconText}</div>
              </>
            );

            if (!theoryDone) {
              return (
                // IMPORTANT: rooms must NOT auto-navigate to theory when gated.
                // E2E expects we remain on the map; theory is opened explicitly via the button above.
                <div
                  key={roomNumber}
                  className={classNames.join(" ")}
                  data-testid={testId}
                  data-has-key={hasKeyAttr}
                  title="Completează teoria ca să deblochezi camerele."
                >
                  {content}
                </div>
              );
            }

            if (status === "locked") {
              return (
                <div
                  key={roomNumber}
                  className={classNames.join(" ")}
                  data-testid={testId}
                  data-has-key={hasKeyAttr}
                  title="Termină camera anterioară ca să deblochezi."
                >
                  {content}
                </div>
              );
            }

            return (
              <Link
                key={roomNumber}
                to={psRoomPath(sectionId, roomNumber)}
                data-testid={testId}
                data-has-key={hasKeyAttr}
                className={classNames.join(" ")}
                title={
                  status === "done"
                    ? "Deschide camera (poți revedea exercițiile)."
                    : "Intră în camera următoare."
                }
              >
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function PsMapPage() {
  const theoryDoneBySection = useMemo(() => {
    return {
      affirmative: safeIsTheoryCompleted("affirmative"),
      negative: safeIsTheoryCompleted("negative"),
      interrogative: safeIsTheoryCompleted("interrogative"),
      uses: safeIsTheoryCompleted("uses"),
      "time-expressions": safeIsTheoryCompleted("time-expressions"),
    };
  }, []);

  const overviewBySection = useMemo(() => {
    return {
      affirmative: getSectionOverview("affirmative"),
      negative: getSectionOverview("negative"),
      interrogative: getSectionOverview("interrogative"),
      uses: getSectionOverview("uses"),
      "time-expressions": getSectionOverview("time-expressions"),
    };
  }, []);

  const hasBadge = useMemo(() => {
    try {
      const badgeState = progressManager.getRoomState("badge", 1);
      return badgeState?.passed === true;
    } catch (e) {
      return false;
    }
  }, []);

  const keysInfoBySection = useMemo(() => buildKeysInfoBySection(), []);

  const mapSections = useMemo(
    () => [
      {
        id: "affirmative",
        title: "Afirmativ",
        description:
          "Recapitulează regulile pentru forma afirmativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-affirmative",
        startTheoryTestId: "ps-start-theory-affirmative",
        roomTestIdPrefix: "ps-room-affirmative",
      },
      {
        id: "negative",
        title: "Negativ",
        description:
          "Recapitulează regulile pentru forma negativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-negative",
        startTheoryTestId: "ps-start-theory-negative",
        roomTestIdPrefix: "ps-room-negative",
      },
      {
        id: "interrogative",
        title: "Interogativ",
        description:
          "Recapitulează regulile pentru forma interogativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-interrogative",
        startTheoryTestId: "ps-start-theory-interrogative",
        roomTestIdPrefix: "ps-room-interrogative",
      },
      {
        id: "uses",
        title: "Uses",
        description:
          "Recapitulează regulile pentru întrebuințările Prezentului Simplu înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-uses",
        startTheoryTestId: "ps-start-theory-uses",
        roomTestIdPrefix: "ps-room-uses",
      },
      {
        id: "time-expressions",
        title: "Expresii de Timp",
        description:
          "Recapitulează regulile pentru expresiile de timp înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
        pathTestId: "ps-path-time-expressions",
        startTheoryTestId: "ps-start-theory-time-expressions",
        roomTestIdPrefix: "ps-room-time-expressions",
      },
    ],
    [],
  );

  return (
    <main className="page page-pastel">
      <header className="page-header map-header">
        <h1>Present Simple – Escape Room Map</h1>
        <p className="page-subtitle">
          Alege drumul și vezi ce camere sunt deschise, ce camere au cheie și
          când se deblochează provocarea finală.
        </p>

        <div className="map-overview-row">
          <Link to={psOverviewPath()} className="map-overview-link">
            Overview
          </Link>
        </div>

        <section className="card map-info">
          <h2 className="card-title">Game rules – quick overview</h2>
          <p className="card-description">
            Harta îți arată progresul pe fiecare drum. Pentru început, ramura{" "}
            <strong>Affirmative</strong> este activă în varianta React.
          </p>
          <ul className="map-rules-list">
            <li>
              Fiecare drum începe cu <strong>Teoria</strong>. Deschide mai întâi
              teoria, apoi camerele de exerciții.
            </li>
            <li>
              Camerele se deblochează <strong>în ordine</strong>: termină camera
              anterioară ca să o poți deschide pe următoarea.
            </li>
            <li>
              <strong>Piechart-ul</strong> ține cont de{" "}
              <strong>prima încercare</strong> (atât în runda normală, cât și în
              runda de „Reîncearcă pentru cheie”).
            </li>
            <li>
              Pentru <strong>cheie</strong>, folosește butonul{" "}
              <strong>„Reîncearcă pentru cheie”</strong> din cameră și încearcă
              să obții <strong>100%</strong> din prima.
            </li>
          </ul>
        </section>

        {isSchoolMode() ? (
          <>
            <SchoolStudentNameCard tenseId={TENSE_ID} title="School Mode" />
            <SchoolCertificateCard
              tenseId={TENSE_ID}
              tenseLabel={TENSE_LABEL}
              templateUrl="/pdf/certificates/present-simple-certificate-template.pdf"
              locked={!hasBadge}
              lockedReason="Finalizează provocarea finală (Badge) ca să generezi diploma."
            />
          </>
        ) : null}
      </header>

      <section className="map-main">
        <div className="map-grid">
          {mapSections.map((meta) => {
            const keysInfo = keysInfoBySection[meta.id] || { obtainedKeys: 0 };
            const theoryDone = theoryDoneBySection[meta.id] === true;
            const overview = overviewBySection[meta.id] || [];

            return (
              <MapPathCard
                key={meta.id}
                sectionId={meta.id}
                title={meta.title}
                description={meta.description}
                theoryDone={theoryDone}
                overview={overview}
                obtainedKeys={keysInfo.obtainedKeys}
                pathTestId={meta.pathTestId}
                startTheoryTestId={meta.startTheoryTestId}
                roomTestIdPrefix={meta.roomTestIdPrefix}
              />
            );
          })}
        </div>

        <FinalCard />
      </section>
    </main>
  );
}
