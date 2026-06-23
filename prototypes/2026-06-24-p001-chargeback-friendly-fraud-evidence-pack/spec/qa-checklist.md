# QA checklist - Chargeback Friendly-Fraud Evidence Pack

## Happy path
- Open the generated Stitch demo for p001.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: Merchant selects a disputed order, connects payment, shipping, customer messages, refund history, and descriptor context; the app scores evidence gaps and produces a bank-ready response packet.
- Confirm all required sections appear: Dispute-at-risk header with amount, deadline, reason code, and loss exposure; Order and payment descriptor comparison panel; Shipping, pickup, and delivery proof timeline; Customer conversation and refund-policy evidence lane; Friendly-fraud pattern detector using repeat buyer and address signals; Evidence gap checklist for issuer response rules; Representment packet preview with owner approval state.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: operator-dense.
- Theme visible: 자산 방어 - small merchants protecting cash from first-party fraud and chargeback leakage..
- Source signals cited in metadata and PRD: S1, S2, S3.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p001/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p001/screen.png.
