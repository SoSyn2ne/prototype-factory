# PRD — Semiconductor Catalyst Scoreboard

## Problem
Semiconductor investors track catalysts across multiple names (e.g., NVDA, AMD, TSM, ASML), but evidence is scattered across earnings calls, filings, IR posts, policy news, and supplier/customer updates.

Current workflow failure:
- Notes are ad hoc and hard to audit later.
- Bullish/bearish claims are mixed with opinion.
- Portfolio attention is often driven by recency bias, not evidence quality.

Need: a lightweight daily workflow that captures catalysts in a structured way and computes a transparent catalyst score for prioritization, explicitly not for price prediction.

## Target user
- Primary: individual investor or small operator running a semiconductor watchlist (4-12 tickers) who wants a repeatable daily process.
- Secondary: analyst/content operator who needs evidence-backed thesis tracking without paid terminal tooling.

## Constraints
- Time: daily update in <=10 minutes; per-entry logging in <=60 seconds.
- Budget: free/public sources first; no dependency on paid market data in v1.
- Platform: spec + static demo first, optional Next.js app path already scaffolded.
- Compliance: every catalyst entry must include source link and confidence; UI language must state "not price prediction."

## Non-goals
- Predicting next-day/next-week stock prices.
- Auto-trading, order execution, or brokerage integration.
- Full fundamental valuation model (DCF, target price engine).
- Comprehensive market news ingestion across all semiconductor names.

## Success metrics
- Usage: operator completes >=5 daily updates per week for 2 consecutive weeks.
- Data quality: >=90% of catalyst entries contain source link, confidence, and time horizon.
- Decision utility: user can identify top 2 "research next" tickers in <2 minutes from scoreboard.
- Trust: every score movement is traceable to explicit bullish/bearish entries.

## Core workflow (v1)
1. Choose watchlist tickers (example: NVDA, AMD, TSM, ASML).
2. Add catalyst entry:
   - direction (`bullish` or `bearish`)
   - category (earnings, guidance, supply chain, geopolitics, product, customer demand)
   - source URL
   - confidence (`low/medium/high`)
   - horizon (`near` 1-4w, `mid` 1-3m, `long` 3-12m)
3. Scoreboard recomputes ticker score using transparent weights.
4. User reviews ranking and picks follow-up actions (read more, hold, trim/add thesis confidence), not trades.

## Scoring model (transparent starter)
- Entry weight = direction_sign * confidence_weight * horizon_weight
- Suggested defaults:
  - confidence weights: low=1, medium=2, high=3
  - horizon weights: near=1.0, mid=0.8, long=0.6
- Ticker catalyst score = sum(all active entry weights in lookback window)
- Display: score plus evidence count and latest update timestamp.

## PLAYBOOK_IDEATION (anchor + 2 contrast inspirations)
- Anchor (similar): issue triage boards and thesis-tracking watchlists that rank items by urgency.
- Contrast inspiration 1: fact-check newsroom workflows where every claim requires a source and confidence label.
- Contrast inspiration 2: sports power rankings where recent events update standings, but methodology is explicit and auditable.
- Synthesis: treat each catalyst as an evidence ticket, not a narrative; apply simple weighted ranking so operators can prioritize research with a clear audit trail.

## Risks / unknowns
- Scoring could create false precision if weights are interpreted as predictive truth.
- Public sources vary in reliability and latency.
- Conflicting catalysts can net to a neutral score and hide important divergence.
