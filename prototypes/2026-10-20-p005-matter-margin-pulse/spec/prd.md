# PRD — Matter Margin Pulse

## Product intent / problem
정액 사건은 이미 돈을 받았다는 이유로 시간을 기록하지 않다가 이메일·통화·수정이 쌓인 뒤에야 수익성이 무너진 사실을 안다. 수동 타이머는 안 쓰고 대형 practice suite는 과하다.

## Target user
정액 사건을 다루는 2–20인 로펌 파트너, 오피스 매니저, 담당 변호사.

## Arrival path
matter close review, 월말 손익 회의, flat-fee pricing 검색, 로펌 커뮤니티 추천.

## Business / validation route
세 개 익명 사건의 캘린더·메일·통화·문서 CSV를 불러와 파트너 수동 추정과 임계선 발견 시점을 비교한다. matter 수 기반 월 구독을 검증한다.

## Core loop / key UX
사건 가져오기 → 활동 구슬 자동 묶음 → 정액 수임료 눈금자에 배치 → 중복·비업무 제외 → burn threshold 확인 → 범위변경 대화 카드.

## First screen
$4,500 fixed-fee scope ruler 위로 캘린더·메일·통화·문서 구슬이 떨어지고 임계선에 가까운 활동이 조용히 빛난다.

## Required UI sections
- matter drop zone
- passive activity beads
- fixed-fee scope ruler
- source confidence
- duplicate and non-work merge
- burn threshold
- scope-change conversation card
- weekly portfolio comparison
- privacy controls

## Assigned profile and theme
- Design profile: financial-analyst
- Theme: 월말 후회 전에 보이지 않던 노동을 가격 언어로 바꾸기

## Source signal references
- S07: Excel+Trello 수동 기록을 포기하고 정액 사건의 실제 투입을 월말까지 모르는 소형 로펌 — https://www.reddit.com/r/LawFirm/comments/1r6kgm1/flatfee_trap_how_are_you_guys_tracking_actual/

## Interaction rules
- 자동 추정 활동에는 source와 confidence를 표시한다.
- 중복 메일·캘린더 이벤트는 사용자가 합치거나 되돌릴 수 있다.
- client card에는 내부 원가나 민감 메모를 노출하지 않는다.
- 수익을 확정값으로 표현하지 않고 범위 대화 시점으로 해석한다.

## Output artifact
client-ready scope-change conversation card and internal margin note.

## Share / return loop
파트너는 같은 범위 카드를 담당자와 클라이언트에게 보내 감정 대신 활동·범위·선택지를 놓고 대화한다.

## Constraints
- 외부 메일·문서 시스템을 연결하지 않고 realistic mock activity를 쓴다.
- 법률 자문·청구 자동화를 제공하지 않는다.
- 모든 분석은 설명 가능한 source bead에서 시작한다.

## Non-goals
- 범용 practice management suite를 만들지 않는다.
- billable-hour timesheet를 강제하지 않는다.

## Success metrics
- 파트너가 30초 안에 가장 위험한 matter와 원인을 찾는다.
- 자동 활동의 출처와 제외 방법을 설명할 수 있다.
- scope-change card가 내부 손익 화면과 구분된다.

## QA / screenshot criteria
- 1440px에서 ruler, bead legend, client card가 동시에 읽힌다.
- 정상·중복·낮은 confidence·threshold 초과·데이터 없음 상태가 있다.
- 숫자는 tabular이고 chart 옆에 해석 문장이 있다.

## Development start prompt

~~~text
Build a mock flat-fee matter workbench where calendar/email/call/document activity becomes draggable beads on a fee scope ruler and produces a client-ready scope-change card.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive English web app called “Matter Margin Pulse” for small law firms that sell flat-fee matters but avoid manual time entry. Base it on a law-firm community report that a “simple” case can absorb twenty hours, Excel plus Trello becomes a manual nightmare, nobody updates it, and month-end bank balance becomes the profit signal. Open on one matter as a horizontal scope ruler labeled $4,500 fixed fee. Calendar, email, call, and document activity should fall onto the ruler as distinct draggable beads with confidence markers; duplicates can be merged and non-work excluded. As the burn ring approaches the agreed scope, generate a plain client conversation card showing what changed, what remains, and three next-step options. Required sections: matter drop zone, passive activity beads, fee ruler, source confidence, duplicate merge, margin threshold, scope-change card, privacy controls, and a compact portfolio comparison. Design direction: use the financial-analyst profile with ink, off-white, restrained navy and green, tabular money/time figures, written interpretation beside every chart, and no rainbow metrics or generic legal dashboard.
