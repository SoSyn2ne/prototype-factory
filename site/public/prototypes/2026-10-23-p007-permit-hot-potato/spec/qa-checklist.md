# QA checklist — Permit Hot Potato

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: playful-experimental.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p007/

## Happy path

- [ ] The first screen communicates: a beautiful park sits under four locked vote stamps and the line “20초마다 하나를 양보하세요.”
- [ ] The primary mechanic is visibly interactive: one proposal, four secret interests, one concession per player, simultaneous vote, visible project deformation.
- [ ] The flow produces: deformed before/after proposal poster, vote breakdown, and seven-second failure clip.
- [ ] The share/revisit loop is represented: propose → object → concede → stamp → explode side effects → clip → swap mayor → rematch.

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
