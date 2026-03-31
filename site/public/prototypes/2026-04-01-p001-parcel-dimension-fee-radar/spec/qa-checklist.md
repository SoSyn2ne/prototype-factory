# QA checklist

## Happy path
- User lands on today's outbound watchlist and sees at-risk shipments ranked by projected fee impact.
- User opens one parcel, compares declared vs measured dimensions, and reviews applicable carrier rules.
- User selects a recommended packaging or carrier action and sees updated save potential.

## Edge cases
- Multi-box orders where one carton drives the risk.
- Missing measured dimensions for part of the queue.
- Shipments that are risky across every available carrier.

## Acceptance verification
- Spec reflects shipping fee prevention rather than generic shipping analytics.
- All required UI sections are explicitly documented.
- Design direction is included and consistent with the Stitch prompt.
