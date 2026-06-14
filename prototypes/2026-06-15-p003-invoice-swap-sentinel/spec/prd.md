# PRD - Invoice Swap Sentinel

## Slot
- p003

## Label
- Practical / Commercial

## Problem
- A payables checkpoint that spots altered bank details, fake urgency, and vendor impersonation before a small team releases cash.

## Target user
- Small-business owners, bookkeepers, office managers, AP clerks, controllers, and founders approving invoices without enterprise controls.

## Key UX
- Paste invoice and vendor change details, compare bank/payment history, flag mismatches, assign a callback, and log an approval trail before payment.

## Required UI sections
- Payment risk header
- Invoice and vendor-change intake
- Bank detail history comparison
- Urgency and wording anomaly panel
- Callback assignment checklist
- Approval separation lane
- Hold/pay/review decision log
- Vendor-safe verification email builder

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어

## Source signal references
- S5
- S6

## Stitch prompt
Create a responsive web app prototype called "Invoice Swap Sentinel" for small-business owners, bookkeepers, office managers, AP clerks, controllers, and founders approving invoices without enterprise controls. The app should let a user paste invoice details and vendor bank-change requests, compare them against payment history, flag altered bank details or fake urgency, assign a callback, and keep an approval trail before cash leaves the account. Required sections: payment risk header, invoice and vendor-change intake, bank detail history comparison, urgency and wording anomaly panel, callback assignment checklist, approval separation lane, hold/pay/review decision log, and vendor-safe verification email builder. Use realistic sample data for a supplier invoice with a changed routing number, a CEO-urgency note, and a mismatched remittance contact. Design direction: use the financial-analyst profile with institutional ink, off-white, muted green, restrained warning tones, high-signal comparison tables, and confidence cues for ambiguous fraud risk. Do not make a landing page; the first screen must be the working payables checkpoint.

## Constraints
- Phase A only: do not implement a custom demo.
- Stitch export should later land in /home/sy/Downloads/stitch_drop/2026-06-15/p003/ with code.html and screen.png.

## Non-goals
- No custom local demo implementation during Phase A.
- No external LLM API calls.

## Success metrics
- Stitch prompt produces a working first-screen app, not a landing page.
- Required sections are visible in the generated prototype.
- Source signal references remain traceable to daily/2026-06-15/ideas.md.
