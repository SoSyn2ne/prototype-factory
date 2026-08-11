# PRD — Policy Change Cashflow Switchboard

## Problem / target
Translate changing small-business support rules into a dated cashflow action queue. Target: 한국 1인 매장·영세 사업자와 세무/운영 보조자.

## Core UX
업종·매출 입력 → 적용 정책 카드 → 시행일 기준 현금 영향 → 신청/준비 큐. Required sections: 조건 입력, 정책 변화선, 월별 현금영향, 서류 큐, 놓치면 손실 카드.

## Design / theme / evidence
- Profile: `financial-analyst`; theme: 자산 방어.
- Sources: S3 https://blog.naver.com/hellopolicy/224338381445; S4 https://www.viva100.com/article/20260727501294.
- QA: value visible in 3 seconds; complete empty, active, error, and success states; desktop/mobile fit; simulated or estimated results labeled.

## Stitch prompt
Design a responsive web app named “Policy Change Cashflow Switchboard.” Start with a Korean micro-business profile form for industry, revenue band, employees, and closure risk; then show only relevant 2026 policy changes, effective dates, monthly cashflow impact ranges, required documents, and an ordered application queue. Include scenario comparison and a printable accountant handoff. Clearly label estimates and source dates. Design direction: follow the financial-analyst profile with ink and off-white surfaces, restrained green, tabular won amounts, written chart interpretation, and quiet confidence badges instead of decorative gradients.
