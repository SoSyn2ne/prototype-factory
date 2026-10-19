# QA checklist

## Happy path
- Rotate to Unplug after full, simulate charging to ready, join by NFC, and complete an anonymous handoff.
- Save the etiquette replay and increment the mock streak.

## Edge cases
- Do not touch, charger full but no permission, two-person queue, owner no response, timeout, puck offline.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, sections, and S04 reference match ideas.md and meta.json.
- Exactly one design profile is used: playful-experimental.
- Consent state is conveyed by words/icons as well as color.
- 390px keeps puck, queue, and countdown in one readable flow.
- No real vehicle control, personal contact exchange, placeholder, or Phase A custom demo exists.
