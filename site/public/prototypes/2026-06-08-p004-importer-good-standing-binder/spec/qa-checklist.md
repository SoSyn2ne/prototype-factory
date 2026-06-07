# QA checklist

## Happy path
- User reviews readiness score, opens high-risk shipment, assigns broker task, and generates executive memo.

## Edge cases
- Supplier certification missing while shipment is already in transit.
- Entity proof is stale but bond status is valid.
- SKU affected by de minimis transition has low value but high volume.

## Acceptance verification
- p004 is scaffolded with actual metadata, source signals, theme, design profile, and Stitch prompt.
- No placeholder bullets remain in the spec files.
