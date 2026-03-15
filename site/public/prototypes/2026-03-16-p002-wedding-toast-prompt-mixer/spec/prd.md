# PRD — Wedding Toast Prompt Mixer

## Problem
Most wedding toasts fail for predictable reasons:
- the speaker doesn’t know what to say (blank page),
- the toast is too long or rambles,
- the tone doesn’t match the room (too roast-y or too sentimental),
- rehearsal is skipped.

A speaker needs a fast way to assemble a solid 60–90 second toast with structure, tone, and a built-in rehearsal timer.

## Target user
- Best man / maid of honor / close friend giving a toast.
- Someone who wants a helpful scaffold, not a full “AI write my speech” tool.

## Constraints
- Time: 10 minutes from zero to a usable outline
- Budget: $0
- Platform: single static HTML demo; offline-capable

## Non-goals
- Not a live speech recognition coach.
- Not a full writing app with accounts.
- Not a comedy generator (avoid risky jokes by default).

## Success metrics
- User produces a toast outline with: hook → 1 story → gratitude → wish → close.
- Output targets 60–90 seconds and displays an estimated duration.
- User can rehearse with a large “teleprompter” mode + timer.

## Notes
- The “mixer” is deliberate: prompts are modular so the speaker still owns the words.
- Safety: default templates avoid sensitive topics.
