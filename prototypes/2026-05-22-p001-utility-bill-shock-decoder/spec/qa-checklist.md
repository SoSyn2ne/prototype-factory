# QA checklist

## Happy path
- User opens Utility Bill Shock Decoder.
- User enters bill total, usage, prior month, rate plan, and fees.
- App shows likely shock causes, confidence badges, and next actions.
- User exports a household explanation or dispute call script.

## Edge cases
- Missing prior-month bill.
- Estimated meter read.
- Multi-unit or landlord-paid account.
- Payment due soon with urgent state.

## Acceptance verification
- Includes design profile `calm-consumer`, theme `자산 방어`, and signal references.
- Stitch prompt contains bill diagnosis, dispute, relief, and design direction.
