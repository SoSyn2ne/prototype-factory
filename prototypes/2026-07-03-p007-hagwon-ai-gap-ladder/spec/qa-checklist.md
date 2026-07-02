# QA checklist

## Happy path
- First screen states the promise from the Stitch prompt.
- Required UI sections are present: Monthly spend comparison, Subject pressure ladder, AI tutor routine builder, Integrity risk guardrails, Parent conversation script.
- Output artifact is visible and named.
- Design direction matches calm-consumer.

## Edge cases
- Empty or uncertain inputs do not break the flow.
- Sensitive claims are framed as guidance, not certainty.
- Mobile viewport keeps controls readable.
- Source-signal language is not copied as a fake testimonial.

## Acceptance verification
- Phase A has no custom demo requirement.
- meta.json includes designProfile, theme, sourceSignals, and stitchPrompt.
- Expected Stitch files will land under /home/sy/Downloads/stitch_drop/2026-07-03/p007/.
