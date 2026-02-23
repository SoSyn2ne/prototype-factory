# PRD — Earnings Tripwire for Chip/AI Stocks

## One-liner
A daily, checklist-driven alert that flags *early* risk signals in earnings calls and news for a semiconductor/AI stock watchlist, with the exact evidence quoted.

## Problem
Chip/AI investing has a failure mode: the important warning signs often show up *in text* (earnings calls, guidance language, export-control updates, supply-chain notes) before the chart makes it obvious.

Retail / part-time investors usually:
- read too late (after price gaps), or
- skim headlines without context, or
- burn time reading everything (low signal-to-noise).

We need a **tripwire**: a small set of “if this appears, pay attention today” signals.

## Target user
- Primary: busy retail investor with a watchlist of 10–40 chip/AI-related tickers (NVDA/AMD/TSM/ASML/AVGO/SMCI/etc.).
- Secondary: operators who want a *daily brief* that is falsifiable (links + quotes), not vibes.

## Anti-RAG synthesis (anchor + 2 contrasts)
- **Anchor (similar):** Google Alerts / Finviz / broker news feeds (they notify you, but don’t enforce a decision checklist).
- **Contrast #1 (dissimilar):** Aviation **pre-flight checklists** (small number of high-leverage checks; prevents catastrophic misses).
- **Contrast #2 (dissimilar):** SRE **incident detection + postmortems** (early indicators, severity, and “what changed?” as the key question).

**Synthesis hypothesis:** treat earnings/news like incidents. Each day, run a fixed “tripwire checklist” against new text; produce a severity + evidence pack so the user can decide quickly.

## Proposed solution
### Core workflow
1) User configures a watchlist (tickers + optional company names).
2) Each morning (KST), the system ingests fresh items per ticker:
   - earnings call transcript (if new)
   - press releases / 8-K highlights
   - high-signal news sources (configurable)
3) Run the **Tripwire Checklist** (heuristics first; optional LLM classification later).
4) Output a Telegram message:
   - top 1–3 flagged tickers
   - which tripwires triggered
   - 1–3 quoted snippets per ticker (with link)
   - “what to check next” (e.g., guidance table, segment margins, export restriction exposure)

### Tripwire checklist (v0)
Signals that often precede a thesis break (examples; tune per ticker):
- Guidance language weakens (“cautious”, “demand normalization”, “digesting inventory”).
- Gross margin / operating margin compression or “mix headwinds”.
- Inventory build, channel stuffing, or distributor commentary.
- Export controls / regulatory constraints (esp. AI accelerators to China).
- Competitive displacement (design loss, “second source”, hyperscaler in-house chips).
- Capex plan changes (cut or pull-forward) at key nodes (foundry/equipment).
- Customer concentration risk (single hyperscaler shifting spend).

## Constraints
- Time: 1 day to produce a spec and a minimal “paper prototype” (no full app required).
- Budget: near-zero running costs (cron + lightweight parsing). Avoid paid data feeds in v0.
- Platform: Telegram-first output; optional simple web dashboard later.

## Non-goals
- Not a trading bot. No buy/sell recommendations.
- Not a full financial model or valuation engine.
- Not “predict the price tomorrow”. Goal is *attention allocation*.

## Success metrics
- Daily brief is generated in <60 seconds for 10–40 tickers.
- User reports: “I would have missed that” at least once in the first 2 weeks.
- False alarms: <2/week that feel clearly useless.
- Evidence quality: every flag includes at least one quote + link.

## MVP deliverable (G3 output level)
**Document-only** (spec-first). Next step after this spec: implement a minimal pipeline that can process a single sample transcript/news item and produce a correctly formatted Telegram alert.

## Notes / risks
- Data licensing and paywalls may block transcripts/news sources.
- Over-triggering creates alert fatigue.
- The model must be conservative: evidence > confidence.
