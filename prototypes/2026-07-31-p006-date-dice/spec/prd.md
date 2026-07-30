# PRD — Off-App Date Idea Dice (p006)

## Problem
- 20~30대 데이팅 앱 사용자는 swipe fatigue (Forbes Health: 78% Gen Z burnout) + low-quality matches + same conversation loops에 시달림. 오프라인 미션 아이디어 + 비용 + 실패 대안 + 사진 각도 가이드를 매번 새로 고안. 비대칭 미션 카드 + 주사위형 도구 부재.

## Target user
- 20~30대 데이팅 앱 사용자 (KR/EN), 매칭 후 첫/두 번째 데이트 아이디어 고갈, swipe fatigue 중인 사용자.

## Arrival path
- r/dating + r/askSingapore + Forbes Health burnout article → 본 도구.

## Business / validation route
- 무료 + 제휴 데이트/맛집/액티비티 referral.

## Core loop
- 5-슬라이더 (도시/예산/시간/인원/에너지) → 5-주사위 자동 굴림 → 미션 카드 1장 (분위기/준비물/비용/실패 대안/사진 각도 가이드) → 미션 완료 체크 + 후기 → 이번 주 1개 미션 캘린더 → 인스타 스토리 1-click 공유.

## First screen
- 5-슬라이더 + 5-주사위.

## Key screens
- 5-slider input, 5-dice roll, mission card, completion + review, week calendar, share button.

## Interaction rules
- 1-클릭 굴림. 모바일 1-hand.

## Output artifact
- 미션 카드 PNG + 주간 캘린더 PNG.

## Share / return loop
- "이번 주 미션 완료" 인스타 스토리 + 데이트 사진.

## Constraints
- Time: 30초 안에 미션 카드.
- Budget: 무료 + partner referral.
- Platform: web (mobile + desktop).

## Non-goals
- 실제 매칭 알고리즘 아님.
- 유료 데이트 코스 marketplace 아님.
- 데이팅 앱 데이터 수집 아님.

## Success metrics
- 미션 카드의 실제 가능성 (현실 장소/시간), 비용/실패 대안 현실성, 사진 가이드 실용성.
- Spread: "이번 주 미션" 인스타 스토리 재공유율.

## QA / screenshot criteria
- 12 sample missions (커피 워크/서점 룰렛/요리/포토 헌트/노래방/플리마켓/별 보기 등) 모두 1장 카드 채워짐.
- 주사위 5개 굴림 애니메이션.
- 모바일 1-hand 가능.
- 안전 가이드 명시 (낯선 사람 첫 만남).

## Source signal refs
- S8 (r/dating + Forbes Gen Z 78% burnout), S6과 별개.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Off-App Date Idea Dice (p006) as a polished local HTML/React prototype from this PRD.

Goal:
- 5-slider (city/budget/time/people/energy) → 5-dice auto-roll → 1 mission card (vibe/prep/cost/fallback/photo angle) → completion check → week calendar → Instagram story 1-click share.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 12 realistic sample missions and complete UI states.
- Include 1-click roll, mission card expand, completion check, share 1-click.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for mobile and desktop.
```

## Notes
- 디자인 프로파일: playful-experimental.
- 토픽: 외로움/역전.
- Theme interpretation: 데이팅 피로 → 오프라인 작은 승리.
