# Contractor Payment Chase Runbook

Trades contractors turn finished jobs, unpaid invoices, and paperwork gaps into a disciplined collection sequence.

## Phase A
- Slot: p004
- Mix label: Practical / Commercial
- Design profile: operator-dense
- Theme: 자산 방어 - trades cash collection and owner time protection.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-06-23/p004/`

## Target user
Contractors, landscapers, remodelers, and home-service operators who finish jobs but lose time chasing payments and missing documents.

## Key UX
Operator selects a completed job, checks estimate/signoff/proof gaps, sees payment-risk score, and runs a staged client chase sequence with scripts and documentation.

## Required UI sections
- Cash-at-risk header by job, age, and client type
- Finished job proof checklist for photos, change orders, and signoff
- Invoice status lane with due date, reminders, and payment options
- Client communication sequence with polite, firm, and final scripts
- Paperwork gap detector for estimate, lien notice, warranty, and tax docs
- Weekly owner admin load meter
- Collection runbook export for bookkeeper or office assistant

## Source signal references
- S7 - Reddit r/Contractor, trade business struggles include payment delays and paperwork: https://www.reddit.com/r/Contractor/comments/1k6vral/5_common_struggles_to_expect_if_youre_about_to/
- S8 - Reddit r/smallbusiness, manual processes worth 10-20 hours per week: https://www.reddit.com/r/smallbusiness/comments/1tvtfax/im_tired_of_being_broke_whats_actually_working/

## Stitch prompt
Build a production-grade web app prototype called "Contractor Payment Chase Runbook" for trades contractors and home-service operators chasing late payments after completed work. The first screen must be a working collections runbook with cash-at-risk header, finished job proof checklist, invoice status lane, client communication sequence, paperwork gap detector, owner admin load meter, and bookkeeper handoff export. Use realistic sample data: $8,750 deck repair invoice, 19 days overdue, missing signed change order, before/after photos, two unanswered texts, one partial-payment promise, and a Friday payroll deadline. Design direction: use the operator-dense profile with compact job rows, serious cash-risk badges, 40px controls, tabular aging numbers, and one sharp action accent for the next chase step. Do not make a marketing landing page; the first screen must be the working app.
