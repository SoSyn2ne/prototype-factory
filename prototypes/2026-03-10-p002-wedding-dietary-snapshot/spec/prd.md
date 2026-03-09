# PRD — Wedding Dietary Snapshot

## Problem
Wedding planning often tracks guests in spreadsheets, but dietary needs end up scattered across:
- DMs/texts,
- last-minute phone calls,
- “oh btw” notes,
- multiple versions of a sheet.

The result is kitchen confusion and a high-risk failure mode: serving someone the wrong thing.

## Target user
- Wedding planner (or a bride/groom) coordinating catering.
- Secondary: anyone managing a dinner event with guests + restrictions.

## Constraints
- Time: must be usable in <5 minutes.
- Budget: $0.
- Platform: offline static HTML (no accounts).
- Output must be exportable (copy/paste) for catering teams.

## Non-goals
- Managing full seating, RSVPs, or invitations.
- Medical advice.
- Automatically validating allergies.

## Success metrics
- In a single session, an operator can add 30–150 guests quickly.
- A “summary by tag” is accurate and readable.
- Export JSON can be copied and handed to another tool without cleanup.

## User flow
1) Add guest rows (name + notes).
2) Choose tags (vegetarian/vegan/gluten-free/nut allergy/etc.).
3) See live summary counts.
4) Copy export JSON.

## Edge cases
- Same person added twice → warning/highlight.
- Guest has multiple tags.
- “Other” free-text note needed (e.g., ‘no pork’, ‘low sodium’).

## Notes
This prototype prioritizes speed + clarity over perfect data modeling.
