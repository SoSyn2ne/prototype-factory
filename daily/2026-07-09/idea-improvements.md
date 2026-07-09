# 아이디어 개선 리뷰 - 2026-07-09 배치

> **적용됨 (2026-07-09):** 이 리뷰의 우선순위 1(패턴 통합 + 욕망 축 재선정)은
> `daily/2026-07-09/ideas-reboard.md`로 적용되었다. 신규 후보는
> `prototypes/2026-07-09-p009~p011`로 스캐폴드되었고, 기존 p001-p008
> 폴더와 데모는 보존되었다.

작성 목적: 2026-07-09 Phase A 배치(`daily/2026-07-09/ideas.md`)를
`docs/IDEA_BOARD.md` 게이트와 `docs/IDEATION_PIVOT_2026-07-02.md` 규칙,
그리고 직전 배치(07-07, 07-08)와 비교해 개선 사항을 찾은 결과.

## 요약 판정

07-09 배치는 시그널 수집(S1-S16)과 중복 체크는 성실하지만,
**07-02 피벗에서 명시적으로 금지한 "money-defense / proof-packet 쏠림"이
가장 심한 형태로 재발**했고, 07-07/07-08에 있던 게이트 필드들이
문서 구조에서 사라지는 회귀가 발생했다. IDEA_BOARD 기준으로는
Diversity Gate **fail** — 원칙적으로 재선정 대상 배치다.

## A. 하드 게이트 위반 (재선정 사유)

### A1. 패턴 캡 위반 — 가장 큰 문제
규칙: money-defense / appeal / proof-packet 패턴은 최종 8개 중 최대 2개.
07-09 실제:

| 후보 | 메커니즘 |
|---|---|
| p002 Merchant Fee Negotiation Table | 협상 패킷 (proof packet) |
| p004 Chargeback Evidence Autobox | 분쟁 증거 패킷 |
| p005 Guest Damage Claim Desk | 손해 클레임 증거 타임라인 |
| p006 Teacher Parent Email Shield | 방어 문서화 + 에스컬레이션 로그 |
| p008 Refund Queue Boss Fight | 환불 에스컬레이션 (게임 스킨만 다름) |

5개(넓게 보면 p001 비용 방어까지 6개)가 같은 "증거 모아서 방어" 패턴.
07-09 파일의 novelty 섹션 스스로 "refund/claim evidence"를 최근 반복
패턴으로 인정하면서도 4~5개를 다시 선정했다. 게임 스킨(p008)이나
로컬라이즈(p002)는 IDEA_BOARD 기준 "rename-only variant = 같은 패턴"이다.

### A2. 테마 편중 + 7-드라이버 매핑 소실
규칙: 최소 5개 distinct human-driver 테마, 테마당 최대 2개.
07-08은 `theme: 자산 방어` 식으로 7-드라이버(성욕/외모/사교육/자산 방어/
외로움/건강/역전) 매핑을 유지했는데, 07-09는 "AI cost control",
"Hospitality trust" 같은 ad-hoc 영문 테마로 회귀했다.
7-드라이버로 다시 매핑하면 p001-p005, p008 전부 **자산 방어** 단일 축.
외모/건강/외로움/사교육 축은 0개.

### A3. domestic/overseas 4/4 스플릿 위반
규칙: 기본 국내 4 / 해외 4. 07-09는 p002 하나만 한국 → 1/7.
`Market fit:` 필드 자체가 없어서 게이트 체크가 불가능한 상태.

### A4. 소스 레인 캡 위반
규칙: 같은 소스 레인에서 최종 2개까지.
community/forum 레인(S6, S7, S11-S14, S16)이 p002, p004, p005, p006,
p008 → 5개를 시드. 뉴스 레인이 p001, 정책 레인이 p003 시드.

### A5. non-web / field / offline 발상 0개
규칙: 최소 2개는 non-web, field, offline, printable, script, kiosk,
local-device 행동에서 출발. 07-09는 8개 전부 웹 화면(콘솔/워크벤치/
데스크/게임 UI)이고 Format Roulette 기록도 없다.

