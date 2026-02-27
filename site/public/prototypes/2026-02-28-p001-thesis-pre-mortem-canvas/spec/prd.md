# PRD — Thesis Pre‑Mortem Canvas

## Problem
Most retail investors (and even disciplined ones) can write a bullish thesis, but they struggle to:
- turn the thesis into **explicit assumptions** that can be challenged,
- enumerate **concrete failure modes** (not vibes), and
- define a **fast falsification plan** that prevents “holding and hoping”.

The result: weak decision hygiene, overconfidence, and slow learning.

## Target user
- A long‑term investor building positions in US tech / semis / AI names.
- “Serious retail”: has a thesis, reads earnings, but lacks a repeatable process.

## Constraints
- Time: 30–90 seconds to capture the first useful version.
- Budget: $0 in tooling; should work as a static page demo.
- Platform: web (desktop-first), no external APIs required.

## Jobs-to-be-done
1) "When I’m about to buy/add, help me list the assumptions I’m actually making."
2) "Show me how fragile my thesis is if 1–2 assumptions fail."
3) "Give me a 1‑day plan to try to disprove my favorite story."

## Non-goals
- Automated ticker data, real market feeds, or financial advice.
- Backtesting engine.
- Full portfolio management.

## Core experience (MVP)
- User enters:
  - Ticker/name (optional)
  - Thesis statement (1–2 sentences)
  - Assumption cards (each with confidence % and impact)
- The canvas produces:
  - A **Fragility Score** (heuristic, transparent)
  - A ranked list of **failure modes** derived from low-confidence/high-impact assumptions
  - A **1‑day falsification plan** (3–5 tasks) with checkboxes

## Success metrics
- User can produce a non-empty pre‑mortem in < 2 minutes.
- User can articulate at least 3 assumptions and 3 failure modes.
- User leaves with at least 1 concrete falsification task they’d do today.

## Notes
- The demo intentionally uses a simple heuristic and explicit UI explanation; this is a decision hygiene tool, not a “magic model”.
