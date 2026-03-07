import React from "react";

/**
 * Past Continuous – canonical structure blocks
 */

export function PastContinuousAffirmativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Afirmativ – structura de bază</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <strong>was / were</strong> + verb +
          <span className="rule-highlight-emphasis"> -ing</span>
        </span>
      </p>

      <div className="ps-structure-grid">
        <div>
          <p className="ps-text ps-structure-note-heading">Forme ale lui to be</p>
          <ul className="ps-list">
            <li><strong>I / He / She / It was</strong></li>
            <li><strong>We / You / They were</strong></li>
          </ul>
        </div>

        <div>
          <p className="ps-text ps-structure-note-heading">Exemple</p>
          <ul className="ps-list">
            <li>I <strong>was listening</strong> to music.</li>
            <li>She <strong>was dancing</strong>.</li>
            <li>They <strong>were playing</strong> outside.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PastContinuousNegativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Negativ – structura de bază</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          Subiect + <strong>was / were</strong> + <strong>not</strong> + verb +
          <span className="rule-highlight-emphasis"> -ing</span>
        </span>
      </p>

      <ul className="ps-mini-list">
        <li>I <strong>was not talking</strong>.</li>
        <li>He <strong>wasn&apos;t reading</strong>.</li>
        <li>They <strong>weren&apos;t studying</strong>.</li>
      </ul>

      <p className="ps-text">
        Forme scurte: <strong>wasn&apos;t</strong>, <strong>weren&apos;t</strong>.
      </p>
    </div>
  );
}

export function PastContinuousInterrogativeStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Interogativ – structura de bază</h3>

      <p className="ps-text">
        <span className="rule-highlight">
          <strong>Was / Were</strong> + subiect + verb +
          <span className="rule-highlight-emphasis"> -ing</span> + <strong>?</strong>
        </span>
      </p>

      <ul className="ps-mini-list">
        <li><strong>Was</strong> I talking?</li>
        <li><strong>Was</strong> she sleeping?</li>
        <li><strong>Were</strong> they running?</li>
      </ul>

      <p className="ps-text">
        Răspunsuri scurte: <strong>Yes, I was.</strong> / <strong>No, they weren&apos;t.</strong>
      </p>
    </div>
  );
}

export function PastContinuousUsesStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Întrebuințări</h3>

      <ul className="ps-mini-list">
        <li>acțiuni în desfășurare într-un moment specific din trecut;</li>
        <li>două sau mai multe acțiuni simultane în trecut;</li>
        <li>o acțiune de fundal întreruptă de o altă acțiune;</li>
        <li>descrierea atmosferei de fundal la începutul unei povestiri.</li>
      </ul>
    </div>
  );
}

export function PastContinuousTimeExpressionsStructureBlock() {
  return (
    <div className="lj-structure-box">
      <h3 className="lj-structure-title">Expresii de timp</h3>

      <ul className="ps-mini-list">
        <li><em>at this time yesterday</em></li>
        <li><em>when</em></li>
        <li><em>while</em></li>
        <li><em>as</em></li>
      </ul>

      <p className="ps-text">
        Tipar frecvent: <strong>when / while / as + Past Continuous</strong> și
        <strong> when + Past Simple</strong>.
      </p>
    </div>
  );
}
