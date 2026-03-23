# PRD — Refund Delay Triage Desk

## Problem
- A support ops dashboard that turns refund waiting cases into a prioritized action queue instead of a messy inbox.
- Users currently piece this workflow together across chat, notes, spreadsheets, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Solo operators handling ecommerce refund or payout delay tickets.

## Key UX
- See which cases are blocked, overdue, or customer-risky at a glance so the operator can resolve the highest-impact issue first.

## Required UI sections
- Queue health hero
- case priority table
- delay reason breakdown
- customer risk panel
- next-best action card
- SLA summary rail

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
- Design a focused desktop web app screen called "Refund Delay Triage Desk" for solo ecommerce operators managing refund-delay cases. The UI should feel sharp, operational, and trustworthy. Include: (1) a queue health hero with open delayed cases, SLA risk, and a primary CTA, (2) a case priority table with order id, age, amount, and status chips, (3) a delay reason breakdown panel for bank hold, missing evidence, manual review, and duplicate request, (4) a customer risk panel showing angry customers, high-value orders, and repeat contacts, (5) a next-best action card that recommends the single most leveraged move, and (6) an SLA summary rail with today's deadlines. Use realistic mocked ecommerce data, concise labels, desktop-first layout, no chat UI, and no code blocks.
