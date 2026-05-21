# QA checklist

## Happy path
- User opens Shopify App Cost Pruner.
- User imports or enters app list and monthly costs.
- App shows spend share, duplicate functions, scaling warnings, and pruning queue.
- User exports consultant-ready savings report.

## Edge cases
- Free apps with hidden usage pricing.
- Apps with overlapping but not identical functions.
- Mission-critical app flagged as expensive.
- Multi-store merchant.

## Acceptance verification
- Includes design profile `operator-dense`, theme `자산 방어`, and signal references.
- Stitch prompt contains app table, overlap map, pruning queue, and explicit dense operator design direction.
