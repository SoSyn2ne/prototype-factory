# Prototype Factory Harness

이 프로젝트는 **Factory Harness v1** 기준을 따른다.

## Pattern
- **Pipeline + Producer-Reviewer**

## Roles
- **PF Planner**
  - 오늘 프로토타입 아이디어 3개 제안
  - Stitch prompt 작성
  - scaffold 범위 정의
- **PF Generator**
  - scaffold 생성
  - ingest/build/index/preview 실행
- **PF Reviewer**
  - preview / build / index / 산출물 상태 검수
- **PF Finalizer**
  - commit / push / report / cleanup

## Default flow
1. Phase A: idea + prompt + scaffold
2. Human: Stitch 디자인 개입
3. PF Generator: ingest/build/index/preview
4. PF Reviewer: pass/fail 판단
5. PF Finalizer: push/report

## Review requirements
- build 통과
- index 재생성 완료
- preview 산출 가능
- report 대상 라우팅 확인

## Rule
PF는 단순 생성으로 끝내지 않고, **review 통과 후에만 완료**로 본다.

## Ideation mix rule
- 기본 일일 배치(3개)는 `실전형/상업형 2개 + 재미/실험형 1개`를 권장한다.
- 여기서 재미/실험형은 즉시 수익화가 약해도 괜찮다. 대신 시각적 payoff, 공유성, 포트폴리오 매력, 혹은 새로운 톤 실험 가치가 있어야 한다.
- 운영자가 명시적으로 "전부 세일즈형" 또는 "전부 수익화형"을 요청한 날만 예외로 한다.
