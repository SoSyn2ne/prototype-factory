# QA checklist

## Happy path
- Open `demo/index.html` directly (no server).
- Paste a sample transcript paragraph containing:
  - guidance language (“raise/lower guidance”, “full-year outlook”, “reaffirm”)
  - demand language (“orders”, “backlog”, “pipeline”, “bookings”, “churn”)
  - supply language (“capacity”, “lead times”, “constraints”, “inventory”)
  - AI language (“GPU”, “LLM”, “inference”, “training”, “GenAI”)
- Click **Slice** and verify:
  - 4 bucket cards render with a confidence score and matched count
  - Transcript output shows color-coded highlights
  - Clicking a bucket filters highlights (non-selected buckets dim/hide)
  - Clicking “All” returns to the full view

## Edge cases
- Empty input → shows a clear message; no crashes.
- Very long transcript (paste ~50k+ characters) → UI remains responsive; slicing completes.
- No matches (e.g., generic safe-harbor text) → confidence drops and/or counts are zero; transcript displays without highlights.
- All-caps / inconsistent punctuation / lots of newlines → sentence splitting still produces usable chunks.
- Repeated boilerplate (forward-looking statements) → doesn’t dominate buckets excessively.
- Ambiguous terms (“capacity”, “model”, “training”) → reasonable behavior (some false positives acceptable, but not overwhelming).

## Acceptance verification
- Offline guarantee: `demo/index.html` has **no external** font/script/style requests (no CDNs).
- Browser compatibility: works in latest Chrome and Firefox when opened via `file://`.
- Deterministic output: slicing the same transcript twice produces identical bucket counts and highlights.
- Accessibility basics: all interactive controls are keyboard reachable; visible focus state; sufficient contrast for highlights.
