# PRD — 사장님 시범 한 번

## Product intent

- One-liner: 사장님이 반복 업무를 한 번 보여주면 단계를 풀어 쓰고 딱 한 단계만 자동화해 세 번 나란히 검증하는 노코드 대신 시범 도구.
- Problem evidence: S09. Actual user actions: (1) maintain spreadsheets and manual re-entry, (2) explain messy routines to consultants, (3) abandon automations they cannot repair.
- Target user: Korean small-shop owners, clinic administrators, academy managers, and service businesses without IT staff.
- Trigger moment: the owner repeats the same copy/paste task for the third time today.
- User language: “노드는 모르겠고, 제가 하는 걸 한 번 보여드릴게요.”
- Three-second sting: a split view says “90초 시범에서 8단계 발견 · 자동화는 1개만”.

## Arrival and validation

- Arrival path: small-business associations, accountant/IT consultant referral, search phrase “반복 업무 자동화 어려움”.
- Existing workaround: SOP document, screen recording, n8n/Make consultant, chat prompt, or continuing manual work.
- Buyer/share audience: owners, local digital-transition consultants, franchise field staff, and accountants.
- First validation test: observe ten owners performing a real admin task; compare independent repeatability and recovery after an injected failure.
- loved_by_small_group: 4/5 — shops with one owner-operator and no IT staff feel every broken automation personally.
- small_group_fit: businesses where the owner is also the process expert can test one task without migrating systems.

## Core experience

- Format: demonstrate-one-step automation clinic.
- Mechanic: record one 90-second routine, point to the painful step, select exactly one automation candidate, and compare three shadow runs.
- Key UX: capture demonstration, bind feedback to exact steps, label human judgment and system dependency, choose one safe candidate, run manual and assisted lanes side by side three times, then issue a repair/fallback card.
- First screen: one 90-second recording with eight extracted step frames and a hard “choose one” gate.
- Twist: the product refuses multi-workflow “transformation”; one observed step must pass three shadow runs and keep a manual fallback.
- Output artifact: verified one-step macro card with trigger, inputs, human checkpoint, break signs, and manual fallback.
- Share/revisit loop: demonstrate → point → select one → shadow-run three times → approve or discard → share repair card.
- Spread trigger: the owner can hand a one-page “what changed / how to do it manually” card to staff or a consultant.

## Required UI sections

- demonstration recorder
- step filmstrip
- point-at-step feedback
- human-judgment flags
- one-candidate gate
- three shadow runs
- mismatch review
- stop/undo
- repair card
- staff handoff.

## Design system

- Exactly one design profile: operator-dense.
- Theme: 역전 — one demonstrated routine becomes leverage without turning the owner into an automation engineer.
- Reference pattern: screen recording + apprenticeship demonstration + shadow-mode macro.

## Source signals

- S09: https://www.reddit.com/r/automation/comments/1uqn3ex/unpopular_opinion_90_of_small_businesses_cant_use — Small businesses want setup translation, one automated step, and a repair path.
- GitHub: https://github.com/alchaincyf/huashu-motion — Exact-element pointing inspired step-bound feedback; the product category is not copied.

## Interaction rules

- The main interaction must remain record one 90-second routine, point to the painful step, select exactly one automation candidate, and compare three shadow runs.
- The first screen must communicate: a split view says “90초 시범에서 8단계 발견 · 자동화는 1개만”.
- The output must be a concrete artifact: verified one-step macro card with trigger, inputs, human checkpoint, break signs, and manual fallback.
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

User problem: tool builders understand nodes; owners understand embodied routines. Inflow: consultant referral or repeated admin pain. Business: per-workflow clinic or partner kit. Core loop: record → step frames → point → classify → one candidate → three shadow runs → repair card. First screen: real task filmstrip. Rules: one automation only; every human judgment remains explicit; stop on mismatch. QA: hidden clipboard, login prompt, changing spreadsheet column, staff variation, no network, undo, readable Korean. Risk: recordings contain sensitive data; prototype uses redacted mocks.

## Development start prompt

Build a Korean workflow clinic with a 90-second mocked demonstration, editable step filmstrip, exact-step comments, human-versus-machine labels, a one-candidate gate, three side-by-side shadow runs, injected mismatch, stop/undo, and a repair/manual-fallback card. Do not expose an automation node canvas.

## Copy/paste-ready Stitch prompt

Create a responsive Korean small-business tool called “사장님 시범 한 번” for shop, clinic, academy, and service owners who understand their routine but cannot configure Make or n8n. The observed pull is explicit: owners want someone to turn messy work into a checklist, automate one piece, and leave a way to fix it. Open on a 90-second recorded task—copying Kakao inquiries into a booking sheet—with eight visual step frames and the hard limit “자동화는 1개만.” Let the owner point at the painful frame, edit the step wording, mark human judgment, choose one safe candidate, and compare manual versus assisted results across three shadow runs. Inject a changed spreadsheet column on run three; the flow must stop, explain the mismatch, undo safely, and produce a repair/manual-fallback card for staff. Required sections: recorder, step filmstrip, exact-step feedback, judgment flags, one-candidate gate, three shadow runs, mismatch review, stop/undo, repair card, and handoff. Emotional pressure: repetitive admin without dependence on an unrepairable black box. Design direction: use the operator-dense profile with charcoal and slate surfaces, one amber action accent, compact 36–40px rows, crisp manual/assisted state labels, square-to-8px controls, and no node canvas, chatbot layout, or AI gradient.
