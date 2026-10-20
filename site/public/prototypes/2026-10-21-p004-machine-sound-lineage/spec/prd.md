# PRD — 설비 소리 족보

## Product intent / problem
공장 고장 대응 지식은 특정 숙련자의 귀와 기억에 묶여 있다. 신규 작업자는 수백 페이지 매뉴얼이나 선임자를 찾지만, AI 진단은 현장 설비·안전 규칙을 무시하면 더 위험하다.

## Target user
숙련자 은퇴와 신규 인력 증가를 동시에 겪는 20–100명 규모 한국 중소 제조공장 정비팀.

## Arrival path
설비 QR, 이상 소음 신고, 교대 시작 인계 카드에서 진입한다.

## Business / validation route
정상/이상 녹음 30개로 초보 작업자가 첫 안전행동을 고르는 정확도와 선임 호출 시간을 비교한다. 설비 수와 현장 수 기반 B2B 구독을 검증한다.

## Core loop / key UX
설비 QR → 10초 녹음 → 숙련자 표본 3개 비교 → 불확실성 확인 → 물리 안전 순서 → 해결/미해결 → 다음 교대 인계.

## First screen
설비 ID, 큰 10초 녹음 링, “진단 아님—안전 확인 시작” 문구가 장갑 환경에서도 보인다.

## Required UI sections
- 설비 QR/ID와 10초 녹음
- 파형 및 숙련자 표본 3개 비교
- 신뢰도와 불확실성
- 잠금·온도·진동·가드 안전 확인
- 해결·미해결·선임 호출
- 교대 인계와 오프라인 상태

## Assigned profile and theme
- Design profile: field-ops
- Theme: 사라지는 숙련 지식을 초보자의 귀와 안전 행동으로 이어주기

## Source signal references
- S06: 숙련자 은퇴와 현장 맥락을 놓치는 AI 파일럿 — https://www.manufacturingdive.com/news/what-manufacturing-plant-managers-think-of-the-ai-and-automation-boom/832776/
- H4: Timestral 시계열 모델과 센서 데이터 활용 확대 — https://news.hada.io/topic?id=35642
- Source repo: https://github.com/Leonxlnx/earshot

## Interaction rules
- 소리 유사도를 진단이나 정비 지시로 표현하지 않는다.
- 낮은 신뢰도에서는 선임 호출을 기본 행동으로 둔다.
- 안전 확인을 건너뛰고 해결 처리할 수 없다.
- 해결된 표본은 숙련자 승인 뒤에만 족보에 추가한다.

## Output artifact
비교 가능한 소리 표본, 물리 확인, 해결 여부가 결합된 설비 족보 카드.

## Share / return loop
해결된 소리 카드는 다음 교대 인계와 신규자 교육 세트에 추가된다.

## Constraints
- 오디오와 설비 정보는 모의 데이터이며 외부 추론 API를 쓰지 않는다.
- 오프라인 우선, 장갑용 48px 제어, 큰 대비를 유지한다.
- 안전 담당자와 현장 절차가 항상 모델 제안보다 우선한다.

## Non-goals
- 자동 고장 진단, 원격 설비 제어, 예지보전 대시보드를 만들지 않는다.

## Success metrics
- 신규 작업자의 올바른 첫 안전행동 선택률이 기준 대비 개선된다.
- 미해결 상태를 30초 안에 선임에게 인계한다.
- 저신뢰 표본에서 잘못된 확정 문구가 0건이다.

## QA / screenshot criteria
- 녹음 전/중/완료, 높은/낮은 신뢰, 배경소음, 오프라인, 해결/미해결 상태가 있다.
- 첫 화면에서 안전 경고와 녹음 동작이 3초 안에 보인다.
- 390px에서 장갑 조작을 가정한 48px 터치 영역과 고대비가 유지된다.

## Development start prompt

```text
Build an offline-friendly machine-audio training companion with QR machine selection, ten-second recording, three veteran-labeled comparisons, uncertainty, mandatory safety checks, and shift handoff. Do not claim automatic diagnosis.
```

## Copy/paste-ready Stitch prompt

Create a responsive Korean field app called “설비 소리 족보” for small factories losing troubleshooting knowledge as veterans retire. Begin with a machine QR/ID and a large ten-second recording ring usable with gloves. After recording, compare the waveform and sound to three veteran-labeled examples, let the worker audition each, and show uncertainty clearly. Never declare a diagnosis; instead unlock a physical safety sequence—lockout, temperature, vibration, guard check—then record solved, unresolved, or escalate-to-senior and hand the result to the next shift. Required sections: machine ID, recorder, waveform, three references, confidence, safety sequence, resolution, handoff, and offline state. Design direction: use the field-ops profile with graphite and steel, one vivid cyan accent, 48px controls, high-contrast status rows, and no decorative factory dashboard.
