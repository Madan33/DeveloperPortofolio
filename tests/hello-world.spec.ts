import { test, expect } from '@playwright/test';

test('check if specific element is present', async ({ page }) => {
    await page.goto('http://localhost:3000'); // replace with your app's URL
    const element = await page.locator('selector-for-element'); // replace with your element's selector
    await expect(element).toBeVisible();
});