# PRD — Ambient Memory Review & Redaction Console (p007)

## Problem
- Bee/Plaud/Humane Ai Pin 등 ambient device 사용자는 매일 1) 요약 검토 2) 특정 대화 삭제 3) 검색/내보내기 4) 캘린더/이메일 1-click 삽입을 native app 1종으로 못 함. 통합 review/redaction console 부재.

## Target user
- 20~40대 ambient wearable 사용자 (Bee, Plaud Note, Humane Ai Pin) — KR/EN, 직장인 + 컨설턴트 + 크리에이터.

## Arrival path
- Bee/Plaud 마이크로소프트 → Plaud blog → 본 도구.

## Business / validation route
- $4.99/mo (Bee/Plaud 호환) + .md/.ics export 무제한.

## Core loop
- 오늘의 요약 카드 (3-7 bullet) + 원본 오디오/텍스트 snippet 미리듣기 + 액션 (삭제/유지/편집) + 1-click 캘린더/이메일/노션 export + 검색 (날짜/키워드/감정) + export (.md / .txt / .ics).

## First screen
- 오늘의 요약 카드 1장.

## Key screens
- summary card, original snippet player, action tray (delete/keep/edit), 1-click export targets, search, export drawer.

## Interaction rules
- 모바일/태블릿 1-hand. snippet 1-click preview.

## Output artifact
- export .md / .ics.

## Share / return loop
- "오늘 요약 → 캘린더 1-click 삽입" 트위터 공유.

## Constraints
- Time: 30초 안에 export.
- Budget: $4.99/mo SaaS.
- Platform: web (desktop + mobile + tablet).

## Non-goals
- ambient device 자체 아님.
- native app 대체 아님 (보조).
- 데이터 호스팅/저장소 아님 (device 데이터 권한 사용).

## Success metrics
- export 정확도, 검색 응답성 (< 0.3s), privacy 명시.
- Spread: "오늘 요약 → 캘린더" 트위터 재공유율.

## QA / screenshot criteria
- 7 sample days (회의/개인/프로젝트/휴일 등) 모두 요약 + snippet + export 후보 채워짐.
- 검색 응답성 < 0.3s.
- privacy banner 표시.
- desktop + mobile + tablet 가능.

## Source signal refs
- S9 (Plaud Bee 2026 wearable list, 9 Life-Changing AI Wearable Devices in 2026), S7과 별개.

## Development start prompt

```text
You are Codex working in the prototype-factory repo. Build Ambient Memory Review & Redaction Console (p007) as a polished local HTML/React prototype from this PRD.

Goal:
- Today's summary card + original snippet player + action tray (delete/keep/edit) + 1-click export (calendar/email/Notion) + search (date/keyword/emotion) in one screen.

Implementation constraints:
- Make the first screen understandable in 3 seconds.
- Use 7 realistic sample days and complete UI states.
- Include 1-click snippet preview, action tray, 1-click export, search filter 0.3s.
- Avoid external paid APIs; mock data locally if needed.
- Verify with build/typecheck when applicable and screenshot QA for desktop, mobile, tablet.
```

## Notes
- 디자인 프로파일: premium-editorial.
- 토픽: 자산 방어.
- Theme interpretation: 기억/기록 자산 방어.
- GitHub rising inspiration: `openclaw/openclaw` (384k stars, "Any OS. Any Platform").
