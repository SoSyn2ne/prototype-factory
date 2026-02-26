# PRD — Thesis Red‑Team Interviewer

## Problem
Most investing/strategy theses fail at the *first serious cross‑examination*: missing disconfirming evidence, vague causal links, and unanswered “what would change your mind?” questions.

People *think* they have conviction, but they haven’t pressure‑tested the thesis in a repeatable way.

## Target user
- Solo retail investors (esp. semiconductor/AI sector) and builders writing product theses
- Anyone who writes a “why I believe X” memo and wants a fast red‑team pass

## Constraints
- Time: must produce a useful red‑team pack in ≤10 minutes
- Budget: $0 for demo; future version should work with cheap LLM tokens
- Platform: web (static demo + later: simple web app)
- Safety: avoid financial advice; focus on *question quality* and evidence tracking

## Proposed solution
A guided “thesis interview” that turns a short thesis into:
1) **10 adversarial questions** (organized by failure mode)
2) A **burden‑of‑proof tracker**: what evidence would answer each question
3) A **missing‑answers dashboard**: what you *still can’t answer* after research
4) A **decision log**: what would change your mind, and what you did when you saw it

## User flow
1. Paste thesis (or bullet points): claim → mechanism → timeframe → key metric(s).
2. Choose context: ticker/product + time horizon + risk tolerance.
3. App generates:
   - “Interview” questions (hard, specific, falsifiable)
   - evidence requests (SEC filings, earnings transcripts, product telemetry, competitor moves)
4. User marks each question as: answered / partially / unknown.
5. Export a “Red‑Team Pack” (markdown) for future review.

## Non-goals
- Predicting price targets
- Automated trading signals
- Deep web crawling (v1 can be manual link paste)

## Success metrics
- User says the questions are “uncomfortably specific” (qualitative)
- Time to produce a usable checklist: < 10 minutes
- % of sessions where user identifies at least 1 thesis‑breaking unknown: > 60%

## Notes (Anti‑RAG synthesis)
- **Anchor:** Pre‑mortem / red‑team thinking → force explicit failure modes and disconfirming evidence.
- **Contrast 1:** Job interview question banks → structured question sets by competency area.
- **Contrast 2:** Pen‑testing checklists → repeatable “attack surface” enumeration.
- Synthesis: treat a thesis like a system; generate a repeatable “attack plan” across categories.
