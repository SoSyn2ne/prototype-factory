# QA checklist

## Happy path
- Supervisor starts a jobsite, logs crew/water/shade/break proof, records one incident note, and exports an inspection response packet.

## Edge cases
- New worker requiring acclimatization tracking.
- Missing shade setup at shift start.
- Heat index crosses threshold mid-shift.
- Incident occurs without prior symptom notes.

## Acceptance verification
- `meta.json` includes designProfile, theme, signalRefs, and full Stitch prompt.
- PRD includes target user, key UX, required UI sections, design profile, theme, and sources.
- No placeholder bullets remain in `spec/*.md`.
