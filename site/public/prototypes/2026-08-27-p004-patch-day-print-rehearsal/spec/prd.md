# PRD — Patch-Day Print Rehearsal

## Problem
- Tiny offices discover printer and PDF breakage only after operating-system updates.

## Target user
- Clinics, schools, property offices, print counters, and accountants.

## Arrival path
- Live source signal, operator search, or peer share.

## Business / validation route
- Test five target users completing the core loop with realistic local data.

## Core loop
- Select critical job → record device/driver → print and compare → prepare rollback → schedule patch.

## First screen
- Five critical print jobs with last known-good time and Start rehearsal.

## Key screens
- Critical job deck; device/driver map; test checklist; PDF comparison; rollback card; maintenance receipt.

## Interaction rules
- A job passes only with photographed output and expected PDF page/font checks.

## Output artifact
- Physical maintenance-window and rollback receipt.

## Share / return loop
- Tape receipt beside printer and repeat before the next patch.

## Constraints
- Time: one-session prototype loop under 15 minutes.
- Budget: local mock data; no paid APIs.
- Platform: responsive web/mobile concept appropriate to the interaction.

## Non-goals
- No production integration, automated external action, or custom demo in Phase A.

## Success metrics
- 80% of five testers explain the core rule in 15 seconds and finish the main loop without help.

## QA / screenshot criteria
- Show offline, wrong tray, missing font, mismatch, passed, and rollback states with large touch targets.

## Design profile
- field-ops

## Theme
- 자산 방어

## Source signal references
- S6 Windows update printer/PDF breakage; S11 fabricated technical evidence complaints.

## Development start prompt

```text
Build Patch-Day Print Rehearsal from this PRD using the field-ops profile, realistic local data, the listed interaction states, responsive desktop/mobile QA, and no paid external APIs.
```

## Notes
- Phase A scaffold only; Stitch export is handled by the separate 08:30 job.

