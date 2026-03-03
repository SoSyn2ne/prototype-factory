# Semiconductor Catalyst Scoreboard

Track bullish/bearish catalysts per semiconductor stock with an evidence rubric (source, confidence, horizon) and a transparent catalyst score that is explicitly not price prediction.

## Status
- prototype

## What’s inside
- `spec/prd.md` — one-page PRD + PLAYBOOK_IDEATION (anchor + 2 contrast inspirations)
- `spec/assumptions.md` — KNOWN / ASSUMPTION / UNKNOWN map
- `spec/falsification.md` — 7 disproof questions
- `spec/qa-checklist.md` — happy path, edge cases, acceptance checks
- `demo/` — static demo (`index.html` + assets)

## How to run demo (static)
- Direct open: launch `demo/index.html` in a browser.
- Optional local server:
  - `cd prototypes/2026-03-04-p001-semiconductor-catalyst-scoreboard/demo`
  - `python3 -m http.server 4173`
  - open `http://localhost:4173`

## Where to find `/d` and `/p` links
- Prototype ID: `2026-03-04-p001`
- Detail page route: `/p/2026-03-04-p001`
- Demo route: `/d/2026-03-04-p001`
- If deployed on the main site:
  - `https://prototype-factory.vercel.app/p/2026-03-04-p001`
  - `https://prototype-factory.vercel.app/d/2026-03-04-p001`
- Local gallery workflow:
  - run `node scripts/build-index.mjs` to copy prototype/demo into `site/public/`
  - run the site and open the same `/p/...` and `/d/...` paths locally

## Manual test checklist (short)
- [ ] Add at least one bullish and one bearish catalyst with valid source links.
- [ ] Change confidence/horizon and confirm score ordering changes.
- [ ] Verify each entry shows evidence fields (source, confidence, horizon, timestamp).
- [ ] Verify "not price prediction" positioning is clear in copy.
