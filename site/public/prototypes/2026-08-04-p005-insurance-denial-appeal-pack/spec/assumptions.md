# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Source signal references captured in daily/2026-08-04/ideas.md (S8).
- Design profile fixed: financial-analyst.
- Stitch prompt saved in this PRD's "Development start prompt" section.

## ASSUMPTION
- 미국 환자는 "Not Medically Necessary" denial을 받았을 때 5단계 항소 + payer별 회신 기한 + letter 3-pack + 의료진 협조 — 를 매번 새로 작성. 기존 Medwave/etactics 가이드는 정적 letter만.
- 미국 거주 환자/보호자, 만성 질환자, expensive procedure denial 직면..
- paste → payer 매칭 → 5단계 → letter 3-pack → 의료진 협조 → log..

## UNKNOWN
- Live scraping / real API integration is intentionally out of scope.
- US state law / payer policy freshness is not guaranteed; user must verify.
