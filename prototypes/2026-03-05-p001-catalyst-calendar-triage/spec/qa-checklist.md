# QA checklist

## Happy path
- [ ] Demo opens from `demo/index.html` with no broken layout or missing styles.
- [ ] Sidebar clearly states the product concept and includes visible navigation items.
- [ ] Main panel shows snapshot cards and a "Next actions" list that is readable on desktop.
- [ ] Clock renders on load and updates every second without freezing.
- [ ] Layout switches to single-column at narrow widths (mobile behavior).

## Edge cases
- [ ] JavaScript unavailable: page still renders core content (clock may remain static without layout break).
- [ ] Very narrow viewport (~360px): no horizontal overflow; text remains legible.
- [ ] Long session (>=5 minutes): clock keeps updating and UI remains responsive.
- [ ] Refresh/reopen: static content and styling remain deterministic.

## Acceptance verification
1. Open the demo both via direct file and via local server; confirm visual parity.
2. Validate desktop view at ~1280px and mobile view at ~390px.
3. Observe the clock for at least 10 seconds and confirm second-by-second updates.
4. Confirm all copy consistently positions this as triage/decision support, not prediction tooling.
5. Record one UX risk and one clarity win before marking the prototype as review-ready.
