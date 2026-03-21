# Prototype Ideas — 2026-03-22

Drop folder contract:
- `/home/sy/Downloads/stitch_drop/2026-03-22/`

## Idea 1 — AI Capex Consensus Gap Monitor
- One-liner: Track where hyperscaler AI capex expectations diverge from company guidance and surface the fastest thesis-break signals.
- Target user: US semiconductor / AI infrastructure investors who track hyperscalers, semicap, and memory names.
- Key UX: A consensus-vs-guidance scoreboard with variance chips, linked catalyst cards, and a thesis-break watchlist that can be reviewed in under 5 minutes.
- Required UI sections:
  - Consensus vs Guidance scoreboard
  - Company drilldown panel
  - Catalyst timeline
  - Thesis-break watchlist
  - Notes + next action drawer

### Stitch Prompt
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

## Idea 2 — Wedding Vendor Run-Sheet Checker
- One-liner: Compare venue, photo, makeup, and ceremony timelines to catch handoff gaps before wedding day.
- Target user: Couples or wedding coordinators juggling multiple vendor schedules and last-minute timing changes.
- Key UX: A merged timeline view that highlights conflicts, missing owners, and too-tight buffers with clear fix suggestions.
- Required UI sections:
  - Merged run-sheet timeline
  - Conflict list
  - Vendor contact cards
  - Buffer risk summary
  - Export / print actions

### Stitch Prompt
```
You are designing a SINGLE high-fidelity UI screen for "Prototype Factory Premium".

    Goal: Create the UI/UX for a prototype detail/demo experience that matches this product idea.

    IDEA
    - ID: 2026-03-22-p002
    - Title: Wedding Vendor Run-Sheet Checker
    - One-liner: Compare venue, photo, makeup, and ceremony timelines to catch handoff gaps before wedding day.
    - Target user: Couples or wedding coordinators juggling multiple vendor schedules and last-minute timing changes.
    - Key UX: A merged timeline view that highlights conflicts, missing owners, and too-tight buffers with clear fix suggestions.
    - Tags: wedding, ops, planning, checklist
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
    1) Merged run-sheet timeline.
2) Conflict list.
3) Vendor contact cards.
4) Buffer risk summary.
5) Export / print actions.
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

## Idea 3 — GPU Night Shift Handoff Board
- One-liner: Turn overnight GPU jobs, incidents, and maintenance notes into a morning handoff board with clear owner actions.
- Target user: Solo operators or small AI teams running home-lab / small-server GPU workloads overnight.
- Key UX: A morning ops board that summarizes completed jobs, failures, thermal anomalies, and the first three actions to take.
- Required UI sections:
  - Overnight summary cards
  - Job outcome table
  - Incident timeline
  - Thermal / disk alerts
  - Owner action checklist

### Stitch Prompt
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

