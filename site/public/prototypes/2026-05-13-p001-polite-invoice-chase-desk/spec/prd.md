# PRD — Polite Invoice Chase Desk

## Problem
- A relationship-safe collections board that tells small vendors exactly when and how to chase late invoices.
- Search/community evidence suggests this is a live pain, not a generic dashboard rename.

## Target user
- Small agencies, consultants, freelancers, boutique dev shops, contractors, and vendors waiting on larger clients to pay overdue invoices.

## Key UX
- Enter invoices, client type, payment terms, aging days, prior nudges, contract late-fee language, relationship value, and cash-flow urgency; the app ranks who to chase today, drafts progressively firmer but polite messages, shows escalation timing, and exports a payment-status memo.

## Required UI sections
- invoice aging intake
- client relationship risk score
- cash-flow urgency queue
- polite follow-up script ladder
- late-fee and contract clause panel
- next-action calendar
- payment-status memo export

## Design profile
- `operator-dense` — reflected in the Stitch prompt and visual direction.

## Theme
- 자산 방어

## External signal references
- Signal 2 — Reddit r/smallbusiness — Is delaying vendor payments basically a business strategy now? — https://www.reddit.com/r/smallbusiness/comments/1t2lsos/is_delaying_vendor_payments_basically_a_business/
- Signal 3 — Hacker News — Ask HN: How do you handle clients who do not pay on time? — https://news.ycombinator.com/item?id=47638685

## Stitch prompt
Design a desktop B2B cash-flow product called Polite Invoice Chase Desk for small agencies, consultants, freelancers, boutique dev shops, contractors, and vendors waiting on larger clients to pay overdue invoices. Users should enter invoices, client type, payment terms, aging days, prior nudges, contract late-fee language, relationship value, and cash-flow urgency, then rank who to chase today, draft progressively firmer but polite messages, show escalation timing, and export a payment-status memo. Include an invoice aging intake, client relationship risk score, cash-flow urgency queue, polite follow-up script ladder, late-fee and contract clause panel, next-action calendar, and payment-status memo export. Design direction: use an operator-dense aesthetic with compact receivables tables, sharp aging badges, calm red/amber urgency accents, side-by-side message drafts, and a disciplined action rail so the product feels like a confident accounts-receivable cockpit, not a generic invoicing dashboard.

## Constraints
- Time: Phase A spec/scaffold only; do not implement custom demo yet.
- Budget: Use Stitch export workflow for Phase B.
- Platform: Web prototype, desktop-first unless consumer flow benefits from responsive cards.

## Non-goals
- Do not claim legal, medical, tax, or financial certainty.
- Do not integrate live paid APIs in Phase A.

## Success metrics
- A user understands the painful trigger within 5 seconds.
- The main workflow is clear from intake to analysis to action/export/share.
- The UI can be built from the Stitch prompt without additional explanation.

## Notes
- Candidate category: Practical / Commercial.
