# PRD — Hostile-Parent Email Slow-Cook Reply Console (p002)

## Problem
- K-12 교사/학원 강사/입시 컨설턴트는 학부모 분노 메일마다 1) 24시간 보류 결정 2) 1줄 회신 작성 3) immutable 기록 4) 교감/admin forward 5) 감정 보호를 매번 새로 함. r/Teachers "never reply to angry emails" 합의만 있고 24시간 보류 + immutable 로그 + forward 패킷 통합 도구 부재.

## Target user
- K-12 교사, 학원 강사, 입시 컨설턴트, 코치 (KR/EN) — 주말/야간 메일 폭격에 시달리는 1차 교사.

## Arrival path
- r/Teachers hostile parent email thread → "hostile parent email" 검색 → 본 도구.

## Business / validation route
- 무료 + 학교/교육청 단위 라이선스 ($99/학교/연) + 상담 referral.

## Core loop
- paste (subject + body + timestamp) → 24시간 slow-cook 큐 (자동 보류) → 24시간 후 1줄 회신 템플릿 3종 (중립/공감/사실) → immutable 로그 → forward 패킷.

## First screen
- email paste + 24시간 slow-cook 카운트다운.

## Key screens
- email paste, slow-cook queue, reply template 3-pack, immutable log, forward packet, anger gauge 1-100 + 5-category breakdown.

## Interaction rules
- paste 즉시 큐 진입; 24시간 후 템플릿 해제; 로그 immutable; forward 1-click.

## Output artifact
- forward 패킷 PDF + 회신 템플릿 복붙.

## Share / return loop
- "24시간 보류했더니 답장이 1줄로 끝났어요" 후기.

## Constraints
- Time: paste → 1분 안에 큐 진입.
- Budget: 무료 + 학교 라이선스.
- Platform: web (desktop + mobile).

## Non-goals
- 분노 메일에 즉시 답장하는 도구 아님.
- 전문 상담/법률 자문 아님.
- 교사 평가 시스템 아님.

## Success metrics
- 24시간 카운트다운 정확도, 템플릿 de-escalation 효과, forward 패킷 가독성.
- Spread: "1줄로 끝났어요" 후기 재공유율.

## QA / screenshot criteria
- 4 sample hostile parent emails 모두 큐/로그/forward 패킷 채워짐.
- 분노 점수 1-100 + 5-category breakdown 표시.
- 24시간 카운트다운 정확.
- 모바일 1-hand 가능.

## Source signal refs
- S3 (r/Teachers hostile email), S7 (r/Teachers never reply mantra), S11 (r/Teachers documentation thread).

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Hostile-Parent Email Slow-Cook Reply Console (p002) as a polished local HTML/React prototype from this PRD.

Goal:
- Paste parent email → 24-hour slow-cook queue → 3 reply templates → immutable log → forward packet → anger gauge in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 4 realistic sample hostile parent emails and complete UI states.
- Include 24h countdown, 1-click copy, immutable log, forward 1-click.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for desktop and mobile.
```

## Notes
- 디자인 프로파일: calm-consumer.
- 토픽: 건강/외로움.
- Theme interpretation: 교사 소진 + 고립.
