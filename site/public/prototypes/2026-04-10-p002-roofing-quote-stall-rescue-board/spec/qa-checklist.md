# QA checklist

## Happy path
- User can review Roofing Quote Stall Rescue Board primary KPIs and understand the top action queue immediately.
- Selected record view combines context needed for the core UX: Review high-value stalled quotes, inspect why each job stopped moving, and trigger the fastest rescue action from one board.

## Edge cases
- Empty or low-data states still preserve hierarchy and suggested next steps.
- Dense modules remain readable without implementation-grade data integrations.

## Acceptance verification
- Design profile is recorded in meta.json and reflected in the PRD.
- Required UI sections match the documented concept and Stitch prompt.
- Demo can remain stubbed for Phase A; specs must be concrete and non-placeholder.
