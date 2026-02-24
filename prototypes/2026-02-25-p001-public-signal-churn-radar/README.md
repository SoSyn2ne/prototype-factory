# Public Signal Churn Radar

Detect churn/decline risk for SaaS & AI tools using *public* leading indicators (reviews, community, docs, jobs) with a falsifiable score.

## Status
- spec (docs-only)

## What this is
A spec for a lightweight “radar” that tracks a watchlist of products/companies and emits **early-warning** alerts when public signals shift in ways that historically precede churn or stagnation.

This is aimed at:
- investors (pre‑earnings / thesis monitoring), and
- founders/PMs who want a cheap, fast health check without internal telemetry.

## Key idea
Public signals are noisy individually. The product is a **mechanism + gates** approach:
- define a small set of signals with clear directionality,
- compute a transparent score with per-signal explanations,
- force “G2 falsification” so we can quickly kill the idea if it’s not predictive.

## How to use
- Read `spec/prd.md` for the 1‑page PRD.
- Use `spec/assumptions.md` to see what’s KNOWN vs ASSUMED vs UNKNOWN.
- Use `spec/falsification.md` as the 1–2 day validation plan.
- Use `spec/qa-checklist.md` as acceptance criteria if/when implementing.

## Output level (G3)
- Document-only for now.
- Next step (if falsification passes): implement a small crawler + scorer + alert pipeline.

## Links
- Preview: (TBD)
