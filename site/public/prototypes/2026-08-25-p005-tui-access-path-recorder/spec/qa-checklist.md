# QA checklist — TUI Access Path Recorder

## Happy path
- Complete: Record a keyboard task path, synchronize spoken output and focus order, flag violations, compare a patch, and export an issue.
- Confirm every required section is present: Terminal replay; keystroke timeline; announcement transcript; focus graph; inspector; compare; issue export.

## Edge cases
- Empty input, malformed input, low-confidence evidence, long text, and mobile width have explicit states.

## Acceptance verification
- All controls are keyboard reachable with thick visible focus; violations include exact keys, observed speech, and expected speech.
- Source refs S6, S11 and profile field-ops match ideas.md and meta.json.

