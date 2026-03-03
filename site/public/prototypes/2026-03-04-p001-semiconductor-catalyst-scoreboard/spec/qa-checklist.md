# QA checklist

## Happy path
- [ ] User opens demo and sees watchlist with semiconductor tickers and visible catalyst score area.
- [ ] User adds one bullish catalyst with source URL, confidence, and horizon; entry is accepted and listed.
- [ ] User adds one bearish catalyst for a different ticker with full evidence fields.
- [ ] Scoreboard recomputes and reflects directional differences between tickers.
- [ ] UI shows explicit copy that catalyst score is for prioritization and not price prediction.

## Edge cases
- [ ] Missing source link: form blocks save (or marks invalid) and explains required evidence fields.
- [ ] Conflicting catalysts on same ticker (one bullish, one bearish): score updates deterministically and both entries remain visible.
- [ ] No-new-catalyst day: user can review unchanged rankings and latest timestamp without errors or blank-state confusion.

## Acceptance verification
1. Run the static demo from `demo/` and complete one full manual session with 4 tickers.
2. Enter at least 6 catalysts total:
   - 2 high-confidence bullish
   - 2 medium-confidence bearish
   - 2 low-confidence mixed
3. Verify every saved entry displays source link, confidence, horizon, and timestamp.
4. Verify score ordering changes when confidence/horizon values change.
5. Verify the "not price prediction" message is visible without requiring hidden menus.
6. Record pass/fail and one observed risk for each section above before marking prototype ready.
