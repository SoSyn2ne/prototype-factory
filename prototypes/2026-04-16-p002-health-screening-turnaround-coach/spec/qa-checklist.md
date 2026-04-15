# QA checklist

## Happy path
- Title, one-liner, theme, and design profile match the daily idea pack.
- The demo shell highlights: Translate red-flag lab numbers into a simple weekly recovery plan with clear behavior targets, emotional reassurance, and visible progress toward the next test date.
- Core sections are represented: risk and retest summary, 8-week habit runway, meal and movement plan cards, sleep and stress tracker, lab marker trend panel, doctor question prep drawer.

## Edge cases
- The layout stays understandable even when section labels are dense or emotionally charged.
- Long labels still fit without breaking the main hierarchy.
- Empty or partial data states still preserve the concept story.

## Acceptance verification
- `meta.json` includes theme, designProfile, targetUser, keyUX, requiredUISections, and stitchPrompt.
- All spec files contain idea-specific content instead of template placeholders.
- The concept is clearly identifiable as practical / commercial.
