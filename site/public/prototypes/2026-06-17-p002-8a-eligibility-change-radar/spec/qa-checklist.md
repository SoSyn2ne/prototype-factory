# QA checklist

## Happy path
- Open the Stitch-exported demo for p002.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Rule-change alert bar with comment deadline and impact tier; Current certification profile and owner-control proof checklist; Pipeline exposure table by contract, agency, NAICS, and bid date; Narrative evidence mapper for disadvantage claims and supporting documents; Gap queue for affidavits, financials, ownership, and mentor-protege issues; Advisor handoff packet with questions for counsel or PTAC/SBDC; Scenario toggle for proposed rule passes, changes, or stalls.
- Confirm sample data matches: S3, S4.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned financial-analyst profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p002/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p002/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
