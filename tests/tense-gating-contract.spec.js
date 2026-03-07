import { test, expect } from '@playwright/test';
import { TENSE_TEST_CONFIGS } from './helpers/tense-test-config.js';

for (const cfg of TENSE_TEST_CONFIGS) {
  test(`${cfg.label} – affirmative room 1 stays gated until theory is opened`, async ({ page }) => {
    await page.addInitScript((tenseId) => {
      try {
        const key = `__e2e_ls_cleared__${tenseId}__`;
        if (!sessionStorage.getItem(key)) {
          localStorage.clear();
          sessionStorage.setItem(key, '1');
        }
      } catch {
        // ignore
      }
    }, cfg.id);

    await page.goto(cfg.baseUrl);
    await expect(page).toHaveURL(new RegExp(`${cfg.id}\\/map`, 'i'));
    await expect(page.getByTestId(cfg.firstSectionPathTestId)).toBeVisible();

    await page.getByTestId(`${cfg.roomTestIdPrefix}-1`).click();
    await expect(page).toHaveURL(new RegExp(`${cfg.id}\\/map`, 'i'));

    await page.getByTestId(cfg.startTheoryTestId).click();
    await expect(page).toHaveURL(cfg.theoryUrlRegex);

    await page.goto(cfg.mapUrl);
    await expect(page.getByTestId(cfg.firstSectionPathTestId)).toBeVisible();

    await page.getByTestId(`${cfg.roomTestIdPrefix}-1`).click();
    await expect(page).toHaveURL(cfg.roomUrlRegex);
  });
}
