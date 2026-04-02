# QA checklist

## Happy path
- User lands on the dashboard and sees listings ranked by estimated margin leakage.
- User opens a listing and clearly understands the contribution of promos, ads, fees, and returns.
- User reviews the suggested fix path and expected weekly profit recovery.

## Edge cases
- Best-selling listings with acceptable revenue but poor contribution margin.
- Listings with sparse ad data but strong fee drag.
- Multiple leakage drivers that recommend conflicting interventions.

## Acceptance verification
- Spec is clearly about listing-level margin rescue rather than generic ecommerce analytics.
- All required UI sections are explicitly documented.
- Design direction is present and consistent with the Stitch prompt.
