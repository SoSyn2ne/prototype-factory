# QA checklist

## Happy path
- Enter 3 strike rows and confirm the summary updates.
- Confirm top strikes list sorts by total OI.
- Confirm bullish/bearish gauge changes when puts dominate calls.

## Edge cases
- Zero/negative values should be blocked.
- Empty table shows an empty state.

## Acceptance verification
- Demo is local-only (no external CDNs).
- No console errors.
