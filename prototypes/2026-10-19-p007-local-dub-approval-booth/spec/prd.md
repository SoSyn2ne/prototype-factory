# PRD — Local Dub Approval Booth

## Product intent / problem
로컬 음성 생성은 비용·프라이버시 문제를 줄이지만 작은 제작팀은 번역, 발음, 화자 동의, 버전, 승인 책임자를 여전히 채팅·파일명·스프레드시트에서 맞춘다.

## Target user
소형 로컬라이제이션 스튜디오, 교육 제작자, 인디 영화팀, 오디오북 팀.

## Arrival path
VoiceStudio 같은 로컬 도구에서 만든 트랙을 내보낸 뒤 검수 단계에서 진입한다.

## Business / validation route
한 명의 프로듀서가 90초 프로젝트의 모든 미해결 구간을 20초 안에 찾는지 검증한다. 프로젝트 또는 리뷰어 좌석 과금을 탐색한다.

## Core loop / key UX
트랙 가져오기 → 원문/번역/더빙 정렬 → A/B 청취 → 발음·동의 확인 → 담당자 승인 → 서명 매니페스트와 함께 내보내기.

## First screen
90초 타임라인의 일곱 개 amber 구간과 ‘화자 동의 누락’으로 잠긴 내보내기 버튼.

## Required UI sections
- 프로젝트 매니페스트
- 세그먼트 타임라인
- 원본·더빙 A/B
- 자막 비교
- 발음 마커
- 화자 동의 원장
- 리뷰어 배정
- 이슈 필터
- 내보내기 게이트

## Assigned profile and theme
- Design profile: `premium-editorial`
- Theme: 소리와 같은 세밀도로 번역·발음·동의 신뢰를 확인하는 조용한 포스트프로덕션 부스

## Source signal references
- S08: 로컬 다국어 음성 제작 도구의 GitHub daily Trending 급상승 — https://github.com/debpalash/VoiceStudio

## Interaction rules
- 음성을 생성하지 않고 검수만 한다.
- 필수 동의나 담당 리뷰가 없으면 내보내기를 잠근다.
- 모든 수정은 세그먼트와 버전에 귀속한다.

## Output artifact
승인된 오디오 패키지, 자막, 세그먼트별 결정, 동의·리뷰 서명 매니페스트.

## Share / return loop
클라이언트는 자신에게 배정된 미해결 구간만 검토하고 모든 잠금이 풀리면 최종 패키지를 받는다.

## Constraints
- Phase A에서 실제 음성 모델을 호출하지 않는다.
- 로컬 처리 여부를 명확히 표시한다.
- 데스크톱 오디오 편집 환경을 우선한다.

## Non-goals
- 보이스 클로닝 모델이나 번역 모델을 만들지 않는다.
- 전문 DAW 전체를 대체하지 않는다.

## Success metrics
- 프로듀서가 미해결 세그먼트를 20초 안에 찾는다.
- 동의 잠금 이유가 법률 문구 없이 이해된다.
- 리뷰어가 자신의 할당 구간만 완료할 수 있다.

## QA / screenshot criteria
- A/B 재생과 자막 비교가 키보드로 조작된다.
- 미동의·발음 이슈·번역 수정·승인·내보내기 상태가 있다.
- 로컬 전용 표시가 장식이 아니라 실제 프로젝트 상태와 연결된다.

## Development start prompt

```text
Reconstruct the premium-editorial Stitch design as a local HTML audio-review prototype with mocked waveforms, A/B playback, segment statuses, consent lock, and export manifest. Do not call a voice model.
```
