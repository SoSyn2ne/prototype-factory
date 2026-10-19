# PRD — 묻지 않는 가격패

## Product intent / problem
플리마켓 손님은 가격을 물었다가 사지 않으면 가난해 보이거나 작가를 실망시킬까 걱정해 조용히 떠난다. 셀러는 숨은 이탈을 모르고 행사 중 가격표와 묶음가를 계속 다시 만든다.

## Target user
공예 마켓 셀러, 작은 팝업 운영자, 가격을 물었다가 거절하기 부담스러운 손님.

## Arrival path
부스의 e-paper/NFC 태그, 행사 안내 QR, 셀러용 태그 설정 링크.

## Business / validation route
한 행사에서 20개 상품을 가격표 있음/없음/탭 가격패 조건으로 나누고 질문 수·탭·구매를 비교한다. 전자가격표 대여료와 행사당 소프트웨어 패스를 검증한다.

## Core loop / key UX
손님 태그 탭 → 익명 가격·옵션·묶음 확인 → 구매/패스; 셀러는 가격 다이얼 조정 → 부스 전체 미리보기 → 태그 동기화.

## First screen
12개 상품 부스 미리보기와 가격이 비어 있는 세 상품의 조용한 금색 halo.

## Required UI sections
- 부스 미리보기
- 가격 없는 상품 경고
- 익명 손님 탭 화면
- 옵션·묶음 카드
- 셀러 일괄 가격 다이얼
- 재고 상태
- 탭→구매 전환 기록
- 오프라인 표시

## Assigned profile and theme
- Design profile: premium-editorial
- Theme: 예산 불안과 망신 회피를 매출 기회로 바꾸는 정중한 가격 공개

## Source signal references
- S03: 가격을 묻고 거절하기 민망해 무표시 부스를 떠나는 손님 — https://www.reddit.com/r/CraftFairs/comments/1kvqc75/why_i_didnt_buy/

## Interaction rules
- 손님 탭은 채팅이나 개인정보 입력을 요구하지 않는다.
- 품절·옵션·묶음 가격을 기본 가격과 혼동시키지 않는다.
- 오프라인 태그는 마지막 동기화 시각을 명시한다.
- 셀러 일괄 변경은 미리보기 후에만 게시한다.

## Output artifact
부스 가격 세트와 탭·구매 전환 카드.

## Share / return loop
손님은 우아한 상품 카드를 저장하고, 셀러는 동료에게 질문 없이 팔린 상품 패턴을 공유한다.

## Constraints
- 실제 e-paper 하드웨어는 모의한다.
- 결제는 하지 않고 구매 의향/재고 흐름만 표현한다.
- 모바일 손님 화면과 태블릿 셀러 화면을 모두 보여준다.

## Non-goals
- 범용 POS나 재고 ERP를 만들지 않는다.
- 개인별 동적 가격을 만들지 않는다.

## Success metrics
- 가격이 2초 안에 읽히고 추가 질문 없이 옵션을 비교한다.
- 셀러가 30초 안에 12개 태그의 묶음가를 바꾼다.
- 손님이 익명성과 실제 구매 버튼을 혼동하지 않는다.

## QA / screenshot criteria
- 현재 가격·묶음가·품절·오프라인 상태가 명확히 다르다.
- 390px 손님 화면과 1024px 셀러 화면 모두 핵심 흐름을 보여준다.
- 고급스러운 인상이 가격 대비를 약화시키지 않는다.

## Development start prompt

~~~text
Build a tactile e-paper price-tag companion: shopper tap view, vendor bulk-price dial, bundles, stock states, and a small conversion receipt. Avoid generic POS analytics.
~~~

## Copy/paste-ready Stitch prompt

Create a responsive Korean companion app called “묻지 않는 가격패” for craft-fair sellers and shoppers who silently walk away when prices are not visible. The app is based on community reports that asking and then declining feels poor, judged, or disrespectful to the maker, while sellers keep reprinting labels or losing sales they never see. Start with a beautiful booth mockup containing twelve products; three have missing-price halos. Let a shopper tap one product tag anonymously to reveal price, variants, remaining stock, and a tasteful bundle offer without starting a chat. Let the seller turn one prominent bulk-price dial to update linked e-paper tags and preview every change before publishing. Required sections: booth preview, missing-price check, anonymous shopper card, variant/bundle choice, vendor price dial, stock state, offline tag state, and tap-to-purchase outcome. Emotional pressure: budget shame and fear of disappointing the maker. Design direction: use the premium-editorial profile with cream paper, warm charcoal type, one muted brass accent, refined product photography blocks, consistent small radii, and no generic POS dashboard or loud sale gradients.
