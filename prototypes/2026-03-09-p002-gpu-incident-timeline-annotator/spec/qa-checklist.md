# QA checklist

## Happy path
- Paste the sample log block; click Analyze.
- Confirm events list populates with severities (info/warn/critical).
- Adjust temperature threshold and re-analyze; events change accordingly.
- Click an event; add an annotation; save.
- Export Markdown and paste into a note — formatting is readable.

## Edge cases
- Logs with no timestamps — still parse keywords, but mark time as “unknown”.
- Mixed timestamp formats (ISO, "Mar 9 05:12:33").
- Duplicate lines — de-dup should not hide important repeats.
- Very large paste (10k+ lines) — UI remains responsive (best-effort).

## Acceptance verification
- Demo references no external URLs.
- All controls are keyboard-accessible (buttons, selects, dialog).
- Export includes thresholds used and counts by severity.
