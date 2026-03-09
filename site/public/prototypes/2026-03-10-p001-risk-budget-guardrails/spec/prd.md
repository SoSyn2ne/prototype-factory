# PRD — Risk Budget Guardrails

## Problem
Many retail investors size positions emotionally (or copy a % from someone else), then realize too late:
- the stop is too tight (gets whipsawed), or
- the position is too large (one bad day wrecks the account), or
- the “plan” is not explicit (no stop, no invalidation).

This prototype makes sizing *boringly explicit* using a simple risk budget.

## Target user
- Individual investor managing a small/medium account who buys single stocks/ETFs and wants a consistent sizing rule.
- Secondary: anyone doing paper trading / journaling.

## Constraints
- Time: one sitting (1–3 minutes per setup)
- Budget: $0
- Platform: static offline HTML (no APIs)
- Must be understandable without finance jargon.

## Non-goals
- Predicting price direction.
- Replacing a broker’s risk system.
- Options/complex derivatives sizing.

## Success metrics
- A user can produce a coherent plan in <60 seconds:
  1) max account risk per trade,
  2) stop distance,
  3) resulting max position size,
  4) warnings if inputs are inconsistent.
- Users report fewer “I didn’t know what my risk was” moments.

## User flow (happy path)
1) Enter account size.
2) Choose max risk per trade (%).
3) Enter entry price and stop distance (%).
4) Pick a volatility preset (low/med/high) that nudges suggested stop distance.
5) Read outputs: dollars-at-risk, max shares, max notional, suggested stop price.
6) Copy the plan into notes.

## Edge cases
- Stop distance is 0% or tiny → calculator warns about whipsaw/fees.
- Entry price missing/0 → share count cannot compute.
- Risk % too high (e.g., >2%) → warning.

## Why now (hypothesis)
As “news-driven” investing grows, more people trade single names without a disciplined sizing model. A tiny guardrail UI can reduce catastrophic sizing errors.
