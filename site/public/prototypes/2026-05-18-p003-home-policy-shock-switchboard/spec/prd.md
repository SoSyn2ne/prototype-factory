# PRD — Home Policy Shock Switchboard

## Problem
- A homeowner decision workbench for premium spikes and nonrenewal notices, comparing coverage, mitigation, broker calls, and regulator complaint paths.
- Evidence sources: Signal 5, Signal 6.

## Target user
- Homeowners who just received a renewal spike, deductible change, coverage exclusion, escrow shock, or nonrenewal notice and need to act before a cancellation or mortgage deadline.

## Key UX
- Enter the notice, old and new premium, deductible, dwelling value, hazard risks, lender deadline, mitigation upgrades, competing quotes, and state insurance rules; the app compares keep/switch/FAIR-plan/self-retain scenarios, prepares broker questions, and builds a regulator-ready complaint packet when pricing looks wrong.

## Required UI sections
- notice and deadline intake
- premium/deductible change waterfall
- coverage exclusion comparison
- risk and mitigation proof locker
- broker quote comparison board
- regulator complaint packet builder
- mortgage escrow impact memo

## Design profile
- financial-analyst

## Theme
- 자산 방어

## Stitch prompt
Design a homeowner finance product called Home Policy Shock Switchboard for homeowners who just received a renewal spike, deductible change, coverage exclusion, escrow shock, or nonrenewal notice. Users enter the notice, old and new premium, deductible, dwelling value, hazard risks, lender deadline, mitigation upgrades, competing quotes, and state insurance rules; the app compares keep, switch, FAIR-plan, and self-retain scenarios, prepares broker questions, and builds a regulator-ready complaint packet when pricing looks wrong. Include a notice and deadline intake, premium/deductible change waterfall, coverage exclusion comparison, risk and mitigation proof locker, broker quote comparison board, regulator complaint packet builder, and mortgage escrow impact memo. Design direction: use a financial-analyst aesthetic with calm spreadsheet precision, clean navy/white surfaces, measured red risk callouts, scenario cards that feel like underwriting notes, and charts that make a frightening household cost shock legible.

## Constraints
- Time: Phase A only; no custom demo implementation.
- Budget: Use Stitch export workflow after user provides files.
- Platform: Stitch-generated web export, later ingested under `/d/2026-05-18-p003`.

## Non-goals
- Do not build the production workflow in Phase A.
- Do not claim source data proves market size.
- Do not collect sensitive documents in this prototype beyond illustrative placeholders.

## Success metrics
- A target user can understand the problem, first action, risk state, and output artifact within 30 seconds.
- Stitch prompt yields a coherent interface with all required sections visible.
- Later ingest preserves the original Stitch environment as the primary demo.

## Notes
- Candidate type: Practical / Commercial
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-05-18/p003/`

