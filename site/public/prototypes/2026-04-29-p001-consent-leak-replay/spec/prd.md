# PRD — Consent Leak Replay

## Type
- Practical / Commercial

## Theme
- 자산 방어

## Design profile
- operator-dense

## Problem
- A privacy-ops self-test that records what a cookie banner actually does after opt-out, so small teams can catch broken consent before regulators or clients do.

## Target user
- Shopify agencies, SaaS founders, marketing ops teams, and privacy consultants responsible for sites that rely on cookie banners and ad tags.

## Key UX
- Enter a URL, simulate accept/reject/browser opt-out flows, replay which trackers still fire, then generate a plain-English fix queue and client-ready evidence memo.

## Required UI sections
- URL test launcher
- consent journey replay timeline
- tracker-after-opt-out table
- state-law risk badges
- dark-pattern copy flags
- client evidence memo drawer

## External signal references
- TrustArc privacy enforcement/cookie consent signal: https://trustarc.com/resource/privacy-enforcement-surging-2026/
- Bloomberg Law 2026 privacy enforcement signal: https://news.bloomberglaw.com/legal-exchange-insights-and-commentary/california-texas-are-leading-2026-privacy-enforcement-efforts

## Stitch prompt
Design a desktop privacy-ops self-test workspace called Consent Leak Replay for Shopify agencies, SaaS founders, marketing ops teams, and privacy consultants who need to prove that cookie consent actually works after opt-out. It should let users enter a URL, simulate accept/reject/browser opt-out flows, replay which trackers still fired, and generate a plain-English fix queue plus client-ready evidence memo. Include a URL test launcher, consent journey replay timeline, tracker-after-opt-out table, state-law risk badges, dark-pattern copy flags, and client evidence memo drawer. Design direction: use an operator-dense aesthetic with compact compliance panels, crisp event logs, high-signal red/amber risk chips, table-first evidence, and minimal decoration so the product feels like a serious audit console for urgent privacy fixes.

## Constraints
- Phase A only: scaffold/spec, no custom implementation yet.
- Wait for Stitch export in /home/sy/Downloads/stitch_drop/2026-04-29/p001/

## Non-goals
- Do not claim market-size validation from search snippets.
- Do not implement production integrations in Phase A.

## Success metrics
- Stitch export can be generated from the prompt.
- p001 has complete meta/spec content and is visible in the daily index.
