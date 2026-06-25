# PRD — Vibe Code Launch Firewall

## Problem
- A pre-publication security checkpoint for vibe-coded apps that turns scary auth, data, and dependency unknowns into a launch/no-launch receipt.

## Target user
- Solo founders, creators, internal-tool builders, and non-engineers preparing to put an AI-generated app on a public URL.

## Key UX
- Builder answers a threat-model interview and pastes repo/config notes; the app highlights public data risk, auth gaps, secrets, dependencies, and gives a no-launch receipt.

## Required UI sections
- Launch/no-launch verdict header
- Sensitive data inventory
- Auth and permission checklist
- Secrets/config exposure scan mock
- Dependency and generated-code risk lane
- Fix-before-public checklist
- Investor/client-safe security receipt

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S4: Vibe-coded apps are spreading, but security experts warn that public/cloud launch can expose sensitive data through weak auth, config, and dependency choices. Source: https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps
- S7: Vibe-coding communities describe tools as expensive and wrong often enough that users ask for horror stories, safer workflows, and launch boundaries. Source: https://www.reddit.com/r/lovable/comments/1rui1j9/vibe_coding_in_2026_is_a_complete_scam_lovable/

## loved_by_small_group
- 5

## spread_trigger
- Founders can show the no-launch receipt to a cofounder, client, or security reviewer before a risky public demo.

## Copy/paste-ready Stitch prompt
Build a production-grade web app prototype called "Vibe Code Launch Firewall" for solo founders and creators about to publish a vibe-coded app. The first screen must be a working security checkpoint with launch/no-launch verdict header, sensitive data inventory, auth checklist, secrets/config exposure scan mock, dependency risk lane, fix-before-public checklist, and client-safe security receipt. Use realistic sample data: Supabase anon key, public bucket, user emails, Stripe test key, AI-generated auth middleware, unreviewed npm package, and a deadline for a Product Hunt launch. Design direction: use the operator-dense profile with compact risk rows, crisp evidence trays, dark graphite surfaces, sharp amber/red severity chips, and one clear action accent for remediation. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not make a marketing-only landing page.

## Success metrics
- Stitch output preserves the working-app first screen and assigned design profile.
- p005 export lands at /home/sy/Downloads/stitch_drop/2026-06-26/p005/code.html and screen.png.
