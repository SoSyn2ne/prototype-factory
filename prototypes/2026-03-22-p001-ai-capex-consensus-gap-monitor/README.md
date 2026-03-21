    # AI Capex Consensus Gap Monitor

    Track where hyperscaler AI capex expectations diverge from company guidance and surface the fastest thesis-break signals.

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

    ## Stitch prompt
    ```
    You are designing a SINGLE high-fidelity UI screen for "Prototype Factory Premium".

    Goal: Create the UI/UX for a prototype detail/demo experience that matches this product idea.

    IDEA
    - ID: 2026-03-22-p001
    - Title: AI Capex Consensus Gap Monitor
    - One-liner: Track where hyperscaler AI capex expectations diverge from company guidance and surface the fastest thesis-break signals.
    - Target user: US semiconductor / AI infrastructure investors who track hyperscalers, semicap, and memory names.
    - Key UX: A consensus-vs-guidance scoreboard with variance chips, linked catalyst cards, and a thesis-break watchlist that can be reviewed in under 5 minutes.
    - Tags: investing, semiconductors, ai, monitoring
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
    1) Consensus vs Guidance scoreboard.
2) Company drilldown panel.
3) Catalyst timeline.
4) Thesis-break watchlist.
5) Notes + next action drawer.
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
