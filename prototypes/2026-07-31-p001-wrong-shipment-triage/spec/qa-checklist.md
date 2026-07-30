# QA checklist — p001 Wrong-Shipment Address Triage Console

## Happy path
- 입력 (상황 = wrong address, 응답 시간 = 12h, 플랫폼 = Etsy, 금액 = $80, EN/KR = EN) → 3분기 카드 모두 채워짐.
- 분기 A 선택 → EN 템플릿 1-click copy 정상.
- 1-star defense 1-pager PNG export 정상.
- 비용 ledger $24 surcharge 자동 합산.

## Edge cases
- 금액 < $20 (refund 분기 우선) → 분기 가중치 변화.
- 응답 시간 > 72h (3분기 동일) → 모두 refund 쪽.
- 플랫폼 = Shopify vs Etsy (분쟁 정책 차이) → 분기 다름.
- EN/KR toggle 즉시 텍스트 변환.
- 모바일 1-hand 인터랙션.

## Acceptance verification
- 6 sample situations 모두 3분기 카드 채워짐 (재현율 ≥ 0.85).
- EN/KR 템플릿 5개 × 6 situations = 30개 모두 자연스러움.
- 1-pager PNG export 정상.
- 모바일 1-hand 가능.
- 비용 ledger 정확도 (surcharge ±$0).
