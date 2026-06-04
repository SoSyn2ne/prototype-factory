# PRD — GLP-1 Reauth Cliff File

## Problem
- A clinic and patient evidence room for proving continued GLP-1 coverage before BMI, step-therapy, or prior-auth rules cut off refills.

## Target user
- Primary-care clinics, obesity-medicine practices, medical assistants, prior-auth teams, GLP-1 patients, benefits navigators, and family members helping with appeals.

## Key UX
- The user builds a coverage timeline, refill countdown, BMI/weight trend, comorbidity notes, failed-step-therapy evidence, counseling/lab/PT proof, and denial language; the app turns scattered portal messages into a reauthorization packet and refill-gap action plan.

## Required UI sections
- Reauth cliff header with refill days left, coverage status, and denial reason
- Weight/BMI and comorbidity evidence timeline
- Step-therapy and formulary rule checklist
- Required program proof tracker for diet counseling, PT, mental-health check-ins, and labs
- Portal-message and denial-letter intake
- Clinician note request builder
- Appeal packet preview
- Refill-gap cash-pay and sample/bridge-plan lane with safety disclaimer

## Design profile
- calm-consumer

## Theme
- 건강

## Source signal references
- S7 - Reddit r/FamilyMedicine GLP-1 prior-auth frustration
- S8 - Reddit r/Zepbound GLP-1 coverage denials and counseling hoops

## Constraints
- Time: Phase A spec/scaffold only; no custom demo implementation.
- Budget: Prototype Factory daily batch candidate.
- Platform: Responsive web app prototype for Stitch export.

## Non-goals
- No production integrations.
- No legal, medical, financial-aid, or compliance advice beyond workflow framing.
- No external LLM API calls.

## Success metrics
- User can understand the painful trigger in under 10 seconds.
- User can complete the main sample workflow without placeholder content.
- Stitch prompt can be copied directly into the 08:30 generation flow.

## Notes
- Candidate label: Practical / Commercial.
