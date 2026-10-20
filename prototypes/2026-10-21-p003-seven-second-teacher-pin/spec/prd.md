# PRD — 수업 중 7초 기록핀

## Product intent / problem
교사는 수업·채점보다 IPP, EAL, 생활기록과 감사용 증거 작성에 자유 시간을 쓴다. 수업 뒤 기억을 복원하는 방식은 시간도 많이 들고 관찰 근거도 약해진다.

## Target user
개별화교육, 언어발달, 생활기록 근거를 반복 작성하는 초중등 교사와 특수교사.

## Arrival path
수업 시작 홈화면, 좌석표 QR/NFC, 학교 서식 작성 전에 진입한다.

## Business / validation route
교사 5명이 모의 관찰 30건을 기존 메모 방식과 비교해 캡처시간, 수정시간, 개인정보 누락, 승인 정확도를 측정한다. 학교/학급 단위 라이선스를 검증한다.

## Core loop / key UX
학생 별칭 선택 → 7초 음성/사진 캡처 → 로컬 비식별화 → 관찰·기준·다음 행동 칩 → 교사 승인 → 서식 내보내기.

## First screen
수업 타이머, 학생 별칭, 큰 음성/사진 버튼만 보여 수업 집중을 끊지 않는다.

## Required UI sections
- 별칭 학생 스트립과 수업 타이머
- 7초 음성·사진 캡처
- 원본과 로컬 비식별화 미리보기
- 관찰·기준·다음 행동 칩
- 학교 서식 매핑과 교사 승인
- 감사 이력, 삭제, 내보내기

## Assigned profile and theme
- Design profile: calm-consumer
- Theme: 서류 노동을 줄이되 교사의 판단권과 학생 개인정보를 지키기

## Source signal references
- S08: 감사용 문서 때문에 수업·채점 시간을 잃는 교사들 — https://www.reddit.com/r/CanadianTeachers/comments/1x1yxle/im_drowning_in_paperwork/

## Interaction rules
- 학생 실명 대신 별칭을 먼저 사용한다.
- 자동 생성 문장은 교사 승인 전 내보낼 수 없다.
- 원본 근거와 수정된 요약의 연결을 유지한다.
- 사용자가 즉시 삭제하면 내보내기와 이력에서도 제거됨을 확인한다.

## Output artifact
원본 근거, 비식별화, 교사 승인 이력이 연결된 학교 서식용 관찰 카드.

## Share / return loop
승인된 최소 관찰 카드를 동학년 협의와 보호자 회의에 재사용하고, 주간 절약 시간을 교사에게 돌려준다.

## Constraints
- 실제 학생 데이터나 외부 AI API를 쓰지 않고 로컬 모의를 사용한다.
- 자동 평가, 진단, 점수 산출을 하지 않는다.
- 44px 터치, 오프라인, 한 손 조작을 지원한다.

## Non-goals
- 학급 관리 ERP, 자동 성적표, 학생 감시 도구를 만들지 않는다.

## Success metrics
- 교사가 7초 이내에 관찰 캡처를 끝낸다.
- 승인 전 개인정보 노출 경고를 100% 발견한다.
- 기존 방식 대비 서식 완성 시간이 30% 이상 줄어드는지 검증한다.

## QA / screenshot criteria
- 첫 화면은 캡처 외 부가 기능을 숨긴다.
- 녹음 중, 오프라인, 가림 전후, 승인 대기, 수정, 삭제, 내보내기 상태가 있다.
- 390px에서 엄지로 학생 별칭과 캡처 버튼을 조작할 수 있다.

## Development start prompt

```text
Build a local-first classroom observation flow with alias roster, seven-second voice/photo capture, redaction preview, evidence chips, teacher approval, audit history, and template export. Mock processing locally and never auto-invent assessments.
```

## Copy/paste-ready Stitch prompt

Create a responsive Korean teacher tool called “수업 중 7초 기록핀” for educators drowning in IPP, EAL, and audit evidence. The first screen must stay quiet during class: a lesson timer, student aliases, and two oversized controls for a seven-second voice note or photo. After capture, show a local redaction preview, keep the original evidence visible, suggest editable observation/criterion/next-step chips, and require explicit teacher approval before mapping to a school form. Include offline state, delete-now control, audit history, and a clean export preview; never imply that the system evaluates a child automatically. Required sections: alias roster, capture, redaction, evidence chips, template mapping, approval, history, and export. Design direction: use the calm-consumer profile with warm neutrals, one gentle indigo accent, generous spacing, 44px controls, reassuring privacy copy, and no dense school administration dashboard.
