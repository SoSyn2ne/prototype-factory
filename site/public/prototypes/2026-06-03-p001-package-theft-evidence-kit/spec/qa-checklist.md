# QA checklist

## Happy path
- Open the Stitch-generated prototype for Package Theft Evidence Kit.
- Confirm the first viewport communicates: A renter-safe proof kit that turns stolen package chaos into carrier claims, landlord requests, and locker reroutes.
- Confirm the target user is obvious: Apartment renters, condo residents, and remote workers whose deliveries disappear from shared mailrooms or unsecured lobbies.
- Confirm all required sections exist: Incident intake timeline; Carrier and tracking proof panel; Building footage request composer; Neighbor/mailroom notice generator; Claim packet checklist; Locker and hold-for-pickup reroute planner; Repeat-loss heatmap; Landlord escalation letter preview.
- Confirm the visual direction matches field-ops.

## Edge cases
- Empty or partial user input still shows a useful next action.
- Warning states are visible without overwhelming the core workflow.
- Mobile layout keeps primary actions reachable and text readable.
- The prototype does not overclaim legal, medical, financial, or admissions certainty.

## Acceptance verification
- daily/2026-06-03/ideas.md cites S1, S2, S3 for this candidate.
- meta.json includes designProfile, theme, sourceSignals, and stitchPrompt.
- Expected Stitch drop path is /home/sy/Downloads/stitch_drop/2026-06-03/p001/.
