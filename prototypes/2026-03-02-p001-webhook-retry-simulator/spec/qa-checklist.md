# QA checklist

## Happy path
- Configure Strategy A: exponential, attempts=6, base delay=2s, cap=60s, jitter=none, `p=0.35`.
- Verify schedule table renders 6 attempts with monotonic cumulative time.
- Verify eventual success is computed and displayed as a percentage.
- Add Strategy B (linear with same attempts) and verify comparison highlights key delta(s).

## Edge cases
- `p=0`: eventual success must be 0% regardless of attempts.
- `p=1`: eventual success must be 100% on first attempt assumptions.
- Attempts = 1: no extra retry math; timeline shows only initial attempt.
- Delay cap lower than computed delay: per-attempt delays must clamp at cap.
- Jitter enabled: delays stay within documented jitter range and never go negative.
- Invalid input (negative delay, attempts < 1, `p` outside [0,1]): block or normalize with clear validation messaging.

## Acceptance verification
- No network calls are required to use the demo end-to-end.
- Works by opening static files (`demo/index.html`) in a modern browser.
- All core formulas match manual calculation for at least 3 test scenarios.
- Backend engineer and PM can each explain, in one sentence, why one strategy is preferred in a sample comparison.
