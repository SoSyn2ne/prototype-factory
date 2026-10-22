# QA checklist — Dinner Rush Cable Trail

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: field-ops.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p005/

## Happy path

- [ ] The first screen communicates: “KDS 2 offline · 46 open tickets” sits over a floor path with one flashing tagged cable.
- [ ] The primary mechanic is visibly interactive: scan the dead endpoint, walk a highlighted physical cable trail, test one edge at a time, then activate a role-specific manual service mode.
- [ ] The flow produces: printable label sheet, live cable trail, manual-service role card, and support-ready action log.
- [ ] The share/revisit loop is represented: scan → walk → test → recover or enter paper mode → attach trail to vendor ticket → update label after repair.

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
