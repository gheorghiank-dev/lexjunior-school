import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import {
  PC_BASE_PATH,
  pcMapPath,
  pcRoomPath,
  pcOverviewPath,
} from "../pc-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import { PcInterrogativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "interrogative";

export default function PcInterrogativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID).catch((err) => {
      console.error(
        "Failed to mark Present Continuous interrogative theory as completed:",
        err,
      );
    });
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Interogativ"
      lead="Reguli, exemple și răspunsuri scurte pentru întrebările în Present Continuous."
      section1Intro={
        <>
          La interogativ mutăm auxiliarul <strong>am / are / is</strong> la
          începutul propoziției.
        </>
      }
      section1Content={
        <>
          <PcInterrogativeStructureBlock />
          <div className="example-box">
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>Am I talking?</li>
              <li>Are you talking?</li>
              <li>Is he talking?</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          Învață și răspunsurile scurte, fiindcă apar foarte des în conversație.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Răspunsuri scurte afirmative</h3>
            <ul className="ps-mini-list">
              <li>Yes, I am.</li>
              <li>Yes, we / you / they are.</li>
              <li>Yes, he / she / it is.</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Răspunsuri scurte negative</h3>
            <ul className="ps-mini-list">
              <li>No, I&apos;m not.</li>
              <li>No, we / you / they aren&apos;t.</li>
              <li>No, he / she / it isn&apos;t.</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={
        <>
          Ai grijă la ordinea cuvintelor: auxiliarul vine primul, apoi
          subiectul, apoi verbul cu <strong>-ing</strong>.
        </>
      }
      mistakes={[
        { wrong: "You are talking?", correct: "Are you talking?" },
        { wrong: "Is she talk now?", correct: "Is she talking now?" },
        {
          wrong: "Are they listening? Yes, they is.",
          correct: "Are they listening? Yes, they are.",
        },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la overview."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
