import { assertGrammarHubItem } from "./grammar-hub-contract.js";
import { sortByOrderThenLabel } from "../registry-utils/sort.js";
import {
  getCtaForStatus,
  getTagForStatus,
} from "../registry-utils/status-ui.js";

const items = [
  {
    id: "tenses",
    label: "Timpurile verbale",
    description:
      "Începe cu Present Simple și, pe viitor, alte timpuri verbale (Present Continuous, Past Simple, Future etc.).",
    status: "ready",
    order: 1,
    to: "/grammar/tenses",
    ctaLabel: "Intră în Tenses",
  },
  {
    id: "grammar-essentials",
    label: "Grammar essentials",
    description:
      "Articole, pronume, adjective, adverbe și alte subiecte de gramatică utile pentru examene și clasă.",
    status: "soon",
    order: 2,
  },
  {
    id: "exam-skills",
    label: "Exam skills",
    description:
      "Structură şi suport pentru pregătire Cambridge / examene naționale cu exerciții ghidate de Lex.",
    status: "soon",
    order: 3,
  },
];

for (const it of items) assertGrammarHubItem(it);

export const grammarHubItems = items;

/**
 * UI-ready card metadata for the /grammar hub.
 */
export function getGrammarHubCards() {
  return [...items]
    .sort((a, b) => sortByOrderThenLabel(a, b, { labelKey: "label" }))
    .map((it) => {
      const status = it.status || "soon";

      const { tagLabel, tagClass } = getTagForStatus(status, {
        readyLabel: "Module active",
        soonLabel: "Coming soon",
      });

      const cta = getCtaForStatus(status, {
        to: it.to,
        readyLabel: it.ctaLabel || `Intră în ${it.label}`,
        previewLabel: it.ctaLabel || "Vezi preview",
      });

      return {
        id: it.id,
        title: it.label,
        description: it.description,
        tagLabel,
        tagClass,
        cta,
      };
    });
}
