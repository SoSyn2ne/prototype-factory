# QA checklist

## Happy path
- Enter an allowed parking zone, hold for eight seconds, collect four confirmations, and save an end receipt.
- Review the exact time billing stopped.

## Edge cases
- Lock sound absent, GPS moving, photo denied, billing continues, low network, alternate ride requested.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, sections, and S02 reference match ideas.md and meta.json.
- Exactly one design profile is used: field-ops.
- No false green success is possible when a signal remains unresolved.
- 390px uses 48px controls, outdoor contrast, and no horizontal overflow.
- No real mobility API, payment, placeholder, or Phase A custom demo exists.
