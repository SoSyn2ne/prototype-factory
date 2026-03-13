# QA checklist

## Happy path
- Enter baseline metrics (200W / 72°C / 100 units/hr, electricity 200 KRW/kWh, jobUnits 50).
- Adjust sensitivity slider → table updates live.
- Click Log result for a cap → appears in recent runs.
- Refresh page → runs persist (localStorage).

## Edge cases
- Zero/negative inputs → validation and safe defaults.
- Very high electricity price → cost values still format.
- jobUnits empty → cost per job disabled with message.
- Sensitivity extremes (0.1 / 3.0) → clamped.
- localStorage unavailable → graceful fallback.
- Large number of logged runs → list truncation.

## Acceptance verification
- No external CDNs/fonts.
- Works by opening `demo/index.html` directly.
- Deterministic calculations for same inputs.
