# PRD — Menu Price Backlash Simulator

## Problem
- Restaurants model coffee, beef, tariff, and labor shocks against guest-visible price changes before reviews turn ugly.
- Source signals: S3 from daily/2026-06-19/ideas.md.

## Target user
- Independent restaurant owners, cafe managers, menu consultants, and operators deciding whether to raise prices, shrink portions, or reframe menu copy.

## Key UX
- Operator chooses cost shocks by ingredient, sees margin and review backlash scenarios, then generates menu changes, staff talking points, and a price-test plan.

## Required UI sections
- Cost shock header for coffee, beef, beer, labor, and shipping
- Menu item margin table with old price, new cost, target margin, and guest sensitivity
- Backlash simulator showing review risk, reorder risk, and perceived value
- Portion/ingredient swap board for shrink, bundle, premiumize, or hold price
- Staff script composer for explaining price changes without sounding defensive
- A/B test calendar for lunch, dinner, delivery, and happy-hour segments
- Owner decision memo with top three price moves and watch metrics

## Assigned design profile
- operator-dense

## Theme
- 자산 방어 / 역전 - margin protection, review fear, and survival under food-cost volatility.

## Stitch prompt

Build a production-grade web app prototype called "Menu Price Backlash Simulator" for independent restaurants facing coffee, beef, beer, tariff, shipping, and labor cost shocks. The first screen must be a working restaurant pricing console with a cost shock header, menu item margin table, backlash simulator, portion/ingredient swap board, staff script composer, A/B test calendar, and owner decision memo. Use realistic sample data: hot coffee up 6.9%, burger cost pressure, imported beer tariff exposure, $14.73 burger price, delivery menu markup, 600 recent reviews, and three proposed price changes. Design direction: use the operator-dense profile with compact service-industry tables, fast scan states, muted kitchen-ticket neutrals, and one decisive accent for recommended price moves. Do not make a marketing landing page; the first screen must be the working app.

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
