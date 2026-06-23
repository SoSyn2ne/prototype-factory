# QA checklist - Prior Auth Fax-to-Approval Tracker

## Happy path
- Open the generated Stitch demo for p002.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: Staff imports patient service, payer rules, chart citations, submission channel, denial reason, and follow-up calls; the app creates a status lane and appeal-ready evidence brief.
- Confirm all required sections appear: Authorization queue header by patient, payer, service, and deadline; Payer requirement checklist with missing-document flags; Chart evidence citation picker; Submission channel tracker for portal, fax, phone, and ePA; Hold-time and follow-up call log; Denial-to-appeal reason mapper; Patient update message and provider handoff panel.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: field-ops.
- Theme visible: 건강 / 자산 방어 - reducing clinic paperwork drag and patient delay risk..
- Source signals cited in metadata and PRD: S4, S5.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p002/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p002/screen.png.
