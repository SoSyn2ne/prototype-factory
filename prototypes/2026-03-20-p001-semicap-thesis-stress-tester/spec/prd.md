# PRD — Semicap Thesis Stress Tester

## Problem
Semiconductor-capex (“semicap”) theses often fail *not* because the story was wrong, but because one macro shock invalidates a key assumption (capex pauses, export controls, FX moves, funding rates).

Most retail investors react to headlines (“export controls tightened”, “memory downcycle”, “KRW weakens”) without a fast way to translate the shock into:
- which assumptions break,
- what evidence to look for next, and
- whether the thesis still has a path to “works even if X happens”.

## Target user
- Primary: Korean retail investors building a semi/AI watchlist (equipment, materials, foundry exposure).
- Secondary: anyone writing a 1–2 page thesis who wants a *structured stress test* before adding.

## Constraints
- Time: 1-day prototype.
- Budget: $0 runtime.
- Platform: must run offline by opening `demo/index.html` (no server, no build).
- Fidelity: the model is heuristic; it is a thinking tool, not investment advice.

## Non-goals
- Real financial forecasting (DCF, segment models, precise sensitivity).
- Live data ingestion (earnings, macro feeds).
- Stock recommendations.

## Success metrics
- In <3 minutes, a user can:
  1) choose a shock scenario,
  2) see a clear “risk score / conviction state”,
  3) identify 2–3 *specific* assumptions that broke, and
  4) get a short “next evidence to check” list.
- Users can explain the result (“why did the risk jump?”) without the tool.

## Notes
This prototype treats a thesis as a set of *assumption cards*. A scenario is a set of shock inputs. The output is:
- a computed risk score (0–100),
- assumption statuses (OK / WATCH / BROKEN),
- a short “what to verify next” checklist.
