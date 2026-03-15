# QA checklist

## Happy path
- Paste log snippet + toggle symptoms → category + confidence + next steps update.
- Click example incidents → fills the form and computes.
- Click Copy note → clipboard has a concise incident note.
- Tag incident → counts update in the small chart.

## Edge cases
- Empty input → returns “Unknown” with safe next steps.
- Contradictory symptoms → confidence drops.
- Clipboard blocked → fallback message.

## Acceptance verification
- Demo works offline (no external dependencies).
- Keyboard focus visible; labels connected.
- JS has no syntax errors.
