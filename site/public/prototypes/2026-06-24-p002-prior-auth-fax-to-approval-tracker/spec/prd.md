# PRD - Prior Auth Fax-to-Approval Tracker

## Problem
Clinic staff turn payer forms, chart evidence, and fax-era follow-ups into a visible prior-authorization approval lane.

## Target user
Small specialty clinics, therapy offices, billing coordinators, and practice managers chasing prior authorizations across payers.

## Key UX
Staff imports patient service, payer rules, chart citations, submission channel, denial reason, and follow-up calls; the app creates a status lane and appeal-ready evidence brief.

## Required UI sections
- Authorization queue header by patient, payer, service, and deadline
- Payer requirement checklist with missing-document flags
- Chart evidence citation picker
- Submission channel tracker for portal, fax, phone, and ePA
- Hold-time and follow-up call log
- Denial-to-appeal reason mapper
- Patient update message and provider handoff panel

## Assigned design profile
field-ops

## Theme
건강 / 자산 방어 - reducing clinic paperwork drag and patient delay risk.

## Source signal references
- S4 - KFF, AI in prior authorization and claims review is now regulated across a confusing provider/payer/patient workflow: https://www.kff.org/patient-consumer-protections/regulation-of-ai-in-prior-authorization-and-claims-review-a-look-at-federal-and-state-consumer-protections/
- S5 - Axios, CMS-backed coalition pushes to digitize prior authorization and move away from fax/clipboard workflows: https://www.axios.com/2026/05/13/dr-oz-prior-authorization-health-insurance

## Stitch prompt
Build a production-grade web app prototype called "Prior Auth Fax-to-Approval Tracker" for small clinic staff managing medical prior authorizations. The first screen must be a working authorization operations lane with an authorization queue header, payer requirement checklist, chart evidence citation picker, submission channel tracker for portal/fax/phone/ePA, hold-time call log, denial-to-appeal mapper, and patient/provider update panel. Use realistic sample data: MRI request, BlueCross payer rule, three chart notes, one missing conservative-therapy document, 42-minute phone hold, fax confirmation, portal pending state, and a draft appeal reason. Design direction: use the field-ops profile with high-contrast status rows, touch-friendly checklist controls, disciplined clinical neutrals, and a vivid cyan action accent only for the next follow-up. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: no custom demo implementation.
- Stitch output must preserve the assigned design profile.
- First screen must be the working app, not a marketing landing page.

## Success metrics
- User can understand the core decision or field workflow within 10 seconds.
- Every required UI section appears in the generated Stitch output.
- The cited source signals are visible as problem evidence in the product framing.
