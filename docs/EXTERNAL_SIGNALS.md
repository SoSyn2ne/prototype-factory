# External Signals Workflow (Tavily + optional Scrapling)

Use this when preparing `/pf idea` or a daily Phase A batch.

PF uses external signals as the raw material for ideas. Do not ask the model to
invent a batch first and search afterward. Search first, write the observed
behavior down, then let the model translate those signals into candidates.

1. **Find candidate URLs with Tavily.** Search across news, niche workflows, and community-style chatter. Do not paste or log API keys.
   Split discovery into source lanes instead of one blended search:
   - Hada/current AI-product news: fresh tools, repos, model releases, lawsuits, usage shifts, creator/operator debates.
   - GitHub rising repos: about 10 new/fast-rising/most-starred repos from the current week. Translate each repo into a user behavior or interaction seed.
   - Community complaints/questions: lived pain and workarounds from Reddit/HN/Product Hunt/forums/Korean communities.
   - Non-web/offline behavior: kiosks, local devices, workplace rituals, camera/sensor flows, field tools, printables, scripts, spreadsheets, or physical workflows.
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

3. **Paste into `daily/YYYY-MM-DD/ideas.md`.** Put the output under `Hada Signals`, `GitHub Rising Repo Scan`, `Signal Roam`, or `External Signals`, then replace the TODOs with the actual complaint/desire, who feels it, why now, willingness-to-pay/shareability, and whether it is community chatter.
4. **Synthesize candidates only after the evidence is written.** Each final idea should cite 1–2 signals, and the batch still needs the recent-7-days near-duplicate check.
5. **Run the anti-hallucination gate before Stitch.** The final 8 must include
   `loved_by_small_group`, `spread_trigger`, domestic/overseas classification,
   theme counts, source lane counts, and a note on any over-concentrated pattern
   that was reselected or killed.

Hard failures:
- No `GitHub Rising Repo Scan` section, even if no repo idea survives.
- No domestic/Korea vs overseas/global split.
- More than 2 final candidates in the same desire axis by default.
- More than 2 final candidates in the same money-defense/proof-packet pattern.
- Final ideas without `loved_by_small_group` or `spread_trigger`.
- Article-only candidates with no user action, workaround, search path, or
  existing spend.

If Scrapling is absent, the helper degrades to URL-only stubs and prints an install hint in `extraction_status`; this is acceptable for offline prep, but live ideation should still include real source notes before final candidate selection.
