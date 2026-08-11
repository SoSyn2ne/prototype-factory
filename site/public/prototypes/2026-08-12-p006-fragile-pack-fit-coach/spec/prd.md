# PRD — Fragile Pack Fit Coach

## Problem / target
Guide micro-warehouses through box choice and fragile-item packing with a visual fit test. Target: 소규모 D2C 창고·공방 포장 담당자.

## Core UX
상품 치수/사진 → 박스 후보 오버레이 → 완충 순서 체크 → 포장 증빙 촬영. Required sections: 상품 입력, 박스 핏 비교, 빈 공간 경고, 포장 단계, 출고 증빙.

## Design / theme / evidence
- Profile: `field-ops`; theme: 현장 효율.
- Sources: S10 https://www.youtube.com/watch?v=LPSKNnMFXA8; S7 https://www.reddit.com/r/smallbusiness/comments/1r5ziuc/in_this_post_share_your_small_business_experience.
- QA: value visible in 3 seconds; complete empty, active, error, and success states; desktop/mobile fit; simulated or estimated results labeled.

## Stitch prompt
Design a tablet-friendly app named “Fragile Pack Fit Coach.” Let a micro-warehouse worker enter item dimensions or use a camera guide, compare three available boxes with a visual fit overlay, see void-space and fragility warnings, follow a step-by-step cushioning sequence, and capture a final packing proof tied to the shipment. Include damaged-box and no-fit exception paths. Design direction: follow the field-ops profile with cool gray and slate blue, one vivid cyan action accent, large gloved-hand controls, obvious handoff states, and diagrams that remain legible under warehouse lighting.
