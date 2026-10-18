# PRD — 지면 스위치 러닝 테스트

## Product intent / problem
초보 러너가 야외와 트레드밀에서 다른 불편을 느껴도 지면·경사·신발·강도·통증 시점을 함께 기록하지 않아 원인을 추측만 하거나 통증을 참고 계속 뛴다.

## Target user
특정 지면에서 무릎·허리 불편을 느끼는 성인 초보 러너와 기록을 검토하는 코치·임상의.

## Arrival path
러닝 커뮤니티 질문, 코치의 숙제, 병원 방문 전 증상 기록에서 진입한다.

## Business / validation route
5명의 초보 러너에게 안전한 모의 흐름을 보여주고 비교 조건과 중단 규칙이 이해되는지 검증한다. 코치용 팀 패스 또는 클리닉 사전 문진 연동을 탐색한다.

## Core loop / key UX
안전 확인 → 세션 A 기록 → 회복 확인 → 세션 B 기록 → 통증 맵 비교 → 중단/상담 요약.

## First screen
‘오늘은 진단이 아니라 차이를 기록합니다’ 문구와 두 개의 8분 세션 카드, 항상 보이는 즉시 중단 버튼.

## Required UI sections
- 안전·비진단 안내
- 세션 A/B
- 체감강도 페이서
- 지면·경사·신발 캡처
- 신체 통증 맵
- 즉시 중단
- 비교 리본
- 코치·진료용 요약

## Assigned profile and theme
- Design profile: `field-ops`
- Theme: 기록 없이 억지로 더 뛰지 않게 하는 밝고 견고한 현장 실험 키트

## Source signal references
- S03: 야외에서는 무릎이 불편하고 트레드밀은 괜찮다는 러너의 비교 질문 — https://www.clien.net/service/board/kin/19272380

## Interaction rules
- 통증 임계치를 넘으면 타이머와 비교를 종료한다.
- 사용자에게 신발·자세 교정을 처방하지 않는다.
- 두 세션은 같은 체감강도로만 비교하고 불일치하면 ‘비교 불가’로 표시한다.

## Output artifact
조건 차이와 통증 위치·시점이 담긴 코치/진료용 한 장 기록.

## Share / return loop
증상이 가라앉은 뒤 한 조건만 바꿔 다시 기록하며 통증 스트릭은 만들지 않는다.

## Constraints
- 의학적 진단이나 치료 조언을 제공하지 않는다.
- 야외 햇빛에서도 읽히는 모바일 UI.
- Phase A는 센서 연결 없이 수동 입력을 사용한다.

## Non-goals
- 러닝 훈련 계획을 만들지 않는다.
- 통증 원인을 자동 판정하지 않는다.

## Success metrics
- 사용자가 15초 안에 A/B 목적과 중단 규칙을 설명한다.
- 통증 발생 시 한 탭으로 테스트를 끝낸다.
- 코치가 결과 카드에서 비교 불가 조건을 즉시 발견한다.

## QA / screenshot criteria
- 390px 모바일에서 48px 이상 터치 타깃을 유지한다.
- 정상 완료·중도 중단·회복 미확인·비교 불가 상태가 보인다.
- 빨간색은 중단과 위험에만 사용한다.

## Development start prompt

```text
Implement a mobile-first local prototype with a timed paired-session flow, tappable body map, explicit stop state, comparison ribbon, and mock export. Preserve the field-ops profile and provide no diagnosis.
```
