# QA checklist

## Happy path
- [ ] Open the demo and see inputs + outputs without scrolling horizontally.
- [ ] Enter: account=10,000, risk=1%, entry=100, stop distance=8%.
- [ ] Outputs update instantly: risk budget $100, stop price $92, max shares 12.
- [ ] Toggle volatility preset and see suggested stop distance change + UI hint.

## Edge cases
- [ ] Stop distance = 0% shows an error/warning and prevents divide-by-zero.
- [ ] Entry price empty/0 shows “shares N/A” but still shows risk budget.
- [ ] Risk % > 2% shows a “high risk” warning state.

## Acceptance verification
1. Run `python3 -m http.server` in `demo/` and validate everything works offline.
2. Copy the generated plan text and paste into a note — it should be readable.
