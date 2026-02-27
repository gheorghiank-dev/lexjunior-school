// tests/helpers/tense-map-helpers.js
import { expect } from "@playwright/test";

/**
 * Deschide harta unui timp (tense) și verifică că se încarcă primul "path" de secțiune.
 *
 * @param {import('@playwright/test').Page} page
 * @param {{ mapUrl: string, firstSectionPathTestId: string }} options
 */
export async function openTenseMapAndAssertFirstSection(page, options) {
  const { mapUrl, firstSectionPathTestId } = options;

  await page.goto(mapUrl);

  // Verificăm că harta s-a încărcat și cardul primei secțiuni este vizibil.
  await expect(page.getByTestId(firstSectionPathTestId)).toBeVisible();
}

/**
 * Verifică că pentru o secțiune există butonul de "Start theory"
 * și primul buton de cameră (Room 1).
 *
 * @param {import('@playwright/test').Page} page
 * @param {{ startTheoryTestId: string, roomTestIdPrefix: string }} options
 */
export async function assertSectionHasTheoryAndFirstRoom(page, options) {
  const { startTheoryTestId, roomTestIdPrefix } = options;

  // Butonul "Start teoria" trebuie să existe
  await expect(page.getByTestId(startTheoryTestId)).toBeVisible();

  // Room 1 – pe hartă îl identificăm după prefix + "-1"
  const firstRoomTestId = `${roomTestIdPrefix}-1`;
  await expect(page.getByTestId(firstRoomTestId)).toBeVisible();
}
