# QA checklist

## Happy path
- Add an entity with minimal identifiers (name + website + category).
- System resolves sources (where to pull reviews/community/docs/jobs/pricing).
- First run produces:
  - Entity Health Score (0–100)
  - Risk label (Green/Yellow/Red)
  - Top 3 drivers with links to evidence
- User receives an alert when risk jumps by configured threshold.

## Edge cases
- Sparse entities: only 1–2 signals available → score must show low confidence and avoid “Red” by default.
- Seasonal spikes (launch week, conference) → change-point flagged but labeled “event-driven” when possible.
- Rebrands/renames → entity mapping should not break the historical series.
- Multi-product companies (e.g., multiple apps) → allow separate entities or roll-up.

## Acceptance verification
- Every score change is traceable to underlying metric deltas (no opaque jumps).
- Confidence/coverage shown (e.g., 3/5 signals present).
- Alert payload includes a “verify next” checklist derived from top drivers.
- Manual sanity check on 10 case studies: explanations match common-sense narratives.
