# QA checklist

## Happy path
- User sees seller health, urgent returns, margin exposure, and evidence gaps.
- User can select a return and classify it as resell, partial refund, dispute, or loss.
- User can preview an exportable platform appeal packet.

## Edge cases
- Returned item is damaged and cannot be restocked.
- Platform fund hold affects multiple orders.
- Deadline is today or already missed.
- Partial refund saves more margin than full dispute.

## Acceptance verification
- Title, one-liner, theme, and design profile match daily/2026-06-02/ideas.md.
- `meta.json` includes targetUser, keyUX, requiredUiSections, designProfile, theme, searchSignals, and stitchPrompt.
- `spec/prd.md` includes signal references and full Stitch prompt.
- Candidate remains practical / commercial and no custom demo is implemented in Phase A.
