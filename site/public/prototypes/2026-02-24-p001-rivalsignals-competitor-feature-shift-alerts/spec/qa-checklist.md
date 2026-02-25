# QA checklist

## Happy path
- User can add a competitor with a source (RSS or changelog URL).
- System ingests one new update and produces a RivalSignal:
  - clear “what changed”
  - category
  - impact score + confidence
  - 3-bullet “why it matters” tied to user context
  - suggested response (ignore/watch/copy/counter-position/ship)
- If score ≥ threshold, user receives an alert (email/Telegram) containing:
  - competitor name
  - link(s) to the original source
  - summary + rationale

## Edge cases
- No new updates → no alert, and a quiet “checked” log entry exists.
- Duplicate/near-duplicate posts (cross-posted blog + changelog) → de-duped into one alert.
- Source returns 403/timeout → marked as failed with a retry policy; no spam alerts.
- Extremely long release notes → summarized without losing key changes (top N items, rest collapsed).
- Multiple changes in one post (pricing + feature) → either multi-signal output or single alert with sub-items.

## Acceptance verification (spec-level)
- Provide a sample competitor update and a sample user context; verify the triage output includes all required fields.
- Manual review: the “what changed” statement must be verifiable from the linked source.
- Confirm that the falsification checklist items map to measurable pilot outcomes.
