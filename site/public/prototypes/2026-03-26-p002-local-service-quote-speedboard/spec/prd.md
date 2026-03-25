# PRD — Local Service Quote Speedboard

## Problem
- A quoting workspace that helps home-service teams answer new leads in minutes instead of losing jobs to faster competitors.
- Users currently split this workflow across multiple inboxes, spreadsheets, and ad-hoc judgment calls.
- The prototype should compress the highest-confidence next action into one desktop screen.

## Target user
- Owners and dispatch managers at small HVAC, plumbing, and electrical service businesses.

## Key UX
- See which leads need an immediate quote, assemble a credible estimate quickly, and understand win probability before sending.

## Required UI sections
- Lead-response hero
- Hot lead inbox
- Quote builder card
- Scope confidence checklist
- Competitor-risk panel
- Send-readiness footer

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / Stitch-export friendly.
- Platform: responsive web UI with a desktop-first composition.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The main decision path is visually obvious without onboarding.
- A Stitch export can drop into the stub demo slot with minimal cleanup.

## Stitch prompt
- Design a polished desktop quoting dashboard called "Local Service Quote Speedboard" for small home-service businesses responding to new customer leads. Use a clean field-ops design direction with deep blue, warm gray, and electric lime highlights; emphasize fast scanning, obvious conversion hierarchy, and a product feel that is practical, responsive, and revenue-focused. Include: (1) a lead-response hero with average response time, quotes due, and fastest-win CTA, (2) a hot lead inbox with service type, neighborhood, urgency, and expected ticket size, (3) a quote builder card with line items, labor ranges, and upsell options, (4) a scope confidence checklist covering photos, access, parts, and permit needs, (5) a competitor-risk panel showing delay risk and pricing sensitivity, and (6) a send-readiness footer with win probability and expected revenue. Use realistic mocked home-service data, desktop layout, crisp cards, and no code snippets.
