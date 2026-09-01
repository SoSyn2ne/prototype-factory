# PRD — Van Stock Whisper

## Problem
Log tiny consumed repair parts in one thumb tap before stock and revenue drift.

## Target user
Appliance, HVAC, plumbing, and electrical technicians working from vans.

## Core loop / key UX
At job close, tap likely parts, adjust quantity, and confirm inventory plus invoice deltas.

## First screen
Make the core action and its evidence immediately understandable in three seconds.

## Required UI sections
active job; likely-parts strip; quantity capture; van stock delta; invoice delta; exceptions; replenishment.

## Design
- Assigned profile: `field-ops`
- Theme: 수익 방어

## Source signals
S2, S9 from `daily/2026-09-02/ideas.md`.

## Non-goals
- No production integrations or custom demo in Phase A.

## QA / screenshot criteria
Glove-friendly 52px controls work offline and accidental double taps are recoverable.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p003 in `daily/2026-09-02/ideas.md`.
