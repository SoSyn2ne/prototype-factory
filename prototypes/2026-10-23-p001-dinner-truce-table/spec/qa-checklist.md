# QA checklist — 한상 눈치해제

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: premium-editorial.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p001/

## Happy path

- [ ] The first screen communicates: four sealed diner chips around an empty table say “또 한 명이 다 굽고, 한 명은 덜 먹나요?”
- [ ] The primary mechanic is visibly interactive: sealed appetite chips reveal together, then a center plate composes shared and personal dishes plus rotating table roles.
- [ ] The flow produces: table agreement card with order split, portion assumptions, personal dishes, and role rotation.
- [ ] The share/revisit loop is represented: invite diners → private chips → reveal → adjust one conflict → dine → share balanced-table card.

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
