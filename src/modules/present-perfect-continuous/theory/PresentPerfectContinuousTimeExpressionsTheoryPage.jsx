import React, { useEffect } from "react";
import TenseTimeExpressionsTheoryTemplate from "../../tenses/ui/TenseTimeExpressionsTheoryTemplate.jsx";
import { markTheoryCompleted } from "../present-core/theory-progress.js";
import { presentPerfectContinuousMapPath, presentPerfectContinuousOverviewPath, presentPerfectContinuousRoomPath } from "../present-paths.js";

const SECTION_ID = "time-expressions";

export default function PresentPerfectContinuousTimeExpressionsTheoryPage() {
  useEffect(() => {
    markTheoryCompleted(SECTION_ID);
  }, []);

  return (
    <TenseTimeExpressionsTheoryTemplate
      backTo={presentPerfectContinuousMapPath()}
      backLabel="← Înapoi la harta Present Perfect Continuous"
      title="Present Perfect Continuous – Expresii de timp"
      lead="Expresiile de timp cele mai frecvente pentru Present Perfect Continuous și diferențele care contează în exerciții."
      card1Intro={<>Aceste expresii apar foarte des la Present Perfect Continuous pentru că pun accent pe <strong>durată</strong>.</>}
      card1Content={
        <div className="example-box">
          <h3>Expresii de timp frecvente</h3>
          <ul className="ps-list">
            <li><strong>How long?</strong></li>
            <li><strong>for</strong></li>
            <li><strong>since</strong></li>
            <li><strong>recently</strong></li>
            <li><strong>lately</strong></li>
          </ul>
        </div>
      }
      card2Intro={<>Unele verbe pot apărea atât la Present Perfect, cât și la Present Perfect Continuous, fără diferență de sens.</>}
      card2Content={
        <div className="example-box">
          <h3>Verbe care pot merge în ambele timpuri</h3>
          <p className="ps-text"><strong>live, work, teach, feel</strong> (= a avea o anumită emoție / senzație)</p>
          <ul className="ps-list">
            <li>He has taught Maths for 10 years.</li>
            <li>He has been teaching Maths for 10 years.</li>
          </ul>
        </div>
      }
      card3Intro={<>Aici este diferența-cheie dintre Present Perfect și Present Perfect Continuous.</>}
      card3Content={
        <div className="example-box">
          <h3>Accent pe număr vs. accent pe durată</h3>
          <ul className="ps-list">
            <li><strong>Present Perfect</strong> pune accent pe <strong>număr / frecvență</strong>: I have read this book twice.</li>
            <li><strong>Present Perfect Continuous</strong> pune accent pe <strong>durată</strong>: I have been reading this book for a week.</li>
          </ul>
        </div>
      }
      nextStepsDescription="Acum poți merge spre camerele de expresii de timp sau poți reveni la hartă și overview."
      nextStepActions={[
        { to: presentPerfectContinuousRoomPath("time-expressions", 1), label: "Camera 1 – Expresii de timp" },
        { to: presentPerfectContinuousMapPath(), label: "Harta modulului" },
        { to: presentPerfectContinuousOverviewPath(), label: "Recapitulare / overview" },
      ]}
    />
  );
}
