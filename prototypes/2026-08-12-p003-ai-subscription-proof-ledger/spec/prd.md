# PRD — AI Subscription Proof Ledger

## Problem / target
Compare AI subscriptions by real weekly jobs completed instead of feature hype. Target: 여러 AI 구독료를 내는 프리랜서·소규모 팀.

## Core UX
구독 추가 → 실제 작업 로그 체크 → 대체 가능성/중복 비용 계산 → 유지·다운그레이드 판정. Required sections: 구독 스택, 주간 작업 증거, 겹침 매트릭스, 비용/완료작업 비율, 다음 결제 전 결정.

## Design / theme / evidence
- Profile: `operator-dense`; theme: 자산 방어.
- Sources: S6 https://www.reddit.com/r/AI_Agents/comments/1rw5xvh/whats_the_best_ai_to_actually_pay_for_right_now; S9 https://biztechmagazine.com/media/video/knowledge-2026-how-workflow-automation-driving-efficiency-across-enterprise.
- QA: value visible in 3 seconds; complete empty, active, error, and success states; desktop/mobile fit; simulated or estimated results labeled.

## Stitch prompt
Design a responsive web app named “AI Subscription Proof Ledger.” Show a compact subscription stack where users log real weekly jobs completed by each AI tool, attach a lightweight proof note, compare capability overlap, calculate cost per useful outcome, and receive Keep, Downgrade, Pause, or Replace decisions before renewal. Include a seven-day evidence view, uncertainty labels, and a cancellation checklist. Design direction: follow the operator-dense profile with compact 36px rows, deep navy and fog, one sharp lime accent, tabular costs, crisp queues, and no decorative hero.
