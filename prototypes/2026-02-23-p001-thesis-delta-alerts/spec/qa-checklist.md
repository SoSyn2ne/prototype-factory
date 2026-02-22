# QA checklist

## Happy path
- User creates 3 theses using the template (position + reasons-to-hold + reduce-if triggers).
- User selects sources (tickers/keywords + 1–3 anchors).
- Daily brief arrives at 06:00 with 3–7 cards.
- Each card clearly states:
  - the delta,
  - the thesis claim it impacts,
  - severity,
  - one next action.

## Edge cases
- No meaningful updates: brief should send a single “No thesis deltas today” message.
- Conflicting sources: card should label uncertainty and suggest a verification action.
- Too many updates in one day: enforce cap and include “suppressed items count”.
- User with theme-based thesis (no tickers): system still works via keywords.

## Acceptance verification
- Readability: a user can understand each card in <30 seconds.
- Actionability: at least one card per week suggests an action that is actually doable in ≤10 minutes.
- Noise control: daily output never exceeds the cap.
- G1 compliance: key claims in a card can be tagged KNOWN/ASSUMPTION/UNKNOWN.
