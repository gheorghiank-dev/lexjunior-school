import presentSimpleModule from "../present-simple/present-simple.module.jsx";
import presentContinuousModule from "../present-continuous/present-continuous.module.jsx";
import { assertTenseModule } from "./tense-contract.js";
import { sortByOrderThenLabel } from "../registry-utils/sort.js";
import { getCtaForStatus, getTagForStatus } from "../registry-utils/status-ui.js";

const modules = [presentSimpleModule, presentContinuousModule];

// Validate at import time (dev-friendly). If something is wrong, fail fast.
for (const m of modules) assertTenseModule(m);

export const tenseModules = modules;

/**
 * UI-ready card metadata for the /tenses hub.
 * Keeps the page free of hardcoded tense lists.
 */
export function getTenseCards() {
  return [...modules].sort((a, b) => sortByOrderThenLabel(a, b, { labelKey: "label" })).map((m) => {
    const status = m.status || "soon";

    const { tagLabel, tagClass } = getTagForStatus(status, {
      readyLabel: "Modulo activ",
      soonLabel: "Coming soon",
    });

    const cta = getCtaForStatus(status, {
      to: m.basePath,
      readyLabel: `Intră în ${m.label}`,
      previewLabel: "Vezi preview",
    });

    return {
      id: m.id,
      title: m.label,
      description: m.description || "",
      tagLabel,
      tagClass,
      cta,
    };
  });
}

export function getTenseRoutes() {
  return modules.flatMap((m) => m.routes);
}

/**
 * Route list enriched with module metadata.
 * Useful for cross-cutting gates (e.g., per-tense password) without changing route paths.
 */
export function getTenseRouteEntries() {
  return modules.flatMap((m) =>
    (m.routes || []).map((r) => ({
      path: r.path,
      element: r.element,
      tenseId: m.id,
      tenseBasePath: m.basePath,
    }))
  );
}

/**
 * Returns the theme CSS class for the active tense based on the current pathname.
 *
 * Rules:
 * - Match by module.basePath prefix.
 * - If multiple match, pick the most specific (longest basePath).
 * - If no match or the module has no themeClass, return "".
 */
export function getTenseThemeClassForPath(pathname) {
  if (typeof pathname !== "string") return "";

  let best = null;
  for (const m of modules) {
    if (!m || typeof m.basePath !== "string") continue;
    if (pathname === m.basePath || pathname.startsWith(m.basePath + "/") || pathname.startsWith(m.basePath)) {
      if (!best || m.basePath.length > best.basePath.length) best = m;
    }
  }

  const cls = best && typeof best.themeClass === "string" ? best.themeClass.trim() : "";
  return cls;
}

/**
 * Returns the default brand avatar src for the app header/home.
 *
 * Sprint 9 goal: stop hardcoding Present Simple asset paths in top-level UI.
 * We keep the visual identical by selecting Present Simple as the default.
 */
export function getDefaultBrandAvatarSrc() {
  const preferred = modules.find((m) => m && m.id === "present-simple") || modules[0] || null;

  let src = preferred && typeof preferred.brandAvatarSrc === "string" ? preferred.brandAvatarSrc.trim() : "";
  if (!src) {
    const base = preferred && typeof preferred.assetsBase === "string" ? preferred.assetsBase.trim() : "";
    if (base) {
      src = base.replace(/\/$/, "") + "/img/lex-head-color.svg";
    }
  }

  // Ultimate fallback (should match current UX).
  if (!src) src = "/assets/present-simple/img/lex-head-color.svg";
  return src;
}
