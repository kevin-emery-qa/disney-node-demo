import { test, expect } from '@playwright/test';

test.describe('validate disney landing page', () => {
  test.only('load disney home page', async ({ page }) => {
    await page.goto('https://www.disney.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/.*Disney.+/);
  });
});
