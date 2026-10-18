# QA checklist

## Happy path
- 오디오 프로젝트를 열고 amber 세그먼트를 필터한다.
- 원본과 더빙을 듣고 발음 수정·동의를 확인한다.
- 모든 담당자가 승인하면 내보내기와 매니페스트가 열린다.

## Edge and recovery states
- 동의 누락
- 자막과 오디오 길이 불일치
- 리뷰어 미배정
- 새 버전 업로드
- 로컬 파일 이동

## Acceptance verification
- The first screen communicates the core job in three seconds.
- Exactly one design profile is used: premium-editorial.
- The theme is visible without overriding readability: 소리와 같은 세밀도로 번역·발음·동의 신뢰를 확인하는 조용한 포스트프로덕션 부스.
- Source references are present in the PRD and meta.json.
- No placeholder, generic dashboard hero, external paid API, or Phase A custom demo is included.
- A/B 재생과 자막 비교가 키보드로 조작된다.
- 미동의·발음 이슈·번역 수정·승인·내보내기 상태가 있다.
- 로컬 전용 표시가 장식이 아니라 실제 프로젝트 상태와 연결된다.
