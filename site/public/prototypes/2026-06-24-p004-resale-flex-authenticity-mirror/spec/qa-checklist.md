# QA checklist - Resale Flex Authenticity Mirror

## Happy path
- Open the generated Stitch demo for p004.
- Confirm the first viewport is the working app, not a hero landing page.
- Confirm the main workflow supports: User drops a resale listing, seller profile, market comps, authentication clues, and outfit context; the app returns a flex score, trust risk, negotiation angle, and shareable decision card.
- Confirm all required sections appear: Listing mirror header with price, brand, condition, and confidence; Authentication clue checklist for tags, stitching, serials, and receipts; Seller reputation and return-policy panel; Market comp strip for resale vs new vs dupe prices; Status-vs-savings flex meter; Negotiation script and walk-away threshold; Shareable buy/pass card for group chat.

## Edge cases
- Missing or weak evidence/data should show a visible gap state, not a blank panel.
- Risky or urgent states should be clear without using alarm red everywhere.
- Mobile layout should keep primary controls readable and non-overlapping.

## Acceptance verification
- Design profile visible: premium-editorial.
- Theme visible: 외모 / 자산 방어 / 역전 - buying visible status without getting fooled..
- Source signals cited in metadata and PRD: S8, S9.
- Expected drop files: /home/sy/Downloads/stitch_drop/2026-06-24/p004/code.html and /home/sy/Downloads/stitch_drop/2026-06-24/p004/screen.png.
