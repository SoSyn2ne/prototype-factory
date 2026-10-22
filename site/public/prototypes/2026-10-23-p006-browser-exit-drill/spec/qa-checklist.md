# QA checklist — Browser Exit Drill

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: financial-analyst.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p006/

## Happy path

- [ ] The first screen communicates: “12/22까지 60일 · 북마크 완료 · 실제 업무 0/3 검증” exposes the false sense of completion.
- [ ] The primary mechanic is visibly interactive: choose one recurring task, capture its old-browser path, preview import/restore, then complete the task in the candidate browser under the same checkpoints.
- [ ] The flow produces: browser exit passport with verified tasks, unresolved blockers, fallback, and retest date.
- [ ] The share/revisit loop is represented: capture task → preview change → replay in candidate → record blocker → fix/retest → share passport.

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
