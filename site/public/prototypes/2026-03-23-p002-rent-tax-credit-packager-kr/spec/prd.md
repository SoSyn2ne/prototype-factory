# PRD — Rent Tax Credit Packager (KR)

## Problem
- A structured intake-and-summary screen that turns rental tax credit prep into a checklist instead of a paperwork hunt.
- Users currently piece this workflow together across chat, notes, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Korean renters preparing year-end tax deduction documents for themselves or family.

## Key UX
- Show required proofs, missing items, and filing readiness in one flow so the user knows exactly what to collect next.

## Required UI sections
- Filing readiness hero
- Eligibility summary
- Document checklist
- Payment history panel
- Exception notes
- Submission prep summary

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / stitched export friendly.
- Platform: responsive web UI.

## Non-goals
- No live integrations or external APIs.
- No backend auth, payments, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The screen makes the next action obvious without onboarding.
- The exported Stitch screen can drop into the demo slot with minimal cleanup.

## Stitch prompt
- Design a trustworthy, clean web app dashboard called "Rent Tax Credit Packager (KR)" for Korean renters preparing tax deduction paperwork. The product should feel calm, official, and easy to understand. Include: (1) a filing readiness hero with completion percent and next-step CTA, (2) an eligibility summary card with simple status chips, (3) a document checklist for lease, resident registration, transfer records, and payment proof, (4) a payment history panel with monthly rows and anomaly highlights, (5) an exception notes section for edge cases or missing evidence, and (6) a submission prep summary that clearly says ready / not ready. Use realistic Korean finance-oriented labels in English, concise helper text, responsive desktop-first layout, and no code snippets.
