# PRD — B2B Invoice Follow-up Radar

## Problem
- A receivables screen that helps small teams prioritize late invoices by payoff likelihood instead of chasing every customer equally.
- Users currently stitch this workflow together across inboxes, spreadsheets, notes, and ad-hoc follow-up.
- The prototype should compress the first high-confidence decision into a single screen.

## Target user
- Small B2B finance leads and founders managing overdue invoices without a full collections team.

## Key UX
- Know who to contact first, which invoices are slipping into danger, and what follow-up move has the best expected recovery.

## Required UI sections
- Collections pulse hero
- overdue invoice ladder
- account relationship panel
- follow-up playbook card
- promise-to-pay tracker
- cash-recovery summary

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / stitched export friendly.
- Platform: responsive web UI.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The screen makes the next action obvious without onboarding.
- The exported Stitch screen can drop into the demo slot with minimal cleanup.

## Stitch prompt
- Design a premium desktop web app screen called "B2B Invoice Follow-up Radar" for small teams managing overdue receivables. Use a calm executive-finance look with charcoal, ivory, and muted green tones; create strong numeric hierarchy, low-noise tables, and a premium but no-nonsense product feel. Include: (1) a collections pulse hero with overdue total, this-week recoverable cash, and recommended CTA, (2) an overdue invoice ladder grouped by age bucket and amount, (3) an account relationship panel showing strategic accounts, payment history, and escalation sensitivity, (4) a follow-up playbook card recommending email, call, or hold based on risk and value, (5) a promise-to-pay tracker with committed dates and confidence flags, and (6) a cash-recovery summary with expected collections by day. Use realistic mocked B2B finance data, desktop-first composition, concise labels, and no code blocks.
