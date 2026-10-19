# QA checklist

## Happy path
- Watch a mock auction, hold for three seconds, inspect comparable and session spend, then bid and receive a receipt.
- Replay the moment and share the “most expensive three seconds” card.

## Edge cases
- Release-to-pass, no comparable, cap reached, stream delay, price jumps during hold, reduced motion.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, sections, S06, and V1 match ideas.md and meta.json.
- Exactly one design profile is used: playful-experimental.
- One obvious interaction and one electric accent survive on 390px.
- Failure and pass moments remain funny without obscuring money.
- No real bid, checkout, external auction API, placeholder, or Phase A custom demo exists.
