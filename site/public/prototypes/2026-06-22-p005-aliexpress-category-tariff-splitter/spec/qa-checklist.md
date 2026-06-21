# QA checklist

## Happy path
- User tags cart items, drags them into two shipments, compares fee scenarios, and exports a split-or-ship verdict.

## Edge cases
- Unknown category.
- Shipping delay costs more than fee savings.
- All items belong to one category.

## Acceptance verification
- p005 folder exists with no placeholder spec text.
- meta.json includes financial-analyst designProfile, theme, sourceSignals, and stitchPrompt.
- Prompt includes drag-to-split shipment canvas and fee scenario comparison.
