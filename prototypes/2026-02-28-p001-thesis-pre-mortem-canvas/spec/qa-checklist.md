# QA checklist

## Happy path
- Enter a thesis title + short thesis text.
- Add 3 assumptions.
- Adjust confidence and impact.
- Verify Fragility Score updates and a ranked “watchlist” is produced.
- Check off 2 falsification tasks; verify progress updates.

## Edge cases
- Empty thesis: UI should prompt and not crash.
- 0 assumptions: score should show “N/A” and explain what’s missing.
- Extremely high/low confidence values: score remains bounded and readable.
- Duplicate assumption titles: UI still works.

## Acceptance verification
- Demo is fully local (no external fonts/CDNs).
- Keyboard navigation: inputs focusable, buttons work via Enter/Space.
- Mobile width: layout stacks without overflow.
