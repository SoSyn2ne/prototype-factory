#!/usr/bin/env node
import puppeteer from 'puppeteer-core';

const endpoint = process.env.CHROME_DEBUG_URL || 'http://127.0.0.1:9222';
const browser = await puppeteer.connect({ browserURL: endpoint, defaultViewport: null });
const pages = await browser.pages();
console.log(`connected: ${endpoint}`);
for (const [i, page] of pages.entries()) {
  console.log(`${i}: ${await page.title().catch(() => '')} — ${page.url()}`);
}
const stitch = pages.find((p) => p.url().includes('stitch.withgoogle.com')) || pages[0];
if (stitch) {
  await stitch.bringToFront();
  console.log(`selected: ${await stitch.title().catch(() => '')} — ${stitch.url()}`);
}
await browser.disconnect();
