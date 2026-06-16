# QA checklist

## Happy path
- Open the Stitch-exported demo for p003.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Today’s reorder queue with buy, hold, and clear labels; SKU count intake with spreadsheet error flags; Seasonality and event calendar strip; Cash tied-up meter and storage pressure indicator; Supplier lead-time and minimum-order comparison; Stockout shame list for items customers ask for repeatedly; One-page purchase order slip with rationale.
- Confirm sample data matches: S5, S6.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned operator-dense profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p003/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p003/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
