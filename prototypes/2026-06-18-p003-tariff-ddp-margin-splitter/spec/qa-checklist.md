# QA checklist

## Phase A completeness
- Title is present: Tariff DDP Margin Splitter
- One-liner is present: Cross-border micro-sellers decide whether to absorb, split, or expose new tariff costs before US buyers vanish.
- Target user is present: Canadian, Korean, EU, and Etsy/Shopify micro-sellers shipping low-value goods to US customers after de minimis changes.
- Key UX is present: Seller enters SKU cost, origin, US order value, tariff scenario, DDP shipping quote, and buyer price tolerance; the app shows absorb/split/pass-through outcomes and writes buyer-safe listing copy.
- Assigned design profile is exactly one profile: financial-analyst
- Theme is present: 자산 방어 / 역전 - micro-export margin defense, US buyer retention, and tariff uncertainty.
- Source signal references are present:
- S5: End of US de minimis exemption creates tariff confusion for Etsy sellers (https://www.etsy.com/il-en/seller-handbook/article/navigating-evolving-global-tariff-policies/1355662653395)
- S6: Canadian and Etsy sellers fear tariff math will kill US orders (https://www.reddit.com/r/EtsySellers/comments/1mielqx/canadian_sellers_what_your_plans_with_the_de/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to financial-analyst.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p003 exists under prototypes/2026-06-18-p003-tariff-ddp-margin-splitter.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p003/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p003/screen.png.

## Prompt
Build a production-grade web app prototype called "Tariff DDP Margin Splitter" for Etsy and Shopify micro-sellers shipping low-value goods into the US after de minimis changes. The first screen must be a working tariff margin workbench with a tariff exposure header, order-value simulator, margin split table, origin evidence checklist, buyer message preview, SKU triage board, and weekly lost-order tracker. Use realistic sample data: handmade jewelry from Canada, $35 and $82 orders, 80% US customer share, uncertain USMCA status, DDP carrier quote, 35% tariff scenario, and three listing-price options. Design direction: use the financial-analyst profile with calm analytical panels, restrained warning tones, precise margin math, and confidence cues that help sellers decide without panic. Do not make a marketing landing page; the first screen must be the working app.
