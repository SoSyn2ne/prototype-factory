# PRD — Body Point Doctor Handoff Card

## Problem / target
Patients struggle to name anatomy precisely during intake. Target: patients, caregivers, telehealth intake, physiotherapy, and multilingual clinics.

## Core UX
Rotate/tap body → side/depth/radius → sensation/timing chips → preview → private clinician card. Sections: body selector, location controls, symptoms, timeline, summary, card, disclaimer.

## Design / theme / evidence
- Profile: `calm-consumer`; theme: 건강.
- Sources: S13 https://github.com/thebuggeddev/anatomy; S4 https://news.hada.io/topic?id=32332.
- QA: explicitly non-diagnostic; body point readable in print; keyboard/touch selection; no required account.

## Stitch prompt
Design a mobile-first health web app named “Body Point Doctor Handoff Card.” The first screen contains a rotatable human-body model with front/back/side controls and a large tap target. After a tap, let the user adjust side, surface/deep, radius, sensation, intensity, onset, and movement trigger using simple chips and sliders. Generate a clean clinician-facing card with a body thumbnail, exact location phrase, timeline, and questions to ask. Keep a visible “describes location, does not diagnose” disclaimer. Design direction: use the calm-consumer profile with warm white, soft teal, spacious forms, reassuring plain language, consistent medium radii, and no alarming medical red except emergency guidance.
