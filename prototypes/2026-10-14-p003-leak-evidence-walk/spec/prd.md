# PRD — 누수 증거 산책

## Product intent
주민이 물 흐름 순서대로 증거를 모아 관리실과 설비기사의 재방문을 줄인다.

## Arrival / validation
관리실 문자 링크. 한 공동주택 20건에서 재촬영 요청과 준비 없는 방문 비율을 비교한다.

## Core loop
안전 확인 → 계량기 → 밸브 → 젖은점 → 윗공간 촬영 → 방향 표시 → 기사 질문 → 방문 준비 카드.

## First screen / key screens
평면도 위 네 정거장. 카메라 오버레이, 안전 중단, 추가 질문, 기사 인수 카드.

## Interaction rules
전기·천장 접근 위험이면 촬영을 중단한다. 원인을 진단하지 않고 관찰만 전달한다.

## QA / risks
저조도, 접근 불가, 계량기 없음, 무변화 상태. 진단 서비스로 오인되지 않아야 한다.

## Development start prompt
```text
Build a Korean field-first mobile walkthrough with four camera stations, direction arrows, meter before/after, safety stop, technician follow-up, and a shareable visit-prep card.
```
