# QA checklist

## Happy path
- User opens Fee Creep Receipt Arcade.
- User uploads or pastes a receipt.
- App highlights fee stack, advertised-vs-final delta, and fairness score.
- User generates a shareable scorecard.

## Edge cases
- Receipt has no fees.
- Receipt includes tax, tip, and delivery charges mixed together.
- Subscription receipt has annual/monthly price confusion.
- User wants private analysis without sharing.

## Acceptance verification
- Includes design profile `playful-experimental`, theme `역전`, and signal references.
- Stitch prompt includes explicit playful arcade design direction and receipt-scoring workflow.
