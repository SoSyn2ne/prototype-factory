# PRD — Prior Auth Appeal Packet Builder

## Candidate type
- Practical / Commercial

## Theme
- 건강

## Design profile
- operator-dense

## Problem
- A clinic staff workflow that turns AI-driven denial letters into evidence-ready prior authorization appeal packets.

## Target user
- Independent clinics, specialty practices, medical billers, patient advocates, office managers, and care coordinators handling payer denials with limited staff.

## Key UX
- Upload or paste denial reason, payer, procedure/drug, patient timeline, chart evidence, guideline references, missing criteria, and deadline; the app maps the denial to required evidence, creates a peer-to-peer prep sheet, and assembles an appeal packet with escalation steps.

## Required UI sections
- denial letter intake
- payer criteria gap map
- chart evidence checklist
- guideline citation shelf
- peer-to-peer prep card
- appeal packet preview
- deadline and escalation tracker

## External/community signal references
- Signal 8 — Muni Health — How to fight AI-driven insurance denials in 2026: https://muni.health/blog/how-to-fight-ai-insurance-denials-2026
- Signal 9 — AMA — Physicians concerned AI increases prior authorization denials: https://www.ama-assn.org/press-center/ama-press-releases/physicians-concerned-ai-increases-prior-authorization-denials

## Stitch prompt
Design a desktop healthcare operations product called Prior Auth Appeal Packet Builder for independent clinics, specialty practices, medical billers, patient advocates, office managers, and care coordinators handling payer denials with limited staff. Users should upload or paste denial reason, payer, procedure or drug, patient timeline, chart evidence, guideline references, missing criteria, and deadline, then map the denial to required evidence, create a peer-to-peer prep sheet, and assemble an appeal packet with escalation steps. Include a denial letter intake, payer criteria gap map, chart evidence checklist, guideline citation shelf, peer-to-peer prep card, appeal packet preview, and deadline and escalation tracker. Design direction: use an operator-dense aesthetic with compact case queues, calm clinical whites and navy, precise status chips, document-review panes, and low-drama urgency markers so the product feels like a reliable clinic back-office console under administrative pressure.

## Constraints
- Phase A only: spec/scaffold, no custom demo implementation.
- Preserve the assigned design profile in Stitch output.
- Use external signals as problem evidence, not market-size proof.

## Non-goals
- No external LLM API calls.
- No production backend or payer/platform/carrier integration in Phase A.
- No legal, medical, financial, or compliance advice claims.

## Success metrics
- User understands the target pain and next action within 10 seconds.
- The UI exposes all required sections with concrete sample content.
- Stitch export maps cleanly to /home/sy/Downloads/stitch_drop/2026-05-14/p003/.
