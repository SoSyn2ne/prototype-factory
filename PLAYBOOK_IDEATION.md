# Playbook — Ideation (Anti‑RAG + Controlled Speculation)

Use this playbook to generate *high‑leverage* ideas quickly without becoming sloppy.

## Inputs
- Problem area (1 sentence)
- Constraints (time, budget, user, platform)
- External inspiration sweep (at least 3): current news, internet communities, niche operator workflows, trend shifts, weird edge-case behaviors, or overlooked boring problems
- Novelty target: ensure the output is not just a variation of the operator's recent interests
- Batch mix target: do not optimize only for monetization. A daily batch should usually mix revenue-adjacent ideas with at least one idea that is simply delightful, surprising, or creatively interesting to build.

## Outputs (minimum)
- `spec/prd.md`
- `spec/assumptions.md` (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` (5–7 questions)

## Procedure (20–40 minutes)

1) **External sweep first (required)**
- Start outside the user's immediate taste profile.
- Pull signals from at least 3 external buckets such as:
  - broad news / business / tech headlines
  - internet communities (forums, Reddit-like discussion patterns, creator/operator complaints)
  - niche operational workflows or industry pain points
  - strange consumer behaviors, policy shifts, compliance changes, or edge-case routines
- Write down 5–10 raw opportunity seeds before narrowing.

2) **Anchor (similar)**
- Identify the closest existing solution pattern.
- Use the anchor to understand baseline UX only, not to collapse the idea space.

3) **Contrast (dissimilar ×2)**
- Choose two unrelated domains (e.g., logistics, gaming, healthcare, finance).
- Ask: what mechanisms work there that don’t exist here?

4) **Novelty check (required)**
- Reject ideas that are too close to the recent local pattern (for example: another minor variation of investing / wedding / GPU dashboards) unless there is a genuinely new mechanism, user, or market trigger.
- Prefer at least 1 idea per batch that would surprise the operator.
- Prefer ideas where the assistant's independent synthesis is doing more work than mirroring the user's known interests.

5) **Synthesize**
- Produce 1–3 hypotheses.
- Each hypothesis must include: user value, mechanism, and a minimal test.
- Across a daily batch, optimize for range: different users, different urgency levels, different markets.
- Default batch composition for daily PF runs:
  - if generating 3 ideas, prefer 2 practical/commercial ideas + 1 fun/portfolio/experimental idea
  - if generating 5 ideas, prefer 3 practical/commercial ideas + 2 fun/portfolio/experimental ideas
- "Fun" is valid even without immediate monetization if the UI has strong story, visual payoff, shareability, or taste-building value.

6) **Label uncertainty (G1)**
- Tag major claims as KNOWN/ASSUMPTION/UNKNOWN.

7) **Contrarian pass (G2)**
- Use the Contrarian Generator (P001) style output:
  - failure modes
  - counter-scenarios
  - falsification checklist

8) **Pick output level (G3)**
- Document-only vs prototype.

## Templates

### Hypothesis card
- One-liner:
- Target user:
- Mechanism:
- Why now:
- Top 3 assumptions:
- Fastest falsification test (≤1 day):

### Falsification questions (examples)
- What observation would immediately disprove this?
- What is the hidden cost that kills the ROI?
- What is the operational bottleneck?
- What regulatory/security constraint blocks deployment?
