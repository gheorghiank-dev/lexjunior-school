// Past Simple module config

export const PAST_SIMPLE_STORAGE_PREFIX = "pas_";
export const PAST_SIMPLE_ROOMS_PER_SECTION = 7;

export const PAST_SIMPLE_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Past Simple.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Past Simple.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Past Simple.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Past Simple.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru trecut.",
  },
];

export const STORAGE_PREFIX = PAST_SIMPLE_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = PAST_SIMPLE_ROOMS_PER_SECTION;
export const SECTIONS = PAST_SIMPLE_SECTIONS;

export const HUD_TEXT = {
  keyObtainedLabel: "Cheia este obținută.",
  keyMissingLabel: "Cheia nu este obținută.",
  keyMissingAfterPassLabel: "Ai terminat camera, dar nu ai cheia încă.",
  hudNear: "Încearcă din nou, ești foarte aproape!",
  hudNeedKey:
    "Ai rezolvat camera, dar ai nevoie de o încercare perfectă pentru cheie.",
  hudHasKey: "Perfect! Ai obținut cheia pentru această cameră.",
  roomNear: "Sunt câteva greșeli. Mai aruncă o privire :)",
  roomPerfect: "Bravo! Ai terminat corect această cameră!",
};

export const PAST_SIMPLE_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const PAST_SIMPLE_DEV_MODE = DEV_MODE;
