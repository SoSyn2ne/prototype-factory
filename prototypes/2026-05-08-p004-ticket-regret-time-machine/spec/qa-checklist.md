# QA checklist

## Happy path
- User lands on the demo and immediately sees the product name, target pain, and main action.
- The UI includes all sections listed in `meta.json.requiredUiSections`.
- The visual direction follows `playful-experimental` and does not drift into a generic dashboard.

## Edge cases
- Empty or partial user input still shows useful example data.
- Long URLs, quote text, legal/policy wording, or event names do not break layout.
- Mobile and desktop views remain readable where relevant.

## Acceptance verification
- `daily/2026-05-08/ideas.md` includes this candidate, source signals, profile, theme, and full Stitch prompt.
- `meta.json` includes target user, key UX, required sections, design profile, theme, search signals, prompt, phase, and slot.
- Stitch export for this slot should land in `/home/sy/Downloads/stitch_drop/2026-05-08/p004/`.
