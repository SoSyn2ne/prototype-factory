# PRD — Minimum Wage Shift Survival Board

## Problem
- A Korean small-merchant scheduling simulator that shows which shifts, breaks, part-timers, and price moves keep the owner above minimum wage.

## Target user
- Korean cafe, convenience-store, restaurant, and neighborhood retail owners facing wage, rent, and weak-demand pressure.

## Key UX
- The owner drags shifts on a week grid, toggles wage scenarios, and sees owner take-home, service gaps, overtime risk, and price-change options in one board.

## Required UI sections
- Owner survival KPI strip
- Weekly shift grid with break compliance
- Wage freeze/increase scenario toggle
- Owner take-home meter
- Service-gap and rush-hour warning rows
- Price/menu/rent sensitivity sliders
- Staff communication memo export

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Source signal references
- S9: Half of Korea self-employed owners say conditions worsened in 2026, and one in three earns below minimum wage after expenses. Source: https://en.sedaily.com/business/2026/06/23/half-of-koreas-self-employed-say-business-worsened-this-year
- S10: Korean SMEs are urging a minimum-wage freeze, arguing that inflation, interest rates, and labor costs could deepen business stress. Source: https://www.ajupress.com/view/20260624164070449

## loved_by_small_group
- 5

## spread_trigger
- Owners can screenshot the survival board before wage talks, landlord conversations, or family staffing decisions.

## Copy/paste-ready Stitch prompt
Build a production-grade web app prototype called "Minimum Wage Shift Survival Board" for Korean small merchants deciding whether next month's staffing plan still leaves the owner above minimum wage. The first screen must be a working shift survival simulator with owner survival KPI strip, weekly drag-style shift grid, wage scenario toggle, owner take-home meter, rush-hour gap warnings, price/menu/rent sensitivity sliders, and staff memo export. Use realistic sample data: cafe open 7 days, two part-timers, KRW hourly wage scenario, rent, card fees, delivery fees, owner family labor, and weekend rush. Design direction: use the financial-analyst profile with rigorous comparison panels, clear KRW/unit hierarchy, quiet confidence badges, off-white and graphite workbench tones, and charts paired with plain interpretation. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not make a marketing-only landing page.

## Success metrics
- Stitch output preserves the working-app first screen and assigned design profile.
- p002 export lands at /home/sy/Downloads/stitch_drop/2026-06-26/p002/code.html and screen.png.
