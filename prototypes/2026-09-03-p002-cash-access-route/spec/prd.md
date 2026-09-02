# PRD — 현금 되는 길

## Problem
ATM이 줄어든 동네에서 오늘 실제로 현금을 찾거나 입금할 수 있는 경로를 인쇄 가능한 한 장으로 만든다.

## Target user
지방 거주 고령자, 현금 매출 시장 상인, 이들을 돕는 가족·복지사.

## Arrival path
Search, community referral, or the trigger moment described in today's idea board.

## Business / validation route
Test whether the target user completes the core loop and shares or returns to the output artifact.

## Core loop / key UX
출금·입금·통장 목적 선택 → 접근조건 → 성공확률 높은 경로 비교 → 전화 확인 → 큰글씨 출력.

## First screen
Make the trigger, primary action, and next outcome understandable in three seconds.

## Required UI sections
큰 목적 버튼; 지도/목록; 시설 상태; 경로 비교; 전화 확인 문장; A4 큰글씨 출력; 실패 제보.

## Design
- Assigned profile: `field-map`
- Theme: 금융 접근성·현장 이동

## Source signals
S3, S12 from `daily/2026-09-03/ideas.md`.

## Interaction rules
The main interaction must be functional in the later demo; include loading, empty, error, and completed states.

## Output artifact
A shareable or printable result specific to the idea, not a generic analytics summary.

## Share / return loop
Use the candidate-specific spread trigger in today's idea board.

## Constraints
- Phase A is spec-only; no custom demo.
- No external paid API required for prototype validation.

## Non-goals
- Production integrations, legal guarantees, or hidden automation.

## Success metrics
- User understands the first action in three seconds.
- User can finish one realistic core loop with sample data.

## QA / screenshot criteria
모바일 첫 화면에 목적 버튼과 1순위 경로가 보이며 오래됨·고장·접근불가 상태가 명확하다.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p002 in `daily/2026-09-03/ideas.md`.
