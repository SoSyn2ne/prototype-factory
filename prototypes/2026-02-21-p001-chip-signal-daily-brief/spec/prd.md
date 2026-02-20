# PRD — ChipSignal Daily Brief

## Problem
Retail investors (especially busy parents) who hold semiconductor / AI-hardware stocks get overwhelmed by noisy headlines (product launches, export controls, foundry capacity, earnings guidance, supply chain incidents). They either:
- overreact to low-signal news, or
- miss high-impact early signals until the price already moved.

They need a *repeatable, fast* daily decision aid that converts “what happened” into “what should I do today (if anything)?” with clear uncertainty.

## Target user
- Primary: Korean retail investor holding US semiconductor/AI-hardware names (e.g., NVDA/AMD/TSM/ASML/AVGO etc.) and/or semiconductor ETFs.
- Secondary: Side-project builder who wants a daily “monetization factory” dashboard for investment actions.

## Constraints
- Time: 5 minutes/day to read, ≤10 minutes/day to maintain.
- Budget: $0–$30/mo early (use free sources; no expensive data feeds).
- Platform: Document-first (Markdown) now; later Telegram bot / dashboard.

## Anti-RAG (anchor + 2 contrasts)
### Anchor (similar)
- “Daily market/news brief” newsletters and earnings-calendar trackers.

### Contrast 1 (dissimilar)
- Incident response playbooks (SRE): clear severity levels, triggers, and pre-written next actions.

### Contrast 2 (dissimilar)
- Speedrunning split timers / habit streak trackers: a short, repeatable loop that builds trust through consistency.

### Synthesis (hypothesis)
A daily brief becomes valuable when it behaves like an incident-response system:
- **Tripwires** (explicit triggers) instead of opinions
- **Severity** levels and **recommended next actions**
- **Uncertainty labels** per claim (KNOWN/ASSUMPTION/UNKNOWN)

## What it is (v1)
A single daily artifact (Markdown or Telegram message) containing:
1) **Today’s Tripwires** (0–5 items)
2) **Earnings / event calendar** (next 14 days for tracked names)
3) **Position-level suggestions** (Hold/Add/Trim/No action) driven by *predefined rules*, not vibes
4) **Uncertainty labeling** and “what would change my mind” notes

## User flow
1) User selects a watchlist (tickers + max position size + “risk tolerance”).
2) Each morning at 06:00 KST the brief is generated.
3) User reads in <5 minutes.
4) If a tripwire fires, user either does nothing or takes a small, pre-committed action (e.g., trim 10%, add 5%, set an alert).

## Non-goals
- Full brokerage integration / auto-trading.
- Predicting prices.
- Deep fundamental valuation models (v1).

## Success metrics
- Engagement: user reads ≥4 briefs/week for 4 weeks.
- Action quality proxy: fewer “panic trades” (self-reported) and fewer missed earnings dates.
- Output quality: each fired tripwire includes a specific next action + an explicit falsification condition.

## Notes
- This is intentionally **spec-only** (G3) until we validate that tripwires produce consistently useful actions.
