# PRD - Rent Junk Fee Lease X-Ray

## Problem
- A renter-side lease checker that turns hidden monthly fees into true rent, negotiation lines, and a move-in budget shock receipt.
- Source evidence: S5 - Federal Register, 2026-03, Rule on Unfair or Deceptive Rental Housing Fee Practices: Federal policy language frames hidden rental fees as charges that distort comparison shopping and extract value after renters invest time. S6 - Mission Local, 2026-05, San Francisco hidden rent junk fee law: San Francisco legislation targets landlord hidden fees that can add 10-30 percent to monthly renter costs.

## Target user
- Renters comparing apartments where advertised rent excludes amenity, billing, parking, trash, pet, insurance, and processing charges.

## Key UX
- Paste lease line items or type recurring fees, see true monthly rent and move-in cash, flag questionable charges, then generate a landlord clarification script.

## Required UI sections
- Advertised vs true rent panel
- Recurring fee parser
- Move-in cash calculator
- Questionable fee flags
- Lease screenshot notes
- Negotiation script builder
- Shareable budget shock receipt

## Assigned design profile
- calm-consumer
- Design direction: reassuring consumer guidance, warm neutral surfaces, gentle risk color, and step-by-step budget clarity.

## Theme
- 자산 방어

## Practical vs fun
- Practical / Commercial

## Source signal references
- S5: Federal Register, 2026-03, Rule on Unfair or Deceptive Rental Housing Fee Practices — https://www.federalregister.gov/documents/2026/03/13/2026-04907/rule-on-unfair-or-deceptive-rental-housing-fee-practices
- S6: Mission Local, 2026-05, San Francisco hidden rent junk fee law — https://missionlocal.org/2026/05/sf-rent-housing-hidden-junk-fees-bilal-mahmood/

## Stitch prompt
Create a responsive web app called "Rent Junk Fee Lease X-Ray" for Renters comparing apartments where advertised rent excludes amenity, billing, parking, trash, pet, insurance, and processing charges.. The app is based on observed user pull from S5: Federal policy language frames hidden rental fees as charges that distort comparison shopping and extract value after renters invest time. S6: San Francisco legislation targets landlord hidden fees that can add 10-30 percent to monthly renter costs. The app should use a Lease X-Ray around the trigger moment "Paste lease line items or type recurring fees, see true monthly rent and move-in cash, flag questionable charges, then generate a landlord clarification script." and make the first screen communicate "A renter-side lease checker that turns hidden monthly fees into true rent, negotiation lines, and a move-in budget shock receipt.". Build the core workflow around user-entered evidence and produce true-rent shock receipt. Required sections: Advertised vs true rent panel; Recurring fee parser; Move-in cash calculator; Questionable fee flags; Lease screenshot notes; Negotiation script builder; Shareable budget shock receipt. Emotional pressure to make visible: 자산 방어. Design direction: use the calm-consumer profile with reassuring consumer guidance, warm neutral surfaces, gentle risk color, and step-by-step budget clarity. Avoid generic dashboard framing; make the main interaction feel like Lease X-Ray.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
