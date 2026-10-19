# PRD — Hype Tax Seatbelt

## Product intent / problem
라이브 경매의 카운트다운·호스트 압박·채팅 경쟁은 사용자가 시세 앵커를 잃고 즉시 탭하게 만든다. 단순 경고 팝업은 같은 도파민 압력 아래 닫힌다.

## Target user
Whatnot-style live-auction viewers, card and coin collectors, and friends running a spending challenge.

## Arrival path
브라우저 overlay 모의, 경매 전 challenge 링크, 친구가 공유한 hype-tax receipt.

## Business / validation route
모의 경매 30회에서 즉시 탭과 3초 hold 조건의 철회율·시세 확인률·후회 점수를 비교한다. 소비자 구독 또는 커뮤니티 challenge pack을 검증한다.

## Core loop / key UX
라이브 입찰 도착 → 3초 hold lane → 시세 배수·세션 지출 공개 → bid/pass → hype-tax receipt → 친구와 replay.

## First screen
세로 라이브 스트림, 빠른 채팅, 오르는 가격, 화면 아래 잠긴 3초 입찰 레일이 동시에 보인다.

## Required UI sections
- mock livestream
- current bid
- comparable-price anchor
- market multiple meter
- 3-second hold lane
- session cap
- host-pressure captions
- pass or bid outcome
- hype-tax receipt
- share and replay

## Assigned profile and theme
- Design profile: playful-experimental
- Theme: 도파민·과시·후회를 웃기지만 실제로 느려지게 만드는 자기통제

## Source signal references
- S06: $2.22 상당 물건에 $15–20, 약 $75 경품 기회에 반복 $190를 쓰는 라이브 경매 행동 — https://www.reddit.com/r/whatnotapp/comments/1tttl0k/buyers_stop_doing_this/
- V1: 한 줄 규칙·빠른 판단·웃긴 실패가 짧은 클립이 되는 Scary Shawarma Kiosk 패턴 — https://www.tiktok.com/@lllonilll/video/7585282473588837687

## Interaction rules
- 실제 구매나 결제를 실행하지 않는다.
- 사용자가 3초 전에 손을 떼면 pass로 처리한다.
- comparable은 범위와 출처를 보이고 확정 가치로 말하지 않는다.
- session cap을 넘으면 다음 bid는 잠기지만 replay는 계속 가능하다.

## Output artifact
session hype-tax receipt and share card.

## Share / return loop
“오늘 가장 비싼 3초” 카드와 실패 replay가 친구·수집 커뮤니티에 공유되고 다음 세션 challenge로 돌아온다.

## Constraints
- 모든 상품·가격·채팅은 허구의 샘플이다.
- 실제 경매 서비스 계정·API를 연결하지 않는다.
- 과도한 카지노 시각 언어를 피한다.

## Non-goals
- 가격 예측이나 투자 조언을 하지 않는다.
- 사용자의 구매를 조롱하거나 수치심을 유발하지 않는다.

## Success metrics
- 첫 사용자가 15초 안에 “3초 동안 시세를 보고 결정” 규칙을 이해한다.
- hold 중 최소 한 번 comparable과 session spend를 본다.
- receipt가 웃기면서도 premium paid를 정확히 보여준다.

## QA / screenshot criteria
- 390px에서 stream, bid, hold lane, multiplier가 겹치지 않는다.
- hold 중·release pass·bid complete·cap lock·comparable 없음 상태가 있다.
- one accent와 하나의 주 interaction을 지킨다.

## Development start prompt

~~~text
Build a playful simulated live-auction overlay with a 3-second hold-to-bid lane, market anchors, session cap, host-pressure captions, and shareable hype-tax receipts. No real purchasing.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive experimental web experience called “Hype Tax Seatbelt” for livestream-auction viewers who overbid under countdowns, host shouting, parasocial loyalty, and chat competition. Base it on community examples of people paying $15–20 for $2.22 items and repeatedly spending $190 for a chance at a roughly $75 prize. Open inside a simulated vertical livestream with chat and a rising bid. The bid control is a physical-looking three-second hold lane, not a tap button. While the user holds, reveal recent comparable price, market multiple, session spend, and a host-pressure caption; releasing early means “pass.” After a bid, burst into a funny but precise hype-tax receipt showing item value, premium paid, and the most expensive three seconds of the session. Required sections: mock stream, current bid, comparable anchor, multiple meter, hold lane, session cap, pass/bid outcome, receipt, and share/replay. Design direction: use the playful-experimental profile with deep plum, one electric lime accent, oversized meter typography, tactile motion cues, a single obvious interaction, and no casino rainbow or real checkout.
