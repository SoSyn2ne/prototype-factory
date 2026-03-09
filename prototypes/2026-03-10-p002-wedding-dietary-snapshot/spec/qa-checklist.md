# QA checklist

## Happy path
- [ ] Open demo, add 3 guests.
- [ ] Tag one guest vegan, one gluten-free, one nut allergy.
- [ ] Summary counts update immediately.
- [ ] Click “Copy export JSON” and paste into a text editor — valid JSON.

## Edge cases
- [ ] Add same name twice → duplicates warning appears.
- [ ] Add guest with multiple tags → summary counts both.
- [ ] Remove a guest row → summary recomputes correctly.

## Acceptance verification
1. Run offline via `python3 -m http.server` and verify clipboard copy works (or fallback message appears).
2. Enter 25 guests quickly; UI remains responsive.
