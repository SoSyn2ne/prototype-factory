# PRD — Quote Goodbye Refit

## Product intent / problem
웨딩 사진가는 문의가 사라진 이유를 모르고, 커플은 예산 안에서 어떤 구성요소를 조정할 수 있는지 모른 채 견적을 닫는다.

## Target user
독립 웨딩 사진가와 소형 스튜디오, 견적을 검토하는 커플.

## Arrival path
기존 견적 링크의 ‘맞지 않나요?’ 출구 또는 일정/예산 불일치 응답에서 진입한다.

## Business / validation route
5개 스튜디오와 5쌍의 커플에게 45초 이탈 흐름을 테스트한다. 유료 경로는 월 견적 수 또는 스튜디오 브랜드 좌석이다.

## Core loop / key UX
견적 검토 → 한 가지 비공개 이탈 이유 → 예산 상한 → 구성요소 재조립 → 수익 하한 확인 → 수락·공유·깔끔한 거절.

## First screen
실제 웨딩 제안서와 압박 없는 ‘Not the right fit?’ 출구.

## Required UI sections
- 제안서 표지
- 포함 항목
- 비공개 이탈 이유
- 예산 상한 슬라이더
- 구성요소 레일
- 실시간 재조립
- 스튜디오 하한선
- 공유·거절
- 익명 손실 요약

## Assigned profile and theme
- Design profile: `premium-editorial`
- Theme: 거절을 절박한 할인 팝업이 아니라 한 번의 우아한 마지막 대화로 바꾸는 견적실

## Source signal references
- S05: 문의는 있으나 예산·고스팅·막판 예약으로 계약이 줄었다는 사진가들 — https://www.reddit.com/r/WeddingPhotography/comments/1wgmone/slow/
- S06: 사진 셀렉 접수와 약속 단계가 보이지 않아 반복 확인하는 고객 — https://www.reddit.com/r/photography/comments/1wzsmjm/business_wednesdays_october_07_2026/

## Interaction rules
- 할인 카운트다운이나 죄책감 문구를 쓰지 않는다.
- 스튜디오의 수익 하한 아래 조합은 만들지 않는다.
- 이탈 이유는 익명 집계하고 개별 고객 추적에 쓰지 않는다.

## Output artifact
예산 안에서 재구성된 제안서 또는 깔끔한 거절 상태와 익명 손실 이유.

## Share / return loop
커플이 파트너에게 제안을 공유하거나 한 질문을 보내고, 스튜디오는 월별 손실 패턴만 검토한다.

## Constraints
- 실제 결제 기능은 포함하지 않는다.
- 고급 서비스 톤을 유지하되 조작적 다크패턴을 금지한다.
- 모바일 커플 뷰와 데스크톱 스튜디오 뷰를 모두 검증한다.

## Non-goals
- 완전한 리드 CRM을 만들지 않는다.
- 고객별 가격 차별화 엔진을 만들지 않는다.

## Success metrics
- 커플이 45초 안에 이유와 예산을 남긴다.
- 사진가가 하한선을 침범하지 않고 대안을 만든다.
- 사용자가 흐름을 압박으로 느끼지 않는다.

## QA / screenshot criteria
- 모바일에서 슬라이더와 구성요소 변화가 즉시 읽힌다.
- 완전 거절·날짜 불가·예산 재조립·파트너 공유 상태가 있다.
- 개인 이탈 이유가 스튜디오 집계 화면에 노출되지 않는다.

## Development start prompt

```text
Implement the accepted premium-editorial design locally with quote components, bounded budget slider, private exit reason, margin floor, and shareable revised proposal using mock data.
```
