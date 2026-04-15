# QA checklist

## Happy path
- Title, one-liner, theme, and design profile match the daily idea pack.
- The demo shell highlights: Send a tiny midnight signal, watch nearby mood matches appear, and unlock a low-pressure shared plan only after both sides opt into the same vibe.
- Core sections are represented: live mood beacon stage, nearby signal map, vibe match carousel, mutual unlock ladder, micro-hangout suggestion drawer, shareable night recap card.

## Edge cases
- The layout stays understandable even when section labels are dense or emotionally charged.
- Long labels still fit without breaking the main hierarchy.
- Empty or partial data states still preserve the concept story.

## Acceptance verification
- `meta.json` includes theme, designProfile, targetUser, keyUX, requiredUISections, and stitchPrompt.
- All spec files contain idea-specific content instead of template placeholders.
- The concept is clearly identifiable as fun / experimental.
