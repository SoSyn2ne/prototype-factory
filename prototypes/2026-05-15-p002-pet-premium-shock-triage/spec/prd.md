# PRD — Pet Premium Shock Triage

## Problem
- A calm decision board for pet owners facing sudden insurance hikes, showing switch risks, claim history tradeoffs, and complaint options.
- External evidence: Signal 3 (community chatter): Pet owners report extreme renewal jumps and ask whether complaint routes or switching plans can help.; Signal 4 (community chatter): Users compare insurer increases, state complaint options, deductibles, and whether cancelling traps them because past conditions may not be covered elsewhere.

## Target user
- Pet owners who just received a steep renewal increase and need to decide whether to keep coverage, raise deductibles, switch insurers, self-insure, or file a state complaint without accidentally losing pre-existing-condition protection.

## Key UX
- Enter current premium, renewal jump, pet age/breed, claim history, deductible, reimbursement rate, quoted alternatives, and known conditions; the app compares scenarios, warns about switch traps, prepares insurer/state complaint notes, and produces a family-safe decision memo.

## Required UI sections
- premium shock intake
- pet health and claim history timeline
- keep/switch/self-insure scenario cards
- pre-existing-condition trap warnings
- deductible and reimbursement slider
- state complaint note builder
- family decision memo

## Design profile
- calm-consumer
- Design direction: match the Stitch prompt guidance; keep the profile visible in hierarchy, palette, density, and interaction tone.

## Theme
- 건강

## Constraints
- Phase A only: spec and Stitch-ready design prompt, no custom demo implementation.
- Sources are problem evidence, not market-size proof.
- Avoid external LLM calls; all prompt text is deterministic.

## Success metrics
- User can understand the urgent job-to-be-done in under 10 seconds.
- Main workflow has one clear intake, one risk/comparison surface, and one export/next-action artifact.
- Stitch export can be dropped at `/home/sy/Downloads/stitch_drop/2026-05-15/p002/`.
