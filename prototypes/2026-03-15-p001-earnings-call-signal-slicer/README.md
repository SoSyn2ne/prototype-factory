# Earnings Call Signal Slicer

Paste an earnings-call transcript and slice it into investable signals (Guidance, Demand, Supply, AI) with a confidence scoreboard.

This prototype is a tiny, offline, deterministic “first pass” tool for analysts who want to **scan a call quickly** without running an LLM.

## Quickstart (no build)
1. Open `demo/index.html` directly in a browser (works via `file://`).
2. Paste transcript text.
3. Click **Slice**.
4. Click a bucket (Guidance/Demand/Supply/AI) to filter highlights.

## What you get
- **4 buckets** with a **confidence score** and matched sentence count.
- **In-text highlights** color-coded by bucket.
- **Bucket filter** to focus on one theme at a time.
- Runs fully **client-side** (no network calls, no uploads).

## How slicing works (MVP heuristic)
- The transcript is split into sentences using simple punctuation + newline rules.
- Each sentence is scored against keyword lists per bucket (e.g., “raise guidance”, “backlog”, “lead times”, “GPU”, “LLM”).
- A sentence is assigned to the bucket with the highest score (ties broken by priority).
- Bucket confidence is derived from how many strong matches were found (intentionally simple and non-statistical).

## Scope + limits
- Not financial advice; this is a **triage** tool.
- Keyword heuristics will miss euphemisms and create false positives (e.g., “capacity” in unrelated contexts).
- Does not fetch transcripts; paste-only for privacy and simplicity.

## Specs
- PRD: `spec/prd.md`
- Assumptions: `spec/assumptions.md`
- Falsification: `spec/falsification.md`
- QA checklist: `spec/qa-checklist.md`
