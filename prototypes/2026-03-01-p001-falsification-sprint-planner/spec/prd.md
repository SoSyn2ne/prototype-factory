# PRD — Falsification Sprint Planner

## Problem
Teams (and solo builders) generate ideas quickly but *test* them slowly. Assumptions stay implicit, experiments are vague (“let’s try marketing”), and postmortems are opinion fights.

We need a lightweight way to:
- turn assumptions into explicit hypotheses,
- design a 1‑day falsification test,
- define **kill criteria** up front,
- and keep a small “evidence log” so decisions are auditable.

## Target user
- Indie hackers / PMs / early-stage founders running weekly experiments.
- Internal product teams doing discovery sprints.

## Context / why now
- Shipping velocity is high; decision quality becomes the bottleneck.
- LLMs make ideation cheap; **verification discipline** is the scarce skill.

## Constraints
- Time: 1 day to get value (a plan you can run today).
- Budget: $0–$50 (tools, small ads, incentives).
- Platform: Web (static, offline-first if possible).

## Non-goals
- Not a full project management tool.
- Not an analytics platform.
- Not a “generate ideas” tool (assumes you already have an idea).

## Core user story
“As a builder, I want to turn an idea into 1–3 falsifiable experiments with explicit kill criteria so I can avoid wasting a week on the wrong thing.”

## Key flows
1) Create an Experiment Card
- Input: assumption → hypothesis
- Choose test type (landing page, concierge, cold outreach, price test, smoke test)
- Define *kill criteria* and *success criteria*
- Add effort estimate (hours) and confidence

2) Prioritize
- Score each card with a simple formula (Impact × Confidence ÷ Effort)
- Pick the top 1 to run today

3) Evidence Log
- Record observations (counts + notes)
- Flip verdict: Pass / Fail / Inconclusive

## Success metrics
- User can produce a complete experiment plan in <10 minutes.
- At least 1 experiment card has:
  - hypothesis
  - test plan
  - kill criteria
  - required resources
  - score
- Clear next action: “Run this today”.

## UX requirements
- Fast, keyboard-friendly.
- No accounts required for the demo.
- Export/share: copyable JSON or markdown (nice-to-have).

## Risks
- Users may confuse “falsification” with “negative thinking”.
- Over-scoring can create false precision; needs guardrails.

## Notes
- This repo artifact includes a vanilla demo UI that simulates the flow end-to-end.
