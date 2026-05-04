# PRD — 1099-K Panic Splitter

## Problem
- A tax-season reconciliation workbench that splits platform gross payments into personal transfers, sales, refunds, fees, and CPA-ready explanations.
- Inspired by external problem signals: Signal 3 — TaxAct — 1099-K threshold and state mismatch confusion: https://blog.taxact.com/new-form-1099-k-reporting-thresholds/; Signal 4 — Illinois CPA Society — received a 1099-K / audit-notice anxiety: https://www.icpas.org/about-us/press/press-release-details/2026/02/17/received-a-1099-k-know-the-rules-this-tax-season

## Target user
- Marketplace sellers, side hustlers, casual resellers, rent collectors, and payment-app users who receive confusing 1099-K forms.

## Key UX
- Upload or paste platform totals; label transactions by goods/services, personal transfers, refunds, fees, and state threshold exposure; reconcile gross form totals into a CPA-ready evidence packet.

## Required UI sections
- 1099-K form intake
- platform gross-vs-taxable splitter
- personal transfer safe zone
- refund and fee deduction lane
- state threshold alert map
- mismatch explanation builder
- CPA-ready packet export

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Stitch prompt
Design a desktop tax-season product called 1099-K Panic Splitter for marketplace sellers, side hustlers, rent collectors, and payment-app users who receive confusing 1099-K forms. Users should upload or manually enter platform totals from PayPal, Venmo, Etsy, eBay, Square, or Cash App, then split gross payments into taxable sales, personal transfers, refunds, platform fees, shipping reimbursements, and state-threshold exceptions. Include a 1099-K form intake, platform gross-vs-taxable splitter, personal transfer safe zone, refund and fee deduction lane, state threshold alert map, mismatch explanation builder, and CPA-ready packet export. Design direction: use a financial-analyst aesthetic with crisp spreadsheet-like panels, calm navy and mint accents, audit-trail chips, clear subtotal waterfalls, and confidence meters so anxious users can see exactly why gross payments are not automatically taxable income.

## Constraints
- Time: Phase A scaffold only; Stitch export expected later.
- Budget: Keep prototype static and fast to review.
- Platform: Web demo imported from Stitch in later phase.

## Non-goals
- No full custom implementation in Phase A.
- No external LLM/API calls.

## Success metrics
- User understands the core pain within 5 seconds.
- Main workflow has one obvious next action.
- Stitch output can preserve the original environment for `/d/2026-05-05-p002` in Phase B/C.

## Notes
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-05-05/p002/`
