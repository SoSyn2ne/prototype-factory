# PRD - AI Tool Budget Firebreak

## Problem
- A monthly AI-cost control room for small teams that catches runaway seats, credits, and awkward customer-bot mistakes before they become permanent overhead.
- Source evidence: S1 - Business Insider newsletter on small-business AI costs and dependency: Small businesses are adopting AI for survival and efficiency, but median AI spend and vendor dependency are becoming a new overhead risk. S2 - SBE Council 2026 Small Business Tech Use Survey coverage: AI tools are now embedded across small-business workflows rather than being experimental side projects.

## Target user
- Small-business owners, solo agencies, and local operators who adopted several AI tools but do not have finance or IT governance.

## Key UX
- Connect or manually enter tool subscriptions, usage limits, seats, and customer-facing bot incidents; the app shows a burn forecast, lock-in risk, and a stop/keep/renegotiate script.

## Required UI sections
- AI stack inventory
- Seat and credit burn forecast
- Customer-bot incident log
- Price-hike buffer calculator
- Tool dependency map
- Owner approval checklist
- Vendor downgrade / renegotiation script

## Assigned design profile
- financial-analyst
- Design direction: precise spend tables, compact variance chips, calm institutional colors, and owner-ready decision banners.

## Theme
- 자산 방어

## Source signal references
- S1: Business Insider newsletter on small-business AI costs and dependency — https://www.businessinsider.com/business-insider-newsletter-small-business-ai-uses-risks-2026-7
- S2: SBE Council 2026 Small Business Tech Use Survey coverage — https://sbecouncil.org/2026/04/25/the-ai-tools-small-businesses-are-using/

## Stitch prompt
Create a responsive web app called "AI Tool Budget Firebreak" for Small-business owners, solo agencies, and local operators who adopted several AI tools but do not have finance or IT governance.. The app is based on observed user pull from S1: Small businesses are adopting AI for survival and efficiency, but median AI spend and vendor dependency are becoming a new overhead risk. S2: AI tools are now embedded across small-business workflows rather than being experimental side projects. The app should use a Budget Firebreak around the trigger moment "Connect or manually enter tool subscriptions, usage limits, seats, and customer-facing bot incidents; the app shows a burn forecast, lock-in risk, and a stop/keep/renegotiate script." and make the first screen communicate "A monthly AI-cost control room for small teams that catches runaway seats, credits, and awkward customer-bot mistakes before they become permanent overhead.". Build the core workflow around user-entered evidence and produce monthly AI overhead firebreak receipt. Required sections: AI stack inventory; Seat and credit burn forecast; Customer-bot incident log; Price-hike buffer calculator; Tool dependency map; Owner approval checklist; Vendor downgrade / renegotiation script. Emotional pressure to make visible: 자산 방어. Design direction: use the financial-analyst profile with precise spend tables, compact variance chips, calm institutional colors, and owner-ready decision banners. Avoid generic dashboard framing; make the main interaction feel like Budget Firebreak.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
