# QA checklist

## Happy path
- Paste a log containing "CUDA out of memory" → OOM category appears.
- Paste a log containing "NVRM: Xid" → driver reset category appears.
- Click a category → evidence list updates.
- Save a triage note → appears in history.
- Reload → history persists.

## Edge cases
- Empty paste should show a friendly prompt.
- Huge logs should warn and truncate safely.
- Multiple categories should be supported (ranked list).

## Acceptance verification
- No external network calls.
- Buttons/inputs accessible and keyboard-operable.
- Saved data is local and deletable.
