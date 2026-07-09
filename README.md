# Prototype Factory (댕댕봇 x Fast-Prototype)

<!-- styleseed-default-ui:start -->
## StyleSeed UI Standard

This project uses [StyleSeed](https://github.com/bitjaru/styleseed) as the default UI/design-judgment layer for future UI work.
Agents and contributors should read https://styleseed-demo.vercel.app/llms.txt before changing UI and apply StyleSeed rules to pages, components, dashboards, mobile screens, HUDs, UI states, and motion details.

Core expectations:
- one coherent accent/radius/shadow/spacing/icon system;
- semantic tokens instead of random hardcoded colors;
- content inside cards/surfaces with clear hierarchy;
- real loading/empty/error/success states and wired interactions;
- no generic StyleSeed/library showcase left in place of product-specific UI.
<!-- styleseed-default-ui:end -->

목표: **매일 8개 프로토타입 생산 → GitHub에 축적 → 갤러리(랜딩)에서 자동 수집 → 4개 선별해 서비스로 승격**

추가 운영 계약: 일일 아이데이션 단계에서는 기본적으로 **후보 8개 + Stitch 프롬프트 8개 전체 전달**을 표준으로 한다.
단, 2026-07-02 이후 PF 아이데이션은 "환각 발상"이 아니라 **현실 신호 번역**으로 운영한다. AI는
아이디어를 꾸며내는 발상기가 아니라, 검색/커뮤니티/현장 신호를 제품 후보와 Stitch 프롬프트로
압축하는 번역기다. 결정 배경은 `docs/IDEATION_PIVOT_2026-07-02.md`에 기록한다.

## 0) 운영 원칙
- 아이디어 생성 단계: 현실 신호 먼저, AI 조합은 나중. 근거 없는 환각형 후보는 초안에도 올리지 않는다.
- 출고(QC) 단계: 사실/리스크/구현가능성 체크
- 결과물은 항상 **Preview URL + README + 스크린샷** 포함
- 일일 아이디어 배치는 기본적으로 **실전형/상업형만 고집하지 않는다**. 권장 구성은 `실전형 5~6 + 재미/실험형 또는 현장형 2~3`.
- 일일 아이데이션 산출물은 기본적으로 **아이디어 8개와 해당 Stitch 프롬프트 8개 전체**를 그대로 전달한다. 축약본만 보내지 않는다.
- 재미/실험형은 즉시 수익화가 약해도 괜찮지만, 대신 시각적 재미, 스토리, 공유성, 포트폴리오 가치 중 하나는 분명해야 한다.
- 사용자가 당일 테마 프레임을 주면 그날 배치는 그 프레임을 따른다. 단, 기존 7축(`성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전`)은 강제 프레임이 아니라 필요할 때만 쓰는 사용자 동기 해석 렌즈다.
- 8개 배치에서는 "세상에 없는 아이디어"를 억지로 만들지 않는다. 이미 반응이 검증된 앱/게임/서비스/오프라인 운영 틀을 찾고, 그 틀을 한국형·니치 사용자군·더 짧은 룰·더 강한 조작감·다른 유통 맥락으로 변형한다.
- 최종 8개는 국내형 4개 + 해외형 4개를 기본값으로 한다. 해외 신호는 그대로 복붙하지 말고 한국 적용 가능성 또는 해외 특화성을 분명히 구분한다.
- 최종 8개는 같은 원형 패턴, 같은 소스 레인, 같은 문제 유형에서 2개를 초과하면 실패다. 초과 시 다시 선별한다.
- 모든 최종 후보는 `reference_pattern`, `twist`, `small_group_fit`, `spread_trigger`를 남긴다. GitHub 기반 후보는 추가로 `source_repo`, `why_starred`, `first_screen`, `share_or_play_loop`를 남긴다.
- `/pf idea`와 daily Phase A는 `Hada Signals`, `GitHub Rising Repo Scan` 또는 GitHub Top100 scan, 커뮤니티 불평/질문, 비웹/현장 행동을 먼저 기록한다. GitHub 후보를 쓰지 않더라도 스캔 결과와 탈락 이유는 남긴다.
- "Hada를 봤다"고 말하려면 실제 `news.hada.io` 제목/링크/행동 신호/후보 반영 여부가 아이디어 파일에 남아 있어야 한다. 소스 레인 이름만 적는 것은 확인으로 보지 않는다.
- GitHub Top100 또는 상위 repo 기반이라고 말하려면 실제 repo 목록, star/rank 근거, 후보별 `source_repo`와 `why_starred`가 남아 있어야 한다.
- Phase A 완료 전에는 `node scripts/verify-phase-a-sources.mjs --date YYYY-MM-DD`를 실행해 source gate를 통과해야 한다.
- 일일 기본 배치는 항상 `p001`부터 `p008`까지 8개를 만든다.
- 일일 배치는 아이디어 문서의 후보 수, 실제 `prototypes/YYYY-MM-DD-p001~p008-*` 폴더 수, publish된 항목 수가 일치해야 완료로 인정한다.
- `/pf sti` 완료 기준도 기본적으로 당일 8개 전체 ingest, review gate, build, commit, push까지 포함한다.

## 1) 레포 구조(권장)
```
repo-root/
  prototypes/
    2026-02-02-p001-<slug>/
      meta.json
      README.md
      screenshot.png (optional)
      demo/ (demo entry + assets)
      web/ (생성된 Next.js UI 또는 static)
  site/ (프로토타입 갤러리/랜딩 Next.js)
  scripts/
    build-index.mjs
```

## 2) meta.json 스펙(갤러리 자동수집)
`prototypes/<id>/meta.json`
```json
{
  "id": "2026-02-02-p001",
  "title": "<짧은 이름>",
  "oneLiner": "<한 줄 가치>",
  "tags": ["ai", "productivity"],
  "status": "prototype",
  "stack": ["nextjs", "tailwind", "shadcn"],
  "repoPath": "prototypes/2026-02-02-p001-<slug>",
  "previewUrl": "https://...",
  "createdAt": "2026-02-02"
}
```

## 3) 오늘 해야 할 일(체크리스트)
- [ ] (자동화) 오늘 프로토타입 폴더 스캐폴딩 생성
  - 예: `node scripts/new-proto.mjs --title "..." --oneLiner "..." --tags ai,decision-making`
- [ ] (선택) GitHub/Vercel 연동
- [ ] (선택) n8n/cron으로 자동 커밋/푸시/알림

## 3-1) 템플릿 기반 프로토타입 생성
`scripts/new-proto.mjs`는 Next.js 템플릿 복사를 지원합니다.

- 옵션: `--template <proto|auth|map|commerce|none>` (기본값: `proto`)
- 템플릿을 선택하면 새 프로토타입 폴더 내부 `app/`에 템플릿 앱이 복사됩니다.
- 스펙 문서(`spec/prd.md` 등)는 기존과 동일하게 생성됩니다.
- demo는 기본 생성되며, `--demo-template <landing|dashboard|form|minimal>` (기본값: `dashboard`)로 스타일을 선택할 수 있습니다.
- `--no-demo`를 주면 `demo/` 생성을 건너뜁니다.

예시:
```bash
node scripts/new-proto.mjs --title "Auth Onboarding" --oneLiner "Fast auth UI" --template proto
node scripts/new-proto.mjs --title "Proto 기본" --template proto
node scripts/new-proto.mjs --title "Auth Onboarding" --template auth
node scripts/new-proto.mjs --title "Neighborhood Map Finder" --template map
node scripts/new-proto.mjs --title "Simple Product Grid" --template commerce
node scripts/new-proto.mjs --title "Daily Metrics" --demo-template dashboard
node scripts/new-proto.mjs --title "No demo example" --no-demo
```

템플릿 위치:
- `templates/nextjs/proto-app`
- `templates/nextjs/auth-ui`
- `templates/nextjs/map-ui`
- `templates/nextjs/commerce-ui`
- `templates/demo/landing/demo`
- `templates/demo/dashboard/demo`
- `templates/demo/form/demo`
- `templates/demo/minimal/demo`

## 3-2) Demo 동작 방식
- demo 파일은 `prototypes/<folder>/demo/`에 생성됩니다.
- `node scripts/build-index.mjs` 실행 시 demo 폴더가 `site/public/demos/<id>/`로 복사됩니다.
- 갤러리에서는 `/d/<id>` 경로로 demo를 확인합니다.

## 4) n8n 파이프라인(개요)
1) Cron(평일/매일 원하는 시간)
2) `scripts/worktree-new "pf/<date>/<slug>" origin/main`으로 새 worktree 생성
3) 신호 수집: Hada/current news, GitHub rising repos, 커뮤니티 불평/질문, 비웹/현장 행동을 분리 기록
4) 선별 게이트: 12~16개 후보를 만들고 국내/해외, `reference_pattern`, `twist`, `small_group_fit`, `spread_trigger`, 중복/쏠림을 검사
4-1) source gate: `node scripts/verify-phase-a-sources.mjs --date YYYY-MM-DD`로 Hada/GitHub/커뮤니티/현장 신호 증거를 검증
5) LLM: 통과한 8개 전부의 Stitch 프롬프트를 작성하고, `p001~p008` 스캐폴드/스펙을 모두 생성
6) Stitch 결과도 기본적으로 8개 전부 ingest하여 `/d/2026-..-p001~p008`까지 출고
7) Fast-Prototype 실행(필요 시 선택된 후보를 코드 프로토타입으로 승격)
8) worktree 안에서 `scripts/worktree-merge-squash feat "<summary>" main`으로 로컬 squash merge
9) GitHub 푸시 / Vercel Preview/Deploy (site는 자동으로 prototypes index 읽음)
10) Telegram 알림: 오늘의 8개 프로토타입 링크

상세 규칙과 예시는 `WORKTREE.md` 참고.

> Fast-Prototype를 n8n에서 쓰려면: (A) 로컬/서버에서 **CLI 실행** 또는 (B) **HTTP endpoint**로 감싸는 방식이 필요.

## 5) 내가 주인님께 질문 3개(다음 단계 확정용)
1) GitHub 레포는 어디에 만들까? (계정/조직 이름)
2) Vercel은 개인 계정? 팀?
3) Fast-Prototype는 지금 **어느 머신에서** 돌릴 계획? (Windows 경로가 문서에 있어 보여서)
