# QA checklist

## Happy path
- User sees the title, one-liner, and primary action immediately.
- User can enter or review evidence related to: S2, S3.
- User reaches the output artifact: Base UI migration quote packet.

## Edge cases
- Missing evidence should show a useful empty state, not filler text.
- Mobile layout must keep all buttons and labels readable.
- Long source or policy labels must wrap cleanly.

## Acceptance verification
- Phase A only: no custom demo implementation.
- meta.json includes designProfile, theme, targetUser, requiredUiSections, sourceSignalReferences, and stitchPrompt.
- spec/prd.md, assumptions.md, falsification.md, and qa-checklist.md contain actual idea-specific text with no blank placeholders.
- Stitch output should later land in /home/sy/Downloads/stitch_drop/2026-07-13/p002/code.html and /home/sy/Downloads/stitch_drop/2026-07-13/p002/screen.png.
