import React, { useEffect } from "react";
import TenseTheoryPageShell from "../../tenses/ui/TenseTheoryPageShell.jsx";
import TenseTheoryNextSteps from "../../tenses/ui/TenseTheoryNextSteps.jsx";
import TenseLexStudyTipCard from "../../tenses/ui/TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "../../tenses/ui/TenseTheorySectionCard.jsx";
import { Link } from "react-router-dom";
import { scrollMainToTop } from "../../../core/platform/browser-dom.js";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import { PcNegativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";


export default function PcNegativeTheoryPage() {
  useEffect(() => {
    // gating: mark theory done as soon as the student visits the page
    markTheoryCompleted("negative");
  }, []);

  const SECTION_ID = "negative";

  const handleScrollToTop = () => {
    scrollMainToTop({ smooth: true });
  };

  return (
    <TenseTheoryPageShell className="page page-pastel">
      <header className="page-header">
        <div className="page-header-main">
          <h1 className="page-title">Present Continuous – Negative (Teorie)</h1>
        </div>
      </header>

      {/* Lex Junior – Study Tip */}
      <TenseLexStudyTipCard />

      {/* 1. Forma negativă – schelet de bază */}
      <TenseTheorySectionCard
        number="1."
        title="Forma negativă"
        intro={
          <>
            În Present Continuous, la negativ folosim{" "}
            <strong>am / is / are + not</strong> + verb-ing pentru acțiuni care{" "}
            <strong>nu</strong> se întâmplă acum sau în perioada aceasta.
          </>
        }
        style={{ marginBottom: "1.25rem" }}
      >
                <PcNegativeStructureBlock />
      
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
            label: "Începe Camera 1 – Negative",
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