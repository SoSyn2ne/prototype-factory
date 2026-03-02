# PRD — FalsifyFast

## Problem
- Teams generate ideas quickly but delay disconfirmation, so weak ideas survive too long.
- Most early-stage planning captures upside stories, not explicit failure conditions.
- We need a 3-minute workflow that turns one idea into a falsifiable test plan with a clear go/kill decision path.

## Target user
- Solo founders and PMs running weekly discovery experiments.
- Small product squads that need fast pre-build decision discipline.

## Constraints
- Time: first complete plan in 3 minutes, full review in under 10 minutes.
- Budget: validation tests should fit a $0-$100 spend envelope.
- Platform: spec-first artifact with a lightweight local demo; no account required.

## Non-goals
- Not a project management or roadmap tool.
- Not an idea generator; assumes the user already has a candidate idea.
- Not a predictive analytics system for long-term forecasting.

## Success metrics
- At least 80% of first-time users produce a plan containing hypothesis, measurable kill criterion, and next experiment.
- Every completed plan includes uncertainty labeling (KNOWN/ASSUMPTION/UNKNOWN) and exactly 7 falsification questions.
- Users can state a final decision (`Go`, `Kill`, or `Inconclusive`) in one sentence after the checklist run.

## Notes
- Synthesis hypothesis: forcing a falsification-first sequence improves decision quality more than open-ended brainstorming at this stage.
- Gate alignment: G1 uncertainty labeling, G2 falsification checklist, and G3 output-level decision are mandatory outputs for this prototype.
