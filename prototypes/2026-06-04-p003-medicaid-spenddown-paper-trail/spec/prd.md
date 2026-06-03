# PRD — Medicaid Spenddown Paper Trail

## Problem
- Families preparing for long-term-care Medicaid face confusing spenddown rules, spouse allowance questions, renewal proof, and document requests while under care-transition stress.

## Target user
- Adult children, spouses, POAs, elder-care coordinators, social workers, and families preparing a parent for nursing-home Medicaid or renewal paperwork.

## Key UX
- Enter state, household, care setting, income, assets, documents, notices, and deadlines; the app creates a paper trail for allowed spenddown questions, spouse-protection notes, renewal proof, and elder-law/social-worker handoff.

## Required UI sections
- Care transition status header
- State and household intake
- Asset and income snapshot
- Spenddown action ledger
- Spouse allowance question list
- Five-year lookback document vault
- Renewal and proof deadline tracker
- Elder-law/social-worker handoff packet

## Design profile
- calm-consumer

## Theme
- 건강

## Source signals
- S6 - Reddit r/AgingParents, Medicaid spend down for spouse, Feb 2026
- S7 - CMS interim final rule, Medicaid community engagement verification, Jun 1 2026
- S8 - KFF Medicaid Enrollment and Unwinding Tracker, updated Jun 2026

## Constraints
- Time: Phase A only; do not implement a custom demo.
- Budget: Spec-first prototype candidate; no external LLM/API calls.
- Platform: Stitch prompt should create the first visual prototype.

## Non-goals
- Do not give legal, tax, or benefits eligibility advice.
- Do not calculate guaranteed Medicaid approval.
- Do not store real medical or financial documents in the prototype.

## Success metrics
- Caregiver can see missing documents and next questions quickly.
- Handoff packet is useful for a social worker or elder-law attorney.
- UI reduces panic without hiding deadlines.

## Stitch prompt
Create a responsive web app prototype called "Medicaid Spenddown Paper Trail" for adult children, spouses, POAs, elder-care coordinators, and families preparing for long-term-care Medicaid, spenddown questions, or renewal paperwork. The app should not give legal advice; it should organize facts, documents, deadlines, and questions for a social worker or elder-law professional. Required sections: care transition status header, state and household intake, asset and income snapshot, spenddown action ledger, spouse allowance question list, five-year lookback document vault, renewal and proof deadline tracker, and elder-law/social-worker handoff packet. Use realistic caregiver sample data, including nursing-home parent, spouse at home, Social Security income, bank statements, funeral/pre-need question, and renewal notice deadlines. Design direction: use the `calm-consumer` profile with reassuring guidance, large readable controls, warm neutral surfaces, clear document states, and soft but unmistakable deadline warnings for overwhelmed caregivers.
