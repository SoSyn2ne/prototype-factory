# QA checklist - Contractor Arrival Trust Board

## Happy path
- Open the generated Stitch demo for p005.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: Dispatcher sees crew route, promised arrival window, customer tolerance, reschedule reason, and communication status; the app recommends who to text, credit, reassign, or escalate.
- Confirm all required sections appear: Today trust header with on-time risk, callbacks, and no-show exposure; Crew route and arrival-window board; Customer tolerance and history panel; Delay reason picker with proof photo/location fields; Two-way SMS update composer; Reschedule/credit/escalation decision queue; After-service trust recovery report.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: field-ops.
- Theme visible: 자산 방어 - protecting reputation and repeat revenue in field service..
- Source signals cited in metadata and PRD: S10, S11.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p005/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p005/screen.png.
