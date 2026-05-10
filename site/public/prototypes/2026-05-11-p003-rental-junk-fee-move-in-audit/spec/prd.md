# PRD — Rental Junk Fee Move-In Audit

## Problem
- A renter true-cost audit that exposes mandatory apartment fees before the application, deposit, and move-in cash trap closes.

## Target user
- Renters, apartment hunters, tenant advocates, leasing teams, and property managers dealing with hidden or poorly disclosed rental fees.

## Key UX
- Paste a listing, lease quote, fee schedule, state/city, move-in date, and competing apartments; reveal true monthly price, identify suspect fees, compare disclosure timing against policy risk, generate questions, and export a move-in cost receipt.

## Required UI sections
- listing-versus-lease price diff
- mandatory-fee detector
- monthly true-cost calculator
- deposit and move-in cash timeline
- local rule/policy note panel
- landlord question script
- shareable cost receipt

## Theme
- 자산 방어

## Design profile
- financial-analyst

## External signal references
- Signal 4 — Consumer Financial Services Law Monitor — FTC targets rental junk fees: https://www.consumerfinancialserviceslawmonitor.com/2026/03/ftc-targets-rental-junk-fees/
- Signal 5 — Toronto Sun — Airbnb fee display changes for FTC junk-fee rule: https://torontosun.com/business/money-news/airbnb-to-show-fees-in-price-display-to-comply-with-ftc-rule

## Stitch prompt
Design a desktop renter money-defense product called Rental Junk Fee Move-In Audit for renters, apartment hunters, tenant advocates, leasing teams, and property managers dealing with mandatory amenity, technology, admin, utility, application, and security-deposit fees. Users should paste a listing, lease quote, fee schedule, state/city, move-in date, and competing apartments, then reveal the true monthly price, identify suspect mandatory fees, compare disclosure timing against policy risk, generate renter questions, and export a move-in cost receipt. Include a listing-versus-lease price diff, mandatory-fee detector, monthly true-cost calculator, deposit and move-in cash timeline, local rule/policy note panel, landlord question script, and shareable cost receipt. Design direction: use a financial-analyst aesthetic with disciplined comparison tables, rent-vs-fee deltas, restrained red risk badges, receipt-like white panels, and CFO-readable true-cost summaries so renters can defend their budget without the screen becoming a noisy coupon tool.

## Constraints
- Phase A only; do not implement custom demo before Stitch export ingest.
- Preserve assigned design profile in Stitch output.
- Expected drop folder: /home/sy/Downloads/stitch_drop/2026-05-11/p003/

## Non-goals
- Do not claim source evidence proves market size.
- Do not call external LLM APIs for this Phase A batch.

## Success metrics
- Prompt is copy/paste-ready for Stitch.
- meta.json and spec files include title, theme, design profile, target user, key UX, UI sections, and signal references.
- Downstream ingest can map Stitch export to p003 without ambiguity.
