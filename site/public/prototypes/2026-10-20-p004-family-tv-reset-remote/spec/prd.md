# PRD — 부모님 TV 정리 리모트

## Product intent / problem
부모님 스마트TV 홈은 스폰서 타일과 추천 앱으로 가득하지만 자녀가 원격으로 정리하려면 모델별 명령과 벽돌 위험을 설명해야 한다. 삭제보다 안전한 비활성화와 완전 복구가 중요하다.

## Target user
광고가 많은 Android·Google TV를 쓰는 부모님과 원격으로 도와주는 자녀.

## Arrival path
가족 채팅 링크, TV 모델 QR 스캔, “부모님 TV 광고 없애기” 검색.

## Business / validation route
다섯 개 대표 TV 모델의 모의 호환성 흐름에서 필수 앱 보호·정리·복구 성공률을 측정한다. 가족당 일회성 클린업 패스 또는 리모트 지원 제휴를 검증한다.

## Core loop / key UX
모델 스캔 → 현재/정리 후 비교 → 보호 앱 확인 → 안전 묶음 승인 → 적용 QR → 복구 QR 저장.

## First screen
광고 타일이 가득한 현재 홈과 네 개 핵심 앱만 남은 정리 후 홈을 나란히 보여준다.

## Required UI sections
- TV 모델 스캔
- 호환성 확인
- 현재 홈 화면
- 정리 후 미리보기
- 숨길 항목 체크
- 필수 앱 보호
- 적용 QR
- 복구 코드
- 가족 공유 완료 카드

## Assigned profile and theme
- Design profile: calm-consumer
- Theme: 부모님의 시청 집중과 가족의 원격 안심

## Source signal references
- S10: Gathin23/cleanyourtv의 빠른 stars/forks와 모델별 reversible disable/restore 기여 — https://github.com/Gathin23/cleanyourtv

## Interaction rules
- 삭제가 아니라 모의 비활성화로 표현한다.
- 시스템·입력·설정·접근성 앱은 보호 목록에서 끌 수 없다.
- 적용 QR과 복구 QR을 시각적으로 다르게 표시한다.
- 호환성 불명은 진행 가능으로 속이지 않는다.

## Output artifact
모델별 변경 목록, 전후 카드, 완전 복구 QR.

## Share / return loop
자녀는 완료 카드를 가족 채팅에 보내고 부모는 원래대로 복구 QR을 보관한다.

## Constraints
- 실제 ADB 명령이나 TV 연결을 실행하지 않는다.
- 명령어·개발자 옵션보다 가족이 이해할 수 있는 결과 언어를 쓴다.
- 모바일 우선으로 설계한다.

## Non-goals
- TV 런처를 직접 배포하지 않는다.
- 스트리밍 구독 관리나 콘텐츠 추천을 하지 않는다.

## Success metrics
- 사용자가 필수 앱을 끄지 않고 정리 묶음을 승인한다.
- 전후 차이가 3초 안에 이해된다.
- 복구 QR의 목적을 모든 테스트 사용자가 정확히 설명한다.

## QA / screenshot criteria
- 호환·부분 호환·불명·적용 완료·복구 준비 상태가 있다.
- 390px에서 전후 화면과 안전 설명이 잘리지 않는다.
- 해커 터미널이나 공포성 경고 없이 실제 위험을 명확히 말한다.

## Development start prompt

~~~text
Build a family-safe TV cleanup companion with model scan, before/after home previews, reversible disable list, protected apps, apply QR, and restore receipt. Simulate changes; do not run ADB.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive Korean family companion called “부모님 TV 정리 리모트” for adult children helping parents simplify ad-heavy Android or Google TV home screens. The observed pull comes from the rapidly starred Gathin23/cleanyourtv repository, where users added many TV brands and preferred reversible disable/restore lists over deletion. Open on a side-by-side “현재 TV / 정리 후 TV” preview: the current screen is crowded with sponsored tiles, while the proposed screen keeps only live TV, Netflix, YouTube, and settings. Let the user scan or choose a TV model, review a protected-app list, toggle a safe cleanup bundle, and generate an apply QR plus a separate restore QR. Required sections: model scan, compatibility, current/after preview, cleanup choices, protected essentials, change explanation, apply QR, recovery code, and family-share completion card. Emotional pressure: fear of breaking a parent's TV while trying to help. Design direction: use the calm-consumer profile with warm neutrals, one gentle blue accent, large preview cards, plain-language safety copy, obvious undo, and no hacker terminal aesthetic or dense device dashboard.
