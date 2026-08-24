# QA checklist — Purchase Authority Gate

## Happy path
- Complete: Build approval rules, simulate carts, inspect line-item exceptions, approve/edit/block, and preserve a receipt.
- Confirm every required section is present: Policy builder; vendor rules; substitution matrix; cart simulator; exception queue; receipt; monthly summary.

## Edge cases
- Empty input, malformed input, low-confidence evidence, long text, and mobile width have explicit states.

## Acceptance verification
- No purchase can proceed without visible bounds; exceptions require a reason and produce a timestamped receipt.
- Source refs S5, S2 and profile operator-dense match ideas.md and meta.json.

