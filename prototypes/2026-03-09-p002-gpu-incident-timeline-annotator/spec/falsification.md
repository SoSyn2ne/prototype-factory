# Falsification checklist (7)

1. If users cannot paste their real logs without reformatting, the parser approach is wrong — what formats break it?
2. Do heuristics produce too many false positives, making the timeline noisy and untrustworthy?
3. Are anomaly windows useless without correlating external signals (deploys, workload changes, power events)?
4. Do operators already have a simpler workflow (grep + share a snippet) that this cannot beat in speed?
5. Does “offline/no upload” block important use cases (teams want to attach files / share links)?
6. Do users need per-GPU lane separation (GPU0 vs GPU1) immediately, making a single list insufficient?
7. Does the export format (Markdown) fail real sharing needs (they want JSON for ticketing, or images)?
