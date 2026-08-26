# PRD — Router Patch Walk

## Problem
- Small venues lack a room-level inventory when urgent router patches arrive.

## Target user
- Cafés, guesthouses, studios, and small-office technicians.

## Arrival path
- Live source signal, operator search, or peer share.

## Business / validation route
- Test five target users completing the core loop with realistic local data.

## Core loop
- Scan device → identify service → stage patch → test guest/staff paths → attach handoff tag.

## First screen
- Venue map with device status and dominant QR scan.

## Key screens
- Venue map; device scan; affected service; patch sequence; connectivity test; rollback; QR handoff.

## Interaction rules
- A device cannot close until guest Wi-Fi and staff-critical service tests pass.

## Output artifact
- Printed or saved QR handoff tag.

## Share / return loop
- Next technician scans the tag; venue repeats on security notice.

## Constraints
- Time: one-session prototype loop under 15 minutes.
- Budget: local mock data; no paid APIs.
- Platform: responsive web/mobile concept appropriate to the interaction.

## Non-goals
- No production integration, automated external action, or custom demo in Phase A.

## Success metrics
- 80% of five testers explain the core rule in 15 seconds and finish the main loop without help.

## QA / screenshot criteria
- Show unknown device, no backup, failed patch, partial outage, restored, and verified states outdoors/mobile.

## Design profile
- field-ops

## Theme
- 자산 방어

## Source signal references
- S8 Ubiquiti critical patches; S2 change monitoring.

## Development start prompt

```text
Build Router Patch Walk from this PRD using the field-ops profile, realistic local data, the listed interaction states, responsive desktop/mobile QA, and no paid external APIs.
```

## Notes
- Phase A scaffold only; Stitch export is handled by the separate 08:30 job.

