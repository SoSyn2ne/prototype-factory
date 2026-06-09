# PRD — Delivery Refund Evidence Desk

## Problem
- Delivery-app refunds, chargebacks, and review-pressure claims can reverse already-completed restaurant orders with little time for operators to assemble evidence.
- Small restaurants often have proof scattered across POS tickets, prep photos, bag seals, rider handoff notes, and staff memory.
- The product must convert that scattered proof into a clean dispute packet before margin leakage becomes invisible.

## Target user
- Small restaurant owners, shift managers, and franchise operators handling delivery-app refund claims, missing-item disputes, and review retaliation.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no paid APIs or external LLM calls in this phase.
- Platform: responsive web app concept for tablet/desktop shift work.

## Non-goals
- No legal advice or guarantee that a platform will reverse a refund.
- No custom demo implementation in Phase A.
- No live POS or delivery-platform integration in this batch.

## Success metrics
- Manager can see which evidence is missing for a disputed order at a glance.
- Packet preview includes platform, claim type, proof attachments, and concise operator statement.
- Margin ledger makes weekly refund leakage visible by claim type.

## Notes
- Assigned design profile: field-ops.
- Theme: 자산 방어.
- Source signals: S4, S5, S6 from daily/2026-06-10/ideas.md.
- Stitch prompt: Create a responsive web app prototype called "Delivery Refund Evidence Desk" for small restaurant operators fighting delivery-app refund abuse and review-pressure claims. Build a field-ops workflow with a disputed order queue, order evidence timeline, POS ticket and prep-photo cards, rider handoff notes, review-threat risk panel, platform policy checklist for DoorDash, Uber Eats, Baemin, and Coupang Eats, evidence completeness meter, dispute packet preview, owner-safe response script, and weekly margin leakage ledger. Use realistic Korean and US delivery examples, including a completed chicken order reversed after a complaint and a missing-item claim with incomplete bag-seal proof. Design direction: follow the field-ops profile with firm service-operations styling, slate/graphite surfaces, legible pressure-state panels, and a sparing orange action accent for urgent packet gaps. The main interaction should let the user select a disputed order, attach evidence, watch completeness rise, and export a platform-ready dispute packet.
