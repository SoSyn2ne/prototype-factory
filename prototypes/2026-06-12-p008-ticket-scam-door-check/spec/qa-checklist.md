# QA checklist

## Happy path
- The prototype title matches: Ticket Scam Door Check.
- One-liner, target user, key UX, theme, and design profile match daily/2026-06-12/ideas.md.
- The first viewport communicates the trigger: the buyer realizes the ticket may be overpriced, duplicated, delayed, or fake.
- All required UI sections are represented:
- [ ] Door-risk booth header
- [ ] Ticket source proof lane
- [ ] Transfer and barcode timing checks
- [ ] Price and fee anomaly meter
- [ ] Schedule change and refund policy card
- [ ] Backup ticket decision rail
- [ ] Dispute evidence locker
- [ ] Shareable buyer warning card

## Edge cases
- Missing or weak proof should be visibly different from complete proof.
- Mobile layout must not hide the primary artifact or main call to action.
- Sensitive categories should use organizing language, not final professional advice.

## Acceptance verification
- meta.json includes targetUser, keyUX, requiredUiSections, designProfile, theme, sourceSignals, expectedDropFolder, and stitchPrompt.
- spec/prd.md includes the complete Stitch prompt.
- No placeholder bullets remain in spec files.
- The idea cites 1-2 raw external signals and exactly one design profile.
