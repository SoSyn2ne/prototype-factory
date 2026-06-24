# PRD — GLP-1 Denial Packet

## Problem
A denial-to-appeal workspace that helps GLP-1 patients turn vague prior authorization rejections into HR, insurer, and regulator-ready packets.

## Target user
Patients using GLP-1 medications, patient advocates, clinic staff, and benefits coordinators helping with denials.

## Key UX
The user enters denial wording, plan type, medication, timeline, doctor's note status, and employer coverage context; the app generates missing-proof prompts and escalation scripts.

## Required UI sections
- Denial decoder showing reason, missing evidence, and appeal clock.
- Plan context form for employer plan, formulary, step therapy, and PA history.
- Doctor evidence checklist with clinical note, BMI/A1C, continuity, and contraindication fields.
- HR escalation script and regulator complaint path.
- Appeal packet preview with attachments and plain-language summary.
- Call log and promise tracker.
- Risk notes for non-medical guidance boundaries.

## Assigned design profile
- calm-consumer

## Theme
- 건강 / 자산 방어

## Source signal references
- S9 - Reddit r/Zepbound, prior authorization complaint behavior

## Stitch prompt
Create a responsive web app prototype called "GLP-1 Denial Packet" for patients and advocates preparing a prior authorization appeal. The first screen should be a working appeal case, not a landing page. Include a denial decoder, plan context form, doctor evidence checklist, HR escalation script, regulator complaint path, appeal packet preview, call log, and non-medical boundary notes. Use realistic but fictional denial language and missing-evidence states. Design direction: use the calm-consumer profile with supportive step flows, warm neutrals, clear recovery text, one gentle accent, and careful non-alarming health-risk presentation.

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
