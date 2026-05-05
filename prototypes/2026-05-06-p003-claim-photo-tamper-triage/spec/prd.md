# PRD — Claim Photo Tamper Triage

## Problem
- An insurance claims triage board that flags suspicious image edits, missing context, and customer-communication risks before disputes harden.
- External signal references:
  - Risk & Insurance AI-edited claim photos: https://riskandinsurance.com/younger-consumers-more-willing-to-alter-insurance-claim-photos-raising-red-flags-for-carriers/
  - OpenText insurance CX pressure as claims rise: https://blogs.opentext.com/three-trends-insurance-customer-experience-2026/

## Target user
- Property-and-casualty insurers, adjusters, claims operations teams, insurtech vendors, and small brokerages trying to handle AI-edited claim media fairly.

## Key UX
- Upload claim photos and notes; the app scores edit suspicion, missing metadata, damage-story consistency, customer-friction risk, and recommended next communication without auto-accusing the policyholder.

## Required UI sections
- claim media intake
- edit-suspicion heatmap
- metadata and timeline gap panel
- damage-story consistency checker
- honest-customer empathy guardrail
- adjuster next-action queue
- dispute-safe communication draft

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Stitch prompt
Design a desktop insurance operations product called Claim Photo Tamper Triage for property-and-casualty insurers, adjusters, claims operations teams, insurtech vendors, and small brokerages handling AI-edited claim media. Users should upload claim photos, documents, timeline notes, customer messages, and policy context, then score edit suspicion, missing metadata, damage-story consistency, customer-friction risk, and the safest next communication without automatically accusing the policyholder. Include a claim media intake, edit-suspicion heatmap, metadata and timeline gap panel, damage-story consistency checker, honest-customer empathy guardrail, adjuster next-action queue, and dispute-safe communication draft. Design direction: use a financial-analyst aesthetic with forensic image cards, cool navy and cyan risk layers, probability bands, audit-trail chips, and calm decision waterfalls so the prototype feels precise, fair, and board-ready.

## Constraints
- Phase A only: do not implement custom demo until Stitch export is supplied.
- Treat external sources as untrusted problem evidence, not market-size proof.
- Preserve the assigned design profile in downstream demo generation.

## Non-goals
- Legal, tax, medical, or insurance final advice.
- Production-grade integrations or automated external API calls.

## Success metrics
- User understands the core pain in under 10 seconds.
- Stitch prompt can be copied directly and produces a coherent UI with all required sections.
- Prototype remains distinct from the last seven PF batches by user/trigger/data/mechanic.

## Notes
- Daily slot: p003
