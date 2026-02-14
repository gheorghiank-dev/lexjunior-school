import React, { useEffect, useMemo, useState } from "react";
import TrustedInlineHtml from "../../../shared/richtext/TrustedInlineHtml.jsx";

function clampIndex(i, len) {
  if (!len) return 0;
  if (i < 0) return 0;
  if (i >= len) return 0;
  return i;
}

export default function TenseLexBubble({ hints, avatarSrc }) {
  const hintList = Array.isArray(hints)
    ? hints.filter((h) => typeof h === "string" && h.trim().length > 0)
    : [];

  const iconSrc = avatarSrc || "/assets/present-simple/img/lex-head-color.svg";

  const defaultHint = useMemo(() => {
    return `Profesorul tău va adăuga aici indicii speciale pentru această cameră <img src='${iconSrc}' alt='Lex Junior' class='lex-emoji'>`;
  }, [iconSrc]);

  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);

  useEffect(() => {
    // Show intro bubble once, then auto-hide.
    const id = window.setTimeout(() => {
      setBubbleVisible(false);
    }, 5000);
    return () => window.clearTimeout(id);
  }, []);

  const effectiveIndex = clampIndex(currentHintIndex, hintList.length);
  const hintHtml = hintList.length ? hintList[effectiveIndex] : defaultHint;

  const toggleCard = () => {
    setIsCardOpen((v) => {
      const next = !v;
      if (next) setIsHintOpen(false);
      return next;
    });
  };

  const closeCard = () => setIsCardOpen(false);

  const openHint = () => {
    setIsHintOpen(true);
    setIsCardOpen(false);
  };

  const closeHint = () => setIsHintOpen(false);

  const nextHint = () => {
    if (!hintList.length) return;
    setCurrentHintIndex((i) => (i + 1) % hintList.length);
  };

  return (
    <div className="lex-junior">
      <button className="lex-avatar" aria-label="Lex Junior" onClick={toggleCard}>
        <img src={iconSrc} alt="Lex Junior" className="lex-avatar-img" />
      </button>

      <div className={`lex-bubble${bubbleVisible ? "" : " hidden"}`}>
        <div className="lex-bubble-content">
          <p className="lex-name">
            <strong>Lex Junior</strong>
          </p>
          <p className="lex-line">
            Sunt aici dacă te blochezi{" "}
            <img src={iconSrc} alt="Lex Junior" className="lex-emoji" />
          </p>
        </div>
        <div className="lex-bubble-tail" />
      </div>

      <div className={`lex-card${isCardOpen ? "" : " hidden"}`}>
        <div className="lex-card-header">
          <span className="lex-card-avatar">
            <img src={iconSrc} alt="Lex Junior" className="lex-card-avatar-img" />
          </span>
          <span className="lex-card-name">Lex Junior</span>
        </div>

        <p className="lex-card-text">
          Hey! Eu sunt Lex Junior{" "}
          <img src={iconSrc} alt="Lex Junior" className="lex-emoji" />
          <br />
          Te ajut cu indicii atunci când te blochezi ✨
        </p>

        <button type="button" className="lex-card-hint-btn" onClick={openHint}>
          Arată-mi un indiciu
        </button>
        <button type="button" className="lex-card-close" onClick={closeCard}>
          Închide
        </button>
      </div>

      <div className={`lex-hints${isHintOpen ? "" : " hidden"}`}>
        <div className="lex-hints-header">
          <span className="lex-hints-title">Indiciu</span>
        </div>

        <p className="lex-hints-text">
          <TrustedInlineHtml html={hintHtml} />
        </p>

        <div className="lex-hints-actions">
          {hintList.length > 0 && (
            <button type="button" className="lex-hints-next" onClick={nextHint}>
              Alt indiciu
            </button>
          )}
          <button type="button" className="lex-hints-close" onClick={closeHint}>
            Închide
          </button>
        </div>
      </div>
    </div>
  );
}
