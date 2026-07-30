# PRD — Wrong-Shipment Address Triage Console (p001)

## Problem
- 1인 셀러는 잘못된 주소/빈 박스/사진 부재 클레임마다 (a) 재발송 vs 부분환불 vs 전액환불 (b) 클라이언트 부담 청구 가능성 (c) 부정 리뷰 방어 (d) 비용 ledger를 매번 새로 작성. Shippo 보고서 기준 주소 오류 시 UPS/FedEx $23.50~$24/패키지 surcharge. Melissa Data 통계: 온라인 주문 5~7%가 주소 오류로 배송 사고.

## Target user
- 1인~10인 Etsy/eBay/Shopify 셀러, KR 직구 셀러, 인쇄/print-on-demand 스튜디오 (KR/EN).
- arrival: r/Etsy + r/smallbusiness "wrong address" thread → 검색 "wrong address reship" → 본 도구.

## Arrival path
- r/Etsy + r/smallbusiness "wrong address" thread → 검색 "wrong address reship" → 본 도구.

## Business / validation route
- SaaS $9/mo (50 triage/월) + $29/mo (무제한) + Shopify/Etsy 앱 스토어 listing.

## Core loop
- 입력 (상황/응답 시간/플랫폼/금액) → 3분기 의사결정 카드 (A/B/C) → EN/KR 템플릿 → 부정 리뷰 방어 1-pager → 비용 ledger (surcharge 자동 합산).

## First screen
- 상황 입력 + 3분기 카드 (A: 재발송+청구 / B: 부분환불 / C: 전액환불+방어).

## Key screens
- situation input, 3-branch decision card, template pack (EN/KR), review-defense 1-pager, history + cost ledger, EN/KR toggle.

## Interaction rules
- 입력 변경 시 0.5초 안에 분기 재계산; 템플릿 1-click 복사; 1-pager 1-click export.

## Output artifact
- 1-page PNG/PDF (분기 + 템플릿 + 비용 ledger).

## Share / return loop
- "내 주문 3분기 A 골랐어요" 캡처 → 동료 셀러 공유.

## Constraints
- Time: 1분 안에 결정.
- Budget: 노션/엑셀 무료 + ad.
- Platform: web (desktop + mobile).

## Non-goals
- 실제 Etsy dispute center 대체 아님.
- 실제 결제 처리 안 함.
- 부동산업/주거 임대 클레임 별개.

## Success metrics
- 3분기 일관성 (F1 ≥ 0.85), 템플릿 자연스러움, 비용 ledger 정확도 ($23.50/~$24).
- Spread: "내 주문 3분기 A" 캡처 재공유율.

## QA / screenshot criteria
- 6 sample situations 모두 3분기 카드 채워짐.
- EN/KR 템플릿이 모든 분기에 존재.
- 1-pager PNG export 정상.
- 모바일 1-hand 가능.

## Source signal refs
- S1 (r/Etsy + r/smallbusiness wrong address threads), S2 (Shippo + Melissa Data cost data), S10 (Etsy shadowban trauma와 별개).

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Wrong-Shipment Address Triage Console (p001) as a polished local HTML/React prototype from this PRD.

Goal:
- 3-branch decision card (A/B/C) + EN/KR template pack + 1-star review defense 1-pager + cost ledger in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 6 realistic sample situations and complete UI states.
- Include 3-branch recompute, 1-click copy, 1-click 1-pager export.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```

## Notes
- 디자인 프로파일: financial-analyst.
- 토픽: 자산 방어.
- Theme interpretation: 셀러 매출 + 평판 방어.
