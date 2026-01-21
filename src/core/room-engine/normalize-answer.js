// js/core/normalize-answer.js
// Shared text normalization for all free-text answers (inputs / textareas / translations).

/**
 * Basic, punctuation-insensitive normalization:
 * - Unicode normalisation
 * - Unifies curly quotes/dashes
 * - Lowercases
 * - Collapses whitespace
 * - Removes optional ending punctuation (., !, ?)
 * - Normalises "o'clock" spellings
 */
function baseNormalize(value) {
  let s = (value ?? '').toString();

  try { s = s.normalize('NFKC'); } catch (e) {}

  s = s
    .replace(/[\u2018\u2019\u02BC\u2032\u00B4\u0060]/g, "'")
    .replace(/[\u201C\u201D\u2033]/g, '"')
    .replace(/[\u2013\u2014\u2212]/g, '-')
    .replace(/\u00A0/g, ' ');

  s = s.toLowerCase().trim();

  // Collapse whitespace
  s = s.replace(/\s+/g, ' ');

  // Normalize spaces around punctuation
  s = s.replace(/\s+([.,!?;:])/g, '$1');

  // Punctuation-insensitive grading: ignore commas entirely.
  // (Kids often add/remove commas inconsistently, e.g. "Yes, I do.".)
  s = s.replace(/,/g, '');

  // No space just inside brackets / quotes
  s = s.replace(/([({\["'])\s+/g, '$1');
  s = s.replace(/\s+([)\]"'])/g, '$1');

  // Drop ending punctuation (., !, ?) if it's the only difference
  s = s.replace(/[.!?]+$/g, '');

  // Fix spaces around apostrophes: it ' s -> it's
  s = s.replace(/\b(\w+)\s*'\s*(\w+)\b/g, "$1'$2");

  // Friendly normalisations for "o'clock"
  s = s.replace(/\boclock\b/g, "o'clock");
  s = s.replace(/\bo\s*clock\b/g, "o'clock");

  return s;
}

// Map number words (0–59) to digits
const NUMBER_WORD_MAP = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'twenty one': 21,
  'twenty-one': 21,
  'twenty two': 22,
  'twenty-two': 22,
  'twenty three': 23,
  'twenty-three': 23,
  'twenty four': 24,
  'twenty-four': 24,
  'twenty five': 25,
  'twenty-five': 25,
  'twenty six': 26,
  'twenty-six': 26,
  'twenty seven': 27,
  'twenty-seven': 27,
  'twenty eight': 28,
  'twenty-eight': 28,
  'twenty nine': 29,
  'twenty-nine': 29,
  'thirty': 30,
  'thirty one': 31,
  'thirty-one': 31,
  'thirty two': 32,
  'thirty-two': 32,
  'thirty three': 33,
  'thirty-three': 33,
  'thirty four': 34,
  'thirty-four': 34,
  'thirty five': 35,
  'thirty-five': 35,
  'thirty six': 36,
  'thirty-six': 36,
  'thirty seven': 37,
  'thirty-seven': 37,
  'thirty eight': 38,
  'thirty-eight': 38,
  'thirty nine': 39,
  'thirty-nine': 39,
  'forty': 40,
  'forty one': 41,
  'forty-one': 41,
  'forty two': 42,
  'forty-two': 42,
  'forty three': 43,
  'forty-three': 43,
  'forty four': 44,
  'forty-four': 44,
  'forty five': 45,
  'forty-five': 45,
  'forty six': 46,
  'forty-six': 46,
  'forty seven': 47,
  'forty-seven': 47,
  'forty eight': 48,
  'forty-eight': 48,
  'forty nine': 49,
  'forty-nine': 49,
  'fifty': 50,
  'fifty one': 51,
  'fifty-one': 51,
  'fifty two': 52,
  'fifty-two': 52,
  'fifty three': 53,
  'fifty-three': 53,
  'fifty four': 54,
  'fifty-four': 54,
  'fifty five': 55,
  'fifty-five': 55,
  'fifty six': 56,
  'fifty-six': 56,
  'fifty seven': 57,
  'fifty-seven': 57,
  'fifty eight': 58,
  'fifty-eight': 58,
  'fifty nine': 59,
  'fifty-nine': 59,
};

function normaliseStandaloneNumberToken(token) {
  if (!token) return token;
  const plain = token.replace(/[,]/g, '');

  // Pure digits -> canonical int string
  if (/^\d+$/.test(plain)) {
    return String(parseInt(plain, 10));
  }

  const lower = plain.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(NUMBER_WORD_MAP, lower)) {
    return String(NUMBER_WORD_MAP[lower]);
  }

  return token;
}

/**
 * Normalises numbers and time expressions so that:
 * - 3 == three
 * - 7 == 7:00 == 07:00 == 7 o'clock == seven o'clock
 */
function normalizeNumbersAndTimes(str) {
  let s = str;

  // Normalise "o'clock" variants again (in case they appeared after other changes)
  s = s.replace(/\bo['’]?\s*clock\b/gi, 'oclock');

  // Times like 07:00, 7:00 -> "7"
  s = s.replace(/\b0?([0-9]|1[0-9]|2[0-3]):00\b/g, (_, h) => String(parseInt(h, 10)));

  // Times with am/pm like "7 a.m.", "7am" -> "7"
  s = s.replace(/\b0?([0-9]|1[0-9]|2[0-3])\s*a\.?m\.?\b/gi, (_, h) => String(parseInt(h, 10)));
  s = s.replace(/\b0?([0-9]|1[0-9]|2[0-3])\s*p\.?m\.?\b/gi, (_, h) => String(parseInt(h, 10)));

  // Textual times like "seven oclock" -> "7"
  const HOUR_WORD_TO_INT = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
  };

  s = s.replace(
    /\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)\s+oclock\b/g,
    (_, word) => String(HOUR_WORD_TO_INT[word.toLowerCase()] ?? word),
  );

  // Times like "7 oclock" -> "7"
  s = s.replace(
    /\b0?([0-9]|1[0-9]|2[0-3])\s+oclock\b/g,
    (_, h) => String(parseInt(h, 10)),
  );

  // Now treat standalone number words / digit tokens
  const tokens = s.split(/\s+/).filter((t) => t.length > 0);
  for (let i = 0; i < tokens.length; i += 1) {
    const current = tokens[i];

    // Try 2-word combos like "twenty one"
    const next = tokens[i + 1];
    if (next) {
      const combined = (current + ' ' + next).toLowerCase();
      const hyphenCombined = (current + '-' + next).toLowerCase();

      if (Object.prototype.hasOwnProperty.call(NUMBER_WORD_MAP, combined)) {
        tokens[i] = String(NUMBER_WORD_MAP[combined]);
        tokens.splice(i + 1, 1);
        continue;
      }
      if (Object.prototype.hasOwnProperty.call(NUMBER_WORD_MAP, hyphenCombined)) {
        tokens[i] = String(NUMBER_WORD_MAP[hyphenCombined]);
        tokens.splice(i + 1, 1);
        continue;
      }
    }

    tokens[i] = normaliseStandaloneNumberToken(current);
  }

  return tokens.join(' ');
}

export function normalizeAnswer(value) {
  // First, run basic normalisation (lowercase, spacing, punctuation, numbers)
  let base = baseNormalize(value);

  // Friendly handling for short answers like "Yes, I do." / "No, I don't."
  // We accept an optional comma right after "yes" / "no" and normalise it away.
  base = base.replace(/^(yes|no),\s*/g, '$1 ');

  return normalizeNumbersAndTimes(base);
}
