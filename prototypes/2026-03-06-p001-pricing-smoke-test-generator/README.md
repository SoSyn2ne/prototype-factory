# Pricing Smoke Test Generator

A design-first prototype to quickly test pricing willingness-to-pay before building the full product.

## What this prototype does
- Captures three core inputs: product name, target persona, and proposed value metric.
- Generates three pricing tiers (`Starter`, `Pro`, `Team`) from those inputs.
- Switches displayed prices between monthly and annual billing.
- Produces a copyable UTM test link per selected pricing tier variant.
- Shows a tiny tracking plan that updates based on the chosen tier.

## Why this exists
Teams often debate pricing using opinions, then discover mismatch only after launch. This prototype helps run a fast smoke test in a single day using concrete pricing variants and minimal instrumentation.

## Folder contents
- `spec/prd.md`: product requirements and scope.
- `spec/assumptions.md`: KNOWN/ASSUMPTION/UNKNOWN split.
- `spec/falsification.md`: questions that can kill weak ideas early.
- `spec/qa-checklist.md`: happy path, edge cases, and acceptance verification.
- `demo/`: local vanilla HTML/CSS/JS demo.

## Local demo
1. Open `demo/index.html` in a browser.
2. Fill product, persona, and value metric.
3. Click `Generate 3 variants`.
4. Toggle `Monthly / Annual` to compare perceived pricing.
5. Select a tier and click `Copy UTM link` for a shareable test URL.

## Status
- Prototype-ready for smoke-test walkthroughs.

## Build notes
<!-- Replaced all placeholders with concrete PRD/specs and shipped a local, idea-specific interactive demo with pricing generation, billing toggle, UTM copy fallback, and tracking-plan updates. -->
