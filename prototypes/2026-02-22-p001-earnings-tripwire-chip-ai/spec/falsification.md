# Falsification checklist (5–7)

1. **Source availability fails:** Can we obtain transcripts/primary-source text for the top 10 tickers *reliably* without paywalls or violating ToS? If not, the whole pipeline collapses.
2. **Alert fatigue:** In a 14-day pilot, does the system trigger >2 “useless” alerts per week for the watchlist? If yes, users will mute it.
3. **No incremental value vs news feed:** If a baseline (Finviz/Google Alerts) produces the same actionable items with similar effort, the tripwire adds no value.
4. **Evidence quality is weak:** If >20% of alerts cannot include a direct quote + link to a primary/credible source, trust will decay.
5. **Signals don’t correlate with real thesis changes:** If the triggered phrases are mostly boilerplate (legal safe-harbor, generic macro caution) and don’t correspond to any real changes in guidance/margins/capex, the checklist is mis-specified.
6. **Sector-specific nuance breaks heuristics:** If company-specific language (e.g., “inventory” used positively for ramp prep) causes systematic false alarms for key names, v0 rules are inadequate.
