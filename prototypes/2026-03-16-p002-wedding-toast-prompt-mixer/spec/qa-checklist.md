# QA checklist

## Happy path
- Fill couple names + relationship + tone → Generate outline updates.
- “Shuffle prompts” changes the hook/story/wish suggestions.
- Start rehearsal timer → counts up and shows when 60/90 seconds are crossed.
- Teleprompter mode toggles on/off and is readable.

## Edge cases
- Empty names → output uses neutral placeholders without breaking layout.
- Very long story text → output truncates or remains readable.
- Timer pause/resume works; reset clears state.

## Acceptance verification
- Demo works offline (no external CDNs/fonts).
- Keyboard focus visible; form labels connected.
- JS has no syntax errors.
