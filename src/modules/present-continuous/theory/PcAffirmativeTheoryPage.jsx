import React, { useEffect } from "react";
import { markTheoryCompleted } from "../pc-core/theory-progress.js";
import {
  PC_BASE_PATH,
  pcMapPath,
  pcRoomPath,
  pcOverviewPath,
} from "../pc-paths.js";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import TenseAffirmativeTheoryTemplate from "../../tenses/ui/TenseAffirmativeTheoryTemplate.jsx";
import { PcAffirmativeStructureBlock } from "../components/PcPresentContinuousStructureBlocks.jsx";

const SECTION_ID = "affirmative";

export default function PcAffirmativeTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID).catch((err) => {
      console.error(
        "Failed to mark Present Continuous affirmative theory as completed:",
        err,
      );
    });
  }, []);

  return (
    <TenseAffirmativeTheoryTemplate
      backTo={PC_BASE_PATH}
      backLabel="← Înapoi la modulul Present Continuous"
      title="Present Continuous – Afirmativ"
      lead="Reguli, exemple și explicații clare pentru formarea lui Present Continuous la afirmativ."
      section1Intro={
        <>
          La afirmativ, Present Continuous se formează cu{" "}
          <strong>subiect + am / are / is + verb + -ing</strong>.
        </>
      }
      section1Content={
        <>
          <PcAffirmativeStructureBlock />
          <div className="example-box">
            <h3>Exemple</h3>
            <ul className="ps-list">
              <li>
                <LexTtsButton text="He is working." /> He is working.
              </li>
              <li>
                <LexTtsButton text="I am dancing." /> I am dancing.
              </li>
              <li>
                <LexTtsButton text="She is lying." /> She is lying.
              </li>
              <li>
                <LexTtsButton text="He is stopping." /> He is stopping.
              </li>
              <li>
                <LexTtsButton text="You are travelling." /> You are travelling.
              </li>
            </ul>
          </div>
        </>
      }
      section2Title="Cum adăugăm terminația -ing"
      section2Intro={
        <>
          La toate persoanele folosim verbul cu <strong>-ing</strong>, dar forma
          scrisă urmează câteva reguli importante.
        </>
      }
      section2Content={
        <div className="ps-rules-grid">
          <div>
            <h3 className="ps-rules-title">1. Doar adăugăm -ing</h3>
            <ul className="ps-list">
              <li>
                work → <strong>working</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="ps-rules-title">2. Dacă verbul se termină în -e</h3>
            <ul className="ps-list">
              <li>
                dance → <strong>dancing</strong>
              </li>
              <li>
                Excepție: see → <strong>seeing</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="ps-rules-title">3. -ie devine -y + ing</h3>
            <ul className="ps-list">
              <li>
                lie → <strong>lying</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="ps-rules-title">
              4. Model CVC: dublăm consoana finală
            </h3>
            <ul className="ps-list">
              <li>
                stop → <strong>stopping</strong>
              </li>
              <li>
                Excepții: open → <strong>opening</strong>, throw →{" "}
                <strong>throwing</strong>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="ps-rules-title">5. Uneori se dublează -l</h3>
            <ul className="ps-list">
              <li>
                travel → <strong>travelling</strong>
              </li>
              <li>
                Excepție: feel → <strong>feeling</strong>
              </li>
            </ul>
          </div>
        </div>
      }
      mistakesIntro={
        <>
          Cele mai frecvente greșeli apar când lipsește auxiliarul{" "}
          <strong>to be</strong> sau când verbul nu este pus corect la forma cu{" "}
          <strong>-ing</strong>.
        </>
      }
      mistakes={[
        { wrong: "She watching TV.", correct: "She is watching TV." },
        { wrong: "I am dance now.", correct: "I am dancing now." },
        { wrong: "He is lieing.", correct: "He is lying." },
        { wrong: "They are stoping.", correct: "They are stopping." },
      ]}
      nextStepsDescription="Dacă regula este clară, poți merge la prima cameră, la hartă sau la overview."
      nextStepActions={[
        { to: pcRoomPath(SECTION_ID, 1), label: "Camera 1 – Afirmativ" },
        { to: pcMapPath(), label: "Harta modulului" },
        { to: pcOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
