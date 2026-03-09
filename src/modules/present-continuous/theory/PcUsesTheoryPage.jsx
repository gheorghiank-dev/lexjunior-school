import React, { useEffect } from "react";
import TenseUsesTheoryTemplate from "../../tenses/ui/TenseUsesTheoryTemplate.jsx";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { pcMapPath, pcOverviewPath, pcRoomPath } from "../pc-paths.js";
import { PcUsesStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "uses";

export default function PcUsesTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseUsesTheoryTemplate
      backTo={pcMapPath()}
      backLabel="← Înapoi la harta Present Continuous"
      title="Present Continuous – Întrebuințări"
      lead="Present Continuous se folosește pentru acțiuni în desfășurare, situații temporare, aranjamente viitoare și situații în schimbare."
      card1Intro={
        <>
          Mai întâi, reține ideea generală: Present Continuous vorbește despre ceea ce se întâmplă <strong>acum</strong> sau în jurul momentului vorbirii.
        </>
      }
      card1Content={<PcUsesStructureBlock />}
      card2Intro={
        <>
          Iată întrebuințările de bază ale acestui timp.
        </>
      }
      card2Content={
        <div className="lj-structure-box ps-structure-box">
          <div className="columns-2">
            <div>
              <h3 className="lj-structure-title">Întrebuințări 1–3</h3>
              <ul className="ps-mini-list">
                <li>acțiuni în desfășurare în momentul vorbirii: <strong>I am doing the washing up now.</strong></li>
                <li>acțiuni temporare, în desfășurare în jurul momentului vorbirii: <strong>I am doing a course in programming this month.</strong></li>
                <li>cu <strong>always, constantly, frequently</strong> pentru a exprima enervarea: <strong>You are constantly arriving late for our meetings.</strong></li>
              </ul>
            </div>
            <div>
              <h3 className="lj-structure-title">Întrebuințări 4–5</h3>
              <ul className="ps-mini-list">
                <li>aranjamente fixe în viitor: <strong>Mary and I are flying to Madrid on business next week.</strong></li>
                <li>situații în schimbare sau dezvoltare: <strong>The climate is getting warmer and warmer every year.</strong></li>
              </ul>
            </div>
          </div>
        </div>
      }
      card3Intro={
        <>
          Ai grijă la nuanță: aici nu vorbim despre rutină, ci despre desfășurare, temporar sau schimbare.
        </>
      }
      card3Content={
        <div className="lj-structure-box ps-structure-box">
          <h3 className="lj-structure-title">Observații utile</h3>
          <ul className="ps-mini-list">
            <li>Pentru obiceiuri și rutină folosim, de obicei, <strong>Present Simple</strong>.</li>
            <li>Pentru planuri deja aranjate în viitor putem folosi <strong>Present Continuous</strong>.</li>
            <li>Cu <strong>always / constantly / frequently</strong>, Present Continuous exprimă adesea iritare sau plângere.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Dacă ai înțeles întrebuințările, poți trece la camerele de uses, la hartă sau la overview."
      nextStepActions={[
        { to: pcRoomPath("uses", 1), label: "Camera 1 – Întrebuințări" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
