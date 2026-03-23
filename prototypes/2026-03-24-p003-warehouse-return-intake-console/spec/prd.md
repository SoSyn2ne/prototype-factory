# PRD — Warehouse Return Intake Console

## Problem
- A return-intake workspace that helps warehouse teams classify incoming returns fast and route them without rework.
- Users currently piece this workflow together across chat, notes, spreadsheets, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Warehouse leads and small operations teams processing ecommerce returns.

## Key UX
- Review one return stream, detect exception items quickly, and send each parcel to the right next step without spreadsheet hopping.

## Required UI sections
- Intake throughput hero
- parcel scan queue
- condition grading panel
- route decision matrix
- exception bucket
- disposition summary footer

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / stitched export friendly.
- Platform: responsive web UI.

## Non-goals
- No live integrations or external APIs.
- No backend auth, payments, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The screen makes the next action obvious without onboarding.
- The exported Stitch screen can drop into the demo slot with minimal cleanup.

## Stitch prompt
- Design an industrial but modern desktop web app screen called "Warehouse Return Intake Console" for warehouse teams processing ecommerce returns. The UI should feel fast, structured, and easy to scan from a distance. Include: (1) an intake throughput hero with parcels received, backlog, and average decision time, (2) a parcel scan queue with SKU, order, and arrival age, (3) a condition grading panel for sealed, opened, damaged, and missing-parts states, (4) a route decision matrix for restock, refurbish, hold, or discard, (5) an exception bucket highlighting fraud risk or mismatched items, and (6) a disposition summary footer with totals by route. Use realistic warehouse-style mocked data, crisp hierarchy, desktop layout, and no code blocks.
