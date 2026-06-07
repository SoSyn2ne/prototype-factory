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
const downloadsBefore = new Set(await fs.readdir(dlDir).catch(() => []));

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
    const button = [...document.querySelectorAll('button,[role=button]')]
      .find((node) => {
        const label = node.getAttribute('aria-label') || (node.innerText || node.textContent || '').trim();
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
await page.waitForFunction(() => location.href.includes('/projects/'), { timeout: 180000 });
const renderWaitMs = Number(process.env.STITCH_RENDER_WAIT_MS || 150000);
const waitStarted = Date.now();
let rendered = false;
while (Date.now() - waitStarted < renderWaitMs) {
  appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
  const body = await appFrame?.evaluate(() => document.body?.innerText || '').catch(() => '');
  const generatedScreenCount = await appFrame?.evaluate(() => {
    return [...document.querySelectorAll('button,[role=button],div')]
      .filter((node) => {
        const label = (node.innerText || node.textContent || '').trim().replace(/\s+/g, ' ');
        const rect = node.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && /^devices\s+.+/i.test(label);
      }).length;
  }).catch(() => 0);
  const renderedPreviewCount = page.frames()
    .filter((frame) => frame.url() === 'about:srcdoc')
    .length;
  if (
    body
    && /내보내기|Export/.test(body)
    && !/화면 생성 중|Creating the UX flows|Crafting|Generating/i.test(body)
    && (generatedScreenCount > 0 || renderedPreviewCount > 0)
    && (
      renderedPreviewCount > 0
      || /Would you like|What would you like|How do these screens|I have designed|I built|I've developed|The design|Downloaded screens/i.test(body)
    )
  ) {
    rendered = true;
    break;
  }
  await new Promise((r) => setTimeout(r, 5000));
}
if (!rendered) throw new Error('Stitch project did not finish rendering before timeout');
await shot('02-project');

// Select all generated screens, open export, choose zip, export.
await page.keyboard.press('Escape').catch(() => {});
await page.mouse.click(650, 440).catch(() => {});
await new Promise((r) => setTimeout(r, 300));
await page.keyboard.down('Control');
await page.keyboard.press('A');
await page.keyboard.up('Control');
await new Promise((r) => setTimeout(r, 1000));
appFrame = page.frames().find((frame) => frame.url().includes('app-companion'));
if (!appFrame) throw new Error('Could not find Stitch app iframe after generation');
await appFrame.evaluate(() => {
  const controls = [...document.querySelectorAll('button,[role=button],div,span')]
    .map((node) => ({ node, rect: node.getBoundingClientRect(), label: (node.innerText || node.textContent || '').trim().replace(/\s+/g, ' ') }))
    .filter(({ rect }) => rect.width > 0 && rect.height > 0);
  const selectAll = controls.find((node) => {
    return node.label === '모두 선택' || node.label === 'Select all';
  });
  selectAll?.node.click();
});
await new Promise((r) => setTimeout(r, 1500));
await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button,[role=button]')];
  const topExport = buttons.find((button) => {
    const label = (button.innerText || button.textContent || '').trim();
    const rect = button.getBoundingClientRect();
    return /내보내기|Export/.test(label) && rect.y < 100 && rect.width > 0 && rect.height > 0;
  });
  topExport?.click();
  if (!topExport) throw new Error('Could not find top export button');
});
await new Promise((r) => setTimeout(r, 1500));
await shot('03-export-menu');
const zipTarget = await appFrame.evaluate(() => {
  const row = [...document.querySelectorAll('label,button,[role=button],[role=radio]')]
    .map((node) => ({ node, rect: node.getBoundingClientRect(), label: (node.innerText || node.textContent || '').trim().replace(/\s+/g, ' ') }))
    .filter(({ rect }) => rect.width > 0 && rect.height > 0 && rect.x > 1200)
    .find(({ label }) => label === '.zip');
  if (!row) return null;
  return {
    x: row.rect.x + Math.min(24, row.rect.width / 2),
    y: row.rect.y + row.rect.height / 2,
  };
});
if (zipTarget) {
  await page.mouse.click(zipTarget.x, zipTarget.y);
} else {
  await page.mouse.click(Number(process.env.STITCH_ZIP_X || 1279), Number(process.env.STITCH_ZIP_Y || 455));
}
await appFrame.waitForFunction(() => {
  const rows = [...document.querySelectorAll('button,[role=button]')];
  return rows.some((node) => {
    const rect = node.getBoundingClientRect();
    const text = (node.innerText || node.textContent || node.getAttribute('aria-label') || '').trim();
    return rect.x > 1200 && rect.y > 700 && /내보내기|Export|Download|다운로드/.test(text);
  });
}, { timeout: 5000 }).catch(() => new Promise((r) => setTimeout(r, 1000)));
const exportTarget = await appFrame.evaluate(() => {
  const buttons = [...document.querySelectorAll('button,[role=button]')]
    .map((button) => ({ button, rect: button.getBoundingClientRect(), text: (button.innerText || button.getAttribute('aria-label') || '').trim() }))
    .filter(({ button, rect, text }) =>
      rect.width > 0
      && rect.height > 0
      && rect.x > 1200
      && rect.y > 700
      && /내보내기|Export|Download|다운로드/.test(text)
      && !(button.disabled || button.getAttribute('aria-disabled') === 'true')
    );
  const button = buttons.sort((a, b) => b.rect.y - a.rect.y)[0]?.button;
  if (!button) return null;
  const rect = button.getBoundingClientRect();
  return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
});
if (exportTarget) {
  await page.mouse.click(exportTarget.x, exportTarget.y);
} else {
  await page.mouse.click(Number(process.env.STITCH_EXPORT_X || 1388), Number(process.env.STITCH_EXPORT_Y || 790));
}
await new Promise((r) => setTimeout(r, Number(process.env.STITCH_DOWNLOAD_WAIT_MS || 60000)));
await shot('04-after-export');

const files = await fs.readdir(dlDir).catch(() => []);
const newZipFiles = files.filter((file) => file.endsWith('.zip') && !downloadsBefore.has(file));
if (!newZipFiles.length) {
  throw new Error(`Stitch export did not download a zip into ${dlDir}`);
}
console.log(JSON.stringify({ id, url: page.url(), title: await page.title().catch(() => ''), dlDir, files, newZipFiles }, null, 2));
await browser.disconnect();
