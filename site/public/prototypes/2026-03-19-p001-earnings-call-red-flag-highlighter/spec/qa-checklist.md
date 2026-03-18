# QA checklist

## Happy path
- Open `demo/index.html` directly (no server).
- Load **Preset A**.
- Click **Find red flags** and verify:
  - A ranked list appears with category + severity + confidence + quote.
  - Toggling **Explain rules** shows which rule(s) fired for each flag.
  - Clicking a flag scrolls the rendered transcript to the quote and highlights it.

## Edge cases
- Empty transcript: clicking **Find red flags** shows a helpful message; no crash.
- No matches (paste generic safe-harbor boilerplate): list shows “no flags” state.
- Long input (~50k chars): analysis completes and UI remains usable.
- Mixed casing / lots of newlines: matches still work.

## Acceptance verification
- No external CDN/font usage. Verify:
  - `rg "fonts\\.(googleapis|gstatic)\\.com" prototypes/2026-03-19-p001-earnings-call-red-flag-highlighter/demo -n` returns no matches.
- Demo works offline (no network tab requests required).
