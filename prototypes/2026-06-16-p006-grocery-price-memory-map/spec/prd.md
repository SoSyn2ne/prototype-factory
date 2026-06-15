# PRD - Grocery Price Memory Map

## Problem
- A receipt-powered household map that remembers real local grocery prices, catches shelf-tag errors, and tells families where to stock up.
- Evidence: S11 (Reddit r/Frugal, grocery GasBuddy-style price request, Feb 2025 still active in 2026 searches); S12 (Reddit r/Frugal, receipt errors and stock-up tracking, 2026 community surface).

## Target user
- Budget-stretched households, frugal shoppers, fixed-income seniors, parents feeding families, and couponers tired of flyer-only apps.

## Key UX
- A local staple-price memory that lets users scan receipts, compare shelf tags to checkout prices, track staple lows by store, and generate a trip plan that saves money without creating a three-hour errand loop.

## Required UI sections
- Staple basket savings header by store and week
- Receipt scan inbox with detected item, paid price, shelf-tag claim, and correction status
- Local price map for milk, eggs, rice, chicken, produce, diapers, and household staples
- Stock-up threshold tracker using household inventory and historical low prices
- Trip tradeoff planner balancing savings, distance, cold-chain time, and Uber/gas cost
- Error dispute card for overcharge proof, photo, receipt line, and service-desk script
- Shareable neighborhood price board with confidence and last-seen date

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 / 건강 - food inflation, household budget pressure, receipt proof, and staple access.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a financial consumer web app prototype called "Grocery Price Memory Map" for households that want real local grocery prices, receipt-error proof, and stock-up timing instead of generic coupon flyers. The first screen must be a working grocery price memory map with a staple basket savings header, receipt scan inbox, local price map, stock-up threshold tracker, trip tradeoff planner, error dispute card, and shareable neighborhood price board. Use realistic sample data: milk, eggs, rice, chicken, diapers, Costco vs Walmart vs Aldi, shelf-tag mismatch, receipt overcharge, household inventory running low, gas/Uber trip cost, and last-seen price confidence. Design direction: use the financial-analyst profile with off-white/graphite comparison panels, muted green savings cues, rigorous confidence labels, and calm decision-oriented charts. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-16/
