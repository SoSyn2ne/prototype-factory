# QA checklist

## Happy path
- The prototype title matches: AI Overview Liability Receipt.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: an AI Overview or chatbot answer publicly misstates the user or brand.
- All required UI sections are represented:
- [ ] AI answer capture header
- [ ] False-claim highlighter
- [ ] Source-of-truth evidence rail
- [ ] Harm and visibility score
- [ ] Correction request composer
- [ ] Legal review memo preview
- [ ] Citation watchlist
- [ ] Dated receipt export

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
