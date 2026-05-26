# QA checklist

## Happy path
- All required UI sections from the idea appear in the Stitch output.
- The first screen communicates: A playful event kit that helps friends pitch their single friends offline without turning the night into another dating-app profile review.
- The main workflow supports: Friends build a short pitch deck for one single person, choose the vibe, add conversation-safe details, set boundaries, and generate a live event slide plus shareable invite card.
- Design direction visibly follows playful-experimental.

## Edge cases
- Long source names, URLs, or evidence labels do not break cards.
- Mobile view keeps primary controls usable.
- Empty states explain the next input without adding marketing fluff.

## Acceptance verification
- meta.json includes designProfile, theme, externalSignalRefs, stitchPrompt, and expectedDropFolder.
- spec/prd.md contains the idea text, signal references, and Stitch prompt.
- Drop folder expected for ingest: /home/sy/Downloads/stitch_drop/2026-05-27/p004/
