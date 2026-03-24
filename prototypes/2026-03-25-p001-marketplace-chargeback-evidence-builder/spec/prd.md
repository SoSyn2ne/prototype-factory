# PRD — Marketplace Chargeback Evidence Builder

## Problem
- A dispute-prep workspace that helps small sellers assemble the strongest chargeback response before payout gets clawed back.
- Users currently stitch this workflow together across inboxes, spreadsheets, notes, and ad-hoc follow-up.
- The prototype should compress the first high-confidence decision into a single screen.

## Target user
- Small marketplace sellers and ecommerce ops owners handling payment disputes.

## Key UX
- See which disputes are winnable, what evidence is missing, and what to submit next without opening five tabs.

## Required UI sections
- Dispute health hero
- case deadline queue
- evidence completeness checklist
- reason-code guidance panel
- submission packet preview
- win-risk summary rail

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
- Design a focused desktop web app screen called "Marketplace Chargeback Evidence Builder" for small marketplace sellers preparing payment-dispute responses. Use a disciplined operator-dashboard style with deep navy, slate, and restrained amber accents; emphasize clear deadline hierarchy, dense-but-breathable evidence blocks, and a high-trust fintech product feel. Include: (1) a dispute health hero with open cases, recoverable GMV, and urgent CTA, (2) a case deadline queue with marketplace, amount, age, and due-by chips, (3) an evidence completeness checklist covering proof of delivery, customer messages, invoice, and usage history, (4) a reason-code guidance panel that explains what matters for fraud, item-not-received, and not-as-described, (5) a submission packet preview showing the exact narrative + attachments bundle, and (6) a win-risk summary rail with strongest cases, weak spots, and today's deadlines. Use realistic mocked seller data, desktop-first layout, concise labels, and no code blocks.
