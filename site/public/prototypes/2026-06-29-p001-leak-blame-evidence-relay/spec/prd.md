# PRD - Leak Blame Evidence Relay

## Problem
- Korean apartment residents turn leak photos, management-office replies, and insurance gaps into a calm responsibility packet before repair fights escalate.

## Target user
- Korean apartment residents, villa tenants, resident representatives, and property managers handling common-area leak or defect disputes.

## Key UX
- Resident starts a leak case, classifies likely source, attaches photos and messages, tracks management-office replies, and exports a responsibility packet for insurance, 입대의, or consumer complaint filing.

## Required UI sections
- Leak incident header with unit, date, suspected source, and repair urgency
- Photo timeline with before/after wall, ceiling, meter, and common-area evidence
- Common vs exclusive area responsibility sorter
- Management-office and 입대의 reply tracker
- Insurance and 일배책 coverage checklist
- Repair quote comparison and reimbursement ledger
- Escalation packet exporter for 내용증명, consumer complaint, or meeting agenda

## Assigned design profile
- field-ops

## Theme
- 자산 방어 / 건강 - housing damage, repair-cost exposure, stress reduction, and evidence discipline.

## Source signal references
- S1
- S2

## Stitch prompt
Build a production-grade web app prototype called "Leak Blame Evidence Relay" for Korean apartment residents turning leak photos, management-office replies, and insurance gaps into a calm responsibility packet before repair fights escalate. The first screen must be a working case console with a leak incident header, photo timeline, common-vs-exclusive responsibility sorter, management-office reply tracker, insurance coverage checklist, repair quote comparison, and escalation packet exporter. Use realistic sample data: ceiling stain photos, bathroom pipe suspicion, management office says common-area inspection pending, KRW 780,000 wallpaper quote, 일배책 unknown, neighbor unit below affected, and a 내용증명 deadline. Design direction: use the field-ops profile with sturdy mobile-first evidence rows, high-contrast case states, large attachment controls, and one restrained cyan action accent for the next proof step. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: do not implement a custom demo.
- First screen in Stitch must be the working app, not a marketing landing page.
- Use external sources as problem evidence only, not market-size proof.

## Non-goals
- No external API integration in the prototype.
- No legal, medical, financial, or regulatory advice claims beyond workflow support.

## Success metrics
- User can understand the pain in under 10 seconds.
- User can identify the next action from the first screen.
- The prototype includes every required UI section from this PRD.
