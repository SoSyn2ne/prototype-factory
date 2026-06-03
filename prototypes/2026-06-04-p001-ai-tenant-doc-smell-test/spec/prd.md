# PRD — AI Tenant Doc Smell Test

## Problem
- Small landlords are receiving plausible AI/Photoshop paystubs, offer letters, and references, then making high-risk rental decisions from inconsistent documents.

## Target user
- Small landlords, accidental landlords, leasing assistants, property managers, and real estate agents without a full compliance department.

## Key UX
- Upload or paste applicant documents, tag suspicious math and contact details, compare paystub deposits against bank-line expectations, and generate a fair-housing-safe verification task list without making an automatic rejection decision.

## Required UI sections
- Applicant risk header with non-decision disclaimer
- Document intake stack for paystubs, offer letters, W-2s, bank deposits, and references
- Math consistency smell test
- Employer contact verification lane
- Reference callback script builder
- Third-party screening handoff checklist
- Missing-proof request composer
- Decision log for fair, consistent process notes

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signals
- S1 - Reddit r/Landlord, AI-generated tenant documents getting worse, May/Jun 2026
- S2 - Reddit r/RealEstateAdvice, suspicious fake pay stub critique, Mar 2026

## Constraints
- Time: Phase A only; do not implement a custom demo.
- Budget: Spec-first prototype candidate; no external LLM/API calls.
- Platform: Stitch prompt should create the first visual prototype.

## Non-goals
- Do not approve or reject tenants automatically.
- Do not provide legal advice or fair-housing determinations.
- Do not collect real applicant PII in the prototype.

## Success metrics
- User can identify missing verification tasks in under 2 minutes.
- User can produce a neutral request-for-proof message.
- UI avoids implying automated tenant denial.

## Stitch prompt
Create a responsive web app prototype called "AI Tenant Doc Smell Test" for small landlords, accidental landlords, leasing assistants, and property managers screening rental applicants. The app should help a user review suspicious paystubs, offer letters, W-2s, bank deposit screenshots, and landlord/employer references without making an automatic rejection decision. Required sections: applicant risk header with non-decision disclaimer, document intake stack, math consistency smell test, employer contact verification lane, reference callback script builder, third-party screening handoff checklist, missing-proof request composer, and fair-process decision log. Use realistic rental screening sample data, show gross/net/pay-period anomalies, fake-contact warnings, and verification next steps. Design direction: use the `operator-dense` profile with compact evidence tables, sharp status chips, neutral compliance language, charcoal/slate work surfaces, and practical controls that feel like a serious leasing operations desk.
