# QA checklist

## Happy path
- [ ] Choose preset “LLM fine-tune” and verify fields update.
- [ ] Change runtime from 2h to 4h and totals double.
- [ ] Add opportunity cost and see total cost increase.
- [ ] Runbook notes change when utilization is low.

## Edge cases
- [ ] Runtime = 0 → total cost = 0 (no NaNs).
- [ ] Utilization < 20% triggers a warning note.
- [ ] Power draw > 800W triggers a “check input” note.

## Acceptance verification
1. Run the demo offline and verify all computations work without network.
2. Try each preset and confirm it sets values deterministically.
