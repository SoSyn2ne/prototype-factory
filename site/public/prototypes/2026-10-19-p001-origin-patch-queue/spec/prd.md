# PRD — 원산지 패치 큐

## Product intent / problem
배달 플랫폼과 프랜차이즈 운영팀은 원산지 고지 의무를 알고 있어도 수백 개 메뉴 중 누가 무엇을 확인했고 실제 화면에 반영했는지 증명하기 어렵다.

## Target user
국내 배달앱·주문중개 SaaS 운영팀, 프랜차이즈 본사, 다점포 점주.

## Arrival path
시행일 준비 공지, 가맹점 교육 메일, 운영팀의 기존 메뉴 감사 스프레드시트에서 진입한다.

## Business / validation route
5개 다점포 운영조직에 메뉴 50개를 넣어 누락 발견부터 증빙 묶음까지 걸리는 시간을 측정한다. 유료 경로는 매장 수 기반 월 구독 또는 시행 전 일회성 감사 패스다.

## Core loop / key UX
메뉴 불러오기 → 누락 확인 → 점주 확인 → 문구 반영 → 화면 증거 첨부 → 완료 패킷 생성.

## First screen
시행 3일 전, 미완료 47건을 보여주는 상단 스트립과 치킨·김치·쌀 표기가 비어 있는 한 매장의 패치 카드.

## Required UI sections
- 시행일 카운트다운
- 플랫폼·매장 필터
- 메뉴 누락 큐
- 원산지 문구 전후 비교
- 점주 확인 패널
- 반영 화면 캡처
- 예외·재알림
- 완료 증빙 패킷

## Assigned profile and theme
- Design profile: `operator-dense`
- Theme: 벌금 공포를 키우지 않고 빨간 메뉴 누락을 닫는 규정 패치 워크벤치

## Source signal references
- S01: 2026-10-22 배달앱 입점업체 원산지 고지 의무 시행 — https://www.moleg.go.kr/board.es?act=view&bid=0048&keyField=&keyWord=&list_no=157902&mid=a10501000000&nPage=1&orderby=&vlist_no_npage=0

## Interaction rules
- 법률 적합성 점수를 만들지 않는다.
- 완료에는 점주 확인과 반영 화면 증거가 모두 필요하다.
- 연락 실패와 예외는 완료로 숨기지 않는다.

## Output artifact
매장별 원산지 고지 완료 패킷과 아직 열린 메뉴 목록.

## Share / return loop
운영팀은 실패 증거만 다시 열고 법무·현장팀·점주에게 동일 패킷을 공유한다.

## Constraints
- Phase A에서는 외부 배달앱 API 없이 현실적인 샘플 메뉴를 사용한다.
- 법률 자문이나 과태료 판정을 제공하지 않는다.
- 한국어 데스크톱 우선, 모바일 검토 가능.

## Non-goals
- 원산지 사실 자체를 자동 검증하지 않는다.
- 메뉴 주문·결제 기능을 만들지 않는다.

## Success metrics
- 운영자가 30초 안에 가장 위험한 미완료 매장을 찾는다.
- 한 메뉴의 다섯 단계 상태가 설명 없이 이해된다.
- 완료 패킷에서 근거와 미완료 예외가 혼동되지 않는다.

## QA / screenshot criteria
- 데스크톱 1440px에서 테이블과 증거 드로어를 동시에 읽을 수 있다.
- 모바일 390px에서 패치 단계와 재알림이 가로 넘침 없이 작동한다.
- 정상·연락 실패·증거 누락·완료·재오픈 상태가 보인다.

## Development start prompt

```text
Build a responsive local HTML prototype for 원산지 패치 큐 with mocked Korean restaurant data, editable patch states, evidence preview, and export packet. Preserve the operator-dense profile and do not call compliance APIs.
```
