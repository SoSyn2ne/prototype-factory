# FalsifyFast

Turn any product idea into a falsification-first test plan in 3 minutes.

## Status
- prototype

## Overview
FalsifyFast treats AI as a hypothesis engine, not an oracle. The output is a compact decision pack: explicit uncertainty tags, a 7-question falsification checklist, and a clear go/kill/inconclusive call.

## How to view the demo
- Open `demo/index.html` directly in a browser.
- Optional local server:
  - `cd prototypes/2026-03-03-p001-falsifyfast/demo`
  - `python3 -m http.server 4173`
  - Visit `http://localhost:4173`

## Manual checklist
- Read `spec/prd.md` and confirm problem, user, constraints, and success metrics are concrete.
- Read `spec/assumptions.md` and verify each item is explicitly tagged `KNOWN`, `ASSUMPTION`, or `UNKNOWN`.
- Read `spec/falsification.md` and confirm there are exactly 7 strong disproof questions.
- Use `spec/qa-checklist.md` to run one full pass and end with `Go`, `Kill`, or `Inconclusive`.

## Links
- Spec docs: `spec/`
- Demo entry: `demo/index.html`
