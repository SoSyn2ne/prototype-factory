# PRD — Pay Range Posting Guard

## Problem
- A pre-publish compliance lint desk for salary ranges, benefits language, and remote-state pay transparency traps.
- Search/community evidence suggests this is a live pain, not a generic dashboard rename.

## Target user
- SMB founders, HR generalists, recruiters, franchise operators, and agencies posting jobs across multiple states without a full legal team.

## Key UX
- Paste a job post, hiring states, remote eligibility, company size, benefits, bonus language, internal promotion context, and approval owner; flag missing salary-range disclosures, benefits/bonus gaps, remote-state triggers, recordkeeping notes, and create a clean publish checklist with an audit memo.

## Required UI sections
- job-post intake
- state trigger map
- salary-range disclosure lint
- benefits and bonus completeness check
- remote applicant risk rail
- publish approval checklist
- compliance audit memo export

## Design profile
- `operator-dense` — reflected in the Stitch prompt and visual direction.

## Theme
- 자산 방어

## External signal references
- Kelly Services pay transparency 2026 — https://www.kellyservices.com/impact-insights/pay-transparency-laws
- Lift HCM pay transparency by state 2026 — https://lifthcm.com/article/pay-transparency-laws-by-state-2026

## Stitch prompt
Design a desktop HR compliance product called Pay Range Posting Guard for SMB founders, HR generalists, recruiters, franchise operators, and agencies posting jobs across multiple states without a full legal team. Users should paste a job post, hiring states, remote eligibility, company size, benefits, bonus language, internal promotion context, and approval owner, then flag missing salary-range disclosures, benefits and bonus gaps, remote-applicant state triggers, recordkeeping notes, and create a clean publish checklist with an audit memo. Include a job-post intake, state trigger map, salary-range disclosure lint, benefits and bonus completeness check, remote applicant risk rail, publish approval checklist, and compliance audit memo export. Design direction: use an operator-dense aesthetic with compact compliance tables, crisp state chips, high-contrast missing-field warnings, document diffs, and a disciplined approval rail so the app feels like a legal-risk lint pass before a job post goes public, not a generic recruiting dashboard.

## Constraints
- Time: Phase A spec/scaffold only; do not implement custom demo yet.
- Budget: Use Stitch export workflow for Phase B.
- Platform: Web prototype, desktop-first unless consumer flow benefits from responsive cards.

## Non-goals
- Do not claim legal, medical, tax, or financial certainty.
- Do not integrate live paid APIs in Phase A.

## Success metrics
- A user understands the painful trigger within 5 seconds.
- The main workflow is clear from intake to export/share/action.
- The UI can be built from the Stitch prompt without additional explanation.

## Notes
- Candidate category: Practical / Commercial.
