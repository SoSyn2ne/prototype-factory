# PRD — Ad Copy Variant Forge

## Problem
Marketers and indie builders frequently need *many* ad copy variants (headlines + primary text) to run quick A/B tests. The bottleneck is not “writing one good line” — it’s producing **12–30** usable variants that:
- follow constraints (length, forbidden words, tone)
- stay on-message (value prop + audience)
- are easy to export into ad managers / spreadsheets

Today the workflow is scattered (notes app → spreadsheet → ad manager), and "AI" tools often add latency, cost, or non-deterministic outputs that are hard to iterate.

## Target user
- Indie founders running paid ads with small budgets
- Growth marketers doing rapid creative iteration
- Agencies who need a quick starting set per client

## Constraints
- Time: should generate a first usable set in < 60 seconds
- Budget: $0 in-tool; runs fully client-side
- Platform: desktop-first web (works offline), no external dependencies

## Non-goals
- Writing “perfect” brand voice (this is a starting forge, not final polish)
- Integrating directly with Meta/Google APIs
- Multi-language generation (v1 is English-only)

## Success metrics
- User can produce 12 headline variants and 12 primary-text variants that respect constraints (max length + forbidden words)
- User can copy a single variant with one click and export all variants as CSV
- User reports the set is “usable without rewriting everything” (>= 50% keep rate)

## Notes
- Deterministic templates are a feature: users can tweak inputs and see predictable deltas.
- Scoring is heuristic (length fit, clarity, curiosity) to help pick top candidates quickly.
