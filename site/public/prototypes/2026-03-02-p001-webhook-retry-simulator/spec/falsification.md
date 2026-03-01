# Falsification checklist (5–7)

1. When backend engineers run a real retry policy through the tool, do they catch at least one surprising tradeoff they had not noticed before?
2. If per-attempt success is low (e.g., 0.1), does the comparison still provide useful guidance, or does it collapse into obvious "more attempts always win" output?
3. Do PMs understand the probability model without a stats explanation, or do they misread eventual success as guaranteed delivery?
4. Does jitter visualization change decisions in practice, or is it ignored because the model does not simulate herd behavior explicitly?
5. For known hand-calculated cases, do outputs exactly match expected values (schedule + probability), or are there formula/rounding mismatches?
6. In a 10-minute usability pass, can users move from input changes to a concrete policy recommendation without facilitator help?
