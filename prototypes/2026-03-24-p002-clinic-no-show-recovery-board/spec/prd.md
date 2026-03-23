# PRD — Clinic No-Show Recovery Board

## Problem
- A clinic recovery screen that helps staff rescue unused appointment slots before revenue disappears.
- Users currently piece this workflow together across chat, notes, spreadsheets, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Small clinic managers and front-desk staff dealing with same-day cancellations and no-shows.

## Key UX
- Spot empty slots, waiting-list matches, and recovery value immediately so staff can refill the day with minimal calls.

## Required UI sections
- Daily recovery hero
- empty-slot timeline
- waitlist match queue
- contact status tracker
- recovered revenue summary
- escalation notes drawer

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
- Design a polished healthcare operations dashboard called "Clinic No-Show Recovery Board" for small clinics trying to recover revenue from same-day cancellations and no-shows. The interface should feel clean, efficient, and credible without looking sterile. Include: (1) a daily recovery hero with lost revenue, recovered revenue, and refill CTA, (2) an empty-slot timeline for the current day, (3) a waitlist match queue ranked by fit and urgency, (4) a contact status tracker for called, texted, confirmed, and unreachable patients, (5) a recovered revenue summary with clear before/after states, and (6) an escalation notes drawer for staff handoff context. Use realistic mocked scheduling data, desktop dashboard composition, and no code snippets.
