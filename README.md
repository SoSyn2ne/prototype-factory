# Prototype Factory (댕댕봇 x Fast-Prototype)

목표: **매일 1개 프로토타입 생산 → GitHub에 축적 → 갤러리(랜딩)에서 자동 수집 → 4개 선별해 서비스로 승격**

## 0) 운영 원칙
- 아이디어 생성 단계: 제약 최소(엉뚱함 OK)
- 출고(QC) 단계: 사실/리스크/구현가능성 체크
- 결과물은 항상 **Preview URL + README + 스크린샷** 포함

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
2) LLM: 아이디어 3개 생성(제약 거의 없음)
3) LLM: 1개 선택 + 스펙(화면 1~2장)
4) Fast-Prototype 실행(스크린샷→Next.js+Tailwind+shadcn 코드)
5) GitHub 커밋/푸시
6) Vercel Preview/Deploy (site는 자동으로 prototypes index 읽음)
7) Telegram 알림: 오늘의 프로토타입 링크

> Fast-Prototype를 n8n에서 쓰려면: (A) 로컬/서버에서 **CLI 실행** 또는 (B) **HTTP endpoint**로 감싸는 방식이 필요.

## 5) 내가 주인님께 질문 3개(다음 단계 확정용)
1) GitHub 레포는 어디에 만들까? (계정/조직 이름)
2) Vercel은 개인 계정? 팀?
3) Fast-Prototype는 지금 **어느 머신에서** 돌릴 계획? (Windows 경로가 문서에 있어 보여서)
