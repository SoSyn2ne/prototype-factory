# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- [KNOWN] Retry policy decisions usually include attempts, delay curve, and jitter.
- [KNOWN] Engineers and PMs both need to discuss reliability in concrete numbers, not only logs.
- [KNOWN] A static client-side tool can compute schedule math and probability without external APIs.

## ASSUMPTION
- [ASSUMPTION] Per-attempt success probability can be treated as independent and constant for first-pass planning.
- [ASSUMPTION] Side-by-side comparison is more useful than a single-strategy calculator for decision meetings.
- [ASSUMPTION] Users will accept approximate expected-time outputs if formulas are transparent.
- [ASSUMPTION] Linear and exponential cover most real retry policy discussions in v0.

## UNKNOWN
- [UNKNOWN] Which jitter mode labeling (`full`, `equal`, etc.) is most familiar to PM audiences.
- [UNKNOWN] Whether users primarily optimize for success probability or for capped total retry window.
- [UNKNOWN] What default parameter presets best map to common webhook providers.
- [UNKNOWN] How much explanatory copy is needed before users trust the independence assumption.
