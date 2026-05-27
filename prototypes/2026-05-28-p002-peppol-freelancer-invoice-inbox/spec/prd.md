# PRD — Peppol Freelancer Invoice Inbox

## Problem
- Freelancers and micro-businesses are being pulled into structured e-invoicing workflows designed around larger companies.
- Peppol/UBL validation feels opaque when users only understand normal PDFs and accountant emails.

## Target user
- Freelancers, solo consultants, Belgian and French micro-businesses, and accountants onboarding small clients to Peppol/e-invoicing workflows.

## Key UX
- Drop in PDFs, CSV invoice rows, UBL/XML samples, or manual invoice rows.
- Explain missing fields in plain language.
- Validate client tax IDs and routing status, then preview a human-readable invoice.
- Export a first-compliant-invoice checklist for the user or accountant.

## Required UI sections
- Mandate timeline and country readiness header
- Invoice intake inbox for PDF, CSV, UBL/XML, and manual rows
- Plain-language Peppol field validator
- Client tax ID and routing status panel
- Human-readable invoice preview
- Batch validation queue
- Accountant handoff export
- First compliant invoice checklist

## Design profile
- operator-dense

## Theme
- 자산 방어

## Signal references
- S4 - Reddit r/belgium Peppol tools feel clunky for freelancers
- S5 - Service Public Entreprendre France e-invoicing rollout

## Stitch prompt
Create a responsive web app prototype for "Peppol Freelancer Invoice Inbox," a lightweight Peppol readiness inbox for freelancers and micro-businesses preparing for structured e-invoicing. Include: mandate timeline header, invoice intake inbox for PDF/CSV/UBL/XML, plain-language Peppol field validator, client tax ID and routing status panel, human-readable invoice preview, batch validation queue, accountant handoff export, and first compliant invoice checklist. Design direction: use the operator-dense profile with compact document queues, precise validation badges, accountant-friendly tables, minimal friction, and clear small-business compliance states; it should feel like a practical inbox for freelancers, not enterprise procurement software.

## Constraints
- Time: Phase A spec only; Stitch export expected in `/home/sy/Downloads/stitch_drop/2026-05-28/p002/`.
- Budget: Must be clear enough for rapid Stitch generation without custom implementation.
- Platform: Responsive web prototype.

## Non-goals
- Legal/tax advice, certified Peppol network transmission, live government filing, and paid accounting system integration.

## Success metrics
- Freelancer can understand invoice readiness without reading technical Peppol docs.
- Accountant can see missing fields and client-routing blockers in one pass.

## Notes
- Treat source signals as problem evidence, not proof of market size.
