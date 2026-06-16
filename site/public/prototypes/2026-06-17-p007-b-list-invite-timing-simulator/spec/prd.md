# PRD - B-List Invite Timing Simulator

## Problem
- A wedding RSVP timing toy that shows when a second-tier guest invite still feels graceful instead of obvious.
- Evidence: S12 (Tier 1 / Tier 2 wedding guest RSVP timing anxiety; Reddit r/weddingplanning, 2026-06).

## Target user
- Engaged couples, planners, and anxious families managing venue capacity, guest politics, and rolling invitations.

## Key UX
- Couple enters tiered guest lists, RSVP deadline, decline rate, social overlap, and travel needs; the simulator shows whether each late invite still feels respectful.

## Required UI sections
- Guest-cap and RSVP countdown header
- Tier 1 and Tier 2 list board with relationship sensitivity tags
- Decline-rate slider and rolling invite calendar
- Gracefulness score for notice length, travel burden, and overlap risk
- Awkwardness heatmap showing who might compare invite timing
- Message preview for late but warm invitations
- Final send queue with hold, send, or do-not-risk labels

## Assigned design profile
- calm-consumer

## Theme
- 외로움 / 자산 방어 - wedding status anxiety, relationship politics, budget caps, and fear of making guests feel second-class.

## Practical vs fun label
- Fun / Portfolio

## Stitch prompt
Build a production-grade web app prototype called "B-List Invite Timing Simulator" for couples deciding when a second-tier wedding invitation still feels graceful. The first screen must be a working RSVP simulator with a guest-cap countdown, Tier 1 and Tier 2 list board, decline-rate slider, rolling invite calendar, gracefulness score, awkwardness heatmap, message preview, and final send queue. Use realistic sample data: 125-person venue cap, 94 confirmed, 18 pending, 22 Tier 2 guests, cousins who talk to each other, out-of-town travel burden, and a six-week RSVP deadline. Design direction: use the calm-consumer profile with soft reassuring surfaces, gentle relationship-risk colors, friendly step flows, and emotionally steady copy. Do not make a marketing landing page; the first screen must be the working app.

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
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p007/
