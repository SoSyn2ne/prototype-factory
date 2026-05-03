# PRD — Automation Mess Backtrace

## Problem
- A small-company repair console that maps broken AI automations back to owners, data sources, risks, and rollback steps before workflows silently lose money.
- Inspired by external problem signals: Signal 1 — Reddit r/Business_Ideas AI cleanup for broken workflows: https://www.reddit.com/r/Business_Ideas/comments/1sy1mud/underrated_2026_servicebusiness_idea_ai_cleanup/; Signal 2 — Diginomica/Sage audited AI workflow trust: https://diginomica.com/sage-future-2026-no-more-ai-black-boxes-are-customers-ready-trust-ai-audited-workflows

## Target user
- Small-company operators, agency owners, and fractional COOs who adopted Zapier/Make/agent workflows quickly and now have brittle automations nobody fully owns.

## Key UX
- Paste or connect an automation inventory; mark symptoms such as duplicated invoices, wrong CRM stages, silent failed handoffs, and AI-written bad data; trace each broken step back to a source, owner, risk, and rollback action; export a cleanup sprint brief.

## Required UI sections
- workflow symptom inbox
- automation dependency map
- broken handoff backtrace
- data-source trust meter
- rollback vs repair decision cards
- owner assignment queue
- 7-day cleanup sprint brief

## Design profile
- operator-dense

## Theme
- 자산 방어

## Stitch prompt
Design a desktop B2B operations product called Automation Mess Backtrace for small-company operators who adopted AI automations too quickly and now have broken workflows. The product should let users paste an automation inventory, failed Zapier/Make/agent logs, CRM field names, invoice handoff notes, and owner names, then trace each symptom back to a brittle data source, missing owner, and repair or rollback action. Include a workflow symptom inbox, automation dependency map, broken handoff backtrace, data-source trust meter, rollback vs repair decision cards, owner assignment queue, and 7-day cleanup sprint brief. Design direction: use an operator-dense aesthetic with compact dependency tables, sharp risk badges, dark navy/charcoal surfaces, one urgent orange accent, and fast scannable repair queues so it feels like a workflow incident command center rather than another automation builder.

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
- Stitch output can preserve the original environment for `/d/2026-05-04-p001` in Phase B/C.

## Notes
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-05-04/p001/`
