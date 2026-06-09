# PRD — Grocery BNPL Stress Thermometer

## Problem
- BNPL usage is shifting into groceries, gas, pharmacy, and delivery meals, which can hide real future pressure behind small payments.
- Consumers often feel relief at checkout but anxiety when repayments stack across multiple paydays.
- The product must make the pile-up emotionally obvious without shaming the user.

## Target user
- Young workers and budget-stretched households who use BNPL for essentials and need an emotionally clear view of future payment pressure.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no paid APIs or external LLM calls in this phase.
- Platform: responsive consumer web app concept, strong mobile-first readability.

## Non-goals
- No credit advice, lending, or debt consolidation.
- No bank account integration in this batch.
- No custom demo implementation in Phase A.

## Success metrics
- User can see which payday becomes overloaded after adding a receipt.
- Stress thermometer reacts clearly to repayment clustering.
- Relief cards suggest one practical next action without moralizing.

## Notes
- Assigned design profile: playful-experimental.
- Theme: 자산 방어.
- Source signals: S9, S10 from daily/2026-06-10/ideas.md.
- Stitch prompt: Create a responsive web app prototype called "Grocery BNPL Stress Thermometer" for young consumers who split groceries, gas, and other essentials into buy-now-pay-later payments. Build a playful receipt lab with receipt inbox, payday calendar, stacked repayment blocks, late-fee danger zones, animated stress thermometer, tiny debt pile visual, essential/nonessential toggle, one-action relief cards, next-paycheck scenario slider, unexpected bill slider, and shareable "future me receipt" summary. Use realistic sample receipts for groceries, fuel, pharmacy, and delivery meals with overlapping repayment dates. Design direction: follow the playful-experimental profile with a memorable concept-forward visual, bold but readable accents, surprising motion cues, and a strong narrative hook around tiny debts becoming a heat map. The main interaction should make the user drag a new receipt onto the calendar, watch the stress temperature change, and pick one relief move.
