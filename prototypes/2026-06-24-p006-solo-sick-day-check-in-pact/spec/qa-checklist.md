# QA checklist - Solo Sick-Day Check-In Pact

## Happy path
- Open the generated Stitch demo for p006.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: User defines normal routines, illness flags, trusted contacts, privacy boundaries, missed-check escalation, and comfort messages; the app simulates exactly what happens if they go quiet.
- Confirm all required sections appear: Daily check-in status header with privacy level and next deadline; Routine pattern and exception builder; Illness-day quick mode with symptoms, supplies, and help threshold; Trusted contact escalation ladder; Message preview for gentle nudge, concern, and emergency; False-alarm pause and travel mode controls; Shareable pact summary for friends or family.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: calm-consumer.
- Theme visible: 외로움 / 건강 - solo living safety without shame or surveillance..
- Source signals cited in metadata and PRD: S13.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p006/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p006/screen.png.
