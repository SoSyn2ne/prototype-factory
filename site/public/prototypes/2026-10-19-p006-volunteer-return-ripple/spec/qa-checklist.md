# QA checklist

## Happy path
- CSV를 가져오고 오늘 행사 QR 체크인을 연다.
- 조용한 부재 카드에서 선호 역할을 확인해 초대를 수정한다.
- 봉사자가 수락하고 친구 초대를 공유해 리플이 표시된다.

## Edge and recovery states
- 중복 봉사자
- 연락 거부
- 장기 휴식
- 선호 역할 없음
- 행사 취소

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: calm-consumer.
- The theme is visible without overriding readability: 사람을 감시하지 않고 기억하며 돌아오기 쉬운 역할을 건네는 따뜻한 재초대 흐름.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- CSV 누락 필드와 중복 연락처를 친절하게 처리한다.
- 모바일 QR 체크인과 데스크톱 초대 작성이 모두 읽힌다.
- 수락·거절·무응답·휴식·연락 거부 상태가 있다.
