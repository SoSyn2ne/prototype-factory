# PRD - AI Tool Graveyard ROI Board

## Problem
Small teams audit which AI tools quietly failed, which still save hours, and what to cancel before tool sprawl eats budget.

## Target user
Small business owners, ops managers, agencies, and team leads with multiple AI subscriptions and unclear adoption.

## Key UX
Manager lists tools, cost, promised workflow, actual usage, time saved, irritation, and renewal dates; the app separates keep, kill, retrain, or replace decisions.

## Required UI sections
- AI spend and renewal cliff header
- Tool inventory table with owner, cost, use case, and login activity
- Promise vs actual workflow scorecards
- Employee friction and trust notes lane
- Hours-saved calculator with confidence labels
- Cancel/retrain/replace decision queue
- Quarterly AI policy memo for the team

## Assigned design profile
financial-analyst

## Theme
자산 방어 - AI subscription sprawl and workflow failure cleanup.

## Source signal references
- S13 - SBE Council, small business AI tool adoption is widespread in 2026: https://sbecouncil.org/2026/04/25/the-ai-tools-small-businesses-are-using/
- S14 - Reddit r/LLM, companies quietly discontinue failed AI tools: https://www.reddit.com/r/LLM/comments/1mo281a/report_says_42_of_companies_are_quitting_ai_what/

## Stitch prompt
Build a production-grade web app prototype called "AI Tool Graveyard ROI Board" for small teams auditing AI tools that were adopted but may not be working. The first screen must be a working AI spend audit board with an AI spend and renewal cliff header, tool inventory table, promise-vs-actual workflow scorecards, employee friction notes lane, hours-saved calculator, cancel/retrain/replace decision queue, and quarterly AI policy memo. Use realistic sample data: eight AI tools, $642 monthly spend, two tools with no logins in 30 days, one support chatbot annoying staff, one reporting assistant saving four hours weekly, and three renewals due next month. Design direction: use the financial-analyst profile with rigorous ROI tables, quiet confidence badges, restrained amber risk markers, and clean interpretation notes beside every chart. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Phase A only: no custom demo implementation.
- Stitch output must preserve the assigned design profile.
- First screen must be the working app, not a marketing landing page.

## Success metrics
- User can understand the core decision or field workflow within 10 seconds.
- Every required UI section appears in the generated Stitch output.
- The cited source signals are visible as problem evidence in the product framing.
