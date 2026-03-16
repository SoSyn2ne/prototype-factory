# QA checklist

## Happy path
- Open `demo/index.html` offline.
- Enter runtime=60, watts=220, price=200, grid=0.4 → outputs show kWh/cost/CO₂.
- Toggle -10% cap → watts decreases and outputs update.

## Edge cases
- Zero runtime → all outputs 0.
- Negative/blank input → treated as 0.
- Very large runtime → still renders and stays readable.

## Acceptance verification
- No external assets/CDNs.
- Outputs update on each input change (no submit required).
- Formulas shown and match calculations.
