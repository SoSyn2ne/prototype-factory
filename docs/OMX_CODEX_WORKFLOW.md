# OMX Codex Workflow

공용 규칙: 이 워크스페이스에서 **Codex로 코딩 작업을 할 때는 기본적으로 OMX(oh-my-codex) 환경을 사용한다.**

## 현재 확인된 환경
- `~/.codex/config.toml` 에 oh-my-codex 설정이 이미 존재함
- 활성 기능:
  - `multi_agent = true`
  - `child_agents_md = true`
- OMX 관련 MCP 서버 활성:
  - `omx_state`
  - `omx_memory`
  - `omx_code_intel`
  - `omx_trace`
- Codex developer instructions 에 다음 역할 프롬프트/워크플로우가 명시됨:
  - `/prompts:architect`
  - `/prompts:executor`
  - `/prompts:planner`
  - `$plan`
  - `$ralph`
  - `$autopilot`

즉, 이 환경은 단순 단일 에이전트 채팅이 아니라 **하네스 기반 코딩 워크플로우**를 전제로 한다.

---

## 기본 원칙

### 1) Codex 코딩은 OMX 기준으로 한다
특별한 이유가 없는 한:
- 단순히 “한 번에 만들어” 방식보다
- **계획 → 구현 → 검토** 구조를 우선한다

### 2) 큰 작업은 역할 분리를 전제한다
가능하면 다음 구조를 따른다:
- **Planner**: 작업 분해 / 목표 정의 / 완료 조건 정리
- **Executor**: 실제 구현
- **Evaluator/Reviewer**: 결과 검수 / 빠진 것 확인 / 품질 평가

### 3) 긴 작업은 파일 기반 handoff를 남긴다
대화에만 의존하지 말고:
- 계획
- 체크리스트
- 산출물 기준
- TODO
를 파일로 남긴다.

### 4) 단순 수정은 과하게 무겁게 하지 않는다
작은 수정은 바로 구현해도 된다.
OMX는 특히 아래 상황에서 강하게 쓴다:
- 큰 기능 추가
- 구조 변경
- 멀티파일 리팩터링
- UI/UX 재설계
- 반복 검수 루프가 필요한 작업

---

## 추천 작업 흐름

### 소규모 작업
1. 문제 확인
2. 바로 수정
3. 빌드/테스트
4. 커밋

### 중대형 작업
1. Planner 단계
   - 목표
   - 범위
   - 완료 조건
   - 리스크
2. Executor 단계
   - 구현
   - 파일 수정
   - 빌드/테스트
3. Evaluator 단계
   - 요구사항 충족 여부 확인
   - UI/동작/회귀 확인
4. 커밋/푸시

---

## 언제 OMX 스타일을 강하게 쓸지
다음 유형은 기본적으로 OMX 스타일 권장:
- 대시보드/앱 전체 구조 변경
- React/Next UI 대규모 리뉴얼
- 여러 레포에 걸친 연동 작업
- PF / MOM-voice 같은 반자동 파이프라인 강화
- “planner / generator / evaluator” 구조가 필요한 작업

---

## 운영 기준
- 앞으로 Codex에 코딩을 맡길 때는 **OMX가 설치되어 있다는 전제**로 진행한다.
- 작업 브리프도 가능하면 OMX식으로 정리한다.
- 단일 에이전트 만능주의보다 **하네스 설계**를 우선한다.

---

## 한 줄 규칙
**이 워크스페이스의 Codex 코딩 기본값은 OMX(oh-my-codex) 기반 워크플로우다.**
