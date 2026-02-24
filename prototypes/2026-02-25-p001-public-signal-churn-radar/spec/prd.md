# PRD — Public Signal Churn Radar

## Problem
Teams and investors often discover “product is losing steam” **too late** (after revenue slows, after NPS dips, after layoffs). Internal telemetry is private; public info is abundant but scattered and hard to interpret.

We want a fast, cheap system that:
- monitors a watchlist of products/companies,
- turns public changes into a *transparent* risk score,
- and produces alerts that are actionable (what changed + why it matters + what to check next).

## Target user
Primary:
- **Public-market / pre-IPO investors** tracking thesis drift (esp. SaaS / AI tools).

Secondary:
- **Founders/PMs** at small teams who want external “market health” signals.

## Anti‑RAG ideation (anchor + 2 contrasts)
**Anchor (similar pattern):** competitor/feature-shift alerts (e.g., monitor changelogs, pricing pages, messaging deltas) → this repo already explores that family.

**Contrast #1 (credit risk):** early-warning systems use *leading indicators* + explainable factors (e.g., missed payments, utilization spikes) and emphasize calibration + false-positive costs.

**Contrast #2 (epidemiology):** outbreak detection uses noisy proxy signals (ER visits, wastewater) and looks for *change points* / trend breaks rather than absolute levels.

**Synthesis hypothesis:** a small set of public proxies, scored via change‑point + weighted factors, can detect churn/decline risk earlier than “wait for financials,” and do so in an explainable way.

## Proposed solution
A watchlist-based dashboard + alerting pipeline.

### Signals (v0 set)
For each product/company ("entity") collect (weekly cadence to start):
1) **Review velocity & sentiment** (App Store / Chrome Web Store / G2 / Capterra where applicable)
2) **Community engagement** (Reddit mention volume + comment-to-post ratio; Discord/Slack *public* member counts if available)
3) **Docs & repo activity** (docs site updates; GitHub releases; open issue aging)
4) **Hiring signal** (job posts count/recency; roles shifting from growth→cost-cutting or vice versa)
5) **Pricing & packaging changes** (plan removals, seat minimums, usage caps)

Each signal emits:
- raw metrics (what changed),
- direction (+/−),
- confidence (data coverage),
- and a short explanation string.

### Scoring
Compute an **Entity Health Score** (0–100) and a **Churn Risk** label:
- Green (0–30 risk), Yellow (31–60), Red (61–100)

Mechanism (intentionally simple + explainable):
- normalize each signal into a z-score vs trailing window
- detect **change points** (trend breaks)
- compute weighted sum, with weights adjustable by entity type (consumer app vs B2B SaaS)

### Alerts
Trigger when:
- risk increases by ≥ X within Y days (change-point), or
- two “high-signal” factors flip negative simultaneously.

Alert payload:
- entity, score change, top 3 drivers, links to sources, “what to verify next” checklist.

## Constraints
- Time: 1–2 days to falsify, 1 week to ship v0 if validated.
- Budget: minimal (prefer free/public sources + low-cost scraping).
- Platform: web dashboard + email/telegram alerts (implementation later).

## Non-goals
- Predict exact revenue numbers.
- Replace internal analytics.
- Cover private communities behind auth (no scraping ToS-violating sources in v0).

## Success metrics
Falsification-phase (≤2 days):
- For 10 known cases (5 winners, 5 losers), the radar produces **meaningful deltas** that align with narrative timelines in ≥7/10 cases.
- At least 3 signals are consistently available for ≥80% of entities.

Build-phase (if promoted):
- A user can add an entity in <2 minutes and receive the first score within 24h.
- False-positive rate acceptable: <30% of red alerts judged “noise” by user.

## Notes / Risks
- Public signals can be gamed and can lag in some verticals.
- Coverage varies a lot by product category; we may need entity-type templates.
- Scraping risk/ToS: start with sources that have APIs or permissive access.
