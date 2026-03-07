// Be Going To module config

export const BE_GOING_TO_STORAGE_PREFIX = "pas_";
export const BE_GOING_TO_ROOMS_PER_SECTION = 7;

export const BE_GOING_TO_SECTIONS = [
  {
    id: "affirmative",
    title: "Affirmative",
    description: "Formarea propozițiilor afirmative la Be Going To.",
  },
  {
    id: "negative",
    title: "Negative",
    description: "Formarea propozițiilor negative la Be Going To.",
  },
  {
    id: "interrogative",
    title: "Interrogative",
    description: "Întrebări în Be Going To.",
  },
  {
    id: "uses",
    title: "Uses",
    description: "Întrebuințări ale Be Going To.",
  },
  {
    id: "time-expressions",
    title: "Time Expressions",
    description: "Expresii de timp frecvente pentru Be Going To.",
  },
];

export const STORAGE_PREFIX = BE_GOING_TO_STORAGE_PREFIX;
export const ROOMS_PER_SECTION = BE_GOING_TO_ROOMS_PER_SECTION;
export const SECTIONS = BE_GOING_TO_SECTIONS;

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

export const BE_GOING_TO_HUD_TEXT = HUD_TEXT;

export const DEV_MODE = true;
export const BE_GOING_TO_DEV_MODE = DEV_MODE;
