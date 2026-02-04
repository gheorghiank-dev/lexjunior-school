import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { isTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcProgressManager } from "../pc-core/progress-manager.js";
import { PC_ROOMS_PER_SECTION } from "../pc-core/config.js";
import "../../../styles/map.css";
import { isSchoolMode } from "../../../modes/mode-registry.js";
import { SchoolStudentNameCard, SchoolCertificateCard } from "../../../modes/school/index.js";
import { pcOverviewPath, pcRoomPath, pcTheoryPath, pcBadgePath } from "../pc-paths.js";

const TENSE_ID = "present-continuous";
const TENSE_LABEL = "Present Continuous";
const TOTAL_ROOMS = PC_ROOMS_PER_SECTION;

// ---------- Helpers ----------
function safeIsTheoryCompleted(sectionId) {
  try {
    return isTheoryCompleted(sectionId);
  } catch (e) {
    return false;
  }
}

function safeGetSectionOverview(sectionId) {
  try {
    return pcProgressManager.getSectionOverview(sectionId, TOTAL_ROOMS) || [];
  } catch (e) {
    return [];
  }
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

function getKeysInfoBySection() {
  const infoById = Object.create(null);
  try {
    const allKeys = pcProgressManager.getAllKeysPerSection();
    for (const section of allKeys || []) {
      if (section?.id) {
        infoById[section.id] = section;
      }
    }
  } catch (e) {
    // ignore
  }
  return infoById;
}

function getTotalKeysMeta() {
  try {
    const { obtainedKeys, totalRequired, hasAllKeys } =
      pcProgressManager.getTotalKeysInfo();
    return { obtainedKeys, totalRequired, hasAllKeys };
  } catch (e) {
    return { obtainedKeys: 0, totalRequired: 0, hasAllKeys: false };
  }
}

// ---------- Final card ----------
function PcFinalCard() {
  const { obtainedKeys, totalRequired, hasAllKeys } = getTotalKeysMeta();

  let hasBadge = false;
  try {
    const badgeState = pcProgressManager.getRoomState("badge", 1);
    hasBadge = badgeState?.passed === true;
  } catch (e) {
    hasBadge = false;
  }

  const metaText =
    totalRequired > 0
      ? `Chei: ${obtainedKeys}/${totalRequired}`
      : "Cheile vor apărea pe măsură ce adăugăm camere.";

  let cardClass = "map-final-card";
  let subtitle = "";
  let title = "Camera finală – Badge";

  if (!hasAllKeys) {
    cardClass += " map-final-card--locked";
    subtitle = "Strânge toate cheile ca să deblochezi provocarea finală.";
    title = "Încă e blocată – mai ai camere de făcut.";
  } else if (hasAllKeys && !hasBadge) {
    subtitle = "Ai toate cheile! Intră în provocarea finală.";
  } else {
    cardClass += " map-final-card--done";
    subtitle =
      "Felicitări! Ai câștigat deja badge-ul. Poți reface provocarea oricând.";
  }

  return (
    <section className="map-final">
      <Link
        to={pcBadgePath()}
        className={cardClass}
        title="Deschide provocarea finală – Badge"
      >
        <div className="map-final-title">{title}</div>
        <div className="map-final-sub">{subtitle}</div>
        <div className="map-final-meta">{metaText}</div>
      </Link>
    </section>
  );
}

// ---------- Path card ----------
function PcMapSection({
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
  const theoryPath = pcTheoryPath(sectionId);

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
            const classNames = ["map-node"];

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

            const roomPath = pcRoomPath(sectionId, roomNumber);

            if (!theoryDone || status === "locked") {
              return (
                <div
                  key={roomNumber}
                  className={classNames.join(" ")}
                  data-testid={testId}
                  data-has-key={hasKeyAttr}
                  title="Completează teoria ca să deblochezi camerele."
                >
                  <div className="map-node-left">
                    <div className="map-node-title">Camera {roomNumber}</div>
                    <div className="map-node-sub">{subText}</div>
                  </div>
                  <div className="map-node-status">{iconText}</div>
                </div>
              );
            }

            return (
              <Link
                key={roomNumber}
                to={roomPath}
                className={classNames.join(" ")}
                data-testid={testId}
                data-has-key={hasKeyAttr}
                title={subText}
              >
                <div className="map-node-left">
                  <div className="map-node-title">Camera {roomNumber}</div>
                  <div className="map-node-sub">{subText}</div>
                </div>
                <div className="map-node-status">{iconText}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </article>
  );
}

// ---------- Page ----------
export default function PcMapPage() {
  const theoryDoneBySection = useMemo(
  () => ({
    affirmative: safeIsTheoryCompleted("affirmative"),
    negative: safeIsTheoryCompleted("negative"),
    interrogative: safeIsTheoryCompleted("interrogative"),
    uses: safeIsTheoryCompleted("uses"),
    "time-expressions": safeIsTheoryCompleted("time-expressions"),
  }),
  [],
);


  const overviewBySection = useMemo(
  () => ({
    affirmative: safeGetSectionOverview("affirmative"),
    negative: safeGetSectionOverview("negative"),
    interrogative: safeGetSectionOverview("interrogative"),
    uses: safeGetSectionOverview("uses"),
    "time-expressions": safeGetSectionOverview("time-expressions"),
  }),
  [],
);


  const keysInfoBySection = useMemo(() => getKeysInfoBySection(), []);

  const MAP_SECTIONS = useMemo(
  () => [
    {
      id: "affirmative",
      title: "Afirmativ",
      description: "Recapitulează regulile pentru forma afirmativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
      pathTestId: "pc-path-affirmative",
      startTheoryTestId: "pc-start-theory-affirmative",
      roomTestIdPrefix: "pc-room-affirmative",
    },
    {
      id: "negative",
      title: "Negativ",
      description: "Recapitulează regulile pentru forma negativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
      pathTestId: "pc-path-negative",
      startTheoryTestId: "pc-start-theory-negative",
      roomTestIdPrefix: "pc-room-negative",
    },
    {
      id: "interrogative",
      title: "Interogativ",
      description:  "Recapitulează regulile pentru forma interogativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
      pathTestId: "pc-path-interrogative",
      startTheoryTestId: "pc-start-theory-interrogative",
      roomTestIdPrefix: "pc-room-interrogative",
    },
    {
      id: "uses",
      title: "uses",
      description: "Recapitulează regulile pentru întrebuințările Prezentului Continuu înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
      pathTestId: "pc-path-uses",
      startTheoryTestId: "pc-start-theory-uses",
      roomTestIdPrefix: "pc-room-uses",
    },
    {
      id: "time-expressions",
      title: "Expresii de Timp",
      description: "Recapitulează regulile pentru expresiile de timp înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
      pathTestId: "pc-path-time-expressions",
      startTheoryTestId: "pc-start-theory-time-expressions",
      roomTestIdPrefix: "pc-room-time-expressions",
    },
  ],
  [],
);

return (
    <main className="page page-pastel map-wrapper">
      <header className="map-header">
        <h1 className="page-title">Present Continuous – Hartă</h1>
        <p className="page-subtitle" style={{ marginTop: "0.4rem" }}>
          Scaffold pentru toate camerele Present Continuous. Începi cu teoria,
          apoi parcurgi camerele în ordine.
        </p>

        <div className="map-overview-row">
          <Link to={pcOverviewPath()} className="map-overview-link">
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
          {MAP_SECTIONS.map((section) => {
            const id = section.id;
            const keysInfo = keysInfoBySection[id] || {
              obtainedKeys: 0,
              totalRooms: TOTAL_ROOMS,
              hasAllKeys: false,
            };

            return (
              <PcMapSection
                key={id}
                sectionId={id}
                title={section.title}
                description={section.description}
                theoryDone={theoryDoneBySection[id]}
                overview={overviewBySection[id]}
                obtainedKeys={keysInfo.obtainedKeys}
                pathTestId={section.pathTestId}
                startTheoryTestId={section.startTheoryTestId}
                roomTestIdPrefix={section.roomTestIdPrefix}
              />
            );
          })}
        </div>

        <PcFinalCard />

        <div className="map-info">
          <Link to="/grammar/tenses" className="btn btn-outline">
            ← Înapoi la Grammar Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
