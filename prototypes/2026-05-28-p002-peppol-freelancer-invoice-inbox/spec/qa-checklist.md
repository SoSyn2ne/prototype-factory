# QA checklist

## Happy path
- User drops invoice samples, sees missing fields, reviews routing status, previews a readable invoice, and exports an accountant handoff checklist.

## Edge cases
- PDF invoice with no structured line items.
- Client tax ID missing or malformed.
- Batch queue with mixed valid and invalid invoices.
- Country timeline differs for receiving versus issuing invoices.

## Acceptance verification
- `meta.json` includes designProfile, theme, signalRefs, and full Stitch prompt.
- PRD includes target user, key UX, required UI sections, design profile, theme, and sources.
- No placeholder bullets remain in `spec/*.md`.
