# PRD — Pricing Smoke Test Generator

## Problem
Early-stage teams need to validate pricing direction quickly, but most pricing discussions are subjective and not tied to measurable behavior. Building a full pricing page experiment is often overkill for the first 24-hour validation cycle.

## Target user
- Solo founder or PM running pre-launch validation.
- Growth/product marketer who needs 2-3 pricing variants fast.
- Agency operator testing offer packaging for a client landing page.

## Constraints
- Time: must produce testable outputs in under 30 minutes.
- Budget: zero external tooling cost for the prototype itself.
- Platform: must run locally in a browser with vanilla HTML/CSS/JS only.
- Data: no backend, no real event pipeline; tracking plan is simulation/spec only.

## Non-goals
- Not a production billing/pricing system.
- Not a statistically valid experiment platform.
- Not integrated with Stripe, Segment, GA4, or ad platforms.
- Not generating full marketing copy beyond tier/value scaffolding.

## Success metrics
- User can generate all 3 tiers from inputs in under 60 seconds.
- Billing toggle updates all visible prices correctly with no stale values.
- User can copy a UTM link in one click (or fallback path) with correct variant params.
- Tracking panel reflects currently selected tier and billing mode.
- At least 3 internal dry-runs can be completed without facilitator help.

## Core workflow
1. User enters product name, target persona, and value metric.
2. User clicks `Generate 3 variants`.
3. App renders `Starter`, `Pro`, `Team` tier cards with:
   - prices,
   - value metric line,
   - simple tier positioning.
4. User switches `Monthly` / `Annual` and compares displayed prices.
5. User selects one tier variant and reviews the updated tracking plan.
6. User clicks `Copy UTM link` and shares test URL for traffic split.

## Risks / unknowns
- Pricing suggestions may feel arbitrary without market anchors or competitor data.
- Persona text quality heavily affects usefulness of generated tier language.
- Clipboard access can fail in restricted browser contexts; fallback may still be blocked.
- Annual discount assumptions (for example, 2 months free) may bias user perception.
- Manual link sharing can introduce inconsistent traffic allocation without tooling support.
