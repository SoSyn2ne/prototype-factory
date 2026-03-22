# PRD — Shorts Package QC Board

## Problem
- A single-screen QA board that checks whether a short-form content package is actually publish-ready before upload.
- Users currently piece this workflow together across chat, notes, screenshots, and folder browsing.
- The prototype should compress the first useful decision into a single screen.

## Target user
- Solo creators and operators packaging daily shorts batches.

## Key UX
- Review one batch at a glance, spot missing assets or metadata instantly, and mark the next unblocker without opening multiple folders.

## Required UI sections
- Batch status hero
- Asset completeness checklist
- Title/hook/CTA review cards
- Risk flags panel
- Publish readiness summary
- Next action drawer

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

## Stitch prompt
- Design a premium dark-mode web app screen called "Shorts Package QC Board" for solo creators who ship daily short-form content. The screen should feel like an operator console with clean spacing, crisp typography, and concise copy. Include: (1) a batch status hero for today's package with readiness score and primary CTA, (2) an asset completeness checklist for script, voice, captions, cover, and upload metadata, (3) title/hook/CTA review cards with pass/warn/fail chips, (4) a risk flags panel for copyright, timing, and missing-file issues, (5) a publish readiness summary with green/yellow/red states, and (6) a next action drawer that tells the operator the single highest-leverage fix. Use realistic mocked data, no chat UI, no mobile frame, no code blocks.
