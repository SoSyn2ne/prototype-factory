# QA checklist

## Happy path
- Open the Stitch-exported demo for p007.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Guest-cap and RSVP countdown header; Tier 1 and Tier 2 list board with relationship sensitivity tags; Decline-rate slider and rolling invite calendar; Gracefulness score for notice length, travel burden, and overlap risk; Awkwardness heatmap showing who might compare invite timing; Message preview for late but warm invitations; Final send queue with hold, send, or do-not-risk labels.
- Confirm sample data matches: S12.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned calm-consumer profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p007/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p007/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
