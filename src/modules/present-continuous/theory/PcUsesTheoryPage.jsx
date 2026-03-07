import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcOverviewPath, pcRoomPath } from "../pc-paths.js";
import { PcUsesStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PcUsesTheoryPage() {
  useEffect(() => { markTheoryCompleted(SECTION_ID); }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pcMapPath()}
      backLabel="← Înapoi la harta Present Continuous"
      title="Present Continuous – Întrebuințări (Teorie clasică)"
      lead="Present Continuous apare când accentul cade pe acțiuni în desfășurare, situații temporare sau planuri apropiate de momentul prezent."
      card1Intro={<>Present Continuous vorbește despre ce se întâmplă <strong>acum</strong> sau în jurul momentului prezent.</>}
      card1Content={<PcUsesStructureBlock />}
      card2Intro={<>Întrebuințările de bază apar mereu în aceleași familii de situații.</>}
      card2Content={
        <div className="columns-2">
          <div className="example-box">
            <h3>Main uses</h3>
            <ul className="ps-mini-list">
              <li>acțiuni în desfășurare: <strong>She is doing her homework now.</strong></li>
              <li>situații temporare: <strong>I am staying with my aunt this week.</strong></li>
            </ul>
          </div>
          <div className="example-box">
            <h3>More uses</h3>
            <ul className="ps-mini-list">
              <li>schimbări / dezvoltări: <strong>The weather is getting warmer.</strong></li>
              <li>aranjamente viitoare: <strong>We are meeting them tomorrow.</strong></li>
            </ul>
          </div>
        </div>
      }
      card3Intro={<>Compară atent cu Present Simple: acolo ai rutină; aici ai desfășurare sau temporar.</>}
      card3Content={
        <div className="rule-box">
          <h3>Compare carefully</h3>
          <ul className="ps-mini-list">
            <li><strong>I work in a bank.</strong> = situație generală / stabilă.</li>
            <li><strong>I am working in a bank this summer.</strong> = situație temporară.</li>
            <li>Nu uita verbul <strong>to be</strong> și forma în <strong>-ing</strong>.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți trece la camerele de uses sau poți revedea harta și recapitularea modulului."
      nextStepActions={[
        { to: pcRoomPath('uses', 1), label: 'Camera 1 – Întrebuințări' },
        { to: pcMapPath(), label: 'Harta modulului' },
        { to: pcOverviewPath(), label: 'Recapitulare / overview' },
      ]}
    />
  );
}
