# PRD — Volunteer Return Ripple

## Product intent / problem
비기술 봉사 코디네이터는 종이와 여러 시트 사이에서 마지막 참여일과 선호 역할을 잃어, 떠난 사람에게 무작위 대량 문자를 보내거나 아예 연락하지 못한다.

## Target user
교회, 푸드뱅크, 상호부조 그룹, 소형 비영리의 봉사 코디네이터.

## Arrival path
행사 QR 체크인, 기존 간단 CSV 가져오기, 행사 종료 후 재참여 점검에서 진입한다.

## Business / validation route
두 코디네이터와 20개 합성 기록으로 체크인부터 개인 재초대까지 검증한다. 저가 조직 구독 또는 행사 단위 패스를 탐색한다.

## Core loop / key UX
QR 체크인 → 선호 역할 갱신 → 조용한 부재 카드 → 인간 편집 초대 → 수락·거절·조용 상태 → 복귀 리플.

## First screen
오늘 행사 체크인과 ‘초대를 반길 수 있음’으로 표현된 세 개의 부드러운 카드.

## Required UI sections
- 행사 QR
- 실시간 체크인
- 봉사자 카드
- 선호 역할 태그
- 조용한 부재 큐
- 초대 작성
- 옵트아웃·가용성
- 응답 상태
- 간단 이력 가져오기

## Assigned profile and theme
- Design profile: `calm-consumer`
- Theme: 사람을 감시하지 않고 기억하며 돌아오기 쉬운 역할을 건네는 따뜻한 재초대 흐름

## Source signal references
- S07: 수백 명 봉사자가 여러 Excel과 종이에 흩어진 비영리 운영 문제 — https://www.reddit.com/r/nonprofit/comments/1wvfzes/tips_or_tools_for_volunteer_management/

## Interaction rules
- 부재를 점수나 경고색으로 낙인찍지 않는다.
- 모든 자동 초대는 사람이 읽고 수정한다.
- 연락 거부와 휴식 상태를 즉시 존중한다.

## Output artifact
역할이 맞는 개인 초대와 수락·거절·조용 상태가 남는 가벼운 참여 이력.

## Share / return loop
복귀한 사람이 같은 역할 초대를 친구 한 명에게 전달하면 작은 리플로 표시한다.

## Constraints
- 무료/저가 환경을 가정해 최소 필드로 시작한다.
- 민감한 봉사 사유나 신앙 정보를 요구하지 않는다.
- 비기술 사용자를 위한 큰 컨트롤과 평이한 문구.

## Non-goals
- 복잡한 자원봉사 일정·급여 시스템을 대체하지 않는다.
- 참여도를 개인 성과 평가로 사용하지 않는다.

## Success metrics
- 코디네이터가 10분 안에 CSV를 가져오고 첫 초대를 보낸다.
- 봉사자가 초대를 죄책감 유발로 느끼지 않는다.
- 선호 역할이 없는 대량 문자보다 복귀 응답이 높다.

## QA / screenshot criteria
- CSV 누락 필드와 중복 연락처를 친절하게 처리한다.
- 모바일 QR 체크인과 데스크톱 초대 작성이 모두 읽힌다.
- 수락·거절·무응답·휴식·연락 거부 상태가 있다.

## Development start prompt

```text
Build the calm-consumer Stitch design locally with CSV import, QR check-in simulation, role-aware invitation composer, opt-out states, and return-ripple visualization.
```
