import React from "react";
import { Link } from "react-router-dom";

/**
 * Componentă mică pentru rândul de butoane de la finalul paginilor de teorie
 * ("Unde merg mai departe?").
 *
 * Primește o listă de acțiuni, fiecare cu:
 * - to: ruta către care navighează (pentru link-uri)
 * - label: textul butonului
 * - variant: "primary" (implicit), "outline" sau "secondary" pentru stil
 * - onClick: handler opțional — dacă este prezent, se va reda un <button>
 * - type: tipul butonului când folosim onClick (implicit "button")
 */
export default function TenseTheoryNextSteps({ actions }) {
  if (!actions || actions.length === 0) return null;

  const getVariantClass = (variant) => {
    if (variant === "outline") return "btn-outline";
    if (variant === "secondary") return "btn-secondary";
    return "btn-primary";
  };

  return (
    <div className="btn-row">
      {actions.map((action) => {
        const key = action.key || action.to || action.label;
        const variantClass = getVariantClass(action.variant);

        if (action.onClick) {
          return (
            <button
              key={key}
              type={action.type || "button"}
              className={`btn ${variantClass}`}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          );
        }

        return (
          <Link key={key} to={action.to} className={`btn ${variantClass}`}>
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
