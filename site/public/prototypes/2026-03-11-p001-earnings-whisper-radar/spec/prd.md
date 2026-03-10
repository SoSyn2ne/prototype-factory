# PRD — Earnings Whisper Radar

## Problem
Earnings weeks create *decision overload*: dozens of tickers, conflicting narratives ("whisper" vs consensus), and missing prep steps (what would change your mind, what to read, what to monitor). The result is either:
- impulsive trades on headlines, or
- paralysis (watching without a plan), or
- post-earnings regret (no structured review).

## Target user
- Primary: retail investor / part-time trader building a focused watchlist (5–20 names) for earnings season.
- Secondary: anyone tracking catalysts (product launches, guidance, macro prints) and wanting a repeatable checklist.

## Constraints
- Time: should be usable in <2 minutes per ticker.
- Budget: $0, runs locally.
- Platform: web (static demo), no accounts.
- Data: user-entered only (for this prototype).

## Non-goals
- Fetching real earnings calendars, estimates, or "whisper" data.
- Trade recommendations or price targets.
- Portfolio tracking, broker integration.

## Core user stories
1) As a user, I can add a ticker with its earnings date and an expected volatility level so I can prioritize prep.
2) As a user, I can record my subjective "whisper vs consensus" delta to capture narrative tension.
3) As a user, I can complete a catalyst checklist so I know I’m prepared.
4) As a user, I can filter the watchlist by date range to focus on the next few days.
5) As a user, I can do a quick post-earnings review so I improve my process.

## Key screens (prototype scope)
- Watchlist + filters
- Add/edit ticker panel
- Catalyst checklist per ticker
- Readiness score per ticker (process score, not prediction)

## Success metrics
For a 1-week test (user self-report):
- Time to add a ticker: < 60 seconds.
- ≥ 70% of tracked tickers have ≥ 3 checklist items completed before earnings.
- User reports fewer "I forgot to check X" moments.

## Risks / failure modes
- Users may interpret readiness score as a trading signal.
- Checklist may be too generic; needs personalization.
- Without real data ingestion, manual entry friction may kill adoption.

## Notes
This prototype intentionally focuses on *process and preparation*, not forecasting.
