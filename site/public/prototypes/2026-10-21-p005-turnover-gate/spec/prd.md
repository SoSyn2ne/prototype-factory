# PRD — Turnover Gate

## Product intent / problem
시계만 보고 투숙객 코드를 열면 청소 인력이 아직 객실 안에 있을 수 있다. 조기 입실은 편의 요청이지만 현장에서는 침입자 오인과 안전 충돌이 된다.

## Target user
2–20개 단기임대 객실을 운영하는 호스트, 외부 청소 인력, 소형 숙박 운영자와 조기 입실 투숙객.

## Arrival path
예약 턴오버 알림, 청소 인력 체크인 링크, 투숙객 조기 입실 요청에서 진입한다.

## Business / validation route
조기 도착, 사진 누락, 늦은 청소, 오프라인 잠금 등 20개 모의 턴오버로 충돌 발견시간과 역할 이해도를 측정한다. 객실 수 기반 월 구독을 검증한다.

## Core loop / key UX
청소 체크인 → 청소 진행 → 객실 준비 확인 → 호스트 QC → 투숙객 코드 활성화. 조기 입실은 별도 승인으로 분기한다.

## First screen
큰 봉인된 문 카드가 현재 내부 역할, 남은 작업, 투숙객 코드 활성 조건을 보여준다.

## Required UI sections
- 객실/턴오버 타임라인
- 청소 인력 도착과 청소 중 상태
- 객실 준비 확인과 QC
- 봉인된 투숙객 코드
- 조기 입실 요청/승인
- 청소 인력 안전 알림
- 역할별 이벤트 로그

## Assigned profile and theme
- Design profile: premium-editorial
- Theme: 보이지 않는 청소 노동과 투숙객 편의를 안전하고 명시적인 인계로 잇기

## Source signal references
- S10: 청소 중 투숙객이 조기 입실해 청소 인력이 침입자로 오인한 사례 — https://www.reddit.com/r/airbnb_hosts/comments/1wr597l/guest_showed_up_early_and_went_to_sleep_as/

## Interaction rules
- 체크인 시각만으로 코드를 활성화하지 않는다.
- 청소 완료와 객실 준비 확인을 분리한다.
- 조기 입실은 투숙객 요청과 호스트 승인을 모두 남긴다.
- 안전 알림은 증거 업로드보다 먼저 동작한다.

## Output artifact
역할 서명과 투숙객 코드 상태가 연결된 턴오버 해제 이벤트.

## Share / return loop
청소 인력, 호스트, 투숙객은 같은 사건에서 필요한 부분만 담긴 역할별 인계 카드를 받는다.

## Constraints
- 실제 도어락과 예약 API는 모의한다.
- 사진은 객실 준비 확인용이며 인물 식별을 요구하지 않는다.
- 타임존과 오프라인 재연결 상태를 명시한다.

## Non-goals
- 종합 PMS, 요금 관리, 청소 직원 감시 도구를 만들지 않는다.

## Success metrics
- 모든 테스트 사용자가 코드가 봉인된 이유를 5초 안에 설명한다.
- 조기 입실 시나리오에서 청소 인력 안전 행동을 10초 안에 찾는다.
- 누락 증거와 오프라인 상태에서 잘못된 코드 활성화가 0건이다.

## QA / screenshot criteria
- 청소 전/중/완료, 사진 누락, QC 대기, 조기 승인, 안전 알림, 해제 상태가 있다.
- 봉인/해제 상태는 색상뿐 아니라 아이콘과 텍스트로 구분된다.
- 390px에서 핵심 상태와 안전 알림이 첫 화면에 남는다.

## Development start prompt

```text
Build a hospitality turnover handoff with sealed guest credential, cleaner progress, room-ready proof, QC release, early-entry approval, safety alert, and role-specific event log. Mock the lock; make boundary state unmistakable.
```

## Copy/paste-ready Stitch prompt

Create a responsive hospitality workflow called “Turnover Gate” for short-term-rental hosts, cleaners, and guests. Open on one elegant but unmistakable sealed-door state: cleaner inside, two tasks left, guest code inactive. Let the cleaner check in, finish tasks, attach one room-ready proof, and request release; let the host perform a lightweight QC confirmation that activates the guest credential. Model early arrival as a separate request with host approval and include a one-tap cleaner safety alert when an unknown person enters. Show late, missing-proof, offline-lock, approved-early-entry, and released states in one event timeline. Required sections: turnover timeline, cleaning status, proof, QC, credential seal, early request, safety alert, and event log. Design direction: use the premium-editorial profile with cream, warm charcoal, one muted brass CTA, refined typography, and no cluttered property dashboard.
