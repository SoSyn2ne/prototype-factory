# QA checklist

## Happy path
- User opens the daily margin hero and identifies crews with the sharpest fuel-driven margin drop.
- User reviews the route timeline and map to compare route merge, reschedule, or surcharge actions.
- User applies the preferred action and sees recovered-margin impact in the footer.

## Edge cases
- Emergency same-day jobs that cannot be rescheduled.
- VIP accounts where margin rescue options are limited.
- Crews with sparse route density where every action has a customer-trust tradeoff.

## Acceptance verification
- Spec stays focused on fuel-driven margin decisions, not generic dispatch management.
- All required UI sections are explicitly documented.
- Design direction is included and consistent with the Stitch prompt.
