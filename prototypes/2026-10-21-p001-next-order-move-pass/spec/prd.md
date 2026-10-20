# PRD — 다음 주문 이사권

## Product intent / problem
배달앱 주문이 늘어도 수수료·광고·배달·결제 비용 때문에 점주 실수령액은 함께 늘지 않는다. 기존 도구는 비용을 보여주지만 단골을 다음 채널로 옮기는 행동까지 이어주지 않는다.

## Target user
배달 매출 비중이 높지만 고객 연락처를 직접 보유하지 않은 한국 음식점 점주와 1–3개 매장 운영자.

## Arrival path
POS 영수증 가져오기, 배달 주문 캡처, 마감 전 오늘 주문 불러오기.

## Business / validation route
매장 3곳에서 100건의 주문에 공공앱·직접포장·스탬프 혜택을 무작위 발행하고 14일 내 재주문 회수율과 점주 실수령액 변화를 비교한다. 유료화는 매장당 월 구독 또는 회수 성공 건당 요금으로 검증한다.

## Core loop / key UX
주문 불러오기 → 판매가/비용/실수령액 확인 → 다음 채널 혜택 선택 → QR 영수증 발행 → 만료·회수 확인 → 다음 제안 조정.

## First screen
실제 ₩18,900 주문 한 건의 비용 분해와 “다음 주문을 어디로 옮길까요?”라는 세 가지 행동이 즉시 보인다.

## Required UI sections
- 주문 불러오기와 주문 요약
- 비용 분해 스트립과 점주 실수령액
- 공공앱·직접포장·스탬프 혜택 3종
- 고객용 QR 미니 영수증 미리보기
- 발행·만료·회수·중복 상태
- 주간 채널 전환 결과

## Assigned profile and theme
- Design profile: financial-analyst
- Theme: 수수료 압박을 고객과의 투명한 전환 실험으로 바꾸는 자산 방어

## Source signal references
- S01: 배달앱 비용이 월 매출의 평균 26.2%라는 점주 조사 — https://www.mt.co.kr/en/living/2026/09/17/2026091713383651625
- S01b: 공공 배달앱 통합 운영 검토 — https://biz.chosun.com/en/en-industry/2026/10/13/J3L3RHZPJZAT5PLYGAX24AWOF4/

## Interaction rules
- 모든 비용 합은 판매가와 정확히 맞아야 한다.
- 한 주문에는 하나의 활성 혜택만 발행한다.
- 혜택 만료, 이미 사용됨, 잘못된 채널을 별도 상태로 보인다.
- 고객에게 비용 부담을 전가하거나 죄책감을 주는 문구를 쓰지 않는다.

## Output artifact
만료·회수 상태가 있는 고객용 채널 이사 QR 영수증.

## Share / return loop
고객은 가족 채팅에 QR 혜택을 전달하고 점주는 주간 회수 결과로 다음 혜택을 바꾼다.

## Constraints
- Phase A/프로토타입에서는 POS·결제·배달 API를 모의한다.
- 한국어 모바일 영수증은 390px에서도 한 화면에 핵심 금액과 QR이 보여야 한다.
- 실제 수익 개선을 보장하지 않는다.

## Non-goals
- 종합 손익 대시보드, 배달앱 가격 비교 서비스, 실제 결제를 만들지 않는다.

## Success metrics
- 점주가 20초 안에 주문을 불러와 혜택을 발행한다.
- 고객 테스트의 80%가 다음 주문 채널과 절약액을 설명한다.
- 중복·만료 사용이 100% 명시적으로 차단된다.

## QA / screenshot criteria
- 첫 화면에서 판매가·총비용·실수령액과 세 행동이 3초 안에 읽힌다.
- 발행 전, 발행, 회수, 만료, 중복 상태가 있다.
- 데스크톱과 390px에서 금액 열과 QR이 잘리지 않는다.

## Development start prompt

```text
Build a receipt-level channel-migration experiment with mocked order import, transparent cost split, three customer offers, QR issue/redeem states, expiry, duplicate prevention, and a compact weekly outcome. Do not build a generic margin dashboard.
```

## Copy/paste-ready Stitch prompt

Create a responsive Korean merchant web app called “다음 주문 이사권” for restaurant owners squeezed by delivery commissions, ads, delivery charges, and payment fees. Start on one realistic ₩18,900 order, visually split into platform costs and owner take-home, then ask one question: “다음 주문을 어디로 옮길까요?” Let the owner choose public-delivery app, direct pickup, or stamp benefit, set one clear reward, and preview a tiny QR receipt for the customer. Show issued, expired, redeemed, and duplicate-use states plus a compact outcome strip after several orders. Required sections: order import, cost strip, take-home amount, three migration offers, customer receipt preview, issue/redeem status, and weekly migration result. Design direction: use the financial-analyst profile with ink and off-white surfaces, one muted green accent, tabular numbers, written interpretation beside every figure, and no rainbow charts or generic margin dashboard.
