# QA checklist

## Happy path
- All required UI sections from the idea appear in the Stitch output.
- The first screen communicates: A seller workbench that turns postage hikes, free-shipping pressure, and Etsy threshold anxiety into listing-safe price moves.
- The main workflow supports: The seller imports listing rows, shipping profiles, package weights, and margin targets; the app flags listings where free shipping or sub-$6 shipping destroys margin and generates controlled item-price, shipping-price, bundle, and customer-copy changes.
- Design direction visibly follows financial-analyst.

## Edge cases
- Long source names, URLs, or evidence labels do not break cards.
- Mobile view keeps primary controls usable.
- Empty states explain the next input without adding marketing fluff.

## Acceptance verification
- meta.json includes designProfile, theme, externalSignalRefs, stitchPrompt, and expectedDropFolder.
- spec/prd.md contains the idea text, signal references, and Stitch prompt.
- Drop folder expected for ingest: /home/sy/Downloads/stitch_drop/2026-05-27/p002/
