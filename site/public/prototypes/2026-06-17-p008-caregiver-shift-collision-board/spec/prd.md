# PRD - Caregiver Shift Collision Board

## Problem
- A family care operations board that exposes medication, appointment, and job-schedule collisions before someone burns out.
- Evidence: S13 (Family caregiving grows and reform pressure rises; Medicare Rights Center, 2025); S14 (Korean family caregivers experience career disruption; MDPI, 2024).

## Target user
- Adult children caring for parents, Korean family caregivers, home-care coordinators, and siblings splitting appointments and medication tasks.

## Key UX
- Family maps care tasks against work shifts, meds, transport, and fatigue; the app surfaces collisions, unfair burden, and a weekly handoff plan.

## Required UI sections
- Week-at-risk board with collision count and next missed-care threat
- Medication, meal, appointment, and transport timeline
- Family shift grid with job hours, commute, and availability windows
- Burden imbalance meter by sibling, spouse, and paid aide
- Career-risk flags for missed work, unpaid leave, and last-minute swaps
- Care handoff checklist for pharmacy, clinic, documents, and emergency contacts
- Printable fridge plan and Kakao-style family update summary

## Assigned design profile
- field-ops

## Theme
- 건강 / 외로움 / 자산 방어 - elder care burden, family resentment, career disruption, and preventing one caregiver from collapsing.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "Caregiver Shift Collision Board" for families coordinating elder care around jobs and appointments. The first screen must be a working care operations board with a week-at-risk header, medication and appointment timeline, family shift grid, burden imbalance meter, career-risk flags, care handoff checklist, printable fridge plan, and Kakao-style family update summary. Use realistic sample data: mother with morning meds, father clinic visit, daughter-in-law work shift, son commute, pharmacy refill, paid aide gap, and sibling resentment over weekend coverage. Design direction: use the field-ops profile with trustworthy slate/steel surfaces, clear operational timelines, legible pressure states, and a sparing action accent for urgent collisions. Do not make a marketing landing page; the first screen must be the working app.

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
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p008/
