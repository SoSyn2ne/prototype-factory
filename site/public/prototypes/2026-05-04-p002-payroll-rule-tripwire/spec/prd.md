# PRD — Payroll Rule Tripwire

## Problem
- A small-employer compliance workbench that turns wage, leave, posting, and remote-work rule changes into a location-specific action queue.
- Inspired by external problem signals: Signal 3 — BBSI 2026 small-business law/regulation changes: https://www.bbsi.com/business-owner-resources/new-laws-regulations-small-business-owners-2026; Signal 5 — SurePayroll 2026 employment-law checklist: https://www.surepayroll.com/resources/article/2026-employment-law-changes-small-business

## Target user
- US small-business owners, office managers, payroll admins, and HR generalists with employees across multiple cities or states but no legal/compliance team.

## Key UX
- Select employee work locations and worker types; review 2026 rule-change cards; rank pay accuracy, leave, postings, classification, and remote-work tax exposure; generate a payroll update checklist and manager-proof compliance memo.

## Required UI sections
- location rule-change map
- pay accuracy tripwire queue
- leave and posting action cards
- worker classification risk row
- remote-work payroll checklist
- deadline calendar
- owner-ready compliance memo

## Design profile
- field-ops

## Theme
- 자산 방어

## Stitch prompt
Design a tablet-friendly small-employer compliance product called Payroll Rule Tripwire for owners and payroll admins preparing for 2026 employment-law changes. Users should choose employee work locations, worker types, pay schedules, and remote-work arrangements, then see which wage, leave, posting, classification, and payroll updates need action first. Include a location rule-change map, pay accuracy tripwire queue, leave and posting action cards, worker classification risk row, remote-work payroll checklist, deadline calendar, and owner-ready compliance memo. Design direction: use a field-ops aesthetic with steel blue and graphite surfaces, rugged checklist cards, clear deadline warnings, large touch targets, and action-first status chips so the product feels like a dependable compliance field kit for a busy business owner.

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
- Stitch output can preserve the original environment for `/d/2026-05-04-p002` in Phase B/C.

## Notes
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-05-04/p002/`
