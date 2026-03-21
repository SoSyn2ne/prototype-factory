    # PRD — AI Capex Consensus Gap Monitor

    ## Problem
    - Track where hyperscaler AI capex expectations diverge from company guidance and surface the fastest thesis-break signals.
    - Users currently reconcile this workflow across scattered notes, screenshots, chat threads, and spreadsheets.
    - The prototype should compress the first useful decision into a single screen.

    ## Target user
    - US semiconductor / AI infrastructure investors who track hyperscalers, semicap, and memory names.

    ## Key UX
    - A consensus-vs-guidance scoreboard with variance chips, linked catalyst cards, and a thesis-break watchlist that can be reviewed in under 5 minutes.

    ## Required UI sections
    - Consensus vs Guidance scoreboard
- Company drilldown panel
- Catalyst timeline
- Thesis-break watchlist
- Notes + next action drawer

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
