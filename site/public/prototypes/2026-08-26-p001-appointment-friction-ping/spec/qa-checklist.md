# QA checklist — Appointment Friction Ping

## Happy path
- [ ] First screen matches: Tomorrow’s cohort beside one primary “send blocker ping” action and the patient’s five-choice SMS preview.
- [ ] Core loop works end to end: Send one respectful blocker question, branch to a tiny arrival-help card, and escalate only unresolved exceptions.
- [ ] Final state is useful without explanatory narration.

## Required sections
- [ ] Campaign setup
- [ ] Patient SMS preview
- [ ] Blocker choice sheet
- [ ] Tailored arrival cards
- [ ] Unresolved exception queue
- [ ] Language and accessibility options
- [ ] Privacy and consent state
- [ ] Outcome summary

## Edge cases
- [ ] Empty, loading, offline/error, stale/uncertain, and success states are specified where relevant.
- [ ] Long Korean/English text and narrow mobile width do not break hierarchy.
- [ ] Destructive or privacy-sensitive actions require explicit confirmation.

## Acceptance verification
- [ ] Exactly one design profile is present: calm-consumer.
- [ ] Theme is 건강 and source references are C3.
- [ ] Patient and staff views are visibly distinct; no surveillance score; consent, delivery failure, translation, and resolved states are present.
- [ ] No custom demo exists in Phase A.
