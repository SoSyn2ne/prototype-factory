# Prototype Factory Harness

이 프로젝트는 **Factory Harness v1** 기준을 따른다.

## Pattern
- **Pipeline + Producer-Reviewer**

## Roles
- **PF Planner**
  - 오늘 프로토타입 아이디어 8개 제안
  - 8개 전부에 대한 Stitch prompt 작성
  - scaffold 범위 정의
- **PF Generator**
  - scaffold 생성
  - ingest/build/index/preview 실행
- **PF Reviewer**
  - preview / build / index / 산출물 상태 검수
- **PF Finalizer**
  - commit / push / report / cleanup

## Default flow
1. Phase A: idea + prompt + scaffold (`p001~p008` 전부 생성)
2. Human: Stitch 디자인 개입
3. PF Generator: ingest/build/index/preview (`p001~p008` 전부 반영)
4. PF Reviewer: pass/fail 판단
5. PF Finalizer: push/report

## Review requirements
- build 통과
- index 재생성 완료
- preview 산출 가능
- report 대상 라우팅 확인
- 당일 기본 배치는 `p001~p008` 8개가 모두 존재해야 함
- `/pf sti`는 당일 8개 demo가 모두 ingest되고 review gate를 통과해야 완료

## /pf sti hard gate
- `build 성공`만으로 review pass 처리하면 안 된다.
- 오늘 배치의 각 `p001~p008`에 대해 아래를 전부 확인해야 한다.
  - `prototypes/<id-...>/demo/index.html` 존재
  - `site/public/demos/<id>/index.html` 존재
  - public demo 파일이 prototype demo 파일과 byte-level로 동일하거나, 의도된 wrapper 구조인지 명시적으로 확인
  - demo 내용이 공용 placeholder/dashboard 템플릿이 아닌지 확인
  - Stitch ingest 배치라면 `demo/original/code.html` 또는 이에 준하는 원본 보존 artifact 존재 확인
  - Stitch ingest 배치라면 `assets/stitch-screen.png` 또는 동등한 preview artifact 존재 확인
  - `/d/<id>`와 `/p/<id>`에서 실제로 기대한 데모가 뜨는지 확인
- 아래 문자열/패턴이 보이면 무조건 fail로 본다.
  - `Realtime Snapshot`
  - `Active users`
  - `Conversion`
  - `Blockers`
  - 그날 8개 demo html이 서로 거의 동일한 공용 대시보드 템플릿인 경우
- `demo/index.html exists`만 보고 pass 처리하면 안 된다.
- zip 삭제는 위 hard gate가 모두 통과한 뒤에만 가능하다.
- push 보고 전에 반드시 `원본 보존 여부`와 `데모가 진짜로 맞는지`를 따로 한 줄로 명시한다.

## Incident memory
- 2026-04-23 incident: 오늘자 Stitch 배치가 정상 ingest처럼 보였지만, 실제로는 `p001~p004` 모두 공용 대시보드 placeholder html이 들어간 상태였다.
- 재발 방지 원칙: 파일 존재, build 성공, 경로 일치만으로 review pass를 내리지 않는다. 반드시 demo 내용 자체와 원본 보존 artifact까지 확인한다.

## Rule
PF는 단순 생성으로 끝내지 않고, **review 통과 후에만 완료**로 본다.

## Execution ownership
- `/pf sti`의 기본 실행 담당은 **멍멍이(Hermes)** 로 둔다.
- 이유: `/pf sti`는 zip 탐색, ingest, 검수, build, commit, push, cleanup까지 이어지는 반복 실행형 작업이라 전담 executor lane이 더 안전하다.
- 현재 채팅 세션은 기본적으로 다음 역할을 우선한다.
  - harness 규칙 보강
  - failure pattern 기록
  - review 기준 강화
  - operator-facing 보고와 예외 판단
- 예외적으로 현재 세션이 `/pf sti`를 직접 실행하더라도, Hermes executor가 수행한다고 가정한 수준의 hard gate를 반드시 그대로 적용해야 한다.
- 운영 원칙: `sti 실행`과 `sti 정책/검수 기준 관리`를 가능하면 분리한다.

## Ideation mix rule
- 기본 일일 배치(8개)는 `실전형/상업형 5~6개 + 재미/실험형 또는 현장형 2~3개`를 권장한다.
- 8개 프롬프트는 요약/추리기 없이 전부 운영자에게 전달하는 것을 기본 계약으로 한다.
- 여기서 재미/실험형은 즉시 수익화가 약해도 괜찮다. 대신 시각적 payoff, 공유성, 포트폴리오 매력, 혹은 새로운 톤 실험 가치가 있어야 한다.
- 운영자가 명시적으로 "전부 세일즈형" 또는 "전부 수익화형"을 요청한 날만 예외로 한다.
