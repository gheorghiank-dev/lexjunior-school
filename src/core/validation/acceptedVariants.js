// src/core/validation/acceptedVariants.js
// A small, predictable set of accepted equivalents.
// We keep this list intentionally explicit (no AI guessing).
export const ACCEPTED_VARIANT_FAMILIES = {
  /**
   * BE_NEGATIVE
   * Used for negative forms with "to be".
   *
   * Notes:
   * - We include "am not" ↔ "'m not" as a controlled equivalence.
   *   This is useful ONLY in flex rooms that accept both forms.
   *   (We intentionally do NOT include "amn’t".)
   */
  BE_NEGATIVE: [
    ["am not", "'m not"],
    ["is not", "isn't"],
    ["are not", "aren't"],
    ["was not", "wasn't"],
    ["were not", "weren't"],
  ],

  /**
   * DO_NEGATIVE
   * Used for Present Simple / Past Simple negative with do/does/did.
   */
  DO_NEGATIVE: [
    ["do not", "don't"],
    ["does not", "doesn't"],
    ["did not", "didn't"],
  ],

  /**
   * HAVE_NEGATIVE
   * Used mainly for Present Perfect / Past Perfect negatives:
   * - have not / has not / had not
   *
   * Notes:
   * - "have not" can also contract to "'ve not" (UK-ish) or "haven't".
   *   We'll accept the most common: haven't/hasn't/hadn't and also 've not/'s not/'d not.
   */
  HAVE_NEGATIVE: [
    ["have not", "haven't"],
    ["has not", "hasn't"],
    ["had not", "hadn't"],
    ["have not", "'ve not"],
    ["has not", "'s not"],
    ["had not", "'d not"],
  ],

  /**
   * WILL_NEGATIVE
   * Used for Future Simple negatives.
   *
   * Note:
   * - "will not" ↔ "won't" is irregular but standard.
   */
  WILL_NEGATIVE: [["will not", "won't"]],

  /**
   * Optional (handy later): CAN_NEGATIVE
   * If you ever add modals practice.
   */
  CAN_NEGATIVE: [["cannot", "can't"]],
};
