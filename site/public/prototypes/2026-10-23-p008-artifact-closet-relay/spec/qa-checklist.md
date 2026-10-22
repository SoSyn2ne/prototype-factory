# QA checklist — Artifact Closet Relay

## Phase A integrity

- [ ] meta.json contains actual title, one-liner, target, UX, sections, profile, theme, sources, plan brief, development prompt, and full Stitch prompt.
- [ ] Exactly one design profile is assigned: playful-experimental.
- [ ] No placeholder text, empty spec section, custom demo, or external LLM call exists.
- [ ] Expected Stitch folder is /home/sy/Downloads/stitch_drop/2026-10-23/p008/

## Happy path

- [ ] The first screen communicates: a strange fish-shaped silhouette says “90초 · 옷장만 사용 · 원본은 나중에 공개”.
- [ ] The primary mechanic is visibly interactive: draw silhouette, collect three allowed household categories, build for 90 seconds, freeze-pose, audience guess, reveal source.
- [ ] The flow produces: source-credited side-by-side reveal card and six-second transformation clip.
- [ ] The share/revisit loop is represented: draw → build → pose → audience guess → credited reveal → clip → new artifact.

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
