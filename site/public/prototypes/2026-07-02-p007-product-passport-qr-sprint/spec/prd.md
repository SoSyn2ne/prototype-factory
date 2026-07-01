# PRD - Product Passport QR Sprint

## Problem
- The EU passport deadline is not a PDF problem; it is every missing material fact on your product page.
- Users are already relying on manual workarounds: screenshots, emails, spreadsheets, community advice, or ad hoc scripts.

## Target user
- Small apparel, accessory, and lifestyle sellers preparing for EU Digital Product Passport expectations without a compliance team.

## One-liner
- A small-seller passport studio that turns product materials, repair notes, and supplier gaps into a first EU-ready QR label plan.

## Key UX
- The seller assembles material facts, supplier evidence, repair/care notes, identifier needs, and missing fields, then previews a QR product passport label.

## Required UI sections
- Product data intake
- Material and supplier evidence gaps
- Repair/care info editor
- QR label preview
- EU readiness memo

## Design profile
- premium-editorial
- Design direction: refined editorial product cards, archival typography, polished QR/label mockups, and one ink-black CTA for requesting missing supplier data.

## Theme
- 자산 방어

## Source signal references
- S10: DigiProdPass guide, 2026-06 - https://digiprodpass.com/blogs/digital-product-passport-guide
- S11: Reddit r/BuyFromEU, 2025/2026 discussion - https://www.reddit.com/r/BuyFromEU/comments/1kn0r2g/digital_product_passport_in_eu/

## Output artifact
- Product passport QR draft and supplier-data request memo

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Stitch prompt and scaffold only.
- Platform: responsive web app prototype generated later by Stitch.

## Non-goals
- Do not implement a custom demo in Phase A.
- Do not call external LLM APIs.

## Success metrics
- User can understand the trigger in 3 seconds.
- User can complete the core QR label sprint flow.
- User receives Product passport QR draft and supplier-data request memo.

## Stitch prompt

```text
Create a responsive web app called "Product Passport QR Sprint" for Small apparel, accessory, and lifestyle sellers preparing for EU Digital Product Passport expectations without a compliance team.. The app is based on observed user pull: S10: Under ESPR Article 13, the EU must establish the Digital Product Passport Registry by 19 July 2026. S11: A software engineer asks sellers whether they have started collecting DPP data such as materials, CO2 footprint, and repair info. The app should use a QR label sprint around the trigger moment "The EU passport deadline is not a PDF problem; it is every missing material fact on your product page." and make the first screen communicate "The EU passport deadline is not a PDF problem; it is every missing material fact on your product page.". Use the user's own language: "A small-seller passport studio that turns product materials, repair notes, and supplier gaps into a first EU-ready QR label plan.". Build the core workflow around passport field assembler and produce Product passport QR draft and supplier-data request memo. Required sections: Product data intake; Material and supplier evidence gaps; Repair/care info editor; QR label preview; EU readiness memo. Emotional pressure to make visible: 자산 방어, with concrete money, time, status, relationship, or health stakes. Design direction: use the `premium-editorial` profile with refined editorial product cards, archival typography, polished QR/label mockups, and one ink-black CTA for requesting missing supplier data. Avoid generic dashboard framing; make the main interaction feel like a QR label sprint. Do not make a marketing landing page; the first screen must be the working product experience.
```
