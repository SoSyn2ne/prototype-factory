# QA checklist

## Happy path
- User enters route, match date, passport status, authorization status, and emergency contacts, then receives and shares a readiness pass.

## Edge cases
- Authorization not started within 72 hours should show a severe blocker.
- Passport expiration close to travel should force a go/no-go warning.
- Group member missing emergency contact should keep the pass shareable but visibly incomplete.

## Acceptance verification
- `meta.json` includes `designProfile`, `theme`, `sourceSignals`, and full `stitchPrompt`.
- `daily/2026-06-11/ideas.md` cites p004 signals and final prompt.
- The slot remains `2026-06-11-p004` and no custom demo was implemented in Phase A.
