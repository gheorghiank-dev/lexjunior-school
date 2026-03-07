import { test, expect } from '@playwright/test';
import { TENSE_TEST_CONFIGS } from './helpers/tense-test-config.js';
import {
  openTenseMapAndAssertFirstSection,
  assertSectionHasTheoryAndFirstRoom,
} from './helpers/tense-map-helpers.js';

for (const cfg of TENSE_TEST_CONFIGS) {
  test.describe(`${cfg.label} – map contract`, () => {
    test('map route loads and exposes first section entry points', async ({ page }) => {
      await openTenseMapAndAssertFirstSection(page, {
        mapUrl: cfg.mapUrl,
        firstSectionPathTestId: cfg.firstSectionPathTestId,
      });

      await assertSectionHasTheoryAndFirstRoom(page, {
        startTheoryTestId: cfg.startTheoryTestId,
        roomTestIdPrefix: cfg.roomTestIdPrefix,
      });
    });

    test('badge route loads without runtime routing errors', async ({ page }) => {
      const response = await page.goto(cfg.badgeUrl);
      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveURL(cfg.badgeUrl);
    });
  });
}
