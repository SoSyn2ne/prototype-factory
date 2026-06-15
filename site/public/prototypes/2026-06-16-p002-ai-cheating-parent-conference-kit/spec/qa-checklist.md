# QA checklist

## Happy path
- Open the Stitch-generated app and confirm the first screen is the working app, not a landing page.
- Confirm these sections exist: Case confidence header separating evidence, suspicion, and uncertainty; Submission comparison lane for final essay, drafts, in-class sample, citations, and explanation check; Policy receipt drawer with syllabus language, parent/student signoff, and assignment instructions; Parent pushback simulator with likely objections and calm response scripts; Redo/consequence decision matrix by school policy, mastery evidence, and repeat behavior; Conference agenda builder with student reflection prompts and follow-up tasks; Department trend board showing repeated patterns without naming students publicly.
- Confirm realistic sample data reflects: S3, S4.
- Confirm design direction follows operator-dense.

## Edge cases
- Missing source evidence still leaves a clear next action.
- High-risk or urgent rows/chips do not visually overlap other UI.
- Mobile/tablet view keeps controls readable.
- The output artifact can be exported, copied, or shared in the prototype.

## Acceptance verification
- pNNN slot exists with no placeholders in meta.json and spec files.
- Stitch prompt is copy/paste-ready.
- Drop folder target is /home/sy/Downloads/stitch_drop/2026-06-16/p002/.
