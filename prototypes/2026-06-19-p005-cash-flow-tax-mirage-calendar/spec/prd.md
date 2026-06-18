# PRD — Cash Flow Tax Mirage Calendar

## Problem
- Tiny businesses separate real cash from tax, receivables, and invoice timing illusions over the next 30 days.
- Source signals: S9 from daily/2026-06-19/ideas.md.

## Target user
- Solo founders, freelancers, small agencies, local service shops, and bookkeepers who know bank balance is not true spendable cash.

## Key UX
- Owner enters invoices, expected payment dates, taxes, payroll, subscriptions, and vendor bills; the app paints the next 30 days as spendable, reserved, risky, or already spoken for.

## Required UI sections
- Spendable-cash header separating bank balance, tax reserve, payroll, and real cushion
- 30-day inflow/outflow calendar with confidence levels and late-payment flags
- Receivables slip lane showing invoice date vs likely cash date
- Tax mirage reserve box for sales tax, payroll tax, income tax, and estimated payments
- Vendor and subscription cliff list with cancel, defer, or negotiate actions
- Founder pay decision card with safe draw amount and warning copy
- Late-payment follow-up composer with progressively firmer messages

## Assigned design profile
- financial-analyst

## Theme
- 자산 방어 - cash survival, tax fear, receivables uncertainty, and owner pay anxiety.

## Stitch prompt

Build a production-grade web app prototype called "Cash Flow Tax Mirage Calendar" for tiny businesses that mistake bank balance for spendable cash while taxes and receivables quietly distort reality. The first screen must be a working finance calendar with a spendable-cash header, 30-day inflow/outflow calendar, receivables slip lane, tax mirage reserve box, vendor and subscription cliff list, founder pay decision card, and late-payment follow-up composer. Use realistic sample data: $42,000 bank balance, $13,500 tax reserve, three invoices with uncertain payment dates, payroll due, Shopify/subscription bills, owner draw request, and one client 18 days late. Design direction: use the financial-analyst profile with sober cash-control styling, precise date math, calm risk bands, and no decorative startup fluff. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A spec only; Stitch generation/export happens in the separate 08:30 job.
- Budget: No custom demo implementation in Phase A.
- Platform: Stitch Web project, not App.

## Non-goals
- Do not implement a custom local demo during Phase A.
- Do not call external LLM APIs.
- Do not treat external source signals as market-size proof.

## Success metrics
- Stitch output clearly exposes the working app on the first screen.
- All required UI sections are visible or reachable without a marketing landing page.
- The assigned design profile is visibly reflected in layout, density, controls, and visual tone.
