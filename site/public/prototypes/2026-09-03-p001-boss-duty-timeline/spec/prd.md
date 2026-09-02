# PRD — 사장님 의무 타임라인

## Problem
바뀐 노무·보험 의무를 날짜별 증빙 행동으로 바꿔주는 5인 미만 사업장 릴레이.

## Target user
노무 담당자가 따로 없는 한국의 1–5인 매장·공방 사장.

## Arrival path
Search, community referral, or the trigger moment described in today's idea board.

## Business / validation route
Test whether the target user completes the core loop and shares or returns to the output artifact.

## Core loop / key UX
사업장 조건 입력 → 의무 시간축 → 담당자 지정 → 증빙 첨부 → 주간 완료 영수증.

## First screen
Make the trigger, primary action, and next outcome understandable in three seconds.

## Required UI sections
사업장 스냅샷; 이번 주 의무; 위험 시계; 직원별 증빙 릴레이; 문서 보관함; 전문가 질문 내보내기; 완료 영수증.

## Design
- Assigned profile: `operator-dense`
- Theme: 국내 소상공인 비용·분쟁 방어

## Source signals
S1, S2 from `daily/2026-09-03/ideas.md`.

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
첫 화면에서 다음 마감과 필요한 증빙이 3초 안에 보이며 완료·누락·해당 없음 상태가 있다.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p001 in `daily/2026-09-03/ideas.md`.
