# QA checklist

## Happy path
- Users can scan the unit pipeline, open one turnover, and understand tasks, blockers, vendors, and readiness state immediately.
- Vendor assignments and task timelines update in a way that makes sequence dependencies obvious.
- Move-in readiness states distinguish ready, at risk, and blocked without ambiguity.

## Edge cases
- Rework after inspection failure is visible and does not look like a fresh task.
- Units with no assigned vendor are clearly flagged instead of silently waiting.
- Rush turns with same-day target dates remain legible and prominent.

## Acceptance verification
- No placeholder bullets remain in spec files.
- Design profile is recorded in meta.json and reflected in the PRD.
- Demo stays stubbed, but the information architecture must support field-ops handoff and blocker management.
