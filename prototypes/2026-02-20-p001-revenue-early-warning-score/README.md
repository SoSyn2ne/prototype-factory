# Revenue Early-Warning Score (REWS)

A lightweight scoring system that turns noisy monetization metrics into a single daily tripwire with suggested next actions.

## Status
- prototype (spec-only)

## What it is
REWS produces a **0–100 daily health score** for a monetized product (app/SaaS/content) and a **small set of “why it moved” explanations**.

The point is not perfect forecasting; it’s **fast detection** of “something is off” early enough to act.

## Anti-RAG synthesis (doctrine)
- **Anchor (similar):** Datadog / Grafana-style metric alerts (thresholds on time series)
- **Contrast 1 (dissimilar):** ICU *early warning scores* (combine weak signals into one triage score)
- **Contrast 2 (dissimilar):** Aviation *checklists* (predefined actions tied to a detected condition)
- **Synthesis:** Combine (1) simple metric deltas + volatility normalization into a single score, then (2) map score drops to a short “checklist” of next actions.

## Inputs (MVP)
A small daily table (CSV/Sheet) with:
- Revenue
- Sessions/installs
- Conversion rate
- ARPDAU/ARPU
- Refunds/chargebacks
- CAC (optional)
- Support volume (optional)

## Output
- `rews_score` (0–100)
- Top 1–3 contributing factors (e.g., “conversion down 18% vs 7-day baseline”)
- Recommended next actions (2–5 checklist items)

## Scoring (simple first)
- Build baselines: 7-day moving median for each metric
- For each metric: compute normalized delta (today vs baseline)
- Weight metrics (config) → sum → clamp to 0–100
- Add volatility penalty when metrics are unusually noisy (to reduce false alarms)

## How to use
- Read the PRD in `spec/prd.md`
- Validate assumptions in `spec/assumptions.md`
- Run the falsification checklist in `spec/falsification.md` before building anything

## Links
- Preview: (TBD)
