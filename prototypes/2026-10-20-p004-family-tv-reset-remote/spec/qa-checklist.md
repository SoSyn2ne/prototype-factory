# QA checklist

## Happy path
- Scan a supported TV model, compare current and proposed homes, approve the safe bundle, and save both QR codes.
- Open the restore path and confirm the original home preview.

## Edge cases
- Unknown model, partial support, protected app conflict, QR expired, remote parent needs plain-language help.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, UI sections, and S10 reference match ideas.md and meta.json.
- Exactly one design profile is used: calm-consumer.
- Apply and restore artifacts are visually and verbally distinct.
- 390px remains usable with large previews and 44px controls.
- No ADB execution, external device call, placeholder, or Phase A custom demo exists.
