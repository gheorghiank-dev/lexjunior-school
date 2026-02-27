import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../../../styles/map.css";
import {
  computeRoomStatus,
  buildKeysInfoBySection,
  buildTotalKeysMeta,
  buildSectionOverview,
} from "../../../core/progress/gating-rules.js";
import { isSchoolMode } from "../../../modes/mode-registry.js";
import {
  SchoolStudentNameCard,
  SchoolCertificateCard,
} from "../../../modes/school/index.js";

/**
 * Generic final badge card for any tense map.
 */
function TenseMapFinalCard({ badgePath, progressManager }) {
  const { obtainedKeys, totalRequired, hasAllKeys } =
    buildTotalKeysMeta(progressManager);

  let hasBadge = false;
  try {
    const badgeState = progressManager.getRoomState("badge", 1);
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
        to={badgePath}
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

/**
 * Generic section path card + list of room nodes for a tense.
 */
function TenseMapSection({
  sectionId,
  title,
  description,
  theoryDone,
  overview,
  obtainedKeys,
  totalRooms,
  pathTestId,
  startTheoryTestId,
  roomTestIdPrefix,
  buildTheoryPath,
  buildRoomPath,
}) {
  const theoryPath = buildTheoryPath(sectionId);

  const rooms = Array.from({ length: totalRooms }, (_, idx) => {
    const roomNumber = idx + 1;
    const { status, state } = computeRoomStatus(overview, theoryDone, idx);
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

    const roomPath = buildRoomPath(sectionId, roomNumber);

    if (!theoryDone || status === "locked") {
      return (
        <div
          key={roomNumber}
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
  });

  return (
    <article className="map-path" data-testid={pathTestId}>
      <div className="map-path-header">
        <h2 className="map-path-title">{title}</h2>
        <div className="map-path-meta">
          <span className="map-path-meta-item">
            Camere: {obtainedKeys}/{totalRooms}
          </span>
        </div>
      </div>

      <div className="map-path-content">
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

          <div className="map-nodes">{rooms}</div>
        </div>
      </div>
    </article>
  );
}

/**
 * TenseMapPage – generic hartă pentru un timp, folosită de toate timpurile.
 *
 * Props:
 *  - tenseId: string (ex. "present-continuous")
 *  - tenseLabel: string (ex. "Present Continuous")
 *  - overviewPath: string (link către pagina de overview)
 *  - progressManager: manager de progres pentru timp
 *  - isTheoryCompleted: (sectionId) => boolean
 *  - roomsPerSection: numărul de camere per secțiune
 *  - mapSections: [{ id, title, description, pathTestId, startTheoryTestId, roomTestIdPrefix }]
 *  - buildTheoryPath: (sectionId) => string
 *  - buildRoomPath: (sectionId, roomNumber) => string
 *  - badgePath: string
 *  - certificateTemplateUrl: string (pentru School Mode)
 */
export default function TenseMapPage({
  tenseId,
  tenseLabel,
  overviewPath,
  progressManager,
  isTheoryCompleted,
  roomsPerSection,
  mapSections,
  buildTheoryPath,
  buildRoomPath,
  badgePath,
  certificateTemplateUrl,
}) {
  const TOTAL_ROOMS = roomsPerSection;

  const theoryDoneBySection = useMemo(() => {
    const result = {};
    for (const section of mapSections) {
      const id = section.id;
      try {
        result[id] = isTheoryCompleted(id) === true;
      } catch (e) {
        result[id] = false;
      }
    }
    return result;
  }, [mapSections, isTheoryCompleted]);

  const overviewBySection = useMemo(() => {
    const result = {};
    for (const section of mapSections) {
      const id = section.id;
      result[id] = buildSectionOverview(progressManager, id, TOTAL_ROOMS);
    }
    return result;
  }, [mapSections, progressManager, TOTAL_ROOMS]);

  const keysInfoBySection = useMemo(
    () => buildKeysInfoBySection(progressManager),
    [progressManager],
  );

  const mapTitle = `${tenseLabel} – Hartă`;

  return (
    <main className="page page-pastel map-wrapper">
      <header className="map-header">
        <h1 className="page-title">{mapTitle}</h1>
        <p className="page-subtitle" style={{ marginTop: "0.4rem" }}>
          Scaffold pentru toate camerele {tenseLabel}. Începi cu teoria, apoi
          parcurgi camerele în ordine.
        </p>

        <div className="map-overview-row">
          <Link to={overviewPath} className="map-overview-link">
            Overview
          </Link>
        </div>

        {isSchoolMode() ? (
          <>
            <SchoolStudentNameCard tenseId={tenseId} title="School Mode" />
            <SchoolCertificateCard
              tenseId={tenseId}
              tenseLabel={tenseLabel}
              templateUrl={certificateTemplateUrl}
            />
          </>
        ) : null}
      </header>

      <section className="map-main">
        <div className="map-grid">
          {mapSections.map((section) => {
            const id = section.id;
            const keysInfo = keysInfoBySection[id] || {
              obtainedKeys: 0,
              totalRooms: TOTAL_ROOMS,
              hasAllKeys: false,
            };

            return (
              <TenseMapSection
                key={id}
                sectionId={id}
                title={section.title}
                description={section.description}
                theoryDone={theoryDoneBySection[id]}
                overview={overviewBySection[id]}
                obtainedKeys={keysInfo.obtainedKeys ?? 0}
                totalRooms={TOTAL_ROOMS}
                pathTestId={section.pathTestId}
                startTheoryTestId={section.startTheoryTestId}
                roomTestIdPrefix={section.roomTestIdPrefix}
                buildTheoryPath={buildTheoryPath}
                buildRoomPath={buildRoomPath}
              />
            );
          })}
        </div>

        <TenseMapFinalCard
          badgePath={badgePath}
          progressManager={progressManager}
        />

        <div className="map-info">
          <Link to="/grammar/tenses" className="btn btn-outline">
            ← Înapoi la Grammar Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
