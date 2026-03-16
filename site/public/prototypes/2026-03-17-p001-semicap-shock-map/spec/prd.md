# PRD — Semicap Shock Map

## Problem
- Korean retail investors track semicap names, but “shock news” is hard to translate into an actionable *what to watch first today* ranking.
- Most tools are either too qualitative (Twitter threads) or too heavy (full factor models) for quick daily use.

## Target user
- Korean retail investor (개미) who:
  - holds or watches U.S. semicap tickers,
  - wants a fast mental model for second-order effects,
  - is okay with a heuristic tool as long as it’s explicit about limitations.

## Constraints
- Time: usable in ≤ 30 seconds per scenario
- Budget: $0
- Platform: offline static HTML/CSS/JS (open from disk)
- Data: no live prices/news in this prototype

## Non-goals
- Predicting actual returns.
- Real-time news ingestion or backtesting.
- Replacing fundamental research.

## Success metrics
- **Primary:** user can produce a ranked “today’s watchlist” and a one-sentence rationale in ≤ 60 seconds.
- **Proxy:** in a quick self-test, the user agrees the ranking is “directionally reasonable” for ≥ 2 of 3 shock types.

## User flow
1. Choose shock type (capacity cut / export restriction / demand surge).
2. Set shock magnitude (0–30%).
3. Read ranked table + top-mover explanation.
4. Copy/paste (manual) the rationale into notes (out of scope: automatic copy).

## Notes
- This is a **heuristic ranking toy** meant to accelerate thinking, not to be correct.
