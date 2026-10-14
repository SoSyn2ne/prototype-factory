# PRD — 야간 GPU 동의판

## Product intent
남는 사무실 PC를 빌리되 기기 소유자의 시간·온도·전력·소음 한도를 우선한다.

## Arrival / validation
팀 내부 링크와 홈랩 커뮤니티. 8대 장비 mock으로 동의 완료율과 veto 이유를 시험한다.

## Core loop
기기 초대 → 소유자 한도 설정 → 작업 배분 → 열/소음 veto → 아침 기여 영수증 → 다음 밤 조정.

## First screen / key screens
오늘 밤 참여 PC 8개와 개인별 제한 손잡이. 동의 시트, 룸 열지도, stop reason, 영수증.

## Interaction rules
소유자 veto가 작업보다 우선한다. 프로토타입은 실제 원격 제어를 하지 않는다.

## QA / risks
offline PC, 온도 급등, 소유자 취소, 전력 예산 초과. 실제 배포 시 보안이 핵심 위험.

## Development start prompt
```text
Build a responsive local-network consent scheduler with eight mocked PCs, per-owner time/temperature/power limits, a room heat map, immediate veto, and morning receipts.
```
