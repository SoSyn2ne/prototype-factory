# QA checklist

## Happy path
- Capture one product idea and rewrite it as a one-sentence hypothesis.
- Tag claims under KNOWN, ASSUMPTION, and UNKNOWN with at least one item in each bucket.
- Produce exactly 7 falsification questions and select the fastest question to run this week.
- Define one measurable kill criterion (number + timeframe) and one next experiment step.
- End with a single decision statement: `Go`, `Kill`, or `Inconclusive`.

## Edge cases
- Idea is too broad; workflow should force narrowing to one target user and one behavior metric.
- User enters only positive outcomes; checklist should require at least one disconfirming observation.
- Kill criterion is vague (no number/time); treat output as incomplete until measurable.
- Same claim appears in multiple uncertainty tags; reviewer must resolve to one tag.
- No cheap experiment exists; output should explicitly recommend document-only and stop build work.

## Acceptance verification
- `spec/prd.md` has concrete, non-empty content for problem, target user, constraints, non-goals, and success metrics.
- `spec/assumptions.md` uses explicit `KNOWN`/`ASSUMPTION`/`UNKNOWN` tags with no blank bullets.
- `spec/falsification.md` contains exactly 7 numbered, disprovable questions.
- `README.md` provides concise overview, demo-view instructions, and a manual checklist.
- A manual run-through reaches a clear decision outcome in under 10 minutes.
