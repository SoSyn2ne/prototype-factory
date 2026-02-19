# site (Prototype Gallery)

Next.js + Tailwind + shadcn/ui로 프로토타입 갤러리(랜딩) 구성.

## 데이터 소스
- `public/prototypes-index.json` (루트 `scripts/build-index.mjs`가 생성)

## 페이지 구성(권장)
- `/` 최신 프로토타입 카드 그리드
- `/p/[id]` 상세(README 렌더 + preview 링크)
- 태그 필터/검색

## 배포
- Vercel
- Build 전에 루트에서 `node scripts/build-index.mjs` 실행되게 세팅(로컬/CI)
