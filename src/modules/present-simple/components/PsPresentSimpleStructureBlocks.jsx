import React from "react";

/**
 * Date comune pentru Întrebuințări (Uses)
 * – folosite și în Overview, și în paginile de teorie.
 */
export const PRESENT_SIMPLE_USES_TITLES = [
  "Rutine și obiceiuri",
  "Adevăruri general valabile și legi ale naturii",
  "Programe fixe / orare (uneori cu valoare de viitor)",
  "Situații și stări permanente",
  "Instrucțiuni, rețete și direcții",
  "Comentarii sportive, transmisiuni live și indicații scenice",
  "Titluri de ziar",
  "Recenzii de filme / cărți / emisiuni",
];

/**
 * Date comune pentru Expresii de timp
 * – folosite în teoria Present Simple și în Overview.
 */
export const PRESENT_SIMPLE_TIME_EXPRESSIONS = {
  every: "every day / week / month / year / weekend / Wednesday",
  inPhrase: "in the morning / afternoon / evening",
  atPhrase: "at noon / night",
  onPhrase: "on Mondays / weekends",
};

export const PRESENT_SIMPLE_FREQUENCY_ADVERBS = [
  { label: "always", approx: "100%" },
  { label: "usually", approx: "~75%" },
  { label: "often", approx: "~50%" },
  { label: "sometimes", approx: "~25%" },
  { label: "rarely / seldom", approx: "~10%" },
  { label: "never / hardly ever", approx: "0%" },
];

/**
 * Blocul de structură pentru Present Simple – Afirmativ.
 * (Același text va fi folosit și în teorie, și în overview.)
 */
export function PsAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="ps-structure-title">Structură generală</h3>

      <p className="ps-text">
        <span className="rule-highlight">Subiect + verb (forma de bază)</span>
      </p>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + verb +{" "}
          <span className="rule-highlight-emphasis">-s / -es</span>
        </span>{" "}
        <span className="ps-structure-note">
          (pentru <strong>he / she / it</strong>)
        </span>
      </p>
    </div>
  );
}

/**
 * Blocul de structură pentru Present Simple – Negativ.
 * Folosit atât în pagina de teorie, cât și în Overview.
 */
export function PsNegativeStructureBlock() {
  return (
    <div className="lj-structure-box ps-structure-box">
      <h3 className="ps-structure-title">Structură generală</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect +{" "}
          <span className="rule-highlight-emphasis">do not (don&apos;t)</span> +
          verb (forma de bază)
        </span>
      </p>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect +{" "}
          <span className="rule-highlight-emphasis">
            does not (doesn&apos;t)
          </span>{" "}
          + verb (forma de bază)
        </span>{" "}
        <span className="ps-structure-note">
          (pentru <strong>he / she / it</strong>)
        </span>
      </p>
    </div>
  );
}

/**
 * Blocul de structură pentru Present Simple – Interogativ.
 * Include și Yes/No, și Wh-questions.
 */
export function PsInterrogativeStructureBlock() {
  return (
    <>
      <div className="lj-structure-box ps-structure-box">
        <h3 className="ps-structure-title">
          Structură generală (Yes / No Questions)
        </h3>

        <p className="ps-text">
          <span className="rule-highlight">
            <span className="rule-highlight-emphasis">Do</span> + subiect + verb
            (forma de bază) + ?
          </span>
        </p>

        <p className="ps-text">
          <span className="rule-highlight">
            <span className="rule-highlight-emphasis">Does</span> + subiect +
            verb (forma de bază) + ?
          </span>{" "}
          <span className="ps-structure-note">
            (pentru <strong>he / she / it</strong>)
          </span>
        </p>
      </div>

      <div className="lj-structure-box ps-structure-box">
        <h3 className="ps-structure-title">
          Structură generală (Wh-word Questions)
        </h3>

        <p className="ps-text">
          <span className="rule-highlight">
            <span className="rule-highlight-emphasis">Wh-word + do / does</span>{" "}
            + subiect + verb (forma de bază) + restul propoziției ?
          </span>{" "}
          <span className="ps-structure-note">
            (Where, When, What, Why, How often... )
          </span>
        </p>
      </div>
    </>
  );
}

/**
 * Blocul special pentru Întrebuințări (Overview + teorie Uses).
 * Layout-ul galben cu "pills" numerotate.
 */
export function PsUsesStructureBlock() {
  return (
    <div className="ps-structure-box ps-uses-structure">
      <h3 className="ps-structure-title">Folosim Present Simple pentru:</h3>

      <ul className="ps-uses-list">
        {PRESENT_SIMPLE_USES_TITLES.map((label, index) => (
          <li key={index} className="ps-uses-pill">
            {index + 1}. {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Blocul special pentru Expresii de timp (Overview + teorie Time Expressions).
 *
 * Conține aceleași expresii și adverbe de frecvență, într-un layout compact
 * cu "pills". Este sursa unică de adevăr pentru recap + teoria secțiunii 1.
 */
export function PsTimeExpressionsStructureBlock() {
  const t = PRESENT_SIMPLE_TIME_EXPRESSIONS;
  const frequencyLabels = PRESENT_SIMPLE_FREQUENCY_ADVERBS.map(
    (item) => item.label,
  ).join(", ");

  return (
    <div className="ps-structure-box ps-time-structure">
      <h3 className="ps-structure-title">Expresii de timp</h3>

      <ul className="ps-time-list">
        <li className="ps-time-pill">
          <span className="rule-highlight-emphasis">every</span>{" "}
          {t.every.replace("every ", "")}
        </li>

        <li className="ps-time-pill">
          <span className="rule-highlight-emphasis">in</span>{" "}
          {t.inPhrase.replace("in ", "")}
        </li>

        <li className="ps-time-pill">
          <span className="rule-highlight-emphasis">at</span>{" "}
          {t.atPhrase.replace("at ", "")}
        </li>

        <li className="ps-time-pill">
          <span className="rule-highlight-emphasis">on</span>{" "}
          {t.onPhrase.replace("on ", "")}
        </li>

        <li className="ps-time-pill">
          <span className="rule-highlight-emphasis">
            Adverbe de frecvență:
          </span>{" "}
          {frequencyLabels}
        </li>
      </ul>
    </div>
  );
}
