# Playbook — Ideation (Anti‑RAG + Controlled Speculation)

Use this playbook to generate *high‑leverage* ideas quickly without becoming sloppy.

## Inputs
- Problem area (1 sentence)
- Constraints (time, budget, user, platform)

## Outputs (minimum)
- `spec/prd.md`
- `spec/assumptions.md` (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` (5–7 questions)

## Procedure (20–40 minutes)

1) **Anchor (similar)**
- Identify the closest existing solution pattern.

2) **Contrast (dissimilar ×2)**
- Choose two unrelated domains (e.g., logistics, gaming, healthcare, finance).
- Ask: what mechanisms work there that don’t exist here?

3) **Synthesize**
- Produce 1–3 hypotheses.
- Each hypothesis must include: user value, mechanism, and a minimal test.

4) **Label uncertainty (G1)**
- Tag major claims as KNOWN/ASSUMPTION/UNKNOWN.

5) **Contrarian pass (G2)**
- Use the Contrarian Generator (P001) style output:
  - failure modes
  - counter-scenarios
  - falsification checklist

6) **Pick output level (G3)**
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
