# PRD — Kitchen Count Merge Walk

## Problem
- Kitchen crews merge many messy shelf counts into one order-ready inventory walk without duplicate lines.

## Target user
- Catering kitchens, restaurant sous chefs, and commissary teams doing collaborative counts before ordering.

## Arrival path
- Search, community referral, or operator handoff at the trigger: kitchen inventory / margin defense.

## Business / validation route
- Test core-flow completion and artifact sharing; validate a paid lightweight subscription, template pack, or qualified partner lead where appropriate.

## Core loop
- Assign color-coded count zones, scan or voice-enter shelf items, merge duplicate names, resolve conflicting quantities at the shelf, then freeze an order-ready count.

## First screen
- Communicate the one-liner in three seconds and expose the first action beside a realistic result preview.

## Key screens
- zone assignment; scan/voice count; duplicate merge tray; conflict-at-shelf mode; variance and waste flags; frozen order sheet.

## Interaction rules
- One decisive primary action per state; preserve entered data; show loading, empty, success, blocked, and error states.

## Output artifact
- The frozen count and unresolved exceptions hand directly to the ordering lead.

## Share / return loop
- The frozen count and unresolved exceptions hand directly to the ordering lead.

## Constraints
- Time: one-session prototype.
- Budget: realistic local mock data; no paid external API.
- Platform: responsive web, desktop and mobile.

## Non-goals
- Production integrations, legal guarantees, payments, or a custom Phase A demo.

## Success metrics
- First action understood in 3 seconds; core flow completed without instruction; output shared or saved.

## QA / screenshot criteria
- Profile field-ops is unmistakable; primary interaction and result fit above fold; mobile has no overflow; all required sections are visible.

## Development start prompt

```text
Build Kitchen Count Merge Walk as a polished local HTML/React prototype in prototype-factory. Kitchen crews merge many messy shelf counts into one order-ready inventory walk without duplicate lines. Target: Catering kitchens, restaurant sous chefs, and commissary teams doing collaborative counts before ordering. Implement: Assign color-coded count zones, scan or voice-enter shelf items, merge duplicate names, resolve conflicting quantities at the shelf, then freeze an order-ready count. Required sections: zone assignment; scan/voice count; duplicate merge tray; conflict-at-shelf mode; variance and waste flags; frozen order sheet. Preserve design profile field-ops. Use realistic local data, complete interaction states, responsive desktop/mobile layouts, and screenshot QA. Do not use paid external APIs.
```

## Source signals
- S4, S5: see daily/2026-08-14/ideas.md.

## Design
- Profile: field-ops
- Theme: kitchen inventory / margin defense
- Direction: Use a field-ops profile with one lime accent, grease-glove-sized controls, dark high-contrast quantity tiles, offline/conflict states, and no desktop-style sidebar maze.
