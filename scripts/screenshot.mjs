import { chromium } from 'playwright';

const url = 'http://localhost:4321/';
const outDir = new URL('../screenshots/', import.meta.url).pathname;

const browser = await chromium.launch();

// Desktop screenshot (1440 wide, full page)
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await desktop.goto(url, { waitUntil: 'networkidle' });
await desktop.waitForTimeout(800);
await desktop.screenshot({ path: `${outDir}desktop-home.png`, fullPage: true });
console.log('Desktop screenshot saved.');
await desktop.close();

// Mobile screenshot (iPhone 14 size, full page)
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
  isMobile: true,
  deviceScaleFactor: 2,
});
await mobile.goto(url, { waitUntil: 'networkidle' });
await mobile.waitForTimeout(800);
await mobile.screenshot({ path: `${outDir}mobile-home.png`, fullPage: true });
console.log('Mobile screenshot saved.');
await mobile.close();

await browser.close();
console.log('Done.');
