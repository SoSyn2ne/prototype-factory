# PRD — AI 도구 가치 재판

## Problem
AI 업무도구의 세일즈 주장과 실제 팀 테스트 결과를 같은 화면에서 판결한다.

## Target user
AI SaaS 구독을 검토하는 5–50인 한국 영업·개발팀 리더.

## Arrival path
Search, community referral, or the trigger moment described in today's idea board.

## Business / validation route
Test whether the target user completes the core loop and shares or returns to the output artifact.

## Core loop / key UX
주장 붙여넣기 → 실제 업무 3건 전후 기록 → 반대 증거 → 구매·보류·기각 판결문.

## First screen
Make the trigger, primary action, and next outcome understandable in three seconds.

## Required UI sections
주장 도크; 3건 파일럿; 시간/품질 증거; 통합 마찰; 반대심문; 판결문; 갱신 알림.

## Design
- Assigned profile: `operator-dense`
- Theme: SaaS 비용 방어·검증

## Source signals
S7, S11 from `daily/2026-09-03/ideas.md`.

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
주장과 증거가 구분되고 테스트 미완료·통합 실패·근소한 승리 상태가 있다.

## Development start prompt
Use the full copy/paste-ready Stitch prompt for p003 in `daily/2026-09-03/ideas.md`.
