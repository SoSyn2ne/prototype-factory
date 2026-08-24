# PRD — Human Support Escalation Atlas

## Problem
- Turn an urgent AI/SaaS outage into a verified human-contact route, escalation clock, and executive-ready impact note in three minutes.

## Target user
- Small businesses running revenue-critical workflows across multiple AI/SaaS vendors.

## Core loop
- Pick vendor and incident type, reveal verified escalation channels by service tier, start an SLA clock, and export an impact packet.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Incident intake; vendor/service-tier matrix; human route cards; SLA clock; impact composer; fallback checklist; export.

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S1, S11; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- The first screen exposes incident severity, timer, vendor, and one primary action; every route shows confidence and last-verified date.

## Development start prompt

```text
Build Human Support Escalation Atlas from this PRD as a polished responsive prototype. Preserve the operator-dense design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