### A6. 소비자 욕망/불안 도구 부족
규칙: 최소 2개는 consumer desire/anxiety 도구.
p006(교사)과 p007/p008(fun)을 어떻게 세더라도 욕망 축(외모, 건강,
외로움, 관계)의 소비자 도구는 사실상 0개.

## B. 문서 구조 회귀 (07-07/07-08 대비 사라진 것)

07-07, 07-08 배치에는 있었는데 07-09에서 빠진 필드/섹션:

1. `loved_by_small_group: n/5` 점수 — 텍스트(`small_group_fit`)로
   대체되어 1-5 게이트 판정이 불가능해짐.
2. `Market fit: domestic/overseas` 분류.
3. Stitch 프롬프트 내 pull evidence / 사용자 언어 / trigger moment /
   output artifact / first-screen promise — 07-08 프롬프트는 시그널
   원문 인용까지 포함했지만 07-09 프롬프트는 UI 섹션 나열 + 디자인
   지시만 남았다. IDEA_BOARD의 "Every final Stitch prompt includes
   pull evidence..." 게이트 위반.
4. Need Evidence(N#, Pull 점수), Workaround Proof(W#),
   Search/Community Language(L#), Format Roulette(F#), Desire Lens(D#),
   Candidate Drafts 12-16개, 태그 기반 Kill List — 전부 생략되어
   Signal → Final 8 직행. 플레이북이 금지하는 바로 그 점프.
5. Diversity Gate 섹션(레인/테마/패턴 카운트 + pass/fail 판정) 부재.
   이 섹션이 있었다면 A1-A6은 선정 단계에서 걸렸을 것.
6. GitHub Rising Repo Scan — 목표 ~10개 repo인데 S5(OfficeCLI) 1개뿐.

## C. 시그널 인용 정합성 문제

- p007(선반 위장 스티커 게임)이 S3(KPMG AI 예산 가시성)을 인용 —
  무관한 시그널 패딩. S15 하나로 충분.
- p006(교사 학부모 이메일)이 S1(소상공인 AI 비용)을 인용 — 역시 무관.
- 인용은 개수 채우기가 아니라 pull 증거여야 한다. 무관 인용은
  `article-only` 냄새를 가리는 효과만 낸다.

## D. 후보별 개선 제안

### 유지 (소폭 수정)
- **p001 AI Spend Hold Music**: 근거(S1-S3)는 이번 배치에서 가장 신선.
  단, "hold music"이라는 이름의 은유가 UX 어디에도 없다 — 대기열에
  올려두고 결제 전 강제로 재검토시키는 "보류 대기실" 인터랙션을
  실제 메커니즘으로 살리거나 이름을 바꿀 것. 07-06/07-07의 AI 예산
  도구와의 차별점(human-touch risk)을 첫 화면 sting으로 승격.
- **p003 Digital Passport Supplier Chase**: 정책 데드라인 트리거가
  명확하고 field-ops 성격이 배치 내 유일한 비-대시보드 실무 도구.
  다만 07-06 Product Passport Supplier Sprint와의 경계가 "chase +
  QR gap"뿐이므로, 공급자에게 실제 발송하는 ask-list 아티팩트(인쇄/
  이메일)를 중심 메커니즘으로 더 밀 것.
- **p007 Camouflage Shelf Sprint**: share artifact가 분명. S3 인용 제거.

### 통합/축소 (proof-packet 캡 준수)
- **p004 + p005 + p008**: 셋 다 "증거 카드 모아 플랫폼에 반격" 동일
  메커니즘. 하나만 남길 것. 남긴다면 evidence-box 인터랙션이 가장
  구체적인 p004. p008은 p004의 게임 모드로 흡수 가능(승리 리시트 =
  분쟁 패킷). p005는 kill list로 — revive 조건: 호스트 커뮤니티에서
  클리너-호스트 협업 pull(공유 스프레드시트 등) 직접 증거 확보 시.
- **p002 Merchant Fee Negotiation Table**: 한국 정책 트리거(S8)는
  좋지만 07-08 Korea Delivery Fee Fairness Board와 rename-variant
  경계선. 살리려면 "개인 대시보드"가 아니라 **상인회 단위 공동 증거
  풀 + 교섭 패킷 생성**이라는 collective 메커니즘을 첫 화면에 둘 것.

### 재프레임
- **p006 Teacher Parent Email Shield**: 페인은 진짜(S14)지만 현재
  형태는 evidence-log 패턴 #5. Desire lens로 재프레임하면 사교육/
  관계 축의 소비자 도구가 될 수 있다 — 예: 학부모 쪽에서 쓰는
  "보내기 전 톤 체크" 또는 교사의 감정노동 회복 리츄얼. 재프레임
  없이는 proof-packet 캡에 걸린다.

### 공석 2-3개 재선정 방향 (미사용 desire 축)
시그널 수집 단계부터 편향되어 있으므로(아래 E1), 외모/건강/외로움/
사교육 축에서 재로밍 후 2-3개 재선정:
- 건강: GLP-1/보험 커버리지(07-07에 유사 사례), 여름철 운동/수면 루틴 붕괴.
- 외로움/관계: companion 앱 프라이버시(07-07 p008 계열), 소규모 모임 리츄얼.
- 사교육: 여름방학 캠프/학원 스케줄 패닉(07-08 p004 계열의 다른 트리거).
- non-web 쿼터용: printable/스프레드시트/현장 체크리스트 형태 1개 이상.

## E. 시스템(프로세스) 개선 제안

### E1. 시그널 로밍에 desire-axis 쿼터 도입
07-09의 근본 원인은 선정이 아니라 **수집**이다. S1-S16 자체가
비용/수수료/분쟁/클레임으로 이미 쏠려 있어 어떤 선정을 해도 자산 방어
배치가 나온다. Signal Roam 단계에 "돈 방어 계열 시그널 최대 N개,
욕망/신체/관계/교육 계열 최소 M개" 버킷 쿼터를 명시할 것.
(PLAYBOOK_IDEATION.md의 Signal Roam 절과 IDEA_BOARD.md의 Source Lane
Checklist에 한 줄씩 추가하면 된다.)

### E2. Diversity Gate 섹션을 생략 불가로
07-09처럼 게이트 섹션 자체가 빠지면 위반이 조용히 통과된다.
ideas.md에 `## Final 8` 앞 `### Diversity Gate`(카운트 + pass/fail)가
없으면 Phase A 미완료로 간주하는 규칙을 AGENTS.md/러너 프롬프트에 명시.

### E3. 게이트 린트 자동화
`scripts/`에 간단한 체커 추가 여지: `node scripts/check-idea-gates.mjs
daily/YYYY-MM-DD/ideas.md`가
- p001-p008 존재
- `theme:` 값이 7-드라이버 enum + 테마당 ≤2
- `loved_by_small_group`, `spread_trigger`, `Market fit` 필드 존재
- domestic/overseas 4/4
- proof-packet 키워드(packet/evidence/claim/dispute/appeal) 휴리스틱
  카운트 ≤2 경고
를 검사해 fail 시 비제로 종료. 릴리즈 게이트(커밋 전)에 연결.

### E4. Stitch 프롬프트 템플릿 고정
07-08형 프롬프트(관찰된 pull 인용 + 사용자 언어 + trigger + artifact +
first-screen promise 포함)를 IDEA_BOARD.md의 템플릿 그대로 강제.
07-09형(섹션 나열 + 디자인 지시)은 "stitch-bland-risk"를 그대로 되살린다.

### E5. 시그널 인용 검증
후보의 `source signal references`는 "이 시그널이 없으면 이 아이디어가
성립하지 않는가?"를 통과하는 것만 남길 것. 무관 인용(§C)은 개수
채우기이며 pull 증거 품질을 왜곡한다.

## 우선순위

1. (오늘 배치에 적용한다면) p004/p005/p008 통합 + 욕망 축 2-3개 재선정 — A1/A6 해소.
2. E2 Diversity Gate 생략 불가 규칙 — 재발 방지 중 가장 저비용.
3. E1 시그널 쿼터 — 근본 원인 교정.
4. E4 Stitch 프롬프트 템플릿 복원 — 산출물 품질 직결.
5. E3 린트 스크립트 — 여유 있을 때.
