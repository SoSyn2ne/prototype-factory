# PRD — Tenant Renewal Leak Tracker

## Problem
- A property-ops tracker that flags lease renewals most likely to slip so managers can save occupancy before units go dark.
- Users currently track the workflow across spreadsheets, inboxes, and ad-hoc follow-ups.
- The prototype should make the highest-value next action obvious in one desktop screen.

## Target user
- Small property managers and landlord operations teams overseeing upcoming residential renewals.

## Key UX
- See which tenants need intervention now, why renewal confidence is weakening, and what save action is most likely to preserve occupancy.

## Required UI sections
- Occupancy-risk hero
- Renewal triage list
- Tenant signal panel
- Offer simulator card
- Communication timeline
- Vacancy exposure rail

## Constraints
- Time: Phase A only; do not build a custom production demo yet.
- Budget: static prototype / Stitch-export friendly.
- Platform: responsive web UI with a desktop-first composition.

## Non-goals
- No live integrations or external APIs.
- No backend auth, billing, or notification plumbing.
- No fully custom demo logic beyond scaffold + stub.

## Success metrics
- A user understands the core workflow in under 30 seconds.
- The main decision path is visually obvious without onboarding.
- A Stitch export can drop into the stub demo slot with minimal cleanup.

## Stitch prompt
- Design a polished desktop property-operations dashboard called "Tenant Renewal Leak Tracker" for teams managing upcoming residential lease renewals. Use a calm but decisive operations design direction with forest slate, warm white, and muted teal accents; keep hierarchy orderly, risk signals prominent, and the overall product feel professional, reassuring, and occupancy-focused. Include: (1) an occupancy-risk hero with renewals due, likely saves, and urgent CTA, (2) a renewal triage list showing tenant, unit, rent, expiry date, and renewal confidence, (3) a tenant signal panel with payment behavior, maintenance friction, and sentiment notes, (4) an offer simulator card comparing renewal terms, concessions, or upgrade options, (5) a communication timeline for outreach attempts and responses, and (6) a vacancy exposure rail with projected lost rent and save potential. Use realistic mocked property-management data, desktop-first layout, concise labels, and no code blocks.
