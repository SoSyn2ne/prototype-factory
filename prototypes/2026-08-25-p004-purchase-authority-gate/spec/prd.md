# PRD — Purchase Authority Gate

## Problem
- Give a procurement agent explicit price, vendor, urgency, and substitution limits before it can buy—then make every exception visible.

## Target user
- Small-business owners considering autonomous purchasing for recurring supplies.

## Core loop
- Build approval rules, simulate carts, inspect line-item exceptions, approve/edit/block, and preserve a receipt.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Policy builder; vendor rules; substitution matrix; cart simulator; exception queue; receipt; monthly summary.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S5, S2; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- No purchase can proceed without visible bounds; exceptions require a reason and produce a timestamped receipt.

## Development start prompt

```text
Build Purchase Authority Gate from this PRD as a polished responsive prototype. Preserve the operator-dense design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

