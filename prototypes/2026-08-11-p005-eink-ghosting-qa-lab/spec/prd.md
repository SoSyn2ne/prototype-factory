# PRD — E-Ink Ghosting QA Lab

## Problem / target
Ordinary web motion and layout churn fail on low-refresh e-ink screens. Target: frontend, accessibility, e-reader, and distraction-free device teams.

## Core UX
Drop screen → choose 1/3/5Hz → scrub frames → ghost heatmap → lint temporal churn → apply newspaper mode → export receipt. Sections: intake, device, refresh controls, heatmap, lint, fixes, receipt.

## Design / theme / evidence
- Profile: `calm-consumer`; theme: 건강/접근성.
- Sources: S10 https://news.ycombinator.com/item?id=49213660; S4 https://news.hada.io/topic?id=32332.
- QA: no animation in tool chrome; changed-pixel cause is legible; before/after score responds to newspaper mode.

## Stitch prompt
Design a responsive web tool named “E-Ink Ghosting QA Lab.” Provide a screenshot/URL mock intake, then a central monochrome e-ink device preview with 1Hz, 3Hz, and 5Hz toggles. Add a frame scrubber, changed-pixel heatmap, ghost persistence overlay, and a lint panel for animation, shifting layout, blinking cursors, sticky elements, and non-monotonic updates. A “Newspaper mode” switch should transform the sample UI into fixed output regions and show a before/after QA receipt. Design direction: follow the calm-consumer profile with paper white, graphite, one muted blue-gray accent, quiet controls, generous whitespace, and absolutely no decorative animation.
