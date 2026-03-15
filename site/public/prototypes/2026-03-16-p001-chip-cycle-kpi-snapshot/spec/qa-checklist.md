# QA checklist

## Happy path
- Adjust sliders → stance, confidence, and receipts update instantly.
- Click Bull/Base/Bear presets → inputs change and output recomputes.
- Click Export → a one-paragraph summary is copied to clipboard.

## Edge cases
- All signals neutral (0) → stance should be Hold with low confidence.
- Macro risk maxed (high risk) while others bullish → stance should not show “Go”.
- Clipboard copy fails (permission) → show a fallback message.

## Acceptance verification
- Demo loads fully offline (no external fonts/CDNs).
- Keyboard navigation works; labels are associated with inputs.
- JS has no syntax errors.
