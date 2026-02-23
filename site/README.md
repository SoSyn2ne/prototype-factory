# Prototype Gallery (`/site`)

Next.js App Router + TypeScript + Tailwind gallery app for prototype index browsing.

## Data source
- `site/public/prototypes-index.json`
- Generated from root script: `node scripts/build-index.mjs`

## Routes
- `/` list/grid of prototypes
- `/p/[id]` detail page with metadata and `spec/*.md` shown as preformatted text

## Vercel Settings (exact)
1. Framework Preset: `Next.js`
2. Root Directory: `site`
3. Build Command: `node ../scripts/build-index.mjs && next build`
4. Install Command: `npm install`
