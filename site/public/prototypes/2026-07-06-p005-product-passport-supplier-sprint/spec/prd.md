# PRD — Product Passport Supplier Sprint

## Problem
- A field-ready EU DPP readiness board that converts messy supplier facts into a QR passport gap plan.
- Source evidence: S10 - Hedgehog article: Digital Product Passport in 2026: EU product passport rules are moving from idea to operational readiness, with scannable data and lifecycle disclosure becoming concrete work. S11 - Reddit r/BuyFromEU: Digital Product Passport in EU: Builders ask sellers whether they have started collecting passport data, showing uncertainty around what to gather first.

## Target user
- Small fashion, electronics, furniture, or component sellers that export into the EU and have supplier data scattered across chats and spreadsheets.

## Key UX
- Pick product category, mark what data exists, assign supplier asks, and preview a scannable passport card with unresolved gaps.

## Required UI sections
- Product category intake
- DPP data matrix
- Supplier ask board
- QR passport preview
- Gap severity badges
- Export checklist

## Design profile
- field-ops
- Design direction must be tailored inside the Stitch prompt and avoid generic dashboard styling.

## Theme
- 자산 방어 / 규제

## Source signal references
- S10: Hedgehog article: Digital Product Passport in 2026 — https://www.hhc.earth/knowledge-base/articles/digital-product-passport-where-do-we-stand-in-2026
- S11: Reddit r/BuyFromEU: Digital Product Passport in EU — https://www.reddit.com/r/BuyFromEU/comments/1kn0r2g/digital_product_passport_in_eu/

## Stitch prompt
Create a responsive web prototype for "Product Passport Supplier Sprint". Target user: small sellers preparing EU Digital Product Passport data with supplier information scattered across chats, invoices, and spreadsheets. Core UX: the user selects a product category, marks available materials/repair/origin/footprint data, assigns missing supplier asks, and previews a QR passport card with unresolved gaps. Required sections: product intake strip, DPP data matrix, supplier ask kanban, QR passport preview, severity badges, and export checklist. Use the field-ops design profile: reliable service-operations styling, strong status rows, 44px touch targets where useful, steel/slate neutrals, and a sparse action accent.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
