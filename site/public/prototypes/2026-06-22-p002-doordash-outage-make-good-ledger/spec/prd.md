# PRD — DoorDash Outage Make-Good Ledger

## Problem
- Delivery-platform outages can leave restaurants and drivers with lost orders, missed pay, refunds, and angry customers while proof is scattered across screenshots, POS exports, and support tickets.

## Target user
- Independent restaurant managers, franchise shift leads, and delivery drivers caught in delivery-app downtime.

## Constraints
- Time: Must be useful during or immediately after a live outage.
- Budget: Lightweight proof ledger, not a full restaurant operating system.
- Platform: Responsive Stitch web prototype with synthetic order/outage data.

## Non-goals
- Do not guarantee platform reimbursement.
- Do not integrate with DoorDash, POS, or driver accounts in Phase A.

## Success metrics
- Manager can identify affected orders, make-good actions, and support packet status at a glance.
- First screen communicates outage damage and proof completeness in 3 seconds.
- Exported summary separates customer recovery from platform compensation claim.

## Notes
- Design profile: field-ops.
- Theme: 자산 방어.
- Sources: DoorDash June 2026 outage, restaurant platform economics, delivery fee crackdown.
- Stitch prompt is stored in meta.json and daily/2026-06-22/ideas.md.
