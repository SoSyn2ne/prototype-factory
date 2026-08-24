# PRD — Pocket Linux Sidequest Deck

## Problem
- Turn an unused Linux handheld into a deck of 20-minute real-world sidequests using its buttons, Wi-Fi, camera, SSH, and local sensors.

## Target user
- Linux handheld owners bored with emulation and seeking playful weekend projects.

## Core loop
- Scan capabilities, deal three quests, run one with physical controls, capture proof, remix, and share a quest cartridge.

## First screen
- Make the trigger and primary action understandable in three seconds.

## Required UI sections
- Capability scan; quest deal; timer; control mapping; proof capture; remix rules; scoreboard; share card.

## Design profile
- playful-experimental

## Theme
- 외로움

## Source signal references
- S7, S12; full URLs and evidence notes are in daily/2026-08-25/ideas.md.

## Constraints
- Phase A spec only; no external APIs; use realistic local mock data.

## Success metrics
- Five target users can complete the core loop without explanation; three say the output is useful enough to save or share.

## QA / screenshot criteria
- A quest is understandable within 15 seconds; controls map to real device inputs; safety notes appear before field actions.

## Development start prompt

```text
Build Pocket Linux Sidequest Deck from this PRD as a polished responsive prototype. Preserve the playful-experimental design profile, implement the core interaction with realistic local data, include complete empty/error/success states, and verify desktop plus mobile screenshots.
```

