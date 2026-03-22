# PRD — Kid Day Ops Planner

## Problem
- A family ops board that turns school, care, meals, and pickup logistics into one low-stress daily plan.
- Users currently piece this workflow together across chat, notes, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Busy parents coordinating a child's weekday schedule across home, school, and caregivers.

## Key UX
- See the day timeline, owner handoffs, and risk points immediately so the family can avoid missed pickups and last-minute chaos.

## Required UI sections
- Daily timeline hero
- Owner/handoff map
- Meal-and-bag checklist
- Transport plan
- Risk alerts panel
- Contingency notes drawer

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
- Design a warm but operational family planner web app screen called "Kid Day Ops Planner" for busy parents coordinating a child's day. The UI should balance friendliness with clear logistics. Include: (1) a daily timeline hero showing morning, school, after-school, and evening blocks, (2) an owner and handoff map for mom, dad, grandparent, or caregiver responsibilities, (3) a meal-and-bag checklist with packed / missing states, (4) a transport plan card for drop-off and pickup timing, (5) a risk alerts panel for late pickup, missing items, or schedule collisions, and (6) a contingency notes drawer with backup plans. Use realistic mocked data, polished card layouts, calm colors, and a desktop web dashboard style.
