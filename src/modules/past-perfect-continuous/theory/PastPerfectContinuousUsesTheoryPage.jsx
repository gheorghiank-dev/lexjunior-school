import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../past-perfect-continuous-core/theory-progress.js";
import { pastPerfectContinuousMapPath, pastPerfectContinuousOverviewPath, pastPerfectContinuousRoomPath } from "../past-perfect-continuous-paths.js";
import TenseStructureBox from "../../tenses/ui/TenseStructureBox.jsx";

const SECTION_ID = "uses";

export default function PastPerfectContinuousUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pastPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Past Perfect Continuous"
      title="Past Perfect Continuous – Întrebuințări"
      lead="Când folosim Past Perfect Continuous și ce idee transmite acest timp."
      card1Intro={
        <>
          Ideea principală este <strong>durata unei acțiuni</strong> care a început și s-a desfășurat înaintea altei acțiuni din trecut sau înaintea unui moment din trecut.
        </>
      }
      card1Content={
        <TenseStructureBox title="Ideea-cheie">
          <p className="ps-text">
            <span className="rule-highlight">Past Perfect Continuous pune accent pe proces / durată înaintea unui alt moment din trecut.</span>
          </p>
        </TenseStructureBox>
      }
      card2Intro={<>Acestea sunt cele mai importante întrebuințări pe care trebuie să le recunoști în exerciții.</>}
      card2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Întrebuințarea 1</h3>
            <p className="ps-text">
              Pentru a pune accent pe <strong>durata</strong> unei acțiuni care a început și s-a încheiat în trecut, înaintea altei acțiuni din trecut sau înaintea unui moment specificat din trecut.
            </p>
            <p className="ps-text">
              She <strong>had been working</strong> for 2 hours before she realized how late it was.
            </p>
          </div>
          <div className="rule-box">
            <h3>Întrebuințarea 2</h3>
            <p className="ps-text">
              Pentru o acțiune care a fost în desfășurare pentru o perioadă de timp în trecut, iar <strong>efectul ei era vizibil tot în trecut</strong>.
            </p>
            <p className="ps-text">
              She <strong>had been working</strong> in the garden all morning, so she was very tired.
            </p>
          </div>
        </div>
      }
      card3Intro={<>Aici este diferența care contează cel mai mult când compari timpurile apropiate.</>}
      card3Content={
        <div className="rule-box">
          <h3>Observație importantă</h3>
          <p className="ps-text">
            <strong>Past Perfect Continuous</strong> este echivalentul în trecut pentru <strong>Present Perfect Continuous</strong>.
          </p>
          <p className="ps-text">
            Comparația utilă este aceasta: <strong>Past Perfect</strong> pune accent mai mult pe <strong>rezultat</strong>, iar <strong>Past Perfect Continuous</strong> pe <strong>durată / proces</strong>.
          </p>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de uses sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: pastPerfectContinuousRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: pastPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: pastPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
