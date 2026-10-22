# QA checklist — 사장님 시범 한 번

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: operator-dense.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p004/

## Happy path

- [ ] The first screen communicates: a split view says “90초 시범에서 8단계 발견 · 자동화는 1개만”.
- [ ] The primary mechanic is visibly interactive: record one 90-second routine, point to the painful step, select exactly one automation candidate, and compare three shadow runs.
- [ ] The flow produces: verified one-step macro card with trigger, inputs, human checkpoint, break signs, and manual fallback.
- [ ] The share/revisit loop is represented: demonstrate → point → select one → shadow-run three times → approve or discard → share repair card.

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
