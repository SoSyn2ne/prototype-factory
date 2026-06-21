# QA checklist

## Happy path
- User starts an outage incident, adds affected orders, attaches app-error proof, marks refunds and driver pay gaps, then exports platform support and customer make-good summaries.

## Edge cases
- Order has customer refund but no platform claim.
- Driver shift has login failure but no completed order.
- Screenshot proof is missing and the ledger still shows next best evidence.

## Acceptance verification
- p002 folder exists with no placeholder spec text.
- meta.json includes field-ops designProfile, theme, sourceSignals, and stitchPrompt.
- Stitch prompt includes all required UI sections and outage-specific interaction.
