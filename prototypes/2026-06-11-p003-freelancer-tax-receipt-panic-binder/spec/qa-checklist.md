# QA checklist

## Happy path
- User enters income sources, sorts receipts by confidence, flags deduction doubts, reviews HomeTax/ModuChaeum status, and exports a binder plus accountant memo.

## Edge cases
- Missing receipt but visible bank/card payment should become an evidence gap, not an accepted deduction.
- Multiple income sources should remain readable without collapsing into generic totals.
- Past filing deadline should shift to late-filing risk and accountant handoff.

## Acceptance verification
- `meta.json` includes `designProfile`, `theme`, `sourceSignals`, and full `stitchPrompt`.
- `daily/2026-06-11/ideas.md` cites p003 signals and final prompt.
- The slot remains `2026-06-11-p003` and no custom demo was implemented in Phase A.
