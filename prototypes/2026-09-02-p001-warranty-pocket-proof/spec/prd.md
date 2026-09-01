# PRD — Warranty Pocket Proof

## Problem
Capture purchase proof once so a product failure becomes a ready claim.

## Target user
Households and microbusinesses buying appliances, tools, or imported equipment.

## Core loop / key UX
Photograph the label and receipt, pin seller promises, then generate a failure-time claim packet.

## First screen
Make the core action and its evidence immediately understandable in three seconds.

## Required UI sections
proof capture; serial/receipt extractor; promise pins; warranty clock; failure triage; claim packet; outcome log.

## Design
- Assigned profile: `calm-consumer`
- Theme: 자산 방어

## Source signals
S1, S2 from `daily/2026-09-02/ideas.md`.

## Non-goals
- No production integrations or custom demo in Phase A.

## QA / screenshot criteria
Mobile first screen exposes Save purchase proof; claim packet shows source, date, serial, and missing-evidence states.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p001 in `daily/2026-09-02/ideas.md`.
