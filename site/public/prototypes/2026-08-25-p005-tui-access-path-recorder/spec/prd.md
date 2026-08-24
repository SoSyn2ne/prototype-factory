# PRD — TUI Access Path Recorder

## Problem
- Replay a terminal app entirely by keyboard and screen-reader announcements, then export the exact focus traps and unlabeled regions blocking a user.

## Target user
- CLI/TUI maintainers, accessibility testers, and blind developers.

## Core loop
- Record a keyboard task path, synchronize spoken output and focus order, flag violations, compare a patch, and export an issue.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Terminal replay; keystroke timeline; announcement transcript; focus graph; inspector; compare; issue export.

## Design profile
- field-ops

## Theme
- 건강

## Source signal references
- S6, S11; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- All controls are keyboard reachable with thick visible focus; violations include exact keys, observed speech, and expected speech.

## Development start prompt

```text
Build TUI Access Path Recorder from this PRD as a polished responsive prototype. Preserve the field-ops design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

