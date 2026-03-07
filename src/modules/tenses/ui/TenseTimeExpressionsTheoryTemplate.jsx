import React from "react";
import { Link } from "react-router-dom";
import TenseTheoryPageShell from "./TenseTheoryPageShell.jsx";
import TenseLexStudyTipCard from "./TenseLexStudyTipCard.jsx";
import TenseTheorySectionCard from "./TenseTheorySectionCard.jsx";
import TenseTheoryCard from "./TenseTheoryCard.jsx";
import TenseTheoryNextSteps from "./TenseTheoryNextSteps.jsx";

export default function TenseTimeExpressionsTheoryTemplate({
  backTo,
  backLabel,
  title,
  lead,
  card1Title = "Time clues",
  card1Intro,
  card1Content,
  card2Title = "Common time expressions",
  card2Intro,
  card2Content,
  card3Title = "Pattern notes",
  card3Intro,
  card3Content,
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
        title={card1Title}
        intro={card1Intro}
        style={{ marginBottom: "1.75rem" }}
      >
        {card1Content}
      </TenseTheorySectionCard>

      <TenseTheorySectionCard
        number="2."
        title={card2Title}
        intro={card2Intro}
        style={{ marginBottom: "1.75rem" }}
      >
        {card2Content}
      </TenseTheorySectionCard>

      <TenseTheorySectionCard
        number="3."
        title={card3Title}
        intro={card3Intro}
        style={{ marginBottom: "1.75rem" }}
      >
        {card3Content}
      </TenseTheorySectionCard>

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
