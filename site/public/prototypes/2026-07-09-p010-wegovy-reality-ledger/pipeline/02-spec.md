# Stage 3 — Spec (build-ready)

> Goal: enough that an engineer could start. This spec is implemented in the
> interactive prototype at `/lab/wegovy-reality-ledger`.

## Core job
- When a GLP-1 user faces the monthly re-purchase decision, they enter cost +
  weights + side-effect days and get a cost-per-kg number and a
  continue/taper/stop recommendation with scenario math.

## Primary user flow (happy path)
1. Quick calc: enter 월 비용, 시작 체중, 현재 체중 → instant 1kg당 비용 + total spent + kg lost.
2. Add weekly check-ins (weight + dose) → the ledger tracks the recent loss rate.
3. Tag side-effect days by severity → a count + "병원 상담 권장" flag when severe days pile up.
4. Read the monthly reality report: projected spend & loss if continuing N months,
   and a continue / taper / stop recommendation.

## Data model
| Entity | Fields | Notes |
|--------|--------|-------|
| Plan | monthlyCostKRW, startWeightKg | one per user |
| CheckIn | week (int), weightKg, dose (mg) | ordered; recent 4 drive loss-rate |
| SideEffectDay | dateOffset, severity (mild/moderate/severe) | severity weights the flag |
| ClinicQuote | clinicName, priceKRW | for price comparison note |

## Computation / core logic (the numbers the user cannot easily get)
- `lostKg = startWeight - currentWeight`
- `monthsElapsed = max(1, round(weeks / 4.345))`
- `totalSpent = monthlyCost * monthsElapsed`
- `costPerKg = lostKg > 0 ? totalSpent / lostKg : ∞ (flagged)`
- `recentRateKgPerMonth` = slope of last ≤4 check-ins, normalized to /month
- Scenario for N more months: `projectedSpend = monthlyCost * N`,
  `projectedLoss = recentRate * N`, `projectedCostPerKg = projectedSpend / projectedLoss`
- Recommendation rule:
  - `stop` if recentRate ≤ 0.4 kg/month (plateau) OR severe side-effect days ≥ 3
  - `taper` if costPerKg rising and recentRate 0.4–1.2 kg/month
  - `continue` if recentRate > 1.2 kg/month and severe days < 3

## External data / APIs needed
- [x] None — fully client-side with mock/user-entered data. No backend for the prototype.
- Real product later: optional clinic-price crowd data; export/share of the report.

## Out of scope for the prototype
- Accounts, persistence across devices, medical advice engine, real clinic price feed.

## First-screen promise
- "월 비용, 시작 체중, 현재 체중 — 3칸이면 이번 달 1kg당 얼마인지 나옵니다."
