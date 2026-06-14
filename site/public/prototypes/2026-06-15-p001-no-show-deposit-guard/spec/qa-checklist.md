# QA checklist

## Happy path
- The first screen shows the actual working workflow for No-Show Deposit Guard.
- All required UI sections are represented.
- The assigned design profile is visually reflected: operator-dense.
- Source signal references appear in spec and meta.

## Edge cases
- Long Korean/English labels do not overflow.
- Empty or incomplete evidence states are visible.
- Main action remains clear on mobile.

## Acceptance verification
- pNNN slot exists for p001.
- meta.json contains actual title, one-liner, target user, profile, theme, source refs, and Stitch prompt.
- No custom demo was implemented during Phase A.
