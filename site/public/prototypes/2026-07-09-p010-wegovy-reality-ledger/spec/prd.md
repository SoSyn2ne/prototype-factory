# PRD - Wegovy Reality Ledger

## One-liner
Korean GLP-1 users log cost per kilogram, side-effect days, and rebound risk so 40만원짜리 monthly pens don't end in yo-yo regret.

## Problem
Korean 위고비/마운자로 users and considerers comparing clinic prices and weighing side effects against results. are reacting to fresh market/community signals but still solve the work with scattered calls, notes, screenshots, or community threads. The prototype should turn that repeated pain into one focused first-screen workflow.

## Target user
Korean 위고비/마운자로 users and considerers comparing clinic prices and weighing side effects against results.

## Key UX
A 3-field quick calc (월 비용 / 시작 체중 / 현재 체중) delivers the sting number — "이번 달 1kg당 23만원" — before any account exists; weekly check-ins then feed a side-effect-day calendar and clinic price notes, and the monthly reality report runs the scenario math ("이대로 3개월 더 = 120만원, 예상 감량 2.1kg") plus a generated taper/유지기 plan.

## Utility spine
- The cold-start calc needs 3 numbers and no signup; the monthly report turns a vague feeling into a continue/taper/stop decision.

## Utility metric
- A numbers-backed continue/taper/stop decision each month.

## Required UI sections
- 3-field quick calc with instant cost-per-kg
- Weekly weight and dose check-in
- Side-effect day calendar with 병원 상담 권장 severity flags
- Clinic price quote notes
- Monthly reality report with continue/taper/stop scenario math and taper plan

## Design profile
- premium-editorial

## Theme
- 외모 / GLP-1 cost-and-side-effect reality

## Source signal references
S19: Wegovy users trade price, side-effect, and yo-yo warnings across Korean communities (팬마음 커뮤니티 / 여신티켓 블로그, 2026) https://fanmaum.com/community/Seoul-Gyeonggi/128063860

## Reference pattern
- personal ledger + monthly reality report

## Twist
- Sides with the payer against the sunk-cost spiral — quitting or tapering becomes a planned outcome, not a failure.

## Small group fit
- A single diet-community thread of active users can adopt the ledger from their existing notes-app logs.

## Spread trigger
- The anonymized reality report is the honest 후기 people already try to write by hand.

## Copy/paste Stitch prompt
Create a refined personal health-spend app called "Wegovy Reality Ledger" for Korean GLP-1 (위고비/마운자로) users tracking whether 40만원+ monthly pens are worth it. The app is based on observed user pull: Korean communities trade month-by-month weight logs, side-effect complaints ("맞고 하루 종일 속이 메스꺼웠다"), clinic price comparisons because prices vary per hospital, and rebound fears. The app should use a 3-field quick calc plus ledger and monthly reality-report mechanic around the trigger moment "monthly re-purchase decision after a side-effect or plateau week" and make the first screen communicate "월 비용, 시작 체중, 현재 체중 — 3칸이면 이번 달 1kg당 23만원이 나옵니다". Use the user's own language: "위고비 가격 얼마 주고 맞으세요? 부작용은 어때요?". Build the core workflow around the instant cost-per-kg calc, weekly weight/dose check-ins, a side-effect day calendar with "병원 상담 권장" severity flags, and clinic quote notes, and produce a monthly reality report with cost per kg, side-effect days, continue/taper/stop scenario math ("이대로 3개월 더 = 120만원, 예상 감량 2.1kg"), and a generated taper plan. Required sections: 3-field quick calc, cost-per-kg meter, weekly check-in, side-effect calendar with severity flags, clinic price notes, monthly reality report with scenario math. Emotional pressure to make visible: 외모 — hope purchased monthly, and the quiet fear of rebounding in front of everyone who watched. Design direction: use the premium-editorial profile with warm charcoal/stone tones, refined spacing, editorial numbers, and one quiet accent color; the report should feel composed, not clinical. Avoid generic dashboard framing; make the main interaction feel like keeping an honest private ledger.

## Non-goals
- Do not implement a custom local demo in Phase A.
- Do not present source signals as proof of market size.
- Do not turn the product into a generic dashboard without the specific trigger and workflow.

## Success metrics
- A viewer understands the target user and core action within 5 seconds.
- The primary workflow can be inferred from the first screen without explanatory marketing copy.
- The Stitch output preserves the assigned design profile and includes all required sections.
