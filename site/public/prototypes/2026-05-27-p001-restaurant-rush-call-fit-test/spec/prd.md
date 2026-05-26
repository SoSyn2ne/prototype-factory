# PRD - Restaurant Rush Call Fit Test

## Summary
A pre-sales simulator that proves whether an AI phone agent can survive a restaurant rush before the owner connects it to real callers.

## Candidate type
- Practical / Commercial

## Problem
- S1: Generic booking bots fail in restaurants because orders need POS writes, menu modifiers, rush timing, and kitchen-ticket handoff.
- S2: Owners compare AI receptionists and emphasize real-time writes and workflow-specific fit over generic demos.
- S3: SMBs lose calls after hours and need intake, booking, multilingual handling, and routing rather than voicemail.

## Target user
- Independent restaurants, small chains, FOH managers, and voice-AI consultants selling into food-service operators.

## Key UX
- The owner selects menu complexity, rush window, common modifications, POS path, and escalation rules; the app stress-tests sample calls and shows where the bot will lose orders, annoy staff, or create kitchen rework.

## Required UI sections
- Rush-window scenario picker for lunch, dinner, late-night, and holiday spikes
- Menu modifier map for top items, substitutions, allergies, combos, and sold-out states
- Sample call simulator with impatient, accented, noisy, and repeat-caller personas
- POS and kitchen-ticket readiness checklist
- Failure replay lane showing looped phrases, missing modifiers, and cashier handoff gaps
- Owner ROI strip comparing missed calls, FOH labor, refunds, and recovered orders
- Vendor fit score and install brief for the first safe deployment

## Design profile
- field-ops

## Theme
- 자산 방어

## External signal references
- S1 - Reddit r/AIReceptionists, restaurant phone-order edge cases: https://www.reddit.com/r/AIReceptionists/comments/1tc6od5/the_7_things_an_ai_receptionist_actually_needs_to/
- S2 - Reddit r/aiToolForBusiness, small-business AI receptionist buying questions: https://www.reddit.com/r/aiToolForBusiness/comments/1s3dh2i/which_ai_receptionist_do_you_actually_use_in/
- S3 - Callnovo, after-hours AI phone agents for SMBs: https://callnovo.ai/blog/ai-phone-agents-after-hours-small-business/

## Stitch prompt
Create a responsive web app prototype for "Restaurant Rush Call Fit Test," a pre-sales simulator that helps restaurants decide whether an AI phone agent can safely handle rush-hour calls. Include: rush-window scenario picker, menu modifier map, sample call simulator with caller personas, POS and kitchen-ticket readiness checklist, failure replay lane, owner ROI strip, and vendor fit score with install brief. Design direction: use the field-ops profile with durable restaurant-operations panels, high-contrast rush states, practical mobile controls, kitchen-ticket visual cues, and a clear stress-test-to-install workflow; it should feel like an operational readiness board, not a generic AI chatbot dashboard.

## Constraints
- Phase A only: scaffold and prompt pack, no custom demo implementation.
- Use Stitch export drop folder: /home/sy/Downloads/stitch_drop/2026-05-27/p001/

## Non-goals
- Do not claim source signals prove market size.
- Do not implement production integrations in Phase A.

## Success metrics
- User understands the core pain in under 10 seconds.
- Stitch output includes every required UI section.
- Demo preserves the assigned design profile and main workflow.
