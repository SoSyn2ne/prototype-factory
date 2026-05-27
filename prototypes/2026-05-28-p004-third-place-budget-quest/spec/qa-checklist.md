# QA checklist

## Happy path
- User enters friend budget, transport, vibe, and awkwardness tolerance, then receives a route, challenges, bail-out plan, and shareable quest card.

## Edge cases
- Group has zero spend budget.
- Rainy weather removes outdoor stops.
- One friend needs a quiet/low-social option.
- Transport radius is walking-only.

## Acceptance verification
- `meta.json` includes designProfile, theme, signalRefs, and full Stitch prompt.
- PRD includes target user, key UX, required UI sections, design profile, theme, and sources.
- No placeholder bullets remain in `spec/*.md`.
