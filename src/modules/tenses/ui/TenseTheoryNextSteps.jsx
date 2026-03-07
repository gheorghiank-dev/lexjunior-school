import React from "react";
import { Link } from "react-router-dom";

const SECTION_LABELS_RO = {
  affirmative: "Afirmativ",
  negative: "Negativ",
  interrogative: "Interogativ",
  uses: "Întrebuințări",
  "time-expressions": "Expresii de timp",
};

function getSectionLabelFromRoute(route) {
  if (typeof route !== "string") return null;
  const match = route.match(/\/([^/]+)\/room\/1\/?$/);
  if (!match) return null;
  return SECTION_LABELS_RO[match[1]] || null;
}

function normalizeActionLabel(action) {
  const route = typeof action?.to === "string" ? action.to : "";
  const rawLabel = action?.label || "";

  if (/\/overview\/?$/.test(route) || /recapitulare/i.test(rawLabel)) {
    return "Recapitulare";
  }

  if (/\/map\/?$/.test(route) || /harta/i.test(rawLabel)) {
    return "Harta modulului";
  }

  const sectionLabel = getSectionLabelFromRoute(route);
  if (sectionLabel) {
    return `Camera 1 – ${sectionLabel}`;
  }

  return rawLabel;
}

/**
 * Componentă mică pentru rândul de butoane de la finalul paginilor de teorie
 * ("Unde merg mai departe?").
 *
 * Primește o listă de acțiuni, fiecare cu:
 * - to: ruta către care navighează (pentru link-uri)
 * - label: textul butonului
 * - variant: ignorat intenționat aici, pentru a păstra toate cele 3 butoane
 *   pe același stil vizual
 * - onClick: handler opțional — dacă este prezent, se va reda un <button>
 * - type: tipul butonului când folosim onClick (implicit "button")
 */
export default function TenseTheoryNextSteps({ actions }) {
  if (!actions || actions.length === 0) return null;

  const sharedVariantClass = "btn-primary";

  return (
    <div className="btn-row">
      {actions.map((action) => {
        const key = action.key || action.to || action.label;
        const label = normalizeActionLabel(action);

        if (action.onClick) {
          return (
            <button
              key={key}
              type={action.type || "button"}
              className={`btn ${sharedVariantClass}`}
              onClick={action.onClick}
            >
              {label}
            </button>
          );
        }

        return (
          <Link
            key={key}
            to={action.to}
            className={`btn ${sharedVariantClass}`}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
