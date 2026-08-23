# PRD — Quarter-Acre Season Tetris

## Problem
- Turn a tiny backyard into a tactile seasonal self-sufficiency puzzle with realistic tradeoffs.

## Target user
- Renters and first-time gardeners planning food production in very small yards.

## Source evidence
- S06 from daily/2026-08-24/ideas.md.

## Core loop
- Drag crop/polyculture tiles into a four-season grid while sun, water, labor, harvest timing, and rotation constraints react immediately.

## First screen
- a four-season yard grid and a tray of crop and infrastructure tiles. Core loop: drag tiles into space, watch sun, water, labor, harvest timing, and rotation constraints react, then solve a weekly meal target and share the garden card. Required sections: yard scan; season board; crop tile tray; constraint reactions; harvest chain; shareable garden card. Make the one-line rule visible: fit four seasons of food into one tiny yard without exhausting the soil or yourself. Design direction: use the playful-experimental profile with a paper garden board, one tomato-red accent, chunky draggable tiles, playful 14px corners, instant undo, and funny but legible crop-failure states.

## Key screens
- yard scan
- season board
- crop tile tray
- constraint reactions
- harvest chain
- shareable garden card

## Design profile and theme
- Profile: playful-experimental
- Theme: paper garden board, one tomato-red accent, chunky draggable tiles, playful 14px corners, instant undo and funny crop-failure states

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
Build a playful responsive planning toy called "Quarter-Acre Season Tetris" for renters and first-time gardeners planning food production in a tiny yard. First screen: a four-season yard grid and a tray of crop and infrastructure tiles. Core loop: drag tiles into space, watch sun, water, labor, harvest timing, and rotation constraints react, then solve a weekly meal target and share the garden card. Required sections: yard scan; season board; crop tile tray; constraint reactions; harvest chain; shareable garden card. Make the one-line rule visible: fit four seasons of food into one tiny yard without exhausting the soil or yourself. Design direction: use the playful-experimental profile with a paper garden board, one tomato-red accent, chunky draggable tiles, playful 14px corners, instant undo, and funny but legible crop-failure states.
```
