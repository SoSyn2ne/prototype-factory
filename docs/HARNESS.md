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
