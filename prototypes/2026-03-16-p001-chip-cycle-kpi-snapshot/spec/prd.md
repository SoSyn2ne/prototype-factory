# PRD — Chip Cycle KPI Snapshot

## Problem
Semiconductor investing decisions are often driven by fragmented signals (inventory, pricing, utilization, macro). Most investors either:
- overfit to one signal (“pricing is up so buy”), or
- drown in noisy headlines and skip making a daily stance.

We need a fast, repeatable way to turn a small set of *observable* signals into a daily stance with explicit reasoning (“receipts”).

## Target user
- Retail investors (and busy builders) tracking US semiconductor names/ETFs.
- A “daily review” person who can spend 2–5 minutes per morning.

## Constraints
- Time: 2–5 minutes per daily update
- Budget: $0 (manual inputs; no paid data feeds in the prototype)
- Platform: single static HTML demo; no network dependencies

## Non-goals
- Not a predictive model or backtester.
- Not a replacement for fundamental valuation work.
- Not real-time market data ingestion.

## Success metrics
- User can produce a daily stance (Go/Hold/Avoid) in under 90 seconds.
- The stance is accompanied by 3–5 “receipts” explaining the top drivers.
- The user can export/share the summary in one click.

## Notes
- The “KPI” set is intentionally small. The value is consistency + explicit drivers, not completeness.
- Scoring should be understandable and tunable later (weights, additional inputs).
