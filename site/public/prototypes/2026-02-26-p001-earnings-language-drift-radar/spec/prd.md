# PRD — Earnings Language Drift Radar

## One-liner
Detect meaningful changes in earnings-call language (risk, demand, supply, guidance tone) for a watchlist of semis/AI names and alert you *before* consensus narrative catches up.

## Problem
Earnings calls and prepared remarks often contain **early narrative shifts** (e.g., “demand normalized”, “inventory digestion”, “export controls”, “allocation easing”) that matter for semis/AI. Today, investors mostly:
- skim headlines,
- read partial transcripts after the fact,
- or rely on noisy social summaries.

The result: the operator (you) misses small but meaningful *language drift* that would have changed positioning days/weeks earlier.

## Target user
- Primary: an individual investor/operator in Korea tracking US semis/AI (NVDA, AMD, ASML, TSM, MU, SMCI, etc.)
- Secondary: a small research team that wants a repeatable “narrative delta” brief

## Proposed solution
A daily “Language Drift” brief for a watchlist:
1) Ingest the most recent earnings call transcript + optionally the last 1–3 prior quarters.
2) Compute **topic-specific drift** scores (Demand, Supply, Pricing, CapEx, AI mix, Regulation/Export, Inventory).
3) Extract **delta quotes**: 3–7 short snippets that *changed* versus prior quarter.
4) Produce an alert card:
   - Drift summary (what shifted, why it might matter)
   - Confidence + uncertainty labels (G1)
   - What to verify next (quick checks)

### Anti-RAG ideation (anchor + 2 contrasts)
- Anchor (similar): Google Alerts / RSS + “earnings recap” newsletters (good for headlines, weak on *delta*).
- Contrast 1: Video game patch notes diffing (players care about *what changed*, not the whole doc).
- Contrast 2: Medical early warning scores (trend/trajectory beats a single measurement; false positives must be managed).

Synthesis: treat earnings language as a “patient” with vitals over time; alert on trend breaks with explainable diffs.

## Scope (speed-first: spec only)
Document-only artifact for now:
- Define drift signals and output format
- Define falsification experiments
- No promise of perfect accuracy; optimize for *early detection + fast verification*

## Constraints
- Time: 1–2 hours/week to maintain; daily brief should be <3 minutes to read
- Budget: ideally <$20/mo to start (API costs must be explicit)
- Platform: Web dashboard + Telegram-style summary (text first)
- Data: transcripts availability varies; must handle missing/partial data

## Non-goals
- Not a trading bot or auto-execution system
- Not a full financial model or valuation engine
- Not “summarize the whole call” (only the delta that matters)

## User experience (MVP)
### Inputs
- Watchlist tickers
- Topics to track (checkboxes)
- Sensitivity (low/med/high)

### Outputs
- Daily brief: top 3 drift events across watchlist
- Per-company page: drift timeline by topic + delta quotes

## Success metrics
- Operator metric: average time to decide “watch / investigate / ignore” per alert ≤ 60 seconds
- Precision target (initial): ≥ 60% of alerts judged “useful signal” after manual review
- Coverage target: ≥ 80% of watchlist earnings with transcripts ingested within 24h

## Risks / unknowns
- Transcript access/licensing constraints may block automation.
- “Language drift” can be style changes, not fundamentals.
- Market reaction may already price in changes (signal too late).

## Notes
If validated, next step is a lightweight pipeline prototype (not in this run): transcript ingestion + diffing + alert rendering.
