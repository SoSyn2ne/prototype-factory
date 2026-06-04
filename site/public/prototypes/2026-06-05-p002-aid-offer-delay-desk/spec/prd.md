# PRD — Aid Offer Delay Desk

## Problem
- A financial-aid operations console that turns FAFSA processing delays into student-safe next actions and outreach.

## Target user
- College financial-aid offices, community-college enrollment teams, student-success advisors, bursar liaisons, and scholarship coordinators handling 2026-27 packaging delays.

## Key UX
- Aid staff import FAFSA status rows, registration deadlines, bursar holds, student risk notes, and message templates; the app triages who needs outreach, what can be explained safely, and which records need manual packaging or escalation.

## Required UI sections
- Packaging delay command header with total affected students and deadline pressure
- Student queue by FAFSA received, ISIR pending, verification needed, packaged, and billed-without-aid
- Risk filters for first-gen, enrolled-with-balance, housing deadline, and high call volume
- Outreach script composer for students and parents
- Bursar/enrollment handoff lane
- Manual packaging checklist
- Portal screenshot/document request tracker
- Daily call-volume and melt-risk summary

## Design profile
- field-ops

## Theme
- 사교육

## Source signal references
- S5 - Reddit r/FAFSA 2026-27 form delay
- S6 - Reddit r/financialaid school FAFSA access/packaging confusion

## Constraints
- Time: Phase A spec/scaffold only; no custom demo implementation.
- Budget: Prototype Factory daily batch candidate.
- Platform: Responsive web app prototype for Stitch export.

## Non-goals
- No production integrations.
- No legal, medical, financial-aid, or compliance advice beyond workflow framing.
- No external LLM API calls.

## Success metrics
- User can understand the painful trigger in under 10 seconds.
- User can complete the main sample workflow without placeholder content.
- Stitch prompt can be copied directly into the 08:30 generation flow.

## Notes
- Candidate label: Practical / Commercial.
