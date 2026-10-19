# QA checklist

## Happy path
- Tap the mocked lobby NFC, confirm a household, register a guest plate, and receive a timed completion receipt.
- Return to the strip and open a parcel-locker token without installing an app.

## Edge cases
- Token expired, unsupported phone, building service offline, shared-device privacy, household mismatch.
- Manual phone/paper/office fallback remains visible and actionable.

## Acceptance verification
- Title, one-liner, target user, key UX, profile, theme, sections, and S01/H6 references match ideas.md and meta.json.
- Exactly one design profile is used: calm-consumer.
- The calm interface uses large 44px controls and no dense property-management dashboard.
- 390px has no horizontal overflow; desktop still reads as the same product.
- No placeholder, external API, app-install gate, or Phase A custom demo exists.
