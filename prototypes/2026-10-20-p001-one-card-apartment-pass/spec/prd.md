# PRD — 한 장 아파트 패스

## Product intent / problem
입주민은 공동현관, 방문주차, 택배함, 관리비, 쓰레기, 시설 예약마다 다른 앱과 계정을 유지한다. 고령 가족·임시 거주자·구형 휴대폰 사용자는 설치와 재로그인 단계에서 생활 서비스 자체에서 밀려난다.

## Target user
여러 아파트 앱을 설치하기 어려운 입주민, 고령 가족, 임시 거주자, 관리사무소.

## Arrival path
로비 NFC 카드, 엘리베이터 QR, 입주 안내 문자, 가족이 보낸 세대별 링크.

## Business / validation route
한 단지에서 방문주차·택배함·시설예약 세 업무만 연결한 concierge pilot로 도움 요청과 완료 시간을 측정한다. 단지당 월 사용료 또는 입주 세대 수 기반 B2B2C를 검증한다.

## Core loop / key UX
NFC/QR 탭 → 세대 확인 → 행동 타일 선택 → 일회용 토큰 실행 → 완료 영수증 또는 오프라인 대안.

## First screen
설치 안내 없이 “지금 무엇을 하시나요?”와 여섯 개 큰 행동 타일이 바로 보인다.

## Required UI sections
- 주소·세대 확인
- 오늘 필요한 행동 타일
- 방문주차 3단계
- 택배함 열기
- 시설 예약
- 최근 완료 영수증
- 앱 장애·오프라인 대안
- 관리사무소 도움

## Assigned profile and theme
- Design profile: calm-consumer
- Theme: 생활 마찰과 디지털 소외를 줄이는 조용한 안심

## Source signal references
- S01: 아파트 현관·주차·택배·시설마다 별도 앱을 강요받는 입주민 — https://www.reddit.com/r/Vent/comments/1scgsne/why_does_everything_need_an_app/
- H6: 설치·로그인 없이 브라우저에서 한 번 쓰는 도구 수요 — https://news.hada.io/topic?id=35629

## Interaction rules
- 앱 설치를 요구하지 않는다.
- 토큰 유효시간과 실제 완료 여부를 분리해 보인다.
- 장애 시 전화번호·종이 절차·관리실 방문 중 최소 하나를 같은 화면에 제공한다.
- 민감한 세대 정보는 작업 완료 후 화면에 남기지 않는다.

## Output artifact
행동별 완료 영수증과 오프라인 대안 카드.

## Share / return loop
가족은 부모님용 세대 링크/NFC를 공유하고 관리사무소는 반복 문의가 많은 행동만 개선한다.

## Constraints
- Phase A에서는 실제 출입·결제 API를 호출하지 않고 one-use token을 모의한다.
- 한국어 모바일 우선, 390px와 큰 글씨 모드를 지원한다.
- 접근 권한과 세대 식별을 실제 보안으로 오해시키지 않는다.

## Non-goals
- 종합 아파트 관리 ERP를 만들지 않는다.
- 장기 커뮤니티 피드나 광고 기능을 만들지 않는다.

## Success metrics
- 첫 사용자가 10초 안에 원하는 행동 타일을 선택한다.
- 고령 테스트 사용자의 80%가 설명 없이 방문주차 모의를 끝낸다.
- 실패 상태에서 도움 경로를 5초 안에 찾는다.

## QA / screenshot criteria
- 첫 화면에서 설치 없는 여섯 행동과 오프라인 대안이 즉시 읽힌다.
- 정상·토큰 만료·앱 장애·전화 대안·완료 영수증 상태가 있다.
- 390px에서 모든 터치 영역이 44px 이상이고 가로 넘침이 없다.

## Development start prompt

~~~text
Build a responsive no-install resident action strip with mocked NFC entry, one-use tokens, completion receipts, and offline recovery paths. Keep it a working flow, not a property dashboard.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive Korean web app called “한 장 아파트 패스” for apartment residents, older family members, temporary tenants, and management offices overwhelmed by separate gate, parking, parcel, rent, and amenity apps. The app is based on observed pull: residents maintain many accounts, repeat setup after reinstalling, lose access during outages, and ask for manual fallbacks. Open directly on a resident-specific strip of six large action tiles after an NFC or QR tap—no marketing hero and no app-install prompt. Build the core interaction around one-use access tokens: choose 방문주차, enter a plate, confirm the valid window, then show a clear completion receipt; demonstrate equivalent flows for parcel locker and facility booking. Required sections: household check, today's action tiles, three-step guest parking, parcel access, facility booking, recent receipts, and a visible offline/phone fallback. Emotional pressure: digital exclusion and the fear of being locked out of one's own building. Design direction: use the calm-consumer profile with warm off-white surfaces, one gentle teal accent, generous spacing, 44px controls, friendly recovery text, and no dense property-management dashboard.
