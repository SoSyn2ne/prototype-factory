# QA checklist — Rep Failure Haptic Duel

## Happy path
- Complete: Pair watches, calibrate, run a 45-second dual set, show clean reps and fatigue estimates, then share a safe recap.
- Confirm every required section is present: Pairing; calibration; exercise selector; dual lanes; form/fatigue; haptic timeline; safety stop; recap/rematch.

## Edge cases
- Empty input, malformed input, low-confidence evidence, long text, and mobile width have explicit states.

## Acceptance verification
- Safety stop is always visible; estimates are not medical claims; live text is minimal and numbers remain legible at arm’s length.
- Source refs S8, S7 and profile field-ops match ideas.md and meta.json.

