import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import { PC_BASE_PATH, pcMapPath, pcRoomPath, pcOverviewPath } from "../pc-paths.js";
import TenseNegativeTheoryTemplate from "../../tenses/ui/TenseNegativeTheoryTemplate.jsx";
import { PcNegativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "negative";

export default function PcNegativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseNegativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Negativ"
      lead="Reguli și exemple pentru formarea lui Present Continuous la negativ."
      section1Intro={
        <>
          La negativ folosim <strong>subiect + am / are / is + not + verb + -ing</strong>.
        </>
      }
      section1Content={
        <>
          <PcNegativeStructureBlock />
          <div className="example-box">
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>I am not talking.</li>
              <li>You aren&apos;t talking.</li>
              <li>He isn&apos;t talking.</li>
            </ul>
          </div>
        </>
      }
      section2Intro={
        <>
          Reține atât formele lungi, cât și formele scurte ale negativului.
        </>
      }
      section2Content={
        <div className="columns-2">
          <div className="rule-box">
            <h3>Forme lungi</h3>
            <ul className="ps-mini-list">
              <li>am not</li>
              <li>are not</li>
              <li>is not</li>
            </ul>
          </div>
          <div className="rule-box">
            <h3>Forme scurte</h3>
            <ul className="ps-mini-list">
              <li>I&apos;m not</li>
              <li>aren&apos;t</li>
              <li>isn&apos;t</li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={
        <>
          Nu uita de auxiliarul <strong>to be</strong>, de <strong>not</strong> și de forma verbului cu <strong>-ing</strong>.
        </>
      }
      mistakes={[
        { wrong: "She not reading.", correct: "She is not reading." },
        { wrong: "They aren&apos;t play football.", correct: "They aren&apos;t playing football." },
        { wrong: "I am not writeing.", correct: "I am not writing." },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la overview."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Negativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
