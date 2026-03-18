# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Transcripts frequently include repeated patterns: safe-harbor statements, prepared remarks, then Q&A.
- Risk language tends to cluster around a small set of recurring concepts (guidance changes, pricing, inventory, capex, geopolitics/export controls, yield/ramp).
- Many users cannot or will not run an LLM on transcripts due to compliance, cost, or latency concerns.

## ASSUMPTION
- A deterministic keyword/regex ruleset can provide a useful “first-pass” shortlist even with false positives.
- Users prefer **quotes + jump-to-highlight** over a pure summary because it reduces hallucination risk.
- A simple confidence score (rule weight + match strength) is directionally helpful as a ranking aid (not a truth signal).

## UNKNOWN
- What false-positive rate users will tolerate before they stop trusting the tool.
- Which categories matter most by sector (semis vs. consumer vs. software) and whether a single default ruleset is acceptable.
- How often pasted transcripts are polluted by PDF artifacts (headers/footers, hyphenation) that require heavier normalization.
- Whether compliance policies block copy/paste of transcripts into any browser tool, even if fully offline.
