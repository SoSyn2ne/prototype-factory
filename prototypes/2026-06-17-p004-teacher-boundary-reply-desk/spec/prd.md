# PRD - Teacher Boundary Reply Desk

## Problem
- A parent-message triage desk that helps teachers refuse unpaid tutoring and last-minute trip packets without sounding cold.
- Evidence: S7 (Teachers are not free tutors; Reddit r/Teachers, 2026 search result); S8 (Parents request trip schoolwork with no notice; Reddit r/Teachers, 2026 search result).

## Target user
- K-12 teachers, department heads, and school office staff facing parent demands for extra tutoring, make-up packets, and grade justification.

## Key UX
- Teacher pastes a parent request, chooses policy and tone, then receives a boundary-safe reply, documentation log, and escalation path.

## Required UI sections
- Incoming parent request inbox with urgency and emotional heat tags
- Policy picker for homework, travel, tutoring, grading, and absence rules
- Boundary reply composer with firm, warm, and admin-copy variants
- Documentation timeline for prior contacts and posted materials
- Workload impact meter showing unpaid prep time avoided
- Escalation handoff to counselor, department chair, or admin
- Reusable family FAQ snippets by recurring request type

## Assigned design profile
- operator-dense

## Theme
- 외로움 / 역전 - teacher burnout, parent pressure, professional dignity, and reclaiming unpaid time.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "Teacher Boundary Reply Desk" for teachers handling parent requests for free tutoring and last-minute vacation schoolwork packets. The first screen must be a working parent-message triage desk with an incoming request inbox, policy picker, boundary reply composer, documentation timeline, workload impact meter, escalation handoff, and reusable family FAQ snippets. Use realistic sample data: parent asks for a week of work with two minutes notice, another demands personal tutoring after a low geometry grade, teacher has posted online materials, and admin wants all replies documented. Design direction: use the operator-dense profile with crisp compact queues, calm authority, high scanability, and one firm accent for escalation or send actions. Do not make a marketing landing page; the first screen must be the working app.

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
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p004/
