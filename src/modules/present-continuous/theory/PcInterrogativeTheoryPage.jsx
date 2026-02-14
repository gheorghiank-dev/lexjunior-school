import React, { useEffect } from "react";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import { Link } from "react-router-dom";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import { PcInterrogativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";


export default function PcInterrogativeTheoryPage() {
  useEffect(() => {
    // gating: mark theory done as soon as the student visits the page
    markTheoryCompleted("interrogative");
  }, []);

  const SECTION_ID = "interrogative";

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Interrogative (Teorie)</h1>
        </div>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Forma interogativă – schelet de bază */}
      <TenseTheorySectionCard
        number="1."
        title="Forma interogativă"
        intro={
          <>
            În Present Continuous, la întrebări aducem{" "}
            <strong>am / is / are</strong> la începutul propoziției:
            <em>Am / Is / Are + subiect + verb-ing?</em>
          </>
        }
        style={{ marginBottom: "1.25rem" }}
      >
                <PcInterrogativeStructureBlock />
      
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
            label: "Începe Camera 1 – Interrogative",
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