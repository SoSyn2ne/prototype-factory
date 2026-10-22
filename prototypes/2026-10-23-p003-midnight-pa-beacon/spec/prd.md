# PRD — 심야 방송 등대

## Product intent

- One-liner: 저음질 아파트 방송을 로컬에서 받아 원문·번역·불확실성을 즉시 띄우고 공식 확인 행동까지 연결하는 탁상형 안전 등대.
- Problem evidence: S03. Actual user actions: (1) wake and listen repeatedly, (2) check building apps or neighbors, (3) evacuate with pets or ignore an unclear announcement.
- Target user: foreign residents, hard-of-hearing households, older residents, pet owners, and apartment managers.
- Trigger moment: a muffled building broadcast begins, especially overnight.
- User language: “지금 내려가야 하는 말인지, 생활 안내인지 원문부터 보고 싶어요.”
- Three-second sting: a pulsing amber puck says “방송 감지 · 긴급 여부 불명확 · 원문 확인”.

## Arrival and validation

- Arrival path: apartment management office, foreign-resident onboarding, relocation services, search phrase “아파트 방송 못 알아들음”.
- Existing workaround: building text app, neighbor chat, management-office call, door peek, or guessing from tone.
- Buyer/share audience: apartment complexes, relocation firms, municipalities, and households.
- First validation test: play 30 noisy mock announcements to Korean learners and hard-of-hearing users; compare correct next-action choice and false reassurance.
- loved_by_small_group: 5/5 — foreign residents, hard-of-hearing residents, pet owners, and families with sleeping children face high stakes from one unclear message.
- small_group_fit: one apartment tower with multilingual households can pilot it without replacing the PA system.

## Core experience

- Format: local tabletop puck plus phone companion.
- Mechanic: ambient capture lights the puck, preserves verbatim audio locally, displays translation and uncertainty, and offers official confirmation actions.
- Key UX: local audio capture → verbatim Korean → translated summary → uncertainty badge → official app/management/112/119 path; red is reserved for an official confirmed emergency state.
- First screen: tabletop halo, detected timestamp, exact Korean line, translation, and a large “긴급 여부 불명확” state.
- Twist: it never reduces an unclear message to a confident green “safe”; verbatim evidence and official confirmation stay primary.
- Output artifact: timestamped local transcript-and-action card with source and uncertainty.
- Share/revisit loop: detect → read/listen → confirm official source → act → optionally share minimal card → auto-delete local audio.
- Spread trigger: the household can share a timestamped verbatim card with neighbors while keeping audio local.

## Required UI sections

- puck halo state
- live waveform
- verbatim transcript
- translation
- uncertainty
- official-source check
- pet/family action shortcut
- audio deletion
- offline/storage state
- event history.

## Design system

- Exactly one design profile: field-ops.
- Theme: 건강 — safety without pretending a machine can certify an emergency.
- Reference pattern: smoke-alarm status light + baby monitor + bilingual public-address caption.

## Source signals

- S03: https://www.reddit.com/r/Living_in_Korea/comments/1x96tbw/apartment_announcements/ — Residents cannot reliably understand or triage muffled apartment PA messages.

## Interaction rules

- The main interaction must remain ambient capture lights the puck, preserves verbatim audio locally, displays translation and uncertainty, and offers official confirmation actions.
- The first screen must communicate: a pulsing amber puck says “방송 감지 · 긴급 여부 불명확 · 원문 확인”.
- The output must be a concrete artifact: timestamped local transcript-and-action card with source and uncertainty.
- Unsupported certainty, hidden state changes, and generic dashboard framing are prohibited.
- Error, empty, incomplete, offline, recovery, and accessible states must be explicit.

## Constraints and non-goals

- Phase A contains no custom demo and calls no external LLM API.
- The prototype does not claim market size from source signals.
- The prototype does not replace emergency, legal, financial, medical, or platform authority.
- The assigned design profile must not be mixed with a second PF profile.

## Success metrics

- A first-time user understands the main action in under 15 seconds.
- The first validation test can be run with mocked/local data.
- The output artifact is legible on a 390px mobile viewport and in a desktop screenshot.
- Users can explain the recovery or fallback state without operator help.

## Screenshot QA

- First-screen sting is visible above the fold.
- One primary accent, one radius system, consistent 40–48px controls, and explicit states.
- No marketing hero, generic KPI grid, decorative gradient, or placeholder copy.
- Profile-specific direction remains visible at 1440px and 390px.

## Plan brief

User problem: poor audio and language barriers make urgency unknowable. Inflow: building onboarding or resident search. Business: complex-level hardware lease or household device. Core loop: detect → preserve → transcribe/translate → show uncertainty → verify/act → delete. First screen: status and exact words. Rules: never label safe from audio alone; official alerts override; local storage by default. QA: background TV, repeated announcement, low confidence, offline, power loss, two simultaneous languages, screen reader, 1 a.m. low-light. Risk: false positives/negatives; prototype must state it is an aid, not the emergency system.

## Development start prompt

Build a simulated local-device companion with PA detection, waveform, verbatim Korean, editable translation, confidence/uncertainty, official verification actions, red-only confirmed emergency state, local deletion, offline state, and a minimal neighbor-share card. Never claim emergency classification.

## Copy/paste-ready Stitch prompt

Create a responsive companion interface for a Korean tabletop device called “심야 방송 등대.” It serves foreign residents, hard-of-hearing households, pet owners, and families who hear a muffled apartment PA message and cannot tell what to do. Open on a dark, quiet 1 a.m. scene: the puck glows amber and the phone says “방송 감지 · 긴급 여부 불명확.” Show the exact Korean transcript first, a replay button, an editable translation, and why confidence is low. Offer direct checks for the official building app, management office, 112, and 119; reserve red only for a mocked official confirmed emergency. Let users create a minimal neighbor card, choose pet/family actions, and delete local audio immediately. Include background-TV false trigger, repeated message, offline, low storage, no official text, and confirmed-alert states. Required sections: halo, waveform, verbatim text, translation, uncertainty, official-source actions, household shortcuts, deletion, offline/storage, and history. Emotional pressure: safety without false reassurance. Design direction: use the field-ops profile with matte charcoal and warm off-white, one amber attention accent, reserved safety red, 48px night-readable controls, sturdy 8px panels, and no smart-home dashboard or decorative waveform wall.
