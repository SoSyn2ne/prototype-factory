# PRD - GLP-1 Dose Panic Card

## Problem
- A calm injection-dose checker that turns vial concentration, syringe units, and side effects into a same-day safety card.
- Evidence: S1 (GLP-1 overdose calls and telehealth-compounded dosing risk; New York Post, 2026-06-16); S2 (Compounded GLP-1 dosing errors; JAMA Health Forum, 2025).

## Target user
- Telehealth GLP-1 users, clinic nurses, family members helping with injections, and compound-pharmacy patients who are unsure about units versus milligrams.

## Key UX
- User enters medication source, vial concentration, prescribed dose, syringe markings, injection date, and symptoms; the app highlights mismatch risk, creates a clinician-call card, and shows when to stop and seek help.

## Required UI sections
- Dose panic header with risk state and next safest action
- Prescription vs vial concentration intake
- Syringe unit visualizer with mg/unit conversion and mismatch warnings
- Side-effect timeline for nausea, vomiting, dehydration, itching, vision changes, and severe symptoms
- Call-now card for clinician/pharmacy/poison center notes
- Medication source confidence checklist for brand, compounded, telehealth, and damaged package
- Family handoff summary for the person helping with the next injection

## Assigned design profile
- calm-consumer

## Theme
- 건강 / 외모 - weight-loss pressure, body-image shame, medication safety, and fear of doing the injection wrong.

## Practical vs fun label
- Practical / Commercial

## Stitch prompt
Build a production-grade web app prototype called "GLP-1 Dose Panic Card" for GLP-1 users who are anxious about compounded vial concentration, syringe units, and side effects. The first screen must be a working safety card with a dose panic header, prescription-vs-vial intake, syringe unit visualizer, symptom timeline, call-now clinician card, source confidence checklist, and family handoff summary. Use realistic sample data: semaglutide compounded vial, 2.5 mg/mL concentration, 0.25 mg starter dose, insulin syringe markings, nausea after injection, dehydration concern, telehealth pharmacy label, and a confused caregiver. Design direction: use the calm-consumer profile with soft reassuring surfaces, warm neutral cards, gentle medical accent colors, and obvious next actions that reduce panic without hiding risk. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A only; do not implement custom demo before Stitch export.
- Budget: Use existing PF scaffolding and generated Stitch output.
- Platform: Web prototype exported from Stitch into the expected drop folder.

## Non-goals
- No custom demo implementation during Phase A.
- No external LLM API calls.
- Do not claim market size from these sources; treat them as problem evidence.

## Success metrics
- Stitch output has all required sections on the first working screen.
- The prototype preserves the assigned design profile.
- The main workflow is visible without a marketing landing page.

## Notes
- Expected Stitch drop folder: /home/sy/Downloads/stitch_drop/2026-06-17/p001/
