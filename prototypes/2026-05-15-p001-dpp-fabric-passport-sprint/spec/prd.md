# PRD — DPP Fabric Passport Sprint

## Problem
- A compliance prep desk that helps small fashion brands turn supplier scraps into EU Digital Product Passport fields before 2027 pressure hits.
- External evidence: Signal 1 (formal/news source): Textile and apparel brands selling into the EU must prepare product-level DPP data; small brands are not exempt and non-compliant products can be blocked or withdrawn.; Signal 2 (formal/news source): Textile businesses need lifecycle records covering materials, inks, energy, and supply-chain proof, but much of that data lives in supplier PDFs and emails.

## Target user
- Small fashion labels, textile printers, boutique apparel importers, merch brands, and marketplace sellers that need EU-ready product data but do not have a sustainability/compliance team.

## Key UX
- Drop supplier PDFs, bill-of-material notes, fabric composition, dye/ink details, country-of-origin, care labels, and packaging data; the product maps missing DPP fields, creates a supplier chase list, shows EU channel risk by SKU, and drafts QR-passport copy for launch review.

## Required UI sections
- supplier evidence intake
- SKU passport completeness grid
- materials and origin field mapper
- missing-data supplier chase queue
- EU channel block-risk meter
- QR passport preview
- audit trail and launch approval memo

## Design profile
- operator-dense
- Design direction: match the Stitch prompt guidance; keep the profile visible in hierarchy, palette, density, and interaction tone.

## Theme
- 자산 방어

## Constraints
- Phase A only: spec and Stitch-ready design prompt, no custom demo implementation.
- Sources are problem evidence, not market-size proof.
- Avoid external LLM calls; all prompt text is deterministic.

## Success metrics
- User can understand the urgent job-to-be-done in under 10 seconds.
- Main workflow has one clear intake, one risk/comparison surface, and one export/next-action artifact.
- Stitch export can be dropped at `/home/sy/Downloads/stitch_drop/2026-05-15/p001/`.
