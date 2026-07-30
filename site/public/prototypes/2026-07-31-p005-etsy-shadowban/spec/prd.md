# PRD — Etsy Listing Shadowban Diagnostic + Refresh Plan (p005)

## Problem
- Etsy 셀러는 매주 1개 신상품 + 15단어 타이틀 압박 + 6-category 진단 + refresh 우선순위를 흩어둠. r/Etsy de-indexing trauma (2025-11-06): 1) bestseller 갑자기 죽음 2) Vacation Mode toggle이 신호가 될까 두려움 3) 어떤 listing이 위험한지 모름. 통합 listing health check + refresh 우선순위 도구 부재.

## Target user
- 1인~10인 Etsy 셀러 (EN), 핸드메이크/디지털/빈티지/print-on-demand 운영자.

## Arrival path
- r/Etsy de-indexing thread → "algorithm 2026" 검색 → 본 도구.

## Business / validation route
- $7/mo (1 shop) + $19/mo (5 shop) + EtsyHunt/eRank 대체.

## Core loop
- shop URL or paste 10 listings → per-listing shadowban 위험 점수 1-100 → 6-category diagnostic (타이틀 15단어/오래된 신호/이미지 CTR/Etsy Ads 효율/카테고리 mismatch/시즌 부적합) → 이번 주 refresh 우선순위 3개 → 1-click 타이틀 15단어 시안 3종 + 태그 시안 10개 → Vacation Mode toggle 안전성 advisory.

## First screen
- shop input + listing별 점수 grid.

## Key screens
- shop/listing input, per-listing score grid, 6-category radar, refresh priority 3, title/tag generator, vacation mode advisory.

## Interaction rules
- paste 0.5초 안에 점수; 1-click 타이틀/태그; 1-click vacation advisory.

## Output artifact
- refresh 1-pager PNG + title/tag 복붙.

## Share / return loop
- "내 shop listing 78점" 캡처 + refresh 후 매출 변화 후기.

## Constraints
- Time: paste → 0.5초 점수, 1분 안에 refresh 1-pager.
- Budget: $7~19/mo SaaS.
- Platform: web (desktop + mobile).

## Non-goals
- 실제 Etsy Ads 자동 입찰 아님.
- Etsy SEO 완전 자동화 아님.
- Etsy 정책 자문 아님.

## Success metrics
- 점수 재현성 (F1 ≥ 0.80), 1-click title/tag 품질 (자연스러움 + 15단어 이내), vacation advisory 정확도.
- Spread: "내 shop listing 78점" 캡처 + refresh 후 매출 변화 후기.

## QA / screenshot criteria
- 10 sample listings 모두 점수 + 6-category + refresh 시안 채워짐.
- vacation advisory toggle 정확.
- desktop + mobile 1-hand 가능.
- EN-only copy.

## Source signal refs
- S5 (Marmalead Etsy 2026 algorithm), S10 (r/Etsy de-indexing 2025-11-06), S1과 별개.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Etsy Listing Shadowban Diagnostic + Refresh Plan (p005) as a polished local HTML/React prototype from this PRD.

Goal:
- shop URL or paste 10 listings → per-listing score 1-100 + 6-category diagnostic + refresh priority 3 + 1-click title/tag + vacation advisory in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 10 realistic sample listings and complete UI states.
- Include 0.5s per-listing score, 1-click title/tag generator, 1-click vacation advisory.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```

## Notes
- 디자인 프로파일: financial-analyst.
- 토픽: 자산 방어.
- Theme interpretation: Etsy 셀러 매출 + listing visibility 방어.
