# QA checklist — Local Event Price Window

## Happy path
- Complete: Merge events and availability into weekend strips, then accept, reject, or cap a review band with a reason.
- Verify all sections: property baseline; event strip; availability evidence; price-window card; decision; fairness guardrail; review.

## Edge cases
- Show empty, incomplete, error, conflict, and success states with realistic data.
- Preserve the `financial-analyst` direction and 매출 최적화 theme.

## Acceptance verification
- Rates include sources and uncertainty; canceled, weak, booked, and capped states are clear.
- Cite S7, S12; contain no placeholder copy; create no custom demo in Phase A.
