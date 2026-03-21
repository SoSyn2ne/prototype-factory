    # PRD — Wedding Vendor Run-Sheet Checker

    ## Problem
    - Compare venue, photo, makeup, and ceremony timelines to catch handoff gaps before wedding day.
    - Users currently reconcile this workflow across scattered notes, screenshots, chat threads, and spreadsheets.
    - The prototype should compress the first useful decision into a single screen.

    ## Target user
    - Couples or wedding coordinators juggling multiple vendor schedules and last-minute timing changes.

    ## Key UX
    - A merged timeline view that highlights conflicts, missing owners, and too-tight buffers with clear fix suggestions.

    ## Required UI sections
    - Merged run-sheet timeline
- Conflict list
- Vendor contact cards
- Buffer risk summary
- Export / print actions

    ## Constraints
    - Time: Phase A only; do not build a custom production demo yet.
    - Budget: static prototype / stitched export friendly.
    - Platform: responsive web UI.

    ## Non-goals
    - No live integrations or external APIs.
    - No backend auth, payments, or notification plumbing.
    - No fully custom demo logic beyond scaffold + stub.

    ## Success metrics
    - A user understands the core workflow in under 30 seconds.
    - The screen makes the next action obvious without onboarding.
    - The exported Stitch screen can drop into the demo slot with minimal cleanup.

    ## Notes
    - Use premium catalog-style visual language.
    - Keep copy concise, operator-friendly, and deterministic.
