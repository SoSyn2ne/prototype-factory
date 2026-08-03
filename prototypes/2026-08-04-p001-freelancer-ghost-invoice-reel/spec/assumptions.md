# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Source signal references captured in daily/2026-08-04/ideas.md (S6).
- Design profile fixed: financial-analyst.
- Stitch prompt saved in this PRD's "Development start prompt" section.

## ASSUMPTION
- US 프리랜서/소규모 에이전시는 invoice ghosting(클라이언트 응답 없음 + 미지급) 발생 시 1) Stop work 결정 2) debt collection letter 작성 3) small claims court 가액 평가 4) legal escalation 비용 추정 — 을 매번 새로 작성한다. 기존 DocuSign/Notion 템플릿은 작성만 도와주고 회수 가능성 점수 + 권장 단계를 추천하지 않는다.
- 1인~5인 US 프리랜서, 디자이너/개발자/카피라이터/컨설턴트 (EN)..
- invoice paste → 회수 점수 → 4단계 추천 → 톤 3-pack → log..

## UNKNOWN
- Live scraping / real API integration is intentionally out of scope.
- US state law / payer policy freshness is not guaranteed; user must verify.
