# PRD — Earnings Call Signal Sifter

## Problem
Earnings calls contain dozens of statements, but only a handful actually change an investor’s decision (size up / hold / trim) — especially in semis where guidance, supply, and margin commentary is subtle. Most people either:
- overreact to a single headline quote, or
- get lost in the transcript and fail to convert words → explicit decision inputs.

## Target user
- Retail / semi-pro investors focused on semiconductors (NVDA/AMD/TSMC/ASML/etc.).
- A “busy analyst” persona: reads transcripts on a phone/laptop and wants a repeatable checklist.

## Constraints
- Time: 10–15 minutes per call (intake → signals → next actions).
- Budget: $0 tooling; runs as a static demo.
- Platform: browser-only, offline-capable (no server calls).

## Non-goals
- Producing a true NLP summary or factual extraction.
- Giving financial advice or price targets.
- Storing transcripts permanently (privacy).

## Success metrics
- User can produce exactly 5 decision signals in <3 minutes using presets.
- Each signal has: category, evidence quote, confidence, and a falsification action.
- User can quickly filter signals by keyword to sanity-check consistency.

## Notes
This prototype is intentionally a “decision UI”: the core value is forcing structure + falsifiability, not AI accuracy.
