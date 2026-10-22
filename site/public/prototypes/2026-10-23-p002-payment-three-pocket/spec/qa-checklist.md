# QA checklist — 결제 3칸 포켓

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: calm-consumer.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p002/

## Happy path

- [ ] The first screen communicates: a subway gate rejects the foreign card while three empty pockets ask “다음 수단은?”
- [ ] The primary mechanic is visibly interactive: drag payment tools into Primary, Backup, and Emergency pockets, then survive three realistic failure cards.
- [ ] The flow produces: bilingual offline three-pocket payment card tied to three planned stops.
- [ ] The share/revisit loop is represented: rehearse → save card → share with companion → mark which fallback actually worked → update the card.

## Edge and recovery states

- [ ] Empty, incomplete, conflicting, offline, error, recovery, and opt-out states are explicit.
- [ ] Unsupported certainty is avoided and authoritative fallbacks remain visible.
- [ ] Undo, stop, deletion, or manual fallback is provided when the concept requires it.

## Visual and responsive

- [ ] One accent and one radius system are used consistently.
- [ ] Primary controls are at least 40px; field/mobile controls reach 44–48px.
- [ ] 1440px and 390px screenshots keep the first-screen sting and main action visible.
- [ ] Keyboard, screen-reader, color-blind, and reduced-motion states are considered.
- [ ] The result avoids a marketing hero, generic KPI grid, and unrelated decorative charts.
