# PRD — Agent Traffic Tollbooth

## Problem
- A website-operator console that separates useful AI agents, spoofed crawlers, and costly invisible traffic before margins and analytics get polluted.
- Inspired by external problem signals: Signal 1 — BetaNews / DataDome — businesses struggle to identify AI agent traffic: https://betanews.com/article/businesses-struggle-to-identify-ai-agent-traffic/; Signal 2 — Reddit r/smallbusiness — sick of apps/SaaS/AI mess: https://www.reddit.com/r/smallbusiness/comments/1r7hqn2/is_anyone_else_sick_of_all_of_the_apps_and_saas_bs/

## Target user
- E-commerce, travel, real-estate, media, and SaaS operators seeing AI crawler or agent-browser traffic hit transactional pages without a clear policy.

## Key UX
- Connect traffic logs or paste user-agent samples; classify agent traffic by verified, spoofed, costly, or monetizable; simulate block/allow/paywall rules; export a finance-ready traffic policy.

## Required UI sections
- agent traffic inbox
- verified-vs-spoofed classifier
- cost and conversion leakage panel
- allow/block/paywall policy simulator
- industry risk heatmap
- partner access whitelist
- monthly traffic board memo

## Design profile
- operator-dense

## Theme
- 자산 방어

## Stitch prompt
Design a desktop web-operations product called Agent Traffic Tollbooth for e-commerce, travel, real-estate, media, and SaaS operators who need to control AI agent and crawler traffic. Users should paste server-log samples, user agents, referrers, page categories, and conversion-cost assumptions, then classify traffic as verified agent, spoofed agent, useful crawler, costly scraper, or monetizable partner. Include an agent traffic inbox, verified-vs-spoofed classifier, cost and conversion leakage panel, allow/block/paywall policy simulator, industry risk heatmap, partner access whitelist, and monthly traffic board memo. Design direction: use an operator-dense aesthetic with compact log tables, dark infrastructure surfaces, sharp verification badges, red/orange leak warnings, and dense but readable control panels so it feels like a traffic command center rather than a generic analytics dashboard.

## Constraints
- Time: Phase A scaffold only; Stitch export expected later.
- Budget: Keep prototype static and fast to review.
- Platform: Web demo imported from Stitch in later phase.

## Non-goals
- No full custom implementation in Phase A.
- No external LLM/API calls.

## Success metrics
- User understands the core pain within 5 seconds.
- Main workflow has one obvious next action.
- Stitch output can preserve the original environment for `/d/2026-05-05-p001` in Phase B/C.

## Notes
- Expected drop folder: `/home/sy/Downloads/stitch_drop/2026-05-05/p001/`
