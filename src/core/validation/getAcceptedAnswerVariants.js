import { VALIDATION_POLICIES } from "./validationPolicies.js";
import { ACCEPTED_VARIANT_FAMILIES } from "./acceptedVariants.js";

/**
 * Returns a list of NORMALIZED accepted variants for a given correct answer.
 *
 * - normalizeFn = funcția ta existentă normalizeAnswer (NU o modificăm)
 * - policy controls whether we allow equivalents (long/short)
 * - family says what kind of equivalents we allow (BE_NEGATIVE, DO_NEGATIVE etc.)
 */
export const getAcceptedAnswerVariants = ({
  correct,
  normalizeFn,
  policy,
  family,
}) => {
  const p = policy ?? VALIDATION_POLICIES.STRICT_LONG;

  // 1) Start with the raw correct value(s)
  const rawList = Array.isArray(correct) ? correct : [correct];

  // Normalize all base variants (this keeps your current behavior)
  const base = rawList
    .map((s) => normalizeFn(s ?? ""))
    .filter((s) => s.length > 0);

  // STRICT modes: accept ONLY what content says (no extra magic)
  if (
    p === VALIDATION_POLICIES.STRICT_LONG ||
    p === VALIDATION_POLICIES.STRICT_SHORT
  ) {
    return Array.from(new Set(base));
  }

  // FLEX mode: expand only using explicit, safe mappings from the chosen family
  const pairs = family ? (ACCEPTED_VARIANT_FAMILIES?.[family] ?? []) : [];
  const out = new Set(base);

  // Expand long↔short for each normalized base
  for (const variant of base) {
    for (const [a, b] of pairs) {
      const A = normalizeFn(a);
      const B = normalizeFn(b);

      if (variant.includes(A)) out.add(variant.split(A).join(B));
      if (variant.includes(B)) out.add(variant.split(B).join(A));
    }
  }

  return Array.from(out);
};
