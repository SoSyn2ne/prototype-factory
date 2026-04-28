# External Signals Workflow (Tavily + optional Scrapling)

Use this when preparing `/pf idea` or a daily Phase A batch.

1. **Find candidate URLs with Tavily.** Search across news, niche workflows, and community-style chatter. Do not paste or log API keys.
2. **Extract or stub URLs locally.** Tavily is for discovery; Scrapling is only an optional extractor for the pages/comments you choose.

```bash
# URL-only stubs; works without network or Scrapling
python3 scripts/extract-signals.py --no-fetch "https://example.com/thread" > /tmp/signals.md

# One URL per line
python3 scripts/extract-signals.py --file /tmp/pf-urls.txt --format markdown > /tmp/signals.md

# One-time project setup for optional Scrapling extraction
uv venv
uv pip install scrapling curl-cffi playwright browserforge patchright

# Optional extraction with the project venv
.venv/bin/python scripts/extract-signals.py --file /tmp/pf-urls.txt --format json > /tmp/signals.json
```

3. **Paste into `daily/YYYY-MM-DD/ideas.md`.** Put the output under `Search signals` or `External signals`, then replace the TODOs with the actual complaint/desire, who feels it, why now, willingness-to-pay/shareability, and whether it is community chatter.
4. **Synthesize candidates only after the evidence is written.** Each final idea should cite 1–2 signals, and the batch still needs the recent-7-days near-duplicate check.

If Scrapling is absent, the helper degrades to URL-only stubs and prints an install hint in `extraction_status`; this is acceptable for offline prep, but live ideation should still include real source notes before final candidate selection.
