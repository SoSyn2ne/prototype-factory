# PRD — Creator Offer Triage

## Problem
Verify sponsorship claims before a creator opens files or shares sensitive data.

## Target user
Small creators and managers receiving unfamiliar brand offers.

## Core loop / key UX
Decompose the offer into sender, brand, link/file, rights, and payment lanes with gated next actions.

## First screen
Make the core action and its evidence immediately understandable in three seconds.

## Required UI sections
offer inbox; claim lanes; sender/domain evidence; quarantine; rights/payment terms; action gate; receipt.

## Design
- Assigned profile: `operator-dense`
- Theme: 안전

## Source signals
S3, S8 from `daily/2026-09-02/ideas.md`.

## Non-goals
- No production integrations or custom demo in Phase A.

## QA / screenshot criteria
Desktop and mobile show independent evidence per claim and never collapse safety into one score.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p002 in `daily/2026-09-02/ideas.md`.
