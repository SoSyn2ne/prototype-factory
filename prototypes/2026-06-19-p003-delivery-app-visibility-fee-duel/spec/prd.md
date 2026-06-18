# PRD — Delivery App Visibility Fee Duel

## Problem
- Independent restaurants compare commission tiers, app visibility, and off-app ordering moves before fees erase margin.
- Source signals: S5, S6 from daily/2026-06-19/ideas.md.

## Target user
- Korean and immigrant-owned restaurant operators dependent on Baemin/Coupang Eats/Uber Eats-style platforms, plus local merchant associations.

## Key UX
- Owner enters app fees, rank position, order mix, pickup/direct options, and current margins; the app shows whether paying for visibility, pushing direct orders, or delisting protects profit.

## Required UI sections
- Platform dependency header with order share, commission, and visibility score
- Fee ladder comparison for standard, promoted, capped, and direct-order channels
- Search-rank tradeoff board showing first-page cost vs buried listing loss
- Menu surcharge and bundle simulator for app vs store prices
- Direct-order migration playbook with QR, Kakao/SMS, pickup perks, and loyalty
- Regulator/association evidence log for excessive-fee complaints
- Weekly profit duel scoreboard by platform and channel

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 / 역전 - small merchant margin defense against platform dependency.

## Stitch prompt

Build a production-grade web app prototype called "Delivery App Visibility Fee Duel" for independent Korean restaurants deciding how to survive delivery-app commissions and visibility pressure. The first screen must be a working financial decision workspace with a platform dependency header, fee ladder comparison, search-rank tradeoff board, surcharge and bundle simulator, direct-order migration playbook, regulator evidence log, and weekly profit duel scoreboard. Use realistic sample data: 8.2% average commission, one app tier at 15%, promoted listing offer, buried search rank risk, 120 weekly orders, QR direct-order pilot, and a merchant association complaint note. Design direction: use the financial-analyst profile with precise margin math, institutional calm, restrained alert colors, and clean Korean-local operator cues without turning it into a generic dashboard. Do not make a marketing landing page; the first screen must be the working app.

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
