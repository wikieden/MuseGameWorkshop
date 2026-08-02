import { expect, test } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';

interface CounterTrialWindow extends Window {
  __counterTrial: {
    getState: () => {
      tick: number;
      player: { health: number; stamina: number };
    };
    renderer: { info: { render: { calls: number } } };
  };
}

test('renders a nonblank responsive arena and keyboard input changes simulation state', async ({ page }, testInfo) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('/');
  const canvas = page.locator('#combat-canvas');
  await expect(canvas).toBeVisible();
  await expect.poll(() => page.evaluate(() => (window as unknown as CounterTrialWindow).__counterTrial?.renderer.info.render.calls ?? 0)).toBeGreaterThan(0);

  const canvasBox = await canvas.boundingBox();
  expect(canvasBox).not.toBeNull();
  expect(canvasBox?.width).toBeGreaterThan(300);
  expect(canvasBox?.height).toBeGreaterThan(400);

  const canvasPng = PNG.sync.read(await canvas.screenshot());
  let minimum = 255;
  let maximum = 0;
  let colorfulPixels = 0;
  for (let offset = 0; offset < canvasPng.data.length; offset += 4) {
    const red = canvasPng.data[offset];
    const green = canvasPng.data[offset + 1];
    const blue = canvasPng.data[offset + 2];
    const luminance = (red + green + blue) / 3;
    minimum = Math.min(minimum, luminance);
    maximum = Math.max(maximum, luminance);
    if (Math.max(red, green, blue) - Math.min(red, green, blue) > 28) colorfulPixels += 1;
  }
  expect(maximum - minimum).toBeGreaterThan(70);
  expect(colorfulPixels).toBeGreaterThan(canvasPng.width * canvasPng.height * 0.01);

  const startX = Number(await page.locator('body').getAttribute('data-player-x'));
  await page.keyboard.down('KeyD');
  await page.waitForTimeout(350);
  await page.keyboard.up('KeyD');
  await expect.poll(async () => Number(await page.locator('body').getAttribute('data-player-x'))).toBeGreaterThan(startX + 0.25);

  if (testInfo.project.name === 'mobile-chromium') {
    await expect(page.locator('.mobile-controls')).toBeVisible();
    const counterButton = page.locator('.touch-actions [data-input="counter"]');
    const buttonBox = await counterButton.boundingBox();
    expect(buttonBox?.width).toBeGreaterThanOrEqual(56);
    expect(buttonBox?.height).toBeGreaterThanOrEqual(56);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(412);
  } else {
    await expect(page.locator('.desktop-actions')).toBeVisible();
  }

  const screenshotDirectory = path.resolve('.visual-tests');
  mkdirSync(screenshotDirectory, { recursive: true });
  const screenshotPath = path.join(screenshotDirectory, `${testInfo.project.name}-arena.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  await testInfo.attach(`${testInfo.project.name} arena`, { path: screenshotPath, contentType: 'image/png' });

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});

test('dodge input spends stamina and restart restores the trial', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });

  await page.goto('/');
  await expect.poll(() => page.evaluate(() => (window as unknown as CounterTrialWindow).__counterTrial?.getState().tick ?? 0)).toBeGreaterThan(2);
  const initialStamina = await page.evaluate(() => (window as unknown as CounterTrialWindow).__counterTrial.getState().player.stamina);
  await page.keyboard.press('Space');
  await expect.poll(() => page.evaluate(() => (window as unknown as CounterTrialWindow).__counterTrial.getState().player.stamina)).toBeLessThan(initialStamina - 10);

  await page.keyboard.press('KeyR');
  await expect.poll(() => page.evaluate(() => (window as unknown as CounterTrialWindow).__counterTrial.getState().player.health)).toBe(4);
  await expect(page.locator('body')).toHaveAttribute('data-game-status', 'playing');
  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
