# QA checklist

## Happy path
- User enters points cost, fees, cash fare, fixed dates, and traveler count, watches the thermometer, and exports a book-now/wait verdict card.

## Edge cases
- Cash fare is cheaper than points redemption.
- Award seat is scarce but airline reliability is poor.
- Family dates are flexible, lowering urgency.

## Acceptance verification
- p007 folder exists with no placeholder spec text.
- meta.json includes playful-experimental designProfile, theme, sourceSignals, and stitchPrompt.
- Prompt includes thermometer mechanic and shareable verdict card.
