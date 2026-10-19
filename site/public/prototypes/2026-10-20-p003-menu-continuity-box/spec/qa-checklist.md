# QA checklist

## Happy path
- Detect a mock full-screen ad, preserve six prices, press Menu Return, and create an interruption receipt.
- Review the clipped interruption and share the daily summary.

## Edge cases
- HDMI absent, classifier uncertain, stale prices, override unavailable, device offline, paper-menu fallback.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, sections, and S05 reference match ideas.md and meta.json.
- Exactly one design profile is used: field-ops.
- 48px controls, high contrast, and explicit hardware states are visible.
- 1440px and tablet screenshots show mirror, price rail, and override together.
- No external signage/POS API, placeholder, or Phase A custom demo exists.
