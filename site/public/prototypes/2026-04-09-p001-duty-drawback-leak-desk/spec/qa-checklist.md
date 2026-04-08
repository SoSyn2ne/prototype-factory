# QA checklist

## Happy path
- Ranking by recoverable cash, urgency, and document completeness is visible above the fold.
- Selecting a candidate updates the trend chart, risk panel, and action drawer consistently.
- Timeline states clearly distinguish draft, waiting on docs, filed, and reimbursed.

## Edge cases
- A case with high cash value but missing documents is clearly shown as blocked, not simply high priority.
- Partial returns or split shipments do not break summary metrics.
- Zero-value or expired cases are separated from actionable work.

## Acceptance verification
- No placeholder bullets remain in spec files.
- Design profile is recorded in meta.json and reflected in the PRD.
- Demo can remain stubbed, but the information architecture must match the written concept.
