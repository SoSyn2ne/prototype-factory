# QA checklist

## Happy path
- Open `demo/index.html` locally with network disconnected; the page renders without missing assets.
- Adjust either slider; the displayed values, exposure score, meter, table, and sparkline update immediately.
- Change affected node and horizon; table contents and sparkline shape both change without reload.

## Edge cases
- Severity `0` and concentration `0` still produce a stable low-score output and five table rows.
- Severity `100` and concentration `100` clamp the score at `100` and do not overflow the meter.
- Every node option and every horizon option renders readable copy plus a valid sparkline.
- Narrow mobile width keeps controls above outputs and preserves table readability.

## Acceptance verification
- HTML, CSS, and JS use no external CDN, font, or runtime dependency.
- Demo is vanilla only and remains fully functional offline.
- Code stays small, readable, and deterministic enough for easy challenge by an investor.
