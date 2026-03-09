import React, { useEffect } from "react";
import { markTheoryCompleted } from "../ps-core/theory-progress.js";
import {
  PS_BASE_PATH,
  psMapPath,
  psOverviewPath,
  psRoomPath,
} from "../ps-paths.js";
import TenseInterrogativeTheoryTemplate from "../../tenses/ui/TenseInterrogativeTheoryTemplate.jsx";
import LexTtsButton from "../../../shared/exercises/LexTtsButton.jsx";
import { PsInterrogativeStructureBlock } from "../components/PsPresentSimpleStructureBlocks.jsx";

const SECTION_ID = "interrogative";

export default function PsInterrogativeTheoryPage() {
  useEffect(() => {
    try {
      markTheoryCompleted(SECTION_ID);
    } catch {
      // ignore
    }
  }, []);

  return (
    <TenseInterrogativeTheoryTemplate
      backTo={PS_BASE_PATH}
      backLabel="← Înapoi la modulul Present Simple"
      title="Present Simple – Interogativ"
      lead="Învățăm cum să punem întrebări corecte la Present Simple cu Do / Does și verbul la forma de bază."
      section1Intro={
        <>
          La forma interogativă, în Present Simple, aducem auxiliarul <strong>Do / Does</strong>
          la începutul propoziției. După <strong>Do / Does</strong>, verbul rămâne
          întotdeauna în <strong>forma de bază</strong> (fără -s / -es).
        </>
      }
      section1Content={
        <>
          <PsInterrogativeStructureBlock />

          <div className="example-box">
            <h3>Exemple</h3>
            <p className="ps-text" style={{ marginBottom: "0.75rem" }}>
              Ascultă întrebările și repetă cu voce tare.
            </p>
            <ul className="ps-list">
              <li><LexTtsButton text="Do you like apples?" /> Do you like apples?</li>
              <li><LexTtsButton text="Do they live in Cluj?" /> Do they live in Cluj?</li>
              <li><LexTtsButton text="Does he play football?" /> Does he play football?</li>
              <li><LexTtsButton text="Does she speak French?" /> Does she speak French?</li>
              <li><LexTtsButton text="Where do you go on holiday?" /> Where do you go on holiday?</li>
              <li><LexTtsButton text="When do they start school?" /> When do they start school?</li>
            </ul>
          </div>
        </>
      }
      section2Title="2. Răspunsuri scurte (Short Answers)"
      section2Intro={
        <>
          La întrebările cu <strong>Do / Does</strong> răspundem de obicei cu <strong>short answers</strong>
          – răspunsuri scurte cu <strong>Yes / No</strong> + <strong>do / does</strong>.
          În coloana din stânga vezi întrebarea, iar în coloana din dreapta cele două răspunsuri corecte.
        </>
      }
      section2Content={
        <>
          <div className="columns-2">
            <div className="rule-box">
              <h3>Întrebarea</h3>
              <ul className="ps-mini-list">
                <li><LexTtsButton text="Do I play tennis?" /> Do I play tennis?</li>
                <li><LexTtsButton text="Do you like pizza?" /> Do you like pizza?</li>
                <li><LexTtsButton text="Do we live in Bucharest?" /> Do we live in Bucharest?</li>
                <li><LexTtsButton text="Do they go to school by bus?" /> Do they go to school by bus?</li>
                <li><LexTtsButton text="Does he play football?" /> Does he play football?</li>
                <li><LexTtsButton text="Does she read books in English?" /> Does she read books in English?</li>
                <li><LexTtsButton text="Does it rain a lot in autumn?" /> Does it rain a lot in autumn?</li>
              </ul>
            </div>

            <div className="rule-box">
              <h3>Răspunsuri scurte</h3>
              <ul className="ps-mini-list">
                <li>Yes, I do.<br />No, I don&apos;t.</li>
                <li>Yes, you do.<br />No, you don&apos;t.</li>
                <li>Yes, we do.<br />No, we don&apos;t.</li>
                <li>Yes, they do.<br />No, they don&apos;t.</li>
                <li>Yes, he does.<br />No, he doesn&apos;t.</li>
                <li>Yes, she does.<br />No, she doesn&apos;t.</li>
                <li>Yes, it does.<br />No, it doesn&apos;t.</li>
              </ul>
            </div>
          </div>

          <p style={{ marginTop: "0.75rem" }}>
            <strong>Important:</strong> în răspunsurile scurte folosim întotdeauna <em>do / does</em>,
            nu verbul principal.
          </p>
        </>
      }
      mistakesIntro={
        <>
          Cele mai multe greșeli apar atunci când uităm că verbul după <strong>Do / Does</strong>
          rămâne la forma de bază sau când folosim <strong>Do</strong> în loc de <strong>Does</strong>
          pentru <strong>he / she / it</strong>.
        </>
      }
      mistakes={[
        { wrong: "Do he plays football?", correct: "Does he play football?" },
        { wrong: "Does she goes to school?", correct: "Does she go to school?" },
        { wrong: "Do they likes music?", correct: "Do they like music?" },
        { wrong: "Doesn&apos;t he walks to school?", correct: "Doesn&apos;t he walk to school?" },
      ]}
      nextStepsDescription="Când simți că regulile pentru întrebări sunt clare, poți începe camerele de exerciții pentru Present Simple – Interogativ, poți merge la hartă sau la recapitulare."
      nextStepActions={[
        { to: psRoomPath(SECTION_ID, 1), label: "Camera 1 – Interogativ", variant: "primary" },
        { to: psMapPath(), label: "Harta modulului", variant: "outline" },
        { to: psOverviewPath(), label: "Recapitulare", variant: "secondary" },
      ]}
    />
  );
}
