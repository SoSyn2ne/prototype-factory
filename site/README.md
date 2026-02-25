# Prototype Gallery (`/site`)

Next.js App Router + TypeScript + Tailwind gallery app for prototype index browsing.

## Data source
- `site/public/prototypes-index.json`
- Generated from root script: `node scripts/build-index.mjs`
- Demo assets are copied from `prototypes/*/demo/**` to `site/public/demos/<id>/**` by the same script

## Routes
- `/` list/grid of prototypes
- `/p/[id]` detail page with metadata and `spec/*.md` shown as preformatted text
- `/d/[id]` stable demo wrapper route (iframes `/demos/<id>/index.html`)

## Vercel Settings (exact)
1. Framework Preset: `Next.js`
2. Root Directory: `site`
3. Build Command: `node ../scripts/build-index.mjs && next build`
4. Install Command: `npm install`
