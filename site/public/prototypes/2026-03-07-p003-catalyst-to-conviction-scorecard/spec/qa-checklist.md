# QA checklist

## Happy path
- Add 2 catalysts for 2 tickers; verify score table appears.
- Adjust a weight input: scores change immediately.
- Start sprint: checklist targets highest-score ticker and persists on refresh.

## Edge cases
- Empty ticker: form should prevent save.
- Horizon 1 day: catalyst becomes overdue after due date (logic shows Overdue).
- Delete catalyst: scores update.

## Acceptance verification
- No external network requests (no CDNs/fonts).
- Inputs are labeled; keyboard focus visible.
- Data persists in `localStorage`.
