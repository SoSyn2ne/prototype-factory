# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Live risk queue for orders, returns, refunds, and chargebacks; Pattern graph for transaction history, return frequency, address/device mismatch, and reseller signals; Friction decision cards: approve, OTP, signature, manual review, restocking proof, or deny; Good-customer protection panel showing lifetime value, prior clean orders, and false-positive risk; Evidence packet drawer with tracking, packing photos, customer messages, and platform dispute fields; Support impact meter estimating angry tickets, delay cost, and chargeback exposure; Rule tuning sandbox comparing blunt blocks vs stepped friction outcomes.
- Confirm realistic sample data reflects: S9, S10.
- Confirm design direction follows operator-dense.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p005/.
