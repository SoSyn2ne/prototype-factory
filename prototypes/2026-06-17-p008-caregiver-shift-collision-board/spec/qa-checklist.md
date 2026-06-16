# QA checklist

## Happy path
- Open the Stitch-exported demo for p008.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Week-at-risk board with collision count and next missed-care threat; Medication, meal, appointment, and transport timeline; Family shift grid with job hours, commute, and availability windows; Burden imbalance meter by sibling, spouse, and paid aide; Career-risk flags for missed work, unpaid leave, and last-minute swaps; Care handoff checklist for pharmacy, clinic, documents, and emergency contacts; Printable fridge plan and Kakao-style family update summary.
- Confirm sample data matches: S13, S14.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned field-ops profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p008/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p008/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
