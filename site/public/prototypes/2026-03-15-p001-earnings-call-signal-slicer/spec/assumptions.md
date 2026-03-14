# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- Earnings-call transcripts are typically delivered as plain text with lots of line breaks, speaker names, and Q&A sections.
- “Signals” investors care about are often stated in a small subset of sentences (e.g., explicit guidance changes, order commentary, lead times, capacity).
- A deterministic, lightweight tool is valuable when the user cannot (or will not) use an LLM due to privacy/compliance concerns.

## ASSUMPTION
- Sentence-level keyword heuristics can capture enough of the “first-pass” signals to be useful (even if imperfect).
- Four buckets (Guidance, Demand, Supply, AI) cover a meaningful portion of what users want to triage quickly.
- Users will tolerate some false positives if the UI makes scanning/filtering fast.
- A simple confidence score (derived from matches) is directionally helpful as a “how much signal is here?” indicator.

## UNKNOWN
- How often “AI” mentions are investable vs. marketing in different sectors (and whether this bucket remains valuable outside tech/semi).
- Whether users prefer sentence-level highlights or section-level extraction (e.g., “Outlook”, “Q&A”, “Guidance” blocks).
- The best default keyword sets across industries (industrial vs. software vs. consumer vs. semis).
- How messy pasted transcripts get (PDF artifacts, hyphenation, page numbers) and whether we need normalization beyond whitespace cleanup.
