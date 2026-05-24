# QA checklist

## Happy path
- Title, one-liner, theme, and design profile match daily/2026-05-25/ideas.md.
- Exactly one design profile is assigned: playful-experimental.
- The main workflow is visible and specific to the target user.
- Required UI sections are represented in the Stitch output.

## Edge cases
- Empty or partial input states are still understandable.
- Urgent/risky states are legible without alarmist copy.
- Export/share sections do not imply professional advice or guaranteed outcomes.

## Acceptance verification
- meta.json contains candidate type, design profile, theme, target user, key UX, UI sections, signal references, full Stitch prompt, and expected drop folder.
- spec/prd.md contains the full copy-paste Stitch prompt.
- Stitch export should land at /home/sy/Downloads/stitch_drop/2026-05-25/p004/code.html and /home/sy/Downloads/stitch_drop/2026-05-25/p004/screen.png.
