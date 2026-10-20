# PRD — Same Cart Face-Off

## Product intent / problem
동적 가격 불안은 서로 다른 시간의 스크린샷을 비교하며 커지지만 한 번의 차이가 개인화의 증거는 아니다. 동일 시각과 동일 장바구니를 잠근 사회적 실험이 필요하다.

## Target user
가격 비교를 즐기는 친구, 소비자 커뮤니티, 기자와 동적 가격을 의심하는 쇼핑객.

## Arrival path
친구가 보낸 방 코드, 커뮤니티 챌린지, 기사/영상의 실험 링크에서 진입한다.

## Business / validation route
3–4명 모의 라운드 20회에서 규칙 이해, 완료율, 증거 한계 이해, 공유율을 측정한다. 브랜드 캠페인/교육 콘텐츠와 소비자 커뮤니티 도구로 검증한다.

## Core loop / key UX
호스트 장바구니 → 친구 참가 → 프로필/위치 확인 → 차이 추측 → 가격 잠금 → 동시 공개 → 가능한 이유 태그 → 공유 또는 즉시 재경기.

## First screen
한 장바구니 주위에 봉인된 세 플레이어 카드와 하나의 “가격 잠그기” 동작이 보인다.

## Required UI sections
- 장바구니 방 코드와 동일 상품
- 플레이어 위치/프로필 카드
- 가격 차이 추측과 잠금
- 동시 공개와 차이 미터
- 세금·재고·프로모션·개인화 의심 이유 태그
- 증거 한계, 라운드 이력, 공유 카드

## Assigned profile and theme
- Design profile: playful-experimental
- Theme: 가격 불신을 과장 대신 함께 확인하는 사회적 실험으로 바꾸기

## Source signal references
- S03: AI·디지털 가격 최적화가 위치·이력별 가격 불안을 키운다는 보도 — https://apnews.com/article/ai-prices-dynamic-customers-technology-64c446cd117d3be664de4ab570fb9857

## Interaction rules
- 모든 참가자는 같은 장바구니와 공개 시각을 사용한다.
- 실제 구매나 결제를 하지 않는다.
- 결과마다 세금·재고·프로모션 등 대체 설명과 “한 라운드는 증거가 아님”을 표시한다.
- 동일 가격도 성공적인 결과와 축하 상태를 가진다.

## Output artifact
조건, 시각, 가격 차이, 증거 한계가 담긴 동시 장바구니 비교 카드.

## Share / return loop
각 라운드는 “같은 장바구니, 네 가격” 카드가 되고 10초 안에 조건을 바꿔 재경기한다.

## Constraints
- 가격과 프로필은 모의 데이터다.
- 개인화 가격을 단정하거나 특정 판매자를 비난하지 않는다.
- 색상 이외 텍스트/수치로 차이를 표현한다.

## Non-goals
- 실제 쇼핑 에이전트, 가격 추적 크롤러, 법적 증거 수집 서비스를 만들지 않는다.

## Success metrics
- 신규 그룹의 80%가 30초 안에 첫 공개를 끝낸다.
- 사용자의 90%가 결과가 원인 증명이 아님을 설명한다.
- 첫 라운드 후 재경기율 50% 이상을 목표로 한다.

## QA / screenshot criteria
- 늦은 참가, 동일 가격, 소액/대규모 차이, 통화·세금 차이, 방 종료 상태가 있다.
- 공개 애니메이션 뒤 이유 태그와 면책이 즉시 보인다.
- 390px에서 세 플레이어 카드와 잠금 동작이 한 열로 자연스럽게 흐른다.

## Development start prompt

```text
Build a no-purchase multiplayer cart experiment with room code, three to four mocked shopper profiles, guess-and-lock, synchronized price reveal, reason tags, uncertainty disclaimer, share card, and instant rematch.
```

## Copy/paste-ready Stitch prompt

Create a responsive social experiment game called “Same Cart Face-Off” for friends comparing dynamic prices. Open with one identical three-item cart in the center and three sealed shopper cards around it—different mock locations, loyalty states, or devices. A host shares a room code; every player guesses the spread, locks the visible total at the same moment, then all cards flip together. Animate the difference, but require players to tag plausible explanations such as tax, inventory, promotion, or personalization suspicion and show that one round is not proof. Include round history, identical-price celebration, large-gap reaction, share card, and ten-second rematch. No real checkout. Design direction: use the playful-experimental profile with dark cobalt, one electric coral accent, oversized reveal numbers, one obvious action, and no casino rainbow.
