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
- [ ] GitHub 레포 생성 (private/public 선택)
- [ ] Vercel 프로젝트 생성 (site 배포)
- [ ] `BRAVE_API_KEY`(웹검색용) 필요하면 추가
- [ ] n8n에서 GitHub/Vercel 자격증명 연결

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
