import React from "react";
import { Link } from "react-router-dom";
import TenseTheoryPageShell from "./TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "./TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "./TenseTheorySectionCard.jsx";
import TenseTheoryCommonMistakesCard from "./TenseTheoryCommonMistakesCard.jsx";
import TenseTheoryCard from "./TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "./TenseTheoryNextSteps.jsx";

export default function TenseInterrogativeTheoryTemplate({
  backTo,
  backLabel,
  title,
  lead,
  section1Intro,
  section1Content,
  section2Title = "2. Răspunsuri scurte și modele utile",
  section2Intro,
  section2Content,
  mistakesTitle = "3. Greșeli frecvente în întrebări",
  mistakesIntro,
  mistakes = [],
  nextStepsDescription,
  nextStepActions = [],
}) {
  return (
    <TenseTheoryPageShell>
      <header className="page-header">
        <p className="page-header-kicker">
          <Link to={backTo} className="btn btn-soft ps-back-link">
            {backLabel}
          </Link>
        </p>

        <h1 className="page-title">{title}</h1>
        <p className="page-lead">{lead}</p>
      </header>

      <TenseLexStudyTipCard />

      <TenseTheorySectionCard
        number="1."
        title="Forma interogativă"
        intro={section1Intro}
        style={{ marginBottom: "1.75rem" }}
      >
        {section1Content}
      </TenseTheorySectionCard>

      <TenseTheorySectionCard
        number="2."
        title={section2Title}
        intro={section2Intro}
        style={{ marginBottom: "1.75rem" }}
      >
        {section2Content}
      </TenseTheorySectionCard>

      <TenseTheoryCommonMistakesCard
        title={mistakesTitle}
        intro={mistakesIntro}
        mistakes={mistakes}
        style={{ marginBottom: "1.75rem" }}
      />

      <TenseTheoryCard>
        <h2 className="card-title">4. Unde merg mai departe?</h2>
        {nextStepsDescription ? (
          <p className="card-description">{nextStepsDescription}</p>
        ) : null}
        <TenseTheoryNextSteps actions={nextStepActions} />
      </TenseTheoryCard>
    </TenseTheoryPageShell>
  );
}
