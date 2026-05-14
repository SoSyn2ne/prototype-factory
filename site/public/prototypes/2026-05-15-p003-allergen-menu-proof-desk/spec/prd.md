# PRD — Allergen Menu Proof Desk

## Problem
- A restaurant ops console that converts recipes and vendor sheets into an inspection-ready allergen disclosure map.
- External evidence: Signal 5 (formal/news source): California and New York allergen disclosure rules push chains toward item-level top-nine allergen data, but AI is only as reliable as underlying recipe/vendor data.; Signal 6 (formal/news source): More states are considering written allergen notification requirements for food-service businesses.

## Target user
- Restaurant groups, franchise operators, menu teams, and district managers who need reliable top-nine allergen disclosure across recipes, substitutions, seasonal menus, and vendor changes.

## Key UX
- Upload menu items, recipe components, supplier spec sheets, prep notes, and cross-contact risks; the app highlights missing ingredient proof, maps allergens per item, flags menu copy conflicts, creates staff briefing cards, and exports an inspection-ready disclosure packet.

## Required UI sections
- menu and recipe import
- top-nine allergen matrix
- supplier spec-sheet evidence vault
- substitution and cross-contact risk lane
- missing-proof task queue
- staff briefing card generator
- inspection-ready disclosure export

## Design profile
- field-ops
- Design direction: match the Stitch prompt guidance; keep the profile visible in hierarchy, palette, density, and interaction tone.

## Theme
- 건강

## Constraints
- Phase A only: spec and Stitch-ready design prompt, no custom demo implementation.
- Sources are problem evidence, not market-size proof.
- Avoid external LLM calls; all prompt text is deterministic.

## Success metrics
- User can understand the urgent job-to-be-done in under 10 seconds.
- Main workflow has one clear intake, one risk/comparison surface, and one export/next-action artifact.
- Stitch export can be dropped at `/home/sy/Downloads/stitch_drop/2026-05-15/p003/`.
