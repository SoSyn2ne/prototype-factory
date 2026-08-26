# PRD — MyData Permission Counter

## Problem
- Expanded business MyData can help loan decisions while making consent scope hard for owners to judge.

## Target user
- Korean sole proprietors seeking policy funds or lower rates.

## Arrival path
- Live source signal, operator search, or peer share.

## Business / validation route
- Test five target users completing the core loop with realistic local data.

## Core loop
- Choose goal → inspect requested fields → narrow duration/scope → simulate impact → sign receipt.

## First screen
- Funding goal above a line-by-line lender data request.

## Key screens
- Funding goal; data counter; purpose/duration; benefit preview; counteroffer; revocation calendar; receipt.

## Interaction rules
- Every field exposes required/optional status and permits a narrower counteroffer before consent.

## Output artifact
- Plain-Korean consent and revocation receipt.

## Share / return loop
- Review with accountant or lender; return at permission expiry.

## Constraints
- Time: one-session prototype loop under 15 minutes.
- Budget: local mock data; no paid APIs.
- Platform: responsive web/mobile concept appropriate to the interaction.

## Non-goals
- No production integration, automated external action, or custom demo in Phase A.

## Success metrics
- 80% of five testers explain the core rule in 15 seconds and finish the main loop without help.

## QA / screenshot criteria
- Show required, optional, denied, expired, and revised states; Korean mobile copy must remain legible.

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Source signal references
- S4 small-business MyData expansion; S5 regional counseling program.

## Development start prompt

```text
Build MyData Permission Counter from this PRD using the financial-analyst profile, realistic local data, the listed interaction states, responsive desktop/mobile QA, and no paid external APIs.
```

## Notes
- Phase A scaffold only; Stitch export is handled by the separate 08:30 job.

