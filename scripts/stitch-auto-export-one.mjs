#!/usr/bin/env node
import puppeteer from 'puppeteer-core';
import fs from 'node:fs/promises';
import path from 'node:path';

const endpoint = process.env.CHROME_DEBUG_URL || 'http://127.0.0.1:9222';
const id = process.env.PF_ID || process.argv[2];
const prompt = process.env.STITCH_PROMPT || process.argv.slice(3).join(' ');
if (!id || !prompt) {
  console.error('Usage: PF_ID=<id> STITCH_PROMPT=<prompt> node scripts/stitch-auto-export-one.mjs');
  process.exit(2);
}
const outRoot = '/home/sy/.openclaw/workspace/prototype-factory/.tmp/stitch-auto';
const outDir = path.join(outRoot, id);
const dlDir = '/home/sy/Downloads/stitch_drop/2026-04-30';
await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(dlDir, { recursive: true });

const browser = await puppeteer.connect({ browserURL: endpoint, defaultViewport: null });
let page = (await browser.pages()).find((p) => p.url().includes('stitch.withgoogle.com')) || await browser.newPage();
await page.bringToFront();
const cdp = await page.createCDPSession();
await cdp.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: dlDir }).catch(() => {});

async function shot(name) {
  await page.screenshot({ path: path.join(outDir, `${name}.png`), fullPage: true }).catch(() => {});
}

await page.goto('https://stitch.withgoogle.com/', { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => {});
await new Promise((r) => setTimeout(r, 5000));
await shot('00-home');

// Focus prompt field, clear, type prompt. Coordinates are for the debug Chrome viewport (~1854x927).
await page.mouse.click(900, 445);
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await page.keyboard.type(prompt, { delay: 0 });
await new Promise((r) => setTimeout(r, 1000));
await shot('01-filled');
await page.mouse.click(1440, 679);

// Wait for project navigation/rendering.
await page.waitForFunction(() => location.href.includes('/projects/'), { timeout: 90000 }).catch(() => {});
await new Promise((r) => setTimeout(r, 90000));
await shot('02-project');

// Select all generated screens, open export, choose zip, export.
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await new Promise((r) => setTimeout(r, 1000));
let appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
if (!appFrame) throw new Error('Could not find Stitch app iframe after generation');
await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  const topExport = buttons.find((button) => button.innerText.trim() === '내보내기' && button.getBoundingClientRect().y < 80);
  topExport?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
});
await new Promise((r) => setTimeout(r, 1500));
await shot('03-export-menu');
await appFrame.evaluate(() => {
  const zipLabel = [...document.querySelectorAll('label')].find((label) => label.innerText.trim() === '.zip');
  zipLabel?.click();
});
await new Promise((r) => setTimeout(r, 1000));
await appFrame.evaluate(() => {
  const bottomExport = [...document.querySelectorAll('button')]
    .filter((button) => button.getBoundingClientRect().y > 780)
    .find((button) => /내보내기|다운로드|빌드/.test(button.innerText));
  bottomExport?.click();
});
await new Promise((r) => setTimeout(r, 45000));
await shot('04-after-export');

const files = await fs.readdir(dlDir).catch(() => []);
console.log(JSON.stringify({ id, url: page.url(), title: await page.title().catch(() => ''), dlDir, files }, null, 2));
await browser.disconnect();
