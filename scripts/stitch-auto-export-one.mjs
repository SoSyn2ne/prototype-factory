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
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' });
const dlDir = process.env.STITCH_DL_DIR || path.join('/home/sy/Downloads/stitch_drop', today);
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

let appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
if (!appFrame) throw new Error('Could not find Stitch app iframe on home');

async function clickByText(text, opts = {}) {
  const clicked = await appFrame.evaluate((needle, options) => {
    const exact = options.exact ?? true;
    const candidates = [...document.querySelectorAll('button,[role=button],[role=menuitem]')];
    const el = candidates.find((node) => {
      const body = (node.innerText || node.textContent || '').trim().replace(/\s+/g, ' ');
      return exact ? body === needle : body.includes(needle);
    });
    el?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    return Boolean(el);
  }, text, opts);
  if (!clicked) throw new Error(`Could not click Stitch control: ${text}`);
}

// Operator contract: generate as Web, and use 3.1 instead of the default 3 Flash.
await clickByText('웹');
await new Promise((r) => setTimeout(r, 500));
await clickByText('3 Flash');
await new Promise((r) => setTimeout(r, 500));
await clickByText('Thinking with 3.1 Pro', { exact: false });
await new Promise((r) => setTimeout(r, 500));

await appFrame.evaluate((value) => {
  const editor = document.querySelector('[contenteditable="true"]');
  if (!editor) throw new Error('Could not find Stitch prompt editor');
  editor.focus();
  document.execCommand('selectAll', false, null);
  document.execCommand('insertText', false, value);
  editor.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertText', data: value }));
}, prompt);
await new Promise((r) => setTimeout(r, 1000));
await shot('01-filled');
await clickByText('디자인 생성', { exact: false }).catch(async () => {
  await appFrame.evaluate(() => {
    const button = [...document.querySelectorAll('button')].find((node) => node.getAttribute('aria-label') === '디자인 생성');
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
    if (!button) throw new Error('Could not find generate button');
  });
});

// Wait for project navigation/rendering.
await page.waitForFunction(() => location.href.includes('/projects/'), { timeout: 180000 }).catch(() => {});
await new Promise((r) => setTimeout(r, Number(process.env.STITCH_RENDER_WAIT_MS || 150000)));
await shot('02-project');

// Select all generated screens, open export, choose zip, export.
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await new Promise((r) => setTimeout(r, 1000));
appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
if (!appFrame) throw new Error('Could not find Stitch app iframe after generation');
await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  const topExport = buttons.find((button) => button.innerText.trim() === '내보내기' && button.getBoundingClientRect().y < 80);
  topExport?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  if (!topExport) throw new Error('Could not find top export button');
});
await new Promise((r) => setTimeout(r, 1500));
await shot('03-export-menu');
await appFrame.evaluate(() => {
  const zipLabel = [...document.querySelectorAll('label')].find((label) => label.innerText.trim() === '.zip');
  zipLabel?.click();
  if (!zipLabel) throw new Error('Could not find .zip export option');
});
await new Promise((r) => setTimeout(r, 1000));
await appFrame.evaluate(() => {
  const bottomExport = [...document.querySelectorAll('button')]
    .filter((button) => button.getBoundingClientRect().y > 780)
    .find((button) => /내보내기|다운로드|빌드/.test(button.innerText));
  bottomExport?.click();
  if (!bottomExport) throw new Error('Could not find bottom export button');
});
await new Promise((r) => setTimeout(r, Number(process.env.STITCH_DOWNLOAD_WAIT_MS || 60000)));
await shot('04-after-export');

const files = await fs.readdir(dlDir).catch(() => []);
console.log(JSON.stringify({ id, url: page.url(), title: await page.title().catch(() => ''), dlDir, files }, null, 2));
await browser.disconnect();
