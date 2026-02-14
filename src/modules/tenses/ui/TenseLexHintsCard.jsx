import React from "react";
import TrustedInlineHtml from "../../../shared/richtext/TrustedInlineHtml.jsx";

/**
 * TenseLexHintsCard
 *
 * Card generic pentru afișarea hinturilor lui Lex Junior într-o cameră.
 * Este tense-agnostic: primește doar o listă de stringuri HTML-safe și,
 * opțional, un avatar.
 */
export default function TenseLexHintsCard({
  hints,
  avatarSrc,
  title = "Lex Junior – hinturi pentru camera asta",
  className = "",
}) {
  const list = Array.isArray(hints)
    ? hints.filter((h) => typeof h === "string" && h.trim().length > 0)
    : [];

  if (list.length === 0) {
    return null;
  }

  const rootClassName = ["card", "lex-hints-card", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={rootClassName}>
      <header className="lex-hints-card-header">
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt="Lex Junior"
            className="lex-hints-avatar"
            loading="lazy"
          />
        )}
        <h2 className="card-title">{title}</h2>
      </header>

      <ul className="lex-hints-list">
        {list.map((html, idx) => (
          <li key={idx} className="lex-hint-item">
            <TrustedInlineHtml html={html} />
          </li>
        ))}
      </ul>
    </section>
  );
}
