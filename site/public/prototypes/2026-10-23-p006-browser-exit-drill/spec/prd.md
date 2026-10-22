# PRD — Browser Exit Drill

## Product intent

- One-liner: 종료 전 브라우저의 탭·스페이스·확장·권한보다 실제 업무 한 건을 새 브라우저에서 재현해 무엇이 끊기는지 확인하는 이사 훈련.
- Problem evidence: S11. Actual user actions: (1) export browser data, (2) screenshot spaces and extension lists, (3) run two browsers in parallel while testing replacements.
- Target user: Arc users, browser-dependent freelancers, research teams, customer-support teams, and IT administrators.
- Trigger moment: a shutdown or account-sync deadline is announced.
- User language: “북마크 말고, 월요일 아침에 하던 일이 그대로 되는지 확인하고 싶어요.”
- Three-second sting: “12/22까지 60일 · 북마크 완료 · 실제 업무 0/3 검증” exposes the false sense of completion.

## Arrival and validation

- Arrival path: shutdown notice, browser communities, IT offboarding, search phrase “Arc shutdown migrate workflow”.
- Existing workaround: bookmark HTML export, handwritten extension checklist, and memory-based recreation.
- Buyer/share audience: individuals, team leads, browser vendors, and migration consultants.
- First validation test: migrate three real tasks for ten Arc users and measure hidden blockers found before switching.
- loved_by_small_group: 4/5 — freelancers and small teams with browser-specific research, publishing, support, or sales routines face a fixed cutoff.
- small_group_fit: teams with three to ten browser-critical workflows can finish a meaningful drill before enterprise migration tooling would be justified.

## Core experience

- Format: cross-browser real-task obstacle course.
- Mechanic: choose one recurring task, capture its old-browser path, preview import/restore, then complete the task in the candidate browser under the same checkpoints.
- Key UX: select task → old-browser step chain → candidate mapping → permission/extension blockers → timed replay → compare → choose, postpone, or keep split-browser.
- First screen: fixed shutdown date, three recurring tasks, and the mismatch “data exported / work unverified”.
- Twist: success is completing a real job, not reaching 100% imported items.
- Output artifact: browser exit passport with verified tasks, unresolved blockers, fallback, and retest date.
- Share/revisit loop: capture task → preview change → replay in candidate → record blocker → fix/retest → share passport.
- Spread trigger: a task-level exit card shows coworkers exactly which blocker remains and which browser is ready.

## Required UI sections

- cutoff strip
- task picker
- old-browser chain
- candidate mapping
- extension/permission gaps
- preview/restore
- timed replay
- result compare
- fallback
- exit passport.

## Design system

- Exactly one design profile: financial-analyst.
- Theme: unclassified — continuity of a personal work habitat.
- Reference pattern: evacuation drill + cross-browser test harness + reversible device-change preview.

## Source signals

- S11: https://news.hada.io/topic?id=35834 — Arc shutdown creates a fixed browser migration deadline.
- GitHub: https://github.com/Gathin23/cleanyourtv — Prominent preview and restore inspired a reversible migration drill; TV cleanup is not copied.

## Interaction rules

- The main interaction must remain choose one recurring task, capture its old-browser path, preview import/restore, then complete the task in the candidate browser under the same checkpoints.
- The first screen must communicate: “12/22까지 60일 · 북마크 완료 · 실제 업무 0/3 검증” exposes the false sense of completion.
- The output must be a concrete artifact: browser exit passport with verified tasks, unresolved blockers, fallback, and retest date.
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

User problem: export counts hide behavior loss. Inflow: shutdown notice. Business: individual paid pack or team migration report. Core loop: task select → old path → map → replay → compare → fallback. First screen: deadline and unverified tasks. Rules: no claim of full migration; every blocker ties to a step; preserve old browser until user signs off. QA: missing extension, OAuth popup, keyboard shortcut conflict, local-only data, failed import, two-browser fallback, reduced motion. Risk: prototype mocks browser integrations.

## Development start prompt

Build a cross-browser migration workbench with a fixed cutoff, three mocked recurring tasks, old/new step chains, extension and permission blockers, import preview, restore path, timed replay, side-by-side outcome, split-browser fallback, and exportable exit passport.

## Copy/paste-ready Stitch prompt

Create a responsive global migration workbench called “Browser Exit Drill” for Arc users and small teams facing the 2026-12-22 shutdown. Open with a fixed deadline and an uncomfortable mismatch: “Bookmarks exported · real work verified 0/3.” Let the user choose one recurring job—research and publish a client brief—then show the exact old-browser chain of spaces, pinned tabs, keyboard shortcuts, extensions, permissions, and sign-ins. Preview what the candidate browser can import, keep a visible restore/keep-Arc path, and make the user complete the same job in a timed replay. Surface a missing extension, blocked OAuth popup, shortcut collision, and local-only note; compare outcome and effort, then choose ready, split-browser fallback, or retest. Required sections: cutoff, task picker, old path, candidate mapping, gaps, preview/restore, replay, comparison, fallback, and exit passport. Emotional pressure: losing a work habitat while believing an export file is enough. Design direction: use the financial-analyst profile with cool off-white, ink, one cobalt action accent, precise side-by-side lanes, tabular dates and durations, written interpretation beside each number, disciplined 8px radii, and no generic migration progress dashboard.
