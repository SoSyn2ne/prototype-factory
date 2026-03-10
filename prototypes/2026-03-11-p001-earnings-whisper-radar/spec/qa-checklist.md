# QA checklist

## Happy path
- Add a ticker with date, volatility, and slider value.
- See it appear in the list with a readiness score.
- Open the ticker and toggle checklist items.
- Readiness score updates immediately.
- Reload page; data persists.

## Edge cases
- Invalid date / empty ticker should show inline validation.
- Filter range where from > to should be handled gracefully.
- Very large list (50+) should remain usable.
- LocalStorage unavailable (private mode) should degrade with a warning.

## Acceptance verification
- No external network dependencies (no fonts/CDNs).
- Keyboard navigation works for core controls.
- Contrast and focus states are visible.
