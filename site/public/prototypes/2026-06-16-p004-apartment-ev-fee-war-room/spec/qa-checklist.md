# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Decision header comparing outsource, direct operate, hybrid, and delay; Fee before/after table for kWh rates, monthly commute cost, CPO fees, and maintenance reserve; Contract and subsidy checklist for vendor terms, government support, installation scope, and ownership; Fire-liability risk register with insurer, management office, charger vendor, and resident responsibility; Resident sentiment board separating EV owners, non-EV owners, disabled drivers, and management staff; Vote packet builder with pros/cons, minority objection notes, and meeting script; Incident drill timeline for charger fault, smoke alarm, blocked bay, and emergency notice.
- Confirm realistic sample data reflects: S7, S8.
- Confirm design direction follows field-ops.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p004/.
