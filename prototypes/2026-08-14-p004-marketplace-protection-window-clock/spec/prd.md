# PRD — Marketplace Protection Window Clock

## Problem
- Marketplace buyers and makers capture delivery evidence before a shortened protection window quietly expires.

## Target user
- Etsy-style marketplace buyers, handmade sellers, and small support teams navigating delivery, return, and protection deadlines.

## Arrival path
- Search, community referral, or operator handoff at the trigger: consumer protection / deadline anxiety.

## Business / validation route
- Test core-flow completion and artifact sharing; validate a paid lightweight subscription, template pack, or qualified partner lead where appropriate.

## Core loop
- Paste an order, classify the dispute, calculate the evidence window, capture tracking/messages/photos, and export a buyer or seller action receipt before expiry.

## First screen
- Communicate the one-liner in three seconds and expose the first action beside a realistic result preview.

## Key screens
- order intake; policy-window clock; dispute path chooser; evidence locker; action checklist; case receipt.

## Interaction rules
- One decisive primary action per state; preserve entered data; show loading, empty, success, blocked, and error states.

## Output artifact
- A timestamped receipt can be attached to platform support before the clock closes.

## Share / return loop
- A timestamped receipt can be attached to platform support before the clock closes.

## Constraints
- Time: one-session prototype.
- Budget: realistic local mock data; no paid external API.
- Platform: responsive web, desktop and mobile.

## Non-goals
- Production integrations, legal guarantees, payments, or a custom Phase A demo.

## Success metrics
- First action understood in 3 seconds; core flow completed without instruction; output shared or saved.

## QA / screenshot criteria
- Profile financial-analyst is unmistakable; primary interaction and result fit above fold; mobile has no overflow; all required sections are visible.

## Development start prompt

```text
Build Marketplace Protection Window Clock as a polished local HTML/React prototype in prototype-factory. Marketplace buyers and makers capture delivery evidence before a shortened protection window quietly expires. Target: Etsy-style marketplace buyers, handmade sellers, and small support teams navigating delivery, return, and protection deadlines. Implement: Paste an order, classify the dispute, calculate the evidence window, capture tracking/messages/photos, and export a buyer or seller action receipt before expiry. Required sections: order intake; policy-window clock; dispute path chooser; evidence locker; action checklist; case receipt. Preserve design profile financial-analyst. Use realistic local data, complete interaction states, responsive desktop/mobile layouts, and screenshot QA. Do not use paid external APIs.
```

## Source signals
- S6, S7: see daily/2026-08-14/ideas.md.

## Design
- Profile: financial-analyst
- Theme: consumer protection / deadline anxiety
- Direction: Use a financial-analyst profile with one amber warning accent, tabular countdowns, squared evidence cells, explicit known/uncertain policy states, and no celebratory gradients.
