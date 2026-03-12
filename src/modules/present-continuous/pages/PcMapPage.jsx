import React, { useEffect, useMemo, useState } from "react";
import TenseMapPage from "../../tenses/ui/TenseMapPage.jsx";
import { isTheoryCompleted as fallbackIsTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcProgressManager as fallbackProgressManager } from "../pc-core/progress-manager.js";
import { PC_ROOMS_PER_SECTION } from "../pc-core/config.js";
import {
  pcOverviewPath,
  pcRoomPath,
  pcTheoryPath,
  pcBadgePath,
} from "../pc-paths.js";
import {
  getPresentContinuousRoomProgressRows,
  getPresentContinuousTheoryProgressRows,
} from "../../../core/platform/present-continuous-progress.js";
import {
  createPresentSimpleHybridProgressManager,
  createPresentSimpleHybridTheoryProgress,
} from "../../../core/platform/present-simple-progress.js";

/**
 * Map sections metadata for Present Continuous.
 * Keeps the same text, test ids and prefixes as the previous PcMapPage.
 */
const PC_MAP_SECTIONS = [
  {
    id: "affirmative",
    title: "Afirmativ",
    description:
      "Recapitulează regulile pentru forma afirmativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-affirmative",
    startTheoryTestId: "pc-start-theory-affirmative",
    roomTestIdPrefix: "pc-room-affirmative",
  },
  {
    id: "negative",
    title: "Negativ",
    description:
      "Recapitulează regulile pentru forma negativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-negative",
    startTheoryTestId: "pc-start-theory-negative",
    roomTestIdPrefix: "pc-room-negative",
  },
  {
    id: "interrogative",
    title: "Interogativ",
    description:
      "Recapitulează regulile pentru forma interogativă înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-interrogative",
    startTheoryTestId: "pc-start-theory-interrogative",
    roomTestIdPrefix: "pc-room-interrogative",
  },
  {
    id: "uses",
    title: "Uses",
    description:
      "Recapitulează regulile pentru întrebuințările Present Continuous înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-uses",
    startTheoryTestId: "pc-start-theory-uses",
    roomTestIdPrefix: "pc-room-uses",
  },
  {
    id: "time-expressions",
    title: "Expresii de timp",
    description:
      "Recapitulează expresiile de timp specifice Present Continuous înainte să intri în camere. După ce deschizi această pagină, drumul de pe hartă se deblochează.",
    pathTestId: "pc-path-time-expressions",
    startTheoryTestId: "pc-start-theory-time-expressions",
    roomTestIdPrefix: "pc-room-time-expressions",
  },
];

/**
 * PcMapPage – Present Continuous map, implemented via the generic TenseMapPage.
 */
export default function PcMapPage() {
  const [roomRows, setRoomRows] = useState([]);
  const [theoryRows, setTheoryRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProgress() {
      try {
        const [loadedRoomRows, loadedTheoryRows] = await Promise.all([
          getPresentContinuousRoomProgressRows(),
          getPresentContinuousTheoryProgressRows(),
        ]);

        if (!isMounted) return;

        setRoomRows(loadedRoomRows);
        setTheoryRows(loadedTheoryRows);
      } catch (error) {
        console.warn(
          "Failed to load Present Continuous progress from platform:",
          error,
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProgress();

    return () => {
      isMounted = false;
    };
  }, []);

  const progressManager = useMemo(() => {
    return createPresentSimpleHybridProgressManager({
      roomRows,
      fallbackProgressManager,
      sections: PC_MAP_SECTIONS,
      roomsPerSection: PC_ROOMS_PER_SECTION,
    });
  }, [roomRows]);

  const hybridTheoryProgress = useMemo(() => {
    return createPresentSimpleHybridTheoryProgress({
      theoryRows,
      fallbackTheoryProgress: {
        isTheoryCompleted: fallbackIsTheoryCompleted,
      },
    });
  }, [theoryRows]);

  if (isLoading) {
    return <div style={{ padding: 24 }}>Se încarcă progresul...</div>;
  }

  return (
    <TenseMapPage
      tenseId="present-continuous"
      tenseLabel="Present Continuous"
      overviewPath={pcOverviewPath()}
      progressManager={progressManager}
      isTheoryCompleted={hybridTheoryProgress.isTheoryCompleted}
      roomsPerSection={PC_ROOMS_PER_SECTION}
      mapSections={PC_MAP_SECTIONS}
      buildTheoryPath={pcTheoryPath}
      buildRoomPath={(sectionId, roomNumber) =>
        pcRoomPath(sectionId, roomNumber)
      }
      badgePath={pcBadgePath()}
      certificateTemplateUrl="/pdf/certificates/present-continuous-certificate-template.pdf"
    />
  );
}
