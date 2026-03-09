import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcOverviewPath, pcRoomPath } from "../pc-paths.js";
import { PcTimeExpressionsStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "time-expressions";

export default function PcTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={pcMapPath()}
      backLabel="← Înapoi la harta Present Continuous"
      title="Present Continuous – Expresii de timp"
      lead="Expresiile de timp te ajută să recunoști rapid dacă acțiunea are loc acum, în perioada aceasta sau într-un plan apropiat."
      card1Intro={
        <>
          Expresiile de timp tipice pentru Present Continuous arată, de obicei, ideea de <strong>acum</strong> sau <strong>în perioada aceasta</strong>.
        </>
      }
      card1Content={<PcTimeExpressionsStructureBlock />}
      card2Intro={
        <>
          Unele expresii apar foarte des în propoziții despre prezent sau despre planuri apropiate.
        </>
      }
      card2Content={
        <div className="lj-structure-box ps-structure-box">
          <div className="columns-2">
            <div>
              <h3 className="lj-structure-title">Expresii frecvente</h3>
              <ul className="ps-mini-list">
                <li>now</li>
                <li>at the moment</li>
                <li>these days</li>
                <li>at present</li>
              </ul>
            </div>
            <div>
              <h3 className="lj-structure-title">Alte indicii utile</h3>
              <ul className="ps-mini-list">
                <li>tonight</li>
                <li>nowadays</li>
                <li>still</li>
              </ul>
            </div>
          </div>
        </div>
      }
      card3Intro={
        <>
          Atenție la poziția lui <strong>still</strong>.
        </>
      }
      card3Content={
        <div className="lj-structure-box ps-structure-box">
          <h3 className="lj-structure-title">Observație importantă</h3>
          <p className="ps-text">
            <strong>Still</strong> stă între verbul auxiliar și verbul principal.
          </p>
          <p className="ps-text">
            Exemplu: <strong>She is still working.</strong>
          </p>
        </div>
      }
      nextStepsDescription="Dacă ai prins expresiile de timp, poți trece la camerele dedicate sau la overview."
      nextStepActions={[
        { to: pcRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
