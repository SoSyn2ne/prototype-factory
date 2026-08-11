# PRD — Allergen Recall Shelf Sweep

## Problem / target
Give tiny food shops a camera-first shelf sweep for recall and allergen notices. Target: 편의점·동네마트·소형 카페 현장 직원.

## Core UX
리콜 공지 선택 → 선반 구역 촬영 → 제품/로트 확인 체크 → 격리·보고 완료증. Required sections: 오늘의 리콜, 구역별 촬영 큐, 제품 대조, 격리 체크, 점주 보고서.

## Design / theme / evidence
- Profile: `field-ops`; theme: 건강.
- Sources: S2 https://consumer.go.kr; S7 https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience.
- QA: value visible in 3 seconds; complete empty, active, error, and success states; desktop/mobile fit; simulated or estimated results labeled.

## Stitch prompt
Design a mobile-first field app named “Allergen Recall Shelf Sweep.” A shop worker selects today’s recall notice, walks a zone-by-zone photo checklist, compares product name and lot markers, marks Found, Clear, or Needs Manager, records quarantine placement, and sends a completion receipt to the owner. Include poor-photo recovery, offline state, and explicit manual verification. Design direction: follow the field-ops profile with graphite and steel surfaces, a sparing orange action accent, high-contrast status rows, 48px touch targets, and urgent color only in small badges.
