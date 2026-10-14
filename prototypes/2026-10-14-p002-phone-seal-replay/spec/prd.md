# PRD — 중고폰 봉인 리플레이

## Product intent
수리 전후의 봉인·나사·기판을 같은 각도로 남겨 누가 무엇을 바꿨는지 증명한다.

## Arrival / validation
중고폰 검수·수리 분쟁 검색과 수리점 접수 링크. 수리점 30건에서 재촬영률과 구매자 링크 열람률을 본다.

## Core loop
기종 선택 → 7개 필수 각도 촬영 → 씰/나사 핀 → 교체 부품 선언 → 동일 각도 재촬영 → 고객 승인.

## First screen / key screens
휴대폰 윤곽 위 필수 촬영점 7개. 접수, 촬영, 작업 기록, 차이 검토, 구매자 리플레이.

## Interaction rules
판정 대신 관찰 사실만 표시한다. 흐림·누락·각도 불일치는 즉시 재촬영시킨다.

## QA / risks
씰 없음, 배터리 교체, 다른 각도, 분쟁 상태. 위조 방지와 개인정보 한계를 명시한다.

## Development start prompt
```text
Build a Korean mobile guided-camera prototype with seven required shots, seal/screw pins, before/after alignment, replaced-part declarations, customer sign-off, and a 30-second buyer replay.
```
