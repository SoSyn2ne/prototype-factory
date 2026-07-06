# PRD - GLP-1 Coverage Notice Decoder

## Problem
- A patient-side decoder that turns denial letters and formulary changes into exact missing criteria, evidence requests, and appeal timing.
- Source evidence: S10 - Reddit r/Zepbound discussion on 2026 GLP-1 insurance coverage: Patients report prior authorizations and exceptions still being denied even with non-weight-loss indications. S11 - Medi-Cal Rx FAQ on January 1, 2026 GLP-1 policy changes: A public payer policy shift says some GLP-1 prior authorizations are no longer approved for weight-loss treatment.

## Target user
- Patients and clinic advocates dealing with GLP-1 denial letters, prior authorization rules, and confusing exception paths.

## Key UX
- Upload or paste denial language, plan type, diagnosis context, and prior medication history; the app extracts criteria, deadlines, and a doctor-question list without pretending to provide medical advice.

## Required UI sections
- Denial-letter decoder
- Plan and policy timeline
- Missing criteria checklist
- Doctor evidence request list
- Appeal deadline tracker
- Call log
- Non-medical boundary note

## Assigned design profile
- calm-consumer
- Design direction: supportive health-navigation surfaces, clear deadlines, gentle alerts, and careful non-alarming language.

## Theme
- 건강 / 자산 방어

## Source signal references
- S10: Reddit r/Zepbound discussion on 2026 GLP-1 insurance coverage — https://www.reddit.com/r/Zepbound/comments/1rentup/reporter_hoping_to_hear_from_patients_whats_your/
- S11: Medi-Cal Rx FAQ on January 1, 2026 GLP-1 policy changes — https://medi-calrx.dhcs.ca.gov/cms/medicalrx/static-assets/documents/faq/Members_State_Budget_Policy_Updates_FAQ.pdf

## Stitch prompt
Create a responsive web app called "GLP-1 Coverage Notice Decoder" for Patients and clinic advocates dealing with GLP-1 denial letters, prior authorization rules, and confusing exception paths.. The app is based on observed user pull from S10: Patients report prior authorizations and exceptions still being denied even with non-weight-loss indications. S11: A public payer policy shift says some GLP-1 prior authorizations are no longer approved for weight-loss treatment. The app should use a Notice Decoder around the trigger moment "Upload or paste denial language, plan type, diagnosis context, and prior medication history; the app extracts criteria, deadlines, and a doctor-question list without pretending to provide medical advice." and make the first screen communicate "A patient-side decoder that turns denial letters and formulary changes into exact missing criteria, evidence requests, and appeal timing.". Build the core workflow around user-entered evidence and produce criteria gap sheet and appeal timing card. Required sections: Denial-letter decoder; Plan and policy timeline; Missing criteria checklist; Doctor evidence request list; Appeal deadline tracker; Call log; Non-medical boundary note. Emotional pressure to make visible: 건강 / 자산 방어. Design direction: use the calm-consumer profile with supportive health-navigation surfaces, clear deadlines, gentle alerts, and careful non-alarming language. Avoid generic dashboard framing; make the main interaction feel like Notice Decoder.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
