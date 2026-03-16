# QA checklist

## Happy path
- Open `demo/index.html` offline.
- Move Shock (%) slider → table re-sorts instantly.
- Change shock type → rankings and explanation change.

## Edge cases
- Shock 0%: table shows baseline ordering and explanation indicates “no shock”.
- Shock 30%: scores stay bounded and UI remains readable.
- JS disabled: page still shows a static baseline table (acceptable).

## Acceptance verification
- No external requests (no Google Fonts/CDNs).
- Demo is readable on narrow widths (mobile-ish).
- Keyboard: can tab to dropdown/slider.
