# PRD — Solo Travel Delay Claim Arcade

## Problem
- Travelers convert flight delays, baggage chaos, and card insurance fine print into a playful reimbursement hunt.
- Source signals: S13, S14 from daily/2026-06-19/ideas.md.

## Target user
- Solo travelers, backpackers, points-and-miles users, travel bloggers, and anxious flyers trying to recover money after disruptions.

## Key UX
- Traveler logs delay minutes, baggage status, meals, hotel, card used, and airline messages; the app turns eligible reimbursements into missions with receipt capture and claim packets.

## Required UI sections
- Trip disruption header with delay length, bag status, connection risk, and claim timer
- Eligibility quest board for airline refund, card insurance, travel policy, and DOT complaint
- Receipt capture missions for meals, hotel, transit, toiletries, and replacement clothes
- Fine-print decoder comparing card benefits, policy exclusions, and evidence needs
- Baggage survival checklist with one-bag fallback and local purchase limits
- Claim packet builder for airline, card issuer, insurer, and regulator
- Scoreboard showing recovered dollars, open timers, and missed opportunities

## Assigned design profile
- playful-experimental

## Theme
- 역전 / 자산 방어 / 외로움 - turning travel chaos into recovery, autonomy, and shareable wins.

## Stitch prompt

Build a production-grade web app prototype called "Solo Travel Delay Claim Arcade" for travelers trying to recover money from flight delays, baggage chaos, and card/travel insurance fine print. The first screen must be a working reimbursement game workspace with a trip disruption header, eligibility quest board, receipt capture missions, fine-print decoder, baggage survival checklist, claim packet builder, and recovered-dollars scoreboard. Use realistic sample data: 7-hour delay, missed connection, checked bag delayed 36 hours, Amex-style $500 trip delay benefit, meal and hotel receipts, airline chat transcript, and DOT complaint timer. Design direction: use the playful-experimental profile with crisp arcade-like progress, travel-document textures, celebratory microstates, and serious claim clarity beneath the fun. Do not make a marketing landing page; the first screen must be the working app.

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
