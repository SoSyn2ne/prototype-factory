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
let page = (await browser.pages()).find((p) => p.url().includes('stitch.withgoogle.com') && !p.url().includes('/projects/'))
  || (await browser.pages()).find((p) => p.url().includes('stitch.withgoogle.com'))
  || await browser.newPage();
await page.bringToFront();
const cdp = await page.createCDPSession();
await cdp.send('Browser.getWindowForTarget')
  .then(({ windowId }) => cdp.send('Browser.setWindowBounds', {
    windowId,
    bounds: { left: 0, top: 0, width: 1600, height: 1000, windowState: 'normal' },
  }))
  .catch(() => {});
await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 1 }).catch(() => {});
await cdp.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: dlDir }).catch(() => {});

async function shot(name) {
  if (process.env.STITCH_SKIP_SHOTS === '1') return;
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
    el?.click();
    return Boolean(el);
  }, text, opts);
  if (!clicked) throw new Error(`Could not click Stitch control: ${text}`);
}

async function clickGenerate() {
  const clicked = await appFrame.evaluate(() => {
    const button = [...document.querySelectorAll('button')]
      .find((node) => {
        const label = node.getAttribute('aria-label') || '';
        return label === '디자인 생성' || /^Generate designs?$/i.test(label);
      });
    button?.click();
    return Boolean(button);
  });
  if (!clicked) throw new Error('Could not find generate button');
}

// Operator contract: generate as Web, and use 3.1 instead of the default 3 Flash.
const clickedWeb = await appFrame.evaluate(() => {
  const candidates = [...document.querySelectorAll('button,[role=button],[role=tab]')];
  const el = candidates.find((node) => {
    const body = (node.innerText || node.textContent || '').trim().replace(/\s+/g, ' ');
    return body === '웹' || body === 'Web';
  });
  el?.click();
  return Boolean(el);
});
if (!clickedWeb) throw new Error('Could not click Stitch Web control');
await new Promise((r) => setTimeout(r, 500));
const modelButton = await appFrame.evaluate(() =>
  [...document.querySelectorAll('button,[role=button]')]
    .some((node) => /3\s*Flash|2\.5\s*Flash|Flash/.test((node.innerText || node.textContent || '').trim()))
);
if (modelButton) {
  const clickedModel = await appFrame.evaluate(() => {
    const el = [...document.querySelectorAll('button,[role=button]')]
      .find((node) => /3\s*Flash|2\.5\s*Flash|Flash/.test((node.innerText || node.textContent || '').trim()));
    el?.click();
    return Boolean(el);
  });
  if (!clickedModel) throw new Error('Could not open Stitch model selector');
  await new Promise((r) => setTimeout(r, 500));
  const clicked31 = await appFrame.evaluate(() => {
    const el = [...document.querySelectorAll('button,[role=button],[role=menuitem]')]
      .find((node) => /3\.1|Thinking with 3\.1 Pro/i.test((node.innerText || node.textContent || '').trim()));
    el?.click();
    return Boolean(el);
  });
  if (!clicked31) throw new Error('Could not select Stitch model 3.1');
  await new Promise((r) => setTimeout(r, 500));
}

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
await clickGenerate();

// Wait for project navigation/rendering.
await page.waitForFunction(() => location.href.includes('/projects/'), { timeout: 180000 }).catch(() => {});
const renderWaitMs = Number(process.env.STITCH_RENDER_WAIT_MS || 150000);
const waitStarted = Date.now();
while (Date.now() - waitStarted < renderWaitMs) {
  appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
  const body = await appFrame?.evaluate(() => document.body?.innerText || '').catch(() => '');
  if (
    body
    && /내보내기|Export/.test(body)
    && /Would you like|How do these screens|I have designed|I built|The design|Downloaded screens/i.test(body)
    && !/\([0-3]\/[4-9]\)/.test(body)
  ) break;
  await new Promise((r) => setTimeout(r, 5000));
}
await shot('02-project');

// Select all generated screens, open export, choose zip, export.
await page.keyboard.press('Escape').catch(() => {});
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await new Promise((r) => setTimeout(r, 1000));
appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
if (!appFrame) throw new Error('Could not find Stitch app iframe after generation');
await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')];
  const topExport = buttons.find((button) => {
    const label = (button.innerText || button.textContent || '').trim();
    return /내보내기|Export/.test(label) && button.getBoundingClientRect().y < 100;
  });
  topExport?.click();
  if (!topExport) throw new Error('Could not find top export button');
});
await new Promise((r) => setTimeout(r, 1500));
await shot('03-export-menu');
const clickedZip = await appFrame.evaluate(() => {
  const row = [...document.querySelectorAll('label,button,[role=radio]')]
    .find((node) => (node.innerText || node.textContent || '').trim() === '.zip');
  if (!row) return false;
  row.click();
  return true;
});
if (!clickedZip) {
  await page.mouse.click(Number(process.env.STITCH_ZIP_X || 1279), Number(process.env.STITCH_ZIP_Y || 455));
}
await new Promise((r) => setTimeout(r, 1000));
const clickedExport = await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button')]
    .map((button) => ({ button, rect: button.getBoundingClientRect(), text: (button.innerText || button.getAttribute('aria-label') || '').trim() }))
    .filter(({ rect, text }) => rect.width > 0 && rect.height > 0 && /내보내기|Export|Download|다운로드|빌드/.test(text));
  const button = buttons.sort((a, b) => b.rect.y - a.rect.y)[0]?.button;
  button?.click();
  return Boolean(button);
});
if (!clickedExport) {
  await page.mouse.click(Number(process.env.STITCH_EXPORT_X || 1388), Number(process.env.STITCH_EXPORT_Y || 790));
}
await new Promise((r) => setTimeout(r, Number(process.env.STITCH_DOWNLOAD_WAIT_MS || 60000)));
await shot('04-after-export');

const files = await fs.readdir(dlDir).catch(() => []);
console.log(JSON.stringify({ id, url: page.url(), title: await page.title().catch(() => ''), dlDir, files }, null, 2));
await browser.disconnect();
