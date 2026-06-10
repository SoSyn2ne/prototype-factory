# PRD — Freelancer Tax Receipt Panic Binder

## Problem
- Korean freelancers and side-income workers face comprehensive income tax filing with scattered receipts, income records, deduction doubts, and HomeTax/ModuChaeum uncertainty.
- Existing tutorials explain filing mechanics, but they do not show whether the user's evidence story is complete enough for self-filing or accountant handoff.
- The prototype must feel like assembling a defensible filing binder, not a generic personal-finance dashboard.

## Target user
- Korean freelancers, creators, tutors, part-time contractors, and side-income workers filing comprehensive income tax.

## Constraints
- Time: Phase A spec only; Stitch will generate the first visual prototype.
- Budget: no tax API, bank API, or external LLM calls in Phase A.
- Platform: responsive web app, desktop-first with Korean labels where appropriate.

## Non-goals
- No tax advice guarantee.
- No direct filing to HomeTax.
- No custom demo implementation in Phase A.

## Success metrics
- User can see missing evidence and risky deduction doubts in under 60 seconds.
- User can export a filing binder and accountant memo with income sources, receipts, and open questions.
- UI clearly distinguishes known, assumed, and unknown tax evidence.

## Notes
- One-liner: Korean freelancers assemble income, receipts, and deduction doubts into a clean June filing binder instead of guessing through HomeTax.
- Assigned design profile: financial-analyst.
- Theme: 자산 방어.
- Source signals: S5, S6 from daily/2026-06-11/ideas.md.
- Required UI sections: deadline pressure header, income-source intake, receipt confidence lanes, deduction doubt triage, missing evidence alerts, HomeTax/ModuChaeum status panel, accountant memo preview, filing binder export.
- Output artifact: filing-ready receipt binder and accountant handoff memo.
- Stitch prompt: Create a responsive web app called "Freelancer Tax Receipt Panic Binder" for Korean freelancers, creators, tutors, part-time contractors, and side-income workers filing comprehensive income tax. The app is based on observed user pull: freelancers already search filing guides, download simple-ledger forms, watch tutorials, collect receipts and card exports, and decide whether to self-file or hire help before the May/June deadline. The app should use an evidence-binder mechanic around the trigger moment "the Korean comprehensive income tax deadline approaches and receipt evidence is incomplete" and make the first screen communicate "Your June deadline is close and your receipts still do not tell a story." Use the user's own language: "영수증과 소득 내역을 어디까지 모아야 하는지 모르겠어요." Build the core workflow around income sources, card/bank exports, receipts, deduction categories, HomeTax or ModuChaeum status, and missing evidence, and produce a filing-ready receipt binder plus accountant handoff memo. Required sections: deadline pressure header, income-source intake, receipt confidence lanes, deduction doubt triage, missing evidence alerts, HomeTax/ModuChaeum status panel, accountant memo preview, and filing binder export. Emotional pressure to make visible: 자산 방어, overpaid tax, penalty anxiety, and embarrassment about disorganized records. Design direction: use the `financial-analyst` profile with precise ledger-like structure, ink/graphite/off-white surfaces, muted green confidence cues, and restrained warning tones for risky gaps. Avoid generic dashboard framing; make the main interaction feel like assembling a defensible tax binder page by page.
