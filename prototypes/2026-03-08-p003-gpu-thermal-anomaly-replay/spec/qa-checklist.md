# QA checklist

## Happy path
- Load demo and see a chart + current values.
- Drag the timeline scrubber; the cursor and value readout updates.
- Toggle “Show anomalies”; anomaly segments and annotations appear.
- Adjust thresholds; anomalies recompute and the list changes.

## Edge cases
- Set thresholds extremely high; anomalies should disappear.
- Set thresholds extremely low; many points become anomalous but UI remains responsive.
- Scrub to first/last point; no out-of-range errors.

## Acceptance verification
- Vanilla HTML/CSS/JS, local assets only.
- No console errors.
- Canvas renders with devicePixelRatio scaling (not blurry).
