# PRD — Tech Value Receipt

## Problem
A field-service receipt wall that turns completed jobs into proof of technician value, customer retention, upsell moments, and avoided churn.

## Target user
Field-service managers, technician team leads, and service executives who need to justify staffing and technology investments.

## Key UX
Each completed visit becomes a value receipt showing issue solved, time saved, customer mood, follow-up risk, upsell signal, and which technician behaviors created the outcome.

## Required UI sections
- Field visit receipt cards with technician, customer, asset, duration, and value outcome.
- Value proof ledger for retention, upsell, warranty avoidance, and repeat-visit reduction.
- Technician behavior highlights: diagnosis, communication, safety, documentation, and empathy.
- Follow-up risk queue for accounts that need attention.
- Territory/service-line comparison without fake precision.
- Executive summary poster for staffing or AI investment justification.
- Mobile field view for capturing one-minute visit notes.

## Assigned design profile
- field-ops

## Theme
- 자산 방어 / 건강 / 역전

## Source signal references
- S14 - TSIA, field services face talent, value measurement, and tech-investment pressure

## Stitch prompt
Create a responsive field-operations web app prototype called "Tech Value Receipt" for field-service teams. Start with a receipt wall of completed visits, not a landing page. Include field visit receipt cards, value proof ledger, technician behavior highlights, follow-up risk queue, territory/service-line comparison, executive summary poster, and mobile field note capture. Use realistic HVAC/medical-device/service dispatch sample data. Design direction: use the field-ops profile with disciplined service-operation styling, high-contrast status rows, touch-friendly controls, industrial neutrals, and a vivid action accent used sparingly.

## Constraints
- Time: Phase A spec and Stitch prompt only.
- Budget: No external LLM API calls.
- Platform: Stitch-generated responsive web prototype in the later Phase B job.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size.

## Success metrics
- Stitch can generate the requested screen from the prompt.
- The main workflow is visible in the first viewport.
- The UI reflects exactly one assigned design profile.
