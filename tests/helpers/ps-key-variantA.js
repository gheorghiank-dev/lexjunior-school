/**
 * Present Simple – E2E helpers
 *
 * Goal: keep ALL "persist" specs identical in flow (Variant A):
 *   wrong -> pass (no key) -> retry-for-key -> key
 *
 * We keep the existing rule: localStorage.clear() happens only once per
 * test-run (handled in each spec via addInitScript + sessionStorage flag).
 *
 * For stability and isolation (because other tests may have already earned
 * keys), we reset ONLY the current room's progress keys (first/passed/key).
 */

export const BASE = "/grammar/tenses/present-simple";
export const MAP = `${BASE}/map`;

export async function openMap(page, expect) {
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-simple\/map/i);
}


export async function completeTheory(page, expect, startTheoryTestId, urlRegex) {
  await page.goto(MAP);
  await page.getByTestId(startTheoryTestId).click();
  await expect(page).toHaveURL(urlRegex);
}

export async function resetRoomProgress(page, sectionId, roomNumber) {
  const prefix = "ps_";
  const base = `${prefix}${sectionId}_room${roomNumber}_`;

  await page.evaluate((keys) => {
    try {
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
      // ignore
    }
  }, [
    `${base}first`,
    `${base}passed`,
    `${base}key`,
  ]);
}

export async function readRoomKeyFlag(page, sectionId, roomNumber) {
  const keyName = `ps_${sectionId}_room${roomNumber}_key`;
  return page.evaluate((k) => {
    const raw = localStorage.getItem(k);
    if (!raw) return false;
    try {
      return JSON.parse(raw) === true;
    } catch {
      return false;
    }
  }, keyName);
}

/**
 * Variant A (uniform flow):
 * - reset only this room's progress keys
 * - enter room
 * - wrong attempt (stable)
 * - perfect attempt -> retry becomes available
 * - retry for key -> perfect -> key granted
 */
export async function obtainKeyVariantA(page, expect, cfg) {
  const {
    sectionId,
    roomNumber,
    roomTestId,
    roomUrlRegex,
    doWrongAttempt,
    doPerfectAttempt,
  } = cfg;

  await resetRoomProgress(page, sectionId, roomNumber);

  await page.goto(MAP);
  await page.getByTestId(roomTestId).click();
  await expect(page).toHaveURL(roomUrlRegex);

  // Wrong attempt
  await doWrongAttempt();
  await page.getByTestId(/-verify$/).first().click();
  
  // Pass normally (still no key) => retry becomes available
  await doPerfectAttempt();
  await page.getByTestId(/-verify$/).first().click();
  await expect(page.getByTestId(/-retry-key$/).first()).toBeVisible();

  // Retry for key
  await page.getByTestId(/-retry-key$/).first().click();
  await doPerfectAttempt();
  await page.getByTestId(/-verify$/).first().click();
  }

export async function expectRoomHasKeyOnMap(page, expect, roomTestId) {
  const hasKeyAttr = await page.getByTestId(roomTestId).getAttribute("data-has-key");
  expect(hasKeyAttr).toBe("true");
}
