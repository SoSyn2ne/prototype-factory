# QA checklist

## Happy path
- Import mock matter activity, merge duplicates, exclude non-work, inspect the fee ruler, and generate a client card.
- Compare three matters and return to the one nearest its scope threshold.

## Edge cases
- Low confidence, duplicate email/calendar entry, no activity, threshold exceeded, privacy-redacted client card.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, UI sections, and S07 reference match ideas.md and meta.json.
- Exactly one design profile is used: financial-analyst.
- Every chart has written interpretation; numbers are tabular and uncertainty is explicit.
- Internal margin and client-safe output are clearly separated.
- No external legal system, fake legal advice, placeholder, or Phase A custom demo exists.
