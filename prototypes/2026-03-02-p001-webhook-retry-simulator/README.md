# Webhook Retry Simulator

Model retry timing and delivery odds for webhook workers using linear or exponential backoff with optional jitter.

## Status
- prototype

## How to use
1. Open `demo/index.html` in a browser (or serve `demo/` with a static server).
2. Set:
   - retry strategy (`linear` or `exponential`)
   - max attempts
   - base delay and cap delay
   - jitter mode (`none`, `full`, or `equal`)
   - per-attempt success probability `p`
3. Review outputs:
   - per-attempt schedule table (attempt number, delay, cumulative time)
   - probability of eventual success `1 - (1 - p)^n`
   - expected attempt count and expected time to success
4. Compare two strategies side-by-side to choose a safer default policy for product or infra.

### Local run (optional)
```bash
cd prototypes/2026-03-02-p001-webhook-retry-simulator/demo
python3 -m http.server 4173
```
Then open `http://localhost:4173`.

## Links
- Spec: `spec/prd.md`
- Assumptions: `spec/assumptions.md`
- Falsification: `spec/falsification.md`
- QA checklist: `spec/qa-checklist.md`
- Preview: (TBD)
