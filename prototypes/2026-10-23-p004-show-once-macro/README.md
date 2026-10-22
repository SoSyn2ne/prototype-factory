# 사장님 시범 한 번

사장님이 반복 업무를 한 번 보여주면 단계를 풀어 쓰고 딱 한 단계만 자동화해 세 번 나란히 검증하는 노코드 대신 시범 도구.

## Phase A status

- Status: phase-a
- Prototype type: practical-commercial
- Market: Korea
- Design profile: operator-dense
- Theme: 역전 — one demonstrated routine becomes leverage without turning the owner into an automation engineer.
- Custom demo: intentionally not created in Phase A
- Expected Stitch input: /home/sy/Downloads/stitch_drop/2026-10-23/p004/code.html and screen.png

## Target user

Korean small-shop owners, clinic administrators, academy managers, and service businesses without IT staff.

## Key UX

capture demonstration, bind feedback to exact steps, label human judgment and system dependency, choose one safe candidate, run manual and assisted lanes side by side three times, then issue a repair/fallback card.

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

## Source signals

- S09: https://www.reddit.com/r/automation/comments/1uqn3ex/unpopular_opinion_90_of_small_businesses_cant_use — Small businesses want setup translation, one automated step, and a repair path.
- GitHub: https://github.com/alchaincyf/huashu-motion — Exact-element pointing inspired step-bound feedback; the product category is not copied.

## Development start prompt

Build a Korean workflow clinic with a 90-second mocked demonstration, editable step filmstrip, exact-step comments, human-versus-machine labels, a one-candidate gate, three side-by-side shadow runs, injected mismatch, stop/undo, and a repair/manual-fallback card. Do not expose an automation node canvas.

## Stitch prompt

Create a responsive Korean small-business tool called “사장님 시범 한 번” for shop, clinic, academy, and service owners who understand their routine but cannot configure Make or n8n. The observed pull is explicit: owners want someone to turn messy work into a checklist, automate one piece, and leave a way to fix it. Open on a 90-second recorded task—copying Kakao inquiries into a booking sheet—with eight visual step frames and the hard limit “자동화는 1개만.” Let the owner point at the painful frame, edit the step wording, mark human judgment, choose one safe candidate, and compare manual versus assisted results across three shadow runs. Inject a changed spreadsheet column on run three; the flow must stop, explain the mismatch, undo safely, and produce a repair/manual-fallback card for staff. Required sections: recorder, step filmstrip, exact-step feedback, judgment flags, one-candidate gate, three shadow runs, mismatch review, stop/undo, repair card, and handoff. Emotional pressure: repetitive admin without dependence on an unrepairable black box. Design direction: use the operator-dense profile with charcoal and slate surfaces, one amber action accent, compact 36–40px rows, crisp manual/assisted state labels, square-to-8px controls, and no node canvas, chatbot layout, or AI gradient.
