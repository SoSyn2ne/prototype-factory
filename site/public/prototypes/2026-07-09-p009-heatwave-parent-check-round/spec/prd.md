# PRD - Heatwave Parent Check Round

## One-liner
Siblings turn daily heat-wave check-ins on aging parents into a shared rotation, a 60-second symptom checklist, and a family-chat proof card.

## Problem
Adult children (30-50s) in Korea whose parents live alone or without reliable cooling during 폭염특보 periods. are reacting to fresh market/community signals but still solve the work with scattered calls, notes, screenshots, or community threads. The prototype should turn that repeated pain into one focused first-screen workflow.

## Target user
Adult children (30-50s) in Korea whose parents live alone or without reliable cooling during 폭염특보 periods.

## Key UX
One sibling creates the round and shares a no-login KakaoTalk link; the first screen shows today's relay status — "오늘 아직 아무도 전화하지 않았습니다" — checking off a call is one tap plus a 60-second KDCA-based symptom checklist, and on advisory days an unchecked round auto-nudges the next sibling at 14:00.

## Utility spine
- Zero-signup share link — a family adopts the rotation inside one KakaoTalk thread in under 2 minutes; the check itself is one tap.

## Utility metric
- Unchecked days during 폭염특보 (target: zero).

## Required UI sections
- No-login join via share link
- Today's check status header with 14:00 nudge banner
- Sibling rotation lane
- 60-second symptom checklist
- Cooling and risk flags
- Family-chat share card
- Printable fridge card with emergency numbers in large type

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
Create a calm family-coordination app called "Heatwave Parent Check Round" for adult children coordinating daily heat-wave check-ins on aging parents in Korea. The app is based on observed user pull: KDCA published heat-illness prevention rules for vulnerable groups on 2026-07-06 and tells families to set regular contact schedules; heat-illness ER visits are up 1.5x and deaths concentrate among elderly living alone. The app should use a no-login shared-link relay mechanic around the trigger moment "폭염특보 발령 후 아침" and make the first screen communicate "오늘 아직 아무도 부모님께 전화하지 않았습니다 — 14:00에 다음 순번에게 알림". Use the user's own language: "폭염에 혼자 계신 부모님 안부 다들 어떻게 챙기세요?". Build the core workflow around a one-tap check with a 60-second symptom checklist and cooling risk flags, joined via a share link without signup, with an unchecked-by-14:00 nudge to the next sibling on advisory days, and produce a shareable family-chat check card plus a printable fridge checklist with emergency numbers in large type. Required sections: no-login join via share link, today's check status header with nudge banner, sibling rotation lane, symptom checklist, cooling/risk flags, family-chat share card, printable fridge card. Emotional pressure to make visible: 건강 — losing a parent to a preventable heat stroke while every sibling assumed someone else called. Design direction: use the calm-consumer profile with reassuring warm neutrals, large readable type, gentle accent color, and one urgent flag color reserved for unchecked days. Avoid generic dashboard framing; make the main interaction feel like a family relay baton passing.

## Non-goals
- Do not implement a custom local demo in Phase A.
- Do not present source signals as proof of market size.
- Do not turn the product into a generic dashboard without the specific trigger and workflow.

## Success metrics
- A viewer understands the target user and core action within 5 seconds.
- The primary workflow can be inferred from the first screen without explanatory marketing copy.
- The Stitch output preserves the assigned design profile and includes all required sections.
