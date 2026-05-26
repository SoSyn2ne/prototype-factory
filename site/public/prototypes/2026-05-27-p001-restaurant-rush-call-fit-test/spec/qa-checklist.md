# QA checklist

## Happy path
- All required UI sections from the idea appear in the Stitch output.
- The first screen communicates: A pre-sales simulator that proves whether an AI phone agent can survive a restaurant rush before the owner connects it to real callers.
- The main workflow supports: The owner selects menu complexity, rush window, common modifications, POS path, and escalation rules; the app stress-tests sample calls and shows where the bot will lose orders, annoy staff, or create kitchen rework.
- Design direction visibly follows field-ops.

## Edge cases
- Long source names, URLs, or evidence labels do not break cards.
- Mobile view keeps primary controls usable.
- Empty states explain the next input without adding marketing fluff.

## Acceptance verification
- meta.json includes designProfile, theme, externalSignalRefs, stitchPrompt, and expectedDropFolder.
- spec/prd.md contains the idea text, signal references, and Stitch prompt.
- Drop folder expected for ingest: /home/sy/Downloads/stitch_drop/2026-05-27/p001/
