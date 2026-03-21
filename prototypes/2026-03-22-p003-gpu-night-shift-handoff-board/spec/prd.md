    # PRD — GPU Night Shift Handoff Board

    ## Problem
    - Turn overnight GPU jobs, incidents, and maintenance notes into a morning handoff board with clear owner actions.
    - Users currently reconcile this workflow across scattered notes, screenshots, chat threads, and spreadsheets.
    - The prototype should compress the first useful decision into a single screen.

    ## Target user
    - Solo operators or small AI teams running home-lab / small-server GPU workloads overnight.

    ## Key UX
    - A morning ops board that summarizes completed jobs, failures, thermal anomalies, and the first three actions to take.

    ## Required UI sections
    - Overnight summary cards
- Job outcome table
- Incident timeline
- Thermal / disk alerts
- Owner action checklist

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
