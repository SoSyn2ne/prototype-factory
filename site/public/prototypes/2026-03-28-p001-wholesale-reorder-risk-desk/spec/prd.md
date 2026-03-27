# PRD — Wholesale Reorder Risk Desk

## Problem
- A wholesale account desk that shows which buyers are about to miss their normal reorder window so reps can intervene before revenue slips.
- Users currently track the workflow across spreadsheets, inboxes, and ad-hoc follow-ups.
- The prototype should make the highest-value next action obvious in one desktop screen.

## Target user
- B2B wholesale sales reps and revenue operators managing repeat retail accounts.

## Key UX
- Spot at-risk accounts fast, understand why reorder confidence dropped, and choose the next best recovery action from one desktop view.

## Required UI sections
- Reorder-risk hero
- Account watchlist table
- Order-gap diagnosis panel
- Recovery playbook rail
- Buyer health timeline
- This-week revenue rescue summary

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / Stitch-export friendly.
- Platform: responsive web UI with a desktop-first composition.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The main decision path is visually obvious without onboarding.
- A Stitch export can drop into the stub demo slot with minimal cleanup.

## Stitch prompt
- Design a focused desktop B2B sales workspace called "Wholesale Reorder Risk Desk" for teams managing repeat wholesale accounts. Use a disciplined revenue-ops design direction with navy, fog white, and restrained amber accents; keep hierarchy crisp, risk states unmistakable, and the overall product feel dependable, commercial, and action-oriented. Include: (1) a reorder-risk hero with accounts due this week, at-risk revenue, and priority CTA, (2) an account watchlist table with buyer, last PO date, expected cadence, gap days, and risk score, (3) an order-gap diagnosis panel showing stock issues, seasonality, and engagement drop signals, (4) a recovery playbook rail suggesting call, promo, sample pack, or reorder draft actions, (5) a buyer health timeline with recent orders and touchpoints, and (6) a this-week revenue rescue summary. Use realistic mocked wholesale data, desktop-first composition, concise labels, and no code blocks.
