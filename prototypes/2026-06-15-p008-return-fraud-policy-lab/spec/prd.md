# PRD - Return Fraud Policy Lab

## Slot
- p008

## Label
- Practical / Commercial

## Problem
- A boutique operations lab that tests return windows, inspection proof, and customer-trust tradeoffs before refund abuse eats inventory.

## Target user
- Small ecommerce stores, fashion boutiques, marketplace sellers, handmade sellers, and return-desk managers.

## Key UX
- Load a suspicious return, compare proof against policy, inspect photos and shipment details, choose refund/deny/partial/store-credit, and see trust and loss impact.

## Required UI sections
- Return abuse pressure header
- Suspicious return queue
- Policy window and exception checker
- Packing/shipping proof timeline
- Photo inspection and condition notes
- Customer-trust tradeoff simulator
- Refund decision builder
- Platform-ready response and evidence packet

## Assigned design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S14

## Stitch prompt
Create a responsive web app prototype called "Return Fraud Policy Lab" for small ecommerce stores, fashion boutiques, marketplace sellers, handmade sellers, and return-desk managers dealing with wardrobing, empty-box claims, missing-item refunds, and suspicious return requests. The app should load a suspicious return, compare proof against policy, inspect photos and shipment details, choose refund/deny/partial/store-credit, and show customer-trust and loss impact. Required sections: return abuse pressure header, suspicious return queue, policy window and exception checker, packing/shipping proof timeline, photo inspection and condition notes, customer-trust tradeoff simulator, refund decision builder, and platform-ready response plus evidence packet. Use realistic sample data for a $250 handmade item, a claimed missing package, a used clothing return, and incomplete photo proof. Design direction: use the operator-dense profile with compact retail-ops tables, crisp fraud/trust status chips, charcoal and fog work surfaces, and one sharp accent for decisions that risk platform escalation. Do not make a marketing landing page; the first screen must be the working return policy lab.

## Constraints
- Phase A only: do not implement a custom demo.
- Stitch export should later land in /home/sy/Downloads/stitch_drop/2026-06-15/p008/ with code.html and screen.png.

## Non-goals
- No custom local demo implementation during Phase A.
- No external LLM API calls.

## Success metrics
- Stitch prompt produces a working first-screen app, not a landing page.
- Required sections are visible in the generated prototype.
- Source signal references remain traceable to daily/2026-06-15/ideas.md.
