# Falsification checklist (5–7)

1. **Precision is too low:** On 10 transcripts across 4 sectors, an analyst reports that >40% of highlighted sentences are irrelevant noise for at least 3 of the 4 buckets.
2. **Recall is too low:** On the same set, the tool misses >30% of “obvious” bucket sentences (explicit guidance, demand strength/weakness, supply constraints, AI product/revenue mentions).
3. **Transcripts are too messy to paste:** Users routinely paste PDF artifacts (headers/footers/page numbers/hyphenation) that break sentence splitting and require a full parser to be usable.
4. **Buckets don’t match analyst mental models:** Users repeatedly ask for different primary cuts (e.g., “pricing”, “margin”, “inventory”, “FX”, “capex”) and find Guidance/Demand/Supply/AI unhelpful.
5. **Confidence score misleads:** Users interpret confidence as statistical truth and make wrong decisions; we cannot present it safely without heavy UX guardrails.
6. **Workflow friction:** The paste → slice loop is not how people work; they demand “upload PDF”, “pull transcript from provider”, or “integrate into notes” as table stakes.
7. **Compliance blocks usage:** Even with client-only processing, compliance teams disallow copying transcripts into a browser tool (policy), making this direction a dead end.
