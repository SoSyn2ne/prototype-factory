# PRD — 성장성 대출 증빙 리허설

## Product intent / problem
금융 이력이 얇은 소상공인은 새 평가체계가 어떤 사업 근거를 볼지 몰라 은행 상담 전에 자료를 과다 제출하거나 중요한 맥락을 빠뜨린다.

## Target user
한국의 thin-file 소상공인, 상담을 돕는 세무사·지역 상권/신용 지원 인력.

## Arrival path
정책 안내, 은행 상담 예약, 세무사 점검, 소상공인 지원센터에서 진입한다.

## Business / validation route
5명의 점주가 실제 상담 전 18개월 자료로 5분 설명을 만들 수 있는지 검증한다. 세무사 좌석 또는 상담 준비 패킷 단위 과금을 탐색한다.

## Core loop / key UX
매출 흐름 올리기 → 계절·충격 주석 → 상권/업종 근거 연결 → 빈 근거 확인 → 질문 리허설 → 한 장 브리핑.

## First screen
동네 카페의 18개월 매출선과 설명되지 않은 세 개 하락 구간, 그리고 상담 리허설 시작 버튼.

## Required UI sections
- 은행·상담일
- 매출 흐름 타임라인
- 업종·상권 근거 카드
- 계절·일회성 주석
- 증빙 파일 스택
- 누락 질문
- 상담 시나리오
- 한 장 브리핑

## Assigned profile and theme
- Design profile: `financial-analyst`
- Theme: 불확실한 AI 신용평가를 점수 놀이가 아닌 차분한 근거 준비로 바꾸는 상담실

## Source signal references
- S02: 매출 흐름·업종·상권 정보를 활용하는 소상공인 특화 신용평가 시범 — https://www.korea.kr/news/policyFocusView.do?newsId=148967703&pkgId=49500843

## Interaction rules
- 승인 확률이나 신용점수를 생성하지 않는다.
- 모든 설명은 사실·점주 설명·미확인으로 구분한다.
- 숫자에는 출처 기간과 단위를 표시한다.

## Output artifact
근거 링크가 붙은 은행 상담용 한 장 브리핑과 질문 목록.

## Share / return loop
실제 상담 후 받은 질문을 빈칸에 반영해 다음 상담 버전을 만든다.

## Constraints
- 은행 내부 모형을 추정하지 않는다.
- 샘플 POS·세무 자료만 사용한다.
- 인쇄와 모바일 상담 보기 모두 지원한다.

## Non-goals
- 대출 중개나 신청 제출을 하지 않는다.
- 승인·금리·한도를 예측하지 않는다.

## Success metrics
- 점주가 5분 안에 사업 흐름을 근거와 함께 설명한다.
- 사용자가 승인 보장으로 오해하지 않는다.
- 세무사가 한 장 브리핑에서 누락 근거를 20초 안에 찾는다.

## QA / screenshot criteria
- 불완전한 월과 현금매출 표시가 명확하다.
- 인쇄 시 그래프·주석·출처가 잘리지 않는다.
- 일시 휴업·신규 경쟁·계절성·자료 없음 상태를 확인한다.

## Development start prompt

```text
Build the accepted financial-analyst Stitch design as a local prototype with editable evidence cards, timelines, scenarios, and print preview. Use mock figures and never output lender approval predictions.
```
