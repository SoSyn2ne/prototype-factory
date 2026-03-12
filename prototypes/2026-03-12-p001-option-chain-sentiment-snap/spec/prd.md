# PRD — Option Chain Sentiment Snap

## Problem
Option chains contain useful positioning signals (call/put open interest, volume, implied volatility), but the raw table is noisy. Investors want a fast "snapshot" to answer:
- Where is positioning concentrated (key strikes)?
- Is sentiment skewed bullish or bearish (calls vs puts)?
- Is the skew concentrated near-term or longer-dated?

## Target user
- Retail or semi-pro investor doing quick pre-trade context checks.
- Operator who wants a lightweight heuristic, not a full options analytics terminal.

## Constraints
- Time: < 2 minutes to enter or paste a few strikes.
- Budget: $0; static demo.
- Platform: browser-only; no backend.

## Non-goals
- Live brokerage/data integration.
- Accurate volatility surface modeling.
- Trade recommendations.

## Success metrics
- User can enter a few strike rows and see the top strikes + a simple bullish/bearish gauge.
- User can explain how the gauge is computed.

## Notes
This prototype intentionally uses simplified scoring (OI-weighted call/put ratio + near/ATM weighting) to validate whether the UI framing is useful.
