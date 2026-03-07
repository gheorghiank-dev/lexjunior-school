import React from "react";
import TenseStructureBox from "./TenseStructureBox.jsx";

export function ScaffoldAffirmativeSectionOne({ formula, examples = [] }) {
  return (
    <>
      <TenseStructureBox title="Structură generală">
        <p className="ps-text">
          <span className="rule-highlight">{formula}</span>
        </p>
      </TenseStructureBox>

      <div className="example-box">
        <h3>Exemple-model</h3>
        <ul className="ps-list">
          {examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ScaffoldAffirmativeSectionTwo({ bullets = [] }) {
  return (
    <div className="columns-2">
      <div className="rule-box">
        <h3>Ce observi</h3>
        <ul className="ps-mini-list">
          {bullets.slice(0, Math.ceil(bullets.length / 2)).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <div className="rule-box">
        <h3>Ce vei completa aici</h3>
        <ul className="ps-mini-list">
          {bullets.slice(Math.ceil(bullets.length / 2)).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ScaffoldNegativeSectionOne({ formula, examples = [] }) {
  return (
    <>
      <TenseStructureBox title="Structură generală">
        <p className="ps-text">
          <span className="rule-highlight">{formula}</span>
        </p>
      </TenseStructureBox>

      <div className="example-box">
        <h3>Exemple-model</h3>
        <ul className="ps-list">
          {examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ScaffoldNegativeSectionTwo({ longForm, shortForm, notes = [] }) {
  return (
    <div className="columns-2">
      <div className="rule-box">
        <h3>Forme lungi</h3>
        <ul className="ps-mini-list">
          {longForm.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="rule-box">
        <h3>Forme scurte și note</h3>
        <ul className="ps-mini-list">
          {shortForm.map((item) => (
            <li key={item}>{item}</li>
          ))}
          {notes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ScaffoldInterrogativeSectionOne({ formula, examples = [] }) {
  return (
    <>
      <TenseStructureBox title="Structură generală">
        <p className="ps-text">
          <span className="rule-highlight">{formula}</span>
        </p>
      </TenseStructureBox>

      <div className="example-box">
        <h3>Exemple-model</h3>
        <ul className="ps-list">
          {examples.map((example) => (
            <li key={example}>{example}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function ScaffoldInterrogativeSectionTwo({ questionAnswers = [] }) {
  return (
    <div className="columns-2">
      <div className="rule-box">
        <h3>Întrebări-model</h3>
        <ul className="ps-mini-list">
          {questionAnswers.map((item) => (
            <li key={item.question}>{item.question}</li>
          ))}
        </ul>
      </div>
      <div className="rule-box">
        <h3>Răspunsuri scurte</h3>
        <ul className="ps-mini-list">
          {questionAnswers.map((item) => (
            <li key={item.question + item.answer}>{item.answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export function ScaffoldUsesCardOne({ summary, formulaLabel = "General idea" }) {
  return (
    <TenseStructureBox title={formulaLabel}>
      <p className="ps-text">{summary}</p>
    </TenseStructureBox>
  );
}

export function ScaffoldUsesCardTwo({ uses = [] }) {
  const left = uses.slice(0, Math.ceil(uses.length / 2));
  const right = uses.slice(Math.ceil(uses.length / 2));
  return (
    <div className="columns-2">
      <div className="example-box">
        <h3>Main uses</h3>
        <ul className="ps-mini-list">
          {left.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="example-box">
        <h3>More uses / examples</h3>
        <ul className="ps-mini-list">
          {right.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ScaffoldUsesCardThree({ notes = [] }) {
  return (
    <div className="rule-box">
      <h3>Compare carefully</h3>
      <ul className="ps-mini-list">
        {notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function ScaffoldTimeCardOne({ summary }) {
  return (
    <TenseStructureBox title="Time clues">
      <p className="ps-text">{summary}</p>
    </TenseStructureBox>
  );
}

export function ScaffoldTimeCardTwo({ groups = [] }) {
  return (
    <div className="columns-2">
      {groups.map((group) => (
        <div className="example-box" key={group.title}>
          <h3>{group.title}</h3>
          <ul className="ps-mini-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ScaffoldTimeCardThree({ notes = [] }) {
  return (
    <div className="rule-box">
      <h3>Pattern notes</h3>
      <ul className="ps-mini-list">
        {notes.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
