# PRD - Heatwave Parent Check Round

## One-liner
Siblings turn daily heat-wave check-ins on aging parents into a shared rotation, a 60-second symptom checklist, and a family-chat proof card.

## Problem
Adult children (30-50s) in Korea whose parents live alone or without reliable cooling during 폭염특보 periods. are reacting to fresh market/community signals but still solve the work with scattered calls, notes, screenshots, or community threads. The prototype should turn that repeated pain into one focused first-screen workflow.

## Target user
Adult children (30-50s) in Korea whose parents live alone or without reliable cooling during 폭염특보 periods.

## Key UX
The first screen shows today's relay status — "오늘 아직 아무도 전화하지 않았습니다" — then whoever is on rotation runs a 60-second KDCA-based symptom checklist during the call and posts the check card to the family chat.

## Required UI sections
- Today's check status header
- Sibling rotation lane
- 60-second symptom checklist
- Cooling and risk flags
- Family-chat share card
- Printable fridge card

## Design profile
- calm-consumer

## Theme
- 건강 / heatwave family coordination

## Source signal references
S17: KDCA distributes 8 heat-illness prevention rule sets for vulnerable groups (질병관리청 보도 (IDSN), 2026-07-06) https://idsn.co.kr/news/view/1065595512296478
S18: 70% of heat-illness deaths are elderly/disabled; elderly living alone are highest risk (의학신문, 2026) https://www.bosa.co.kr/news/articleView.html?idxno=2259667

## Reference pattern
- family relay ritual + proof card

## Twist
- Solves the sibling coordination gap ("everyone assumed someone else called"), not the information gap.

## Small group fit
- One family group chat can adopt the rotation during a single 폭염특보 without any onboarding.

## Spread trigger
- The check card lands in the family chat; siblings join the rotation and forward the fridge card to their own parents' homes.

## Copy/paste Stitch prompt
Create a calm family-coordination app called "Heatwave Parent Check Round" for adult children coordinating daily heat-wave check-ins on aging parents in Korea. The app is based on observed user pull: KDCA published heat-illness prevention rules for vulnerable groups on 2026-07-06 and tells families to set regular contact schedules; heat-illness ER visits are up 1.5x and deaths concentrate among elderly living alone. The app should use a sibling relay-ritual mechanic around the trigger moment "폭염특보 발령 후 아침" and make the first screen communicate "오늘 아직 아무도 부모님께 전화하지 않았습니다". Use the user's own language: "폭염에 혼자 계신 부모님 안부 다들 어떻게 챙기세요?". Build the core workflow around a daily call log with a 60-second symptom checklist and cooling risk flags, and produce a shareable family-chat check card plus a printable fridge checklist. Required sections: today's check status header, sibling rotation lane, symptom checklist, cooling/risk flags, family-chat share card, printable fridge card. Emotional pressure to make visible: 건강 — losing a parent to a preventable heat stroke while every sibling assumed someone else called. Design direction: use the calm-consumer profile with reassuring warm neutrals, large readable type, gentle accent color, and one urgent flag color reserved for unchecked days. Avoid generic dashboard framing; make the main interaction feel like a family relay baton passing.

## Non-goals
- Do not implement a custom local demo in Phase A.
- Do not present source signals as proof of market size.
- Do not turn the product into a generic dashboard without the specific trigger and workflow.

## Success metrics
- A viewer understands the target user and core action within 5 seconds.
- The primary workflow can be inferred from the first screen without explanatory marketing copy.
- The Stitch output preserves the assigned design profile and includes all required sections.
