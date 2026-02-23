# Falsification checklist (5–7)

1. **Backtest failure:** On 14–30 days of real daily metrics, does REWS fail to highlight any days the operator considers “worth investigating”?
2. **Alert fatigue persists:** Even with a single score, do users still feel “too many alarms” (e.g., >3 alerts/week) unless thresholds are set so low that it misses real issues?
3. **No trust in explanations:** When REWS says “conversion down vs baseline,” do operators still need deep attribution to act, making the checklist irrelevant?
4. **Seasonality breaks it:** Do weekday patterns / holidays cause frequent false positives even with a rolling median baseline?
5. **Action checklist not reusable:** Do incidents vary so much that predefined playbooks (“refund spike”, “traffic drop”) don’t help, forcing custom analysis every time?
6. **Data availability too painful:** Is setup (exporting/connecting metrics) too annoying for the target user segment, leading to low adoption despite perceived value?
7. **Score hides important nuance:** Does collapsing metrics into one number cause users to miss critical issues they would have seen with per-metric monitoring?
