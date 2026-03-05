# QA checklist

## Happy path
- Load `demo/index.html` and verify six seeded dependency rows are visible.
- Confirm Shock Score, average criticality, and SPOF count render on first load.
- Select a vendor from dropdown and verify table rows narrow to that vendor.
- Toggle `SPOF only` and verify only rows with alternatives equal to 0 remain.
- Edit criticality and alternatives inline and confirm metrics and suggestions update immediately.

## Edge cases
- Filter combination returns zero rows: score falls to 0 and suggestions provide fallback guidance.
- Alternatives edited to negative or non-numeric value: input is clamped/sanitized and app remains stable.
- Criticality edited outside 1-5: value is constrained to valid range.
- Transition from high-SPOF to low-SPOF state updates recommendation priorities without stale text.

## Acceptance verification
- Shock Score is always between 0 and 100.
- Score reacts to both criticality changes and SPOF count changes.
- Exactly three mitigation suggestions are shown for the current filtered view.
- No external network requests or CDN/font dependencies are required.
- All interactions work without page refresh in a modern browser.
