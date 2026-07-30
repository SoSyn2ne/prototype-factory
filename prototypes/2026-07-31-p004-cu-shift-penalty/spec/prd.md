# PRD — KR 편의점 시프트/알바비 Penalty 시뮬레이터 (p004)

## Problem
- 편의점 점주 5만 6천개 + 1인 자영업자는 2026 최저임금 1.3만 + 인건비 매출 40% + 19시간 단축 압박 + 무인화 압박을 매번 엑셀로 계산. 시프트/급여/4대보험/owner 노동시간을 단일 화면에서 시뮬레이션하는 도구 부재.

## Target user
- CU/GS25/세븐일레븐 점주, 1인 자영업자, 매장 운영자 (KR, 모바일/태블릿).

## Arrival path
- 점주 카페/블라인드 → "편의점 인건비 시뮬레이터" 검색 → 본 도구.

## Business / validation route
- 무료 + 소상공인 정책자금/카드 referral.

## Core loop
- 입력 (예상 매출/주, 시급, 주간 시프트 수, 직접 나오는 시간, 4대보험 여부) → 3 시나리오 (현행/19시간 단축/부분 무인화) → 인건비 비중, 시급 penalty, owner 노동시간 → 시프트 7칸 자동 분배 → 소상공인 정책자금 CTA.

## First screen
- 입력 + 3 시나리오 카드.

## Key screens
- input, 3-scenario simulator, week shift grid, owner labor-hour gauge, support-program CTA.

## Interaction rules
- 모바일/태블릿 1-hand. 1분 안에 1 시나리오 결정.

## Output artifact
- 시프트 PNG + 시뮬레이션 PDF.

## Share / return loop
- "내 점포 19시간 단축 시 월 80만원 절약" 캡처.

## Constraints
- Time: 1분 안에 시나리오 결정.
- Budget: 무료.
- Platform: web (mobile + tablet).

## Non-goals
- POS 시스템 대체 아님.
- 세무 신고/회계 처리 아님.
- 실제 급여 지급 처리 안 함.

## Success metrics
- 인건비/4대보험 정확도, 시프트 분배 현실성, 지원금 freshness (≤ 14일).
- Spread: "월 80만원 절약" 캡처 재공유율.

## QA / screenshot criteria
- 4 sample stores 모두 3 시나리오 + 시프트 7칸 채워짐.
- 정책자금 CTA 5개 이상 표시.
- 모바일/태블릿 1-hand 가능.
- KR-only copy.

## Source signal refs
- S4 (KR 최저임금 1.3만 + 편의점 인건비 40%), S8과 별개.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build KR 편의점 시프트/알바비 Penalty 시뮬레이터 (p004) as a polished local HTML/React prototype from this PRD.

Goal:
- Input 매출/시급/시프트/owner 시간/4대보험 → 3 scenarios + week shift 7-grid + owner labor-hour gauge + 정책자금 CTA in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 4 realistic sample stores and complete UI states.
- Include 0.5s simulator recompute, 1-click shift assign, 1-click policy CTA.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for mobile and tablet.
```

## Notes
- 디자인 프로파일: financial-analyst.
- 토픽: 자산 방어.
- Theme interpretation: 1인 자영업자 매출 + 노동시간 방어.
