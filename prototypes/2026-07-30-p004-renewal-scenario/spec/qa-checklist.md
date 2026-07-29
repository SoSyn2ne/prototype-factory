# QA checklist — 갱신 협상 3시나리오 워크플로우

## Happy path
- First screen is understandable in 3 seconds (no "Dashboard / Board / Planner" generic chrome).
- Key interaction works (click / tap / drag / copy / export) with realistic sample data.
- All required UI sections are present and populated.

## Edge cases
- Empty input state shows a real preview, not Lorem ipsum.
- Mobile 1-hand verification for mobile-first candidates (p004, p005, p008).
- Color contrast + dark/light sanity for the assigned design profile.

## Acceptance verification
- Build / typecheck pass (when applicable).
- Puppeteer screenshot QA for desktop + mobile.
- Source signal refs in meta.json match daily/2026-07-30/ideas.md.
- No placeholder text remains in any spec file.
