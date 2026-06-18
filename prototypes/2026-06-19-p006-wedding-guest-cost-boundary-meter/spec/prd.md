# PRD — Wedding Guest Cost Boundary Meter

## Problem
- Couples and guests negotiate destination fees, lodging asks, and friendship risk before a celebration becomes resentment.
- Source signals: S11, S12 from daily/2026-06-19/ideas.md.

## Target user
- Engaged couples, wedding guests, bridesmaids, destination-wedding planners, and friends trying to talk about money without blowing up relationships.

## Key UX
- User models guest expenses, couple subsidies, lodging awkwardness, and RSVP pressure; the app produces boundary scripts, fairness scores, and a revised invite plan.

## Required UI sections
- Guest burden header with travel, lodging, attire, gifts, PTO, and per-person fee
- Social-risk meter for resentment, embarrassment, and group-chat blowback
- Cost split canvas for couple pays, guest pays, optional events, and subsidy tiers
- Invite wording lab with tactful alternatives to mandatory fees
- Friendship boundary script composer for declining, negotiating, or apologizing
- Scenario cards for destination, Airbnb weekend, local ceremony, and microwedding
- Shareable fairness receipt for partner/planner/family review

## Assigned design profile
- playful-experimental

## Theme
- 자산 방어 / 외로움 / 외모 - wedding status pressure, guest resentment, and money shame.

## Stitch prompt

Build a production-grade web app prototype called "Wedding Guest Cost Boundary Meter" for couples and guests navigating destination-wedding fees, lodging asks, and friendship-risk money conversations. The first screen must be a working social-cost lab with a guest burden header, social-risk meter, cost split canvas, invite wording lab, friendship boundary script composer, scenario cards, and shareable fairness receipt. Use realistic sample data: $40k wedding benchmark, 120 guests, $250 Airbnb weekend fee idea, bridesmaid lodging, guest PTO, strict dress code, and two friends privately worried about cost. Design direction: use the playful-experimental profile with bold social-meter visuals, polished wedding-adjacent details, high readability, and a memorable but humane tone that makes money boundaries feel discussable. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A spec only; Stitch generation/export happens in the separate 08:30 job.
- Budget: No custom demo implementation in Phase A.
- Platform: Stitch Web project, not App.

## Non-goals
- Do not implement a custom local demo during Phase A.
- Do not call external LLM APIs.
- Do not treat external source signals as market-size proof.

## Success metrics
- Stitch output clearly exposes the working app on the first screen.
- All required UI sections are visible or reachable without a marketing landing page.
- The assigned design profile is visibly reflected in layout, density, controls, and visual tone.
