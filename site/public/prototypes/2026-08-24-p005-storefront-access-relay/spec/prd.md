# PRD — Storefront Disruption Access Relay

## Problem
- Help small shops publish verified access changes and coordinate staff during nearby disruptions.

## Target user
- Independent retailers and cafés affected by protests, construction, closures, or crowd-control changes.

## Source evidence
- S05, S12 from daily/2026-08-24/ideas.md.

## Core loop
- Verify entrances and transit conditions, assign a staff check, publish a short access card, and expire stale updates automatically.

## First screen
- a simple storefront map with verified open entrance, blocked route, staff checker, and update expiry time.

## Key screens
- disruption intake
- entrance verification
- staff check relay
- customer access card
- channel publish checklist
- expiry receipt

## Design profile and theme
- Profile: field-ops
- Theme: high-contrast street map, one orange action accent, 48px mobile controls, bold verified/stale states, no political sentiment scoring

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
Build a mobile-first operations app called "Storefront Disruption Access Relay" for independent retailers and cafés affected by nearby protests, construction, closures, or crowd-control changes. First screen: a simple storefront map with verified open entrance, blocked route, staff checker, and update expiry time. Core interaction: verify access conditions, assign a staff check, publish a concise customer access card across channels, and expire stale guidance automatically. Required sections: disruption intake; entrance verification; staff check relay; customer access card; channel publish checklist; expiry receipt. Show clear, changed, unverified, stale, and reopened states without judging the event itself. Design direction: use the field-ops profile with a high-contrast street map, one orange action accent, 48px mobile controls, bold verified/stale states, and no political sentiment scoring.
```
