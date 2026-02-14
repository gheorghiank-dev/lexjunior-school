import { test, expect } from "@playwright/test";

const BASE = "/grammar/tenses/present-simple";
const MAP = `${BASE}/map`;

// Correct answers for Interrogative – Room 1.
const ROOM1_CORRECT = {
  1: "do",
  2: "does",
  3: "do",
  4: "does",
  5: "do",
  6: "does",
  7: "do",
  8: "does",
  9: "do",
  10: "does",
};

async function openMap(page) {
  await page.goto(BASE);
  await expect(page).toHaveURL(/present-simple\/map/i);
}

async function completeTheory(page) {
  await page.goto(MAP);
  await page.getByTestId("ps-start-theory-interrogative").click();
  await expect(page).toHaveURL(/interrogative\/theory/i);
}

async function setGap(page, exId, value) {
  await page.getByTestId(`ps-int-room1-gap-${exId}`).fill(value);
}

async function fillAllCorrect(page) {
  for (const [exId, value] of Object.entries(ROOM1_CORRECT)) {
    await setGap(page, exId, value);
  }
}

async function readKeyFlag(page) {
  return page.evaluate(() => {
    const raw = localStorage.getItem("ps_interrogative_room1_key");
    if (!raw) return false;
    try {
      return JSON.parse(raw) === true;
    } catch {
      return false;
    }
  });
}

test("Interrogative: key via Retry for key (Room 1)", async ({ page }) => {
  // Clear once at the beginning of the test run for this page (avoid re-clearing on page.goto)
  await page.addInitScript(() => {
    try {
      if (!sessionStorage.getItem("__e2e_ls_cleared__")) {
        localStorage.clear();
        sessionStorage.setItem("__e2e_ls_cleared__", "1");
      }
    } catch {
      // ignore
    }
  });

  await openMap(page);
  await completeTheory(page);

  // Enter Room 1
  await page.goto(MAP);
  await page.getByTestId("ps-room-interrogative-1").click();
  await expect(page).toHaveURL(/interrogative\/room-1/i);

  // 1) First attempt: intentionally wrong => no key
  await setGap(page, 1, "does");
  await page.getByTestId(/-verify$/).first().click();
  
  expect(await readKeyFlag(page)).toBe(false);

  // 2) Make it perfect (normal run) => passed=true, key still false => Retry appears
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();
  
  await expect(page.getByTestId(/-retry-key$/).first()).toBeVisible();
  expect(await readKeyFlag(page)).toBe(false);

  // 3) Retry for key: one perfect attempt grants key
  await page.getByTestId(/-retry-key$/).first().click();
  await fillAllCorrect(page);
  await page.getByTestId(/-verify$/).first().click();
  
  expect(await readKeyFlag(page)).toBe(true);

  // Map should show has-key state (stable attribute)
  await page.goto(MAP);
  const hasKeyAttr = await page
    .getByTestId("ps-room-interrogative-1")
    .getAttribute("data-has-key");
  expect(hasKeyAttr).toBe("true");
});
