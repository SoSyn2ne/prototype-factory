# QA checklist

## Happy path
- Open the Stitch-exported demo for p004.
- Confirm the first screen is the working app, not a marketing landing page.
- Confirm these sections exist: Incoming parent request inbox with urgency and emotional heat tags; Policy picker for homework, travel, tutoring, grading, and absence rules; Boundary reply composer with firm, warm, and admin-copy variants; Documentation timeline for prior contacts and posted materials; Workload impact meter showing unpaid prep time avoided; Escalation handoff to counselor, department chair, or admin; Reusable family FAQ snippets by recurring request type.
- Confirm sample data matches: S7, S8.

## Edge cases
- Long labels and Korean/English mixed copy do not overflow.
- Empty or risky inputs show useful next actions.
- Urgent states are visible without overwhelming the assigned operator-dense profile.

## Acceptance verification
- /home/sy/Downloads/stitch_drop/2026-06-17/p004/code.html exists after Stitch export.
- /home/sy/Downloads/stitch_drop/2026-06-17/p004/screen.png exists after Stitch export.
- The resulting PF ingest preserves the original Stitch environment as the main demo.
