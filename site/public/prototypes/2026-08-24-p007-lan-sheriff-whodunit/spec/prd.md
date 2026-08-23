# PRD — LAN Sheriff Family Whodunit

## Problem
- Make unknown network connections a cooperative household mystery instead of a security panic.

## Target user
- Privacy-curious households, parents, and home-lab beginners.

## Source evidence
- S08, S11 from daily/2026-08-24/ideas.md.

## Core loop
- Watch simulated devices send connection clues onto a room map, ask household members who owns each device, then identify or quarantine the mystery guest.

## First screen
- a home map where simulated devices throw connection clues toward outside services. Core loop: reveal one clue at a time, let family members claim devices, compare behavior, identify or quarantine the mystery guest, and export a funny case replay. Required sections: home map; live clue trail; device suspect cards; family claim round; quarantine choice; case replay. Clearly label all traffic as simulated and make the rule understandable in fifteen seconds. Design direction: use the playful-experimental profile with a dark detective board, one electric-lime accent, chunky clue cards, 12px controls, theatrical reveals, and no enterprise security dashboard chrome.

## Key screens
- home map
- live clue trail
- device suspect cards
- family claim round
- quarantine choice
- case replay

## Design profile and theme
- Profile: playful-experimental
- Theme: dark detective board, one electric-lime accent, chunky clue cards, 12px controls, theatrical reveals with explicit simulated data

## Interaction rules
- The primary interaction must be usable, not decorative.
- Preserve explicit empty, blocked, error, and success states described in the Stitch prompt.
- Never imply live external data when the prototype uses local sample data.

## Output artifact
- A concrete receipt, card, replay, map, or physical template produced by the core loop.

## Share / return loop
- Let the user export the final artifact and return when the underlying job, case, season, or round changes.

## Constraints
- Time: Phase A specification only; no custom demo.
- Budget: local sample data; no paid API.
- Platform: responsive web companion unless the concept explicitly includes a non-web artifact.

## Non-goals
- Generic analytics dashboard.
- Unverified market-size claims.

## Success metrics
- First screen understood in three seconds.
- Core interaction completes end to end.
- Output artifact is visible and exportable.

## QA / screenshot criteria
- Desktop and mobile layouts preserve the primary action.
- All required sections are visible or reachable.
- Profile, theme, and state colors remain consistent.

## Copy/paste-ready Stitch prompt

```text
Build a playful responsive network mystery called "LAN Sheriff Family Whodunit" for privacy-curious households, parents, and home-lab beginners. First screen: a home map where simulated devices throw connection clues toward outside services. Core loop: reveal one clue at a time, let family members claim devices, compare behavior, identify or quarantine the mystery guest, and export a funny case replay. Required sections: home map; live clue trail; device suspect cards; family claim round; quarantine choice; case replay. Clearly label all traffic as simulated and make the rule understandable in fifteen seconds. Design direction: use the playful-experimental profile with a dark detective board, one electric-lime accent, chunky clue cards, 12px controls, theatrical reveals, and no enterprise security dashboard chrome.
```
