# Falsification checklist (5–7)

1. Do users already have a checklist they like, making this redundant?
2. Are phrase matches too noisy (too many hits) to be actionable within 60 seconds?
3. Do users distrust heuristic scores and ignore them entirely?
4. Does “manual paste” kill adoption because it feels like busywork?
5. Do category buckets fail (signals don’t fit cleanly, or the buckets aren’t how users think)?
6. Does highlighting not help (users prefer a summarized list only)?
7. Does this create a false sense of security (“I scanned, so I’m safe”)?

## 30-minute falsification experiment
- Pick 3 random recent 10-K excerpts (Risk Factors or MD&A) from 3 different companies.
- Run the prototype with the default phrase set.
- Measure:
  - Time to first useful checklist (stopwatch).
  - # of alerts that feel “real” vs “junk” (self-rated).
  - Whether you discover at least 2 checks you would have otherwise skipped.
- Fail fast criteria:
  - > 90 seconds to get to a usable checklist
  - or < 20% of hits feel relevant
  - or you never look at the evidence/highlighting.
