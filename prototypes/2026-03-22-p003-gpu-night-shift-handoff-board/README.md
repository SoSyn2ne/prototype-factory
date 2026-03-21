    # GPU Night Shift Handoff Board

    Turn overnight GPU jobs, incidents, and maintenance notes into a morning handoff board with clear owner actions.

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

    ## Stitch prompt
    ```
    You are designing a SINGLE high-fidelity UI screen for "Prototype Factory Premium".

    Goal: Create the UI/UX for a prototype detail/demo experience that matches this product idea.

    IDEA
    - ID: 2026-03-22-p003
    - Title: GPU Night Shift Handoff Board
    - One-liner: Turn overnight GPU jobs, incidents, and maintenance notes into a morning handoff board with clear owner actions.
    - Target user: Solo operators or small AI teams running home-lab / small-server GPU workloads overnight.
    - Key UX: A morning ops board that summarizes completed jobs, failures, thermal anomalies, and the first three actions to take.
    - Tags: gpu, ops, monitoring, runbook
    - Status: prototype
    - Tech stack (optional): design, docs

    DELIVERABLE
    - Output: 1 page (responsive) that includes BOTH:
      1) A detail hero section (title, one-liner, badges/tags, CTA)
      2) An interactive demo panel (a "device preview" frame with Mobile/Tablet/Desktop toggle)

    UI SECTIONS (must include)
    1) Sticky top navigation (Gallery, Marketplace, Experiments, Pricing) with a clean premium feel.
    2) Hero: title, one-liner, 2~4 meta chips (tags/stack), primary CTA "Try it now", secondary "View spec".
    3) Demo frame: embedded demo area with device toggle pills (Mobile/Tablet/Desktop), plus an "Open full tab" link.
    4) Domain panels specific to this idea:
    1) Overnight summary cards.
2) Job outcome table.
3) Incident timeline.
4) Thermal / disk alerts.
5) Owner action checklist.
    5) Below demo: Reviews block (rating summary + 2 review cards) and a small "Write a review" CTA (mock).
    6) Spec teaser: a collapsible section with 3 bullet highlights + a "Read full spec" link.

    STYLE
    - Modern UI registry / component-catalog aesthetic: lots of whitespace, sharp typography, subtle borders, rounded-2xl cards, soft shadows.
    - Dark mode friendly.

    CONSTRAINTS
    - No external icon libraries. Use simple inline SVG or text symbols.
    - No external images; use tasteful placeholders/gradients.
    - Make it look production-ready, not a template.

    Copy can mix Korean and English, but keep section headings in English.
    ```
