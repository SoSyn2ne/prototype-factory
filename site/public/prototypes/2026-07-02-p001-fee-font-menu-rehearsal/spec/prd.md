# PRD - Fee Font Menu Rehearsal

## Problem
- A new fee law says your service charge must be as visible as the burger, not buried at checkout.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Independent restaurants, cafes, and hospitality groups adapting to fee-disclosure rules on menus, QR ordering, and receipts.

## One-liner
- A restaurant compliance rehearsal that finds hidden service charges and patches menus, QR pages, receipts, and staff scripts before fee-disclosure fines hit.

## Key UX
- The operator inventories every mandatory charge, previews it across print menu, QR menu, checkout, receipt, and staff script surfaces, then exports a patch checklist with font and placement warnings.

## Required UI sections
- Fee inventory intake
- Menu and QR preview checker
- Receipt disclosure rehearsal
- Staff explanation script
- Fine-risk patch checklist

## Design profile
- operator-dense
- Design direction: compact restaurant-ops tables, severe but readable risk badges, charcoal/fog surfaces, and one precise red-orange action accent for noncompliant fee lines.

## Theme
- 자산 방어

## Source signal references
- S1: The Sun, 2026-06-30 - https://www.the-sun.com/money/16600617/texas-roadhouse-florida-fee-law-july/
- S3: Reddit r/restaurantowners, 2026-06 - https://www.reddit.com/r/restaurantowners/comments/1u7i0e6/qr_codes_in_restaurants_in_2026_menus_are_table/

## Output artifact
- Menu/QR/receipt patch packet plus staff fee script

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core compliance rehearsal flow.
- User receives Menu/QR/receipt patch packet plus staff fee script.

## Stitch prompt

```text
Create a responsive web app called "Fee Font Menu Rehearsal" for Independent restaurants, cafes, and hospitality groups adapting to fee-disclosure rules on menus, QR ordering, and receipts.. The app is based on observed user pull: S1: Florida restaurants must disclose mandatory operations/service/card/delivery fees from July 1, with font-size and location requirements. S3: Restaurant owners ask where QR codes actually pull their weight beyond menus, citing receipt loyalty, event inquiries, and review prompts. The app should use a compliance rehearsal around the trigger moment "A new fee law says your service charge must be as visible as the burger, not buried at checkout." and make the first screen communicate "A new fee law says your service charge must be as visible as the burger, not buried at checkout.". Use the user's own language: "A restaurant compliance rehearsal that finds hidden service charges and patches menus, QR pages, receipts, and staff scripts before fee-disclosure fines hit.". Build the core workflow around fee-disclosure surface audit and produce Menu/QR/receipt patch packet plus staff fee script. Required sections: Fee inventory intake; Menu and QR preview checker; Receipt disclosure rehearsal; Staff explanation script; Fine-risk patch checklist. Emotional pressure to make visible: 자산 방어, with concrete money, time, status, relationship, or health stakes. Design direction: use the `operator-dense` profile with compact restaurant-ops tables, severe but readable risk badges, charcoal/fog surfaces, and one precise red-orange action accent for noncompliant fee lines. Avoid generic dashboard framing; make the main interaction feel like a compliance rehearsal. Do not make a marketing landing page; the first screen must be the working product experience.
```
