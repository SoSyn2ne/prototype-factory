# QA checklist

## Happy path
- Paste multi-paragraph text.
- Click Scan → category scores + matched phrases appear.
- Toggle highlight on/off → evidence view updates.
- Add a phrase (category + weight) → re-scan includes it.
- Remove a phrase → re-scan excludes it.
- Copy checklist → clipboard contains grouped bullet list.

## Edge cases
- Empty input → show a gentle error state (no crash).
- Very large input (e.g., 50k chars) → still responsive or warns.
- Non-ASCII text (Korean notes mixed in) → no rendering break.
- Phrases overlapping (e.g., “material weakness” and “weakness”) → deterministic highlighting.
- Duplicate phrases added → dedupe or allow but stable output.
- Clipboard permission denied → fallback (select + manual copy).

## Acceptance verification
- No external CDNs/fonts.
- Works by opening `demo/index.html` directly (file://).
- Produces deterministic results for same input.
