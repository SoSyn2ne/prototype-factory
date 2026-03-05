# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- The prototype focus is vendor-to-part-to-product dependency visibility, not procurement execution.
- Criticality is represented on a 1-5 scale where 5 means severe production impact if disrupted.
- A part with `alternatives = 0` is treated as a single point of failure (SPOF).
- The demo must be static, local, and implemented with vanilla HTML/CSS/JS only.

## ASSUMPTION
- Operators can provide quick manual updates for criticality and alternative counts during incidents.
- A blended risk score using average criticality plus SPOF ratio is adequate for first-line triage.
- Six seeded rows are enough to demonstrate realistic operator decisions in a short review.
- Suggested mitigations should prioritize immediate operational action over long-term transformation.

## UNKNOWN
- What weighting should each organization use for criticality vs SPOF exposure.
- Whether users prefer product-centric or part-centric grouping in the main table.
- How frequently the underlying dependency data changes in real workflows.
- What threshold should trigger formal escalation to executive incident management.
