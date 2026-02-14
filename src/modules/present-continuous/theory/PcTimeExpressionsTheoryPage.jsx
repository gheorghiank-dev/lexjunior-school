import React, { useEffect } from "react";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import { Link } from "react-router-dom";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import { PcTimeExpressionsStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";


export default function PcTimeExpressionsTheoryPage() {
  useEffect(() => {
    // Gating: marcăm teoria pentru expresiile de timp ca fiind citită.
    markTheoryCompleted("time-expressions");
  }, []);

  const SECTION_ID = "time-expressions";

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Time Expressions (Teorie)</h1>
        </div>
        <p className="page-lead">
          Aici vom aduna expresiile de timp specifice pentru Present Continuous.
          Momentan este doar o pagină de schelet.
        </p>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Expresii de timp – schelet pentru Present Continuous */}
      <TenseTheorySectionCard
        number="1."
        title="Schelet de expresii de timp"
        intro={
          <>
            Aici vom aduna expresiile de timp specifice pentru{" "}
            <strong>Present Continuous</strong>. Deocamdată este doar un schelet
            de bază pe care îl vom completa mai târziu.
          </>
        }
        style={{ marginBottom: "1.25rem" }}
      >
                <PcTimeExpressionsStructureBlock />
      
</TenseTheorySectionCard>

      <TenseTheoryNextSteps
        actions={[
          {
            key: "scroll-top",
            label: "Înapoi la prezentare",
            variant: "secondary",
            onClick: handleScrollToTop,
          },
          {
            to: pcRoomPath(SECTION_ID, 1),
            label: "Începe Camera 1 – Time Expressions",
            variant: "primary",
          },
          {
            to: pcMapPath(),
            label: "Mergi la harta Present Continuous",
            variant: "outline",
          },
          {
            to: pcOverviewPath(),
            label: "Vezi recapitularea Present Continuous",
            variant: "secondary",
          },
        ]}
      />
    </TenseTheoryPageShell>
  );
}