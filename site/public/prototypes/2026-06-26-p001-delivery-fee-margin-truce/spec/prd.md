# PRD — Delivery Fee Margin Truce

## Problem
- A settlement-style margin room for Korean restaurants to prove how delivery-app fees, subsidies, menu prices, and pickup nudges change daily cash left.

## Target user
- Korean restaurant owners, franchise managers, and merchant associations negotiating delivery-app fee pressure.

## Key UX
- Owner enters menu price, app commission, delivery subsidy, packaging cost, pickup discount, and order mix; the app shows per-order cash left, break-even menu changes, and a negotiation-ready fee receipt.

## Required UI sections
- Fee pressure header with today's net margin
- Order mix and menu price simulator
- Commission/subsidy/pickup comparison table
- Break-even menu change ladder
- Association-ready evidence packet
- Customer-facing pickup nudge preview
- Policy talk timeline and notes

## Design profile
- operator-dense

## Theme
- 자산 방어

## Source signal references
- S8: Korean delivery-app commission talks restarted because platform fees are a visible burden on small merchants; small-business groups want relief more than penalties. Source: https://biz.chosun.com/en/en-retail/2026/06/09/ICIJY6OKKVGHJKHWKPMGFWVNZE/
- S9: Half of Korea self-employed owners say conditions worsened in 2026, and one in three earns below minimum wage after expenses. Source: https://en.sedaily.com/business/2026/06/23/half-of-koreas-self-employed-say-business-worsened-this-year

## loved_by_small_group
- 5

## spread_trigger
- A merchant can show the fee receipt to other shop owners, franchise HQ, or local association chats.

## Copy/paste-ready Stitch prompt
Build a production-grade web app prototype called "Delivery Fee Margin Truce" for Korean restaurant owners and franchise managers under delivery-app commission pressure. The first screen must be a working margin settlement room: fee pressure header, order mix simulator, commission/subsidy/pickup comparison table, break-even menu ladder, evidence packet builder, customer pickup nudge preview, and policy-talk notes. Use realistic sample data: 23% app commission burden, KRW 9,900 lunch set, packaging cost, coupon subsidy, Baemin/Coupang-style platform rows, pickup discount, and owner income after rent and labor. Design direction: use the operator-dense profile with compact margin tables, tabular KRW numbers, restrained slate surfaces, sharp risk badges, and one action accent for export/negotiation controls. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not make a marketing-only landing page.

## Success metrics
- Stitch output preserves the working-app first screen and assigned design profile.
- p001 export lands at /home/sy/Downloads/stitch_drop/2026-06-26/p001/code.html and screen.png.
