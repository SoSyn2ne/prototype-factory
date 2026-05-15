# Playbook — Ideation (Anti‑RAG + Controlled Speculation)

Use this playbook to generate *high‑leverage* ideas quickly without becoming sloppy.

## Inputs
- Problem area (1 sentence)
- Constraints (time, budget, user, platform)
- External inspiration sweep (required, search-backed): current news, internet communities, niche operator workflows, trend shifts, weird edge-case behaviors, or overlooked boring problems
- Evidence notes: for every daily batch, record at least 5 raw market/problem signals with source names or URLs before proposing candidates. At least 2 signals should come from community-style sources when available.
- Trend keyword pass: include at least one current-culture sweep using `docs/TREND_KEYWORD_BANK.md`. Treat trend keywords as bait/hooks only; a candidate still needs a concrete user, trigger, data source, and interaction mechanic.
- Novelty target: ensure the output is not just a variation of the operator's recent interests
- Batch mix target: do not optimize only for monetization. A daily batch should usually mix revenue-adjacent ideas with at least one idea that is simply delightful, surprising, or creatively interesting to build.
- If the operator has supplied a fixed desire/anxiety framework, treat it as binding input rather than soft inspiration.
- Current PF binding framework when explicitly invoked by the operator: `성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전`.

## Outputs (minimum)
- `spec/prd.md`
- `spec/assumptions.md` (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` (5–7 questions)
- For daily PF batches, each candidate must include an explicit `theme:` line mapping it to one operator-approved human driver/theme.
- Daily PF default is a 4-candidate batch and must scaffold `p001` through `p004` with no missing slot.

## Procedure (20–40 minutes)

1) **External search sweep first (required)**
- Start outside the user's immediate taste profile.
- Use live web/search when available. If search is unavailable, explicitly mark the run as degraded and use saved sources only as a fallback.
- Pull signals from at least 3 external buckets such as:
  - broad news / business / tech headlines
  - internet communities (forums, Reddit-like discussion patterns, HN/Product Hunt comments, Discord/Telegram-style public chatter, Naver Cafe/Blind-like Korean community patterns, creator/operator complaints)
  - niche operational workflows or industry pain points
  - strange consumer behaviors, policy shifts, compliance changes, or edge-case routines
- Community roam requirement: do not only search polished articles. Skim community posts/comments for repeated complaints, hacks, screenshots, embarrassment, jealousy, budget anxiety, “what should I do?” questions, and workaround behavior. Prefer lived pain over generic trend summaries.
- Trend keyword requirement: search 5–10 fresh Korean/global consumer keywords from `docs/TREND_KEYWORD_BANK.md` or current autocomplete/news/community chatter. Prefer keywords with clear sharing, location, scarcity, purchase, identity, or relationship behavior. Avoid using a trend word alone as the idea; pair it with a painful decision or urgent workflow.
- Tavily/Scrapling helper path: use Tavily to find candidate URLs; optionally run `python3 scripts/extract-signals.py --file <urls.txt>` to extract or stub body/comment notes with Scrapling. See `docs/EXTERNAL_SIGNALS.md`.
- Write down 5–10 raw opportunity seeds before narrowing. Each seed should capture: source, observed complaint/desire, who feels it, why now, possible willingness-to-pay or shareability, and whether it came from community chatter or formal/news sources.
- Do not generate final PF candidates until this sweep is written into `daily/YYYY-MM-DD/ideas.md` under a `Search signals` or `External signals` section.

2) **Anchor (similar)**
- Identify the closest existing solution pattern.
- Use the anchor to understand baseline UX only, not to collapse the idea space.

3) **Contrast (dissimilar ×2)**
- Choose two unrelated domains (e.g., logistics, gaming, healthcare, finance).
- Ask: what mechanisms work there that don’t exist here?

4) **Novelty check (required)**
- Reject ideas that are too close to the recent local pattern (for example: another minor variation of investing / wedding / GPU dashboards) unless there is a genuinely new mechanism, user, or market trigger.
- Compare against at least the last 7 PF daily batches. Reject candidates that only rename the same dashboard/rescue/planner pattern without a new user, new trigger, new data source, or new interaction mechanic.
- Prefer at least 1 idea per batch that would surprise the operator.
- Prefer ideas where the assistant's independent synthesis is doing more work than mirroring the user's known interests.

5) **Synthesize**
- Produce 1–3 hypotheses.
- Each hypothesis must include: user value, mechanism, and a minimal test.
- Across a daily batch, optimize for range: different users, different urgency levels, different markets.
- At least 1 idea per 4-slot daily batch should be trend-forward or shareable when good signals exist: identity/personality, meme/text transformation, local scarcity map, fandom/goods, relationship/social script, parenting/education anxiety, or money-saving panic.
- Each final candidate must cite 1–2 raw external signals that inspired it. Do not cite sources as proof of market size; use them as problem evidence only.
- If a binding theme framework was provided, every output candidate must map cleanly to one of those themes. If it does not map, reject it.
- Default batch composition for daily PF runs:
  - daily standard run: generate 4 ideas and scaffold `p001` through `p004`
  - for the default 4-idea batch, prefer 3 practical/commercial ideas + 1 fun/portfolio/experimental idea
  - if generating 4 ideas under the current seven-theme framework, choose 4 distinct themes from `성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전` and label them explicitly
  - if generating 5 ideas, prefer 3 practical/commercial ideas + 2 fun/portfolio/experimental ideas
- "Fun" is valid even without immediate monetization if the UI has strong story, visual payoff, shareability, or taste-building value.
- For the current operator framework, practical does not mean generic B2B ops. The human driver should remain visible in the one-liner, target user, and key UX.

6) **Label uncertainty (G1)**
- Tag major claims as KNOWN/ASSUMPTION/UNKNOWN.

7) **Contrarian pass (G2)**
- Use the Contrarian Generator (P001) style output:
  - failure modes
  - counter-scenarios
  - falsification checklist

8) **Pick output level (G3)**
- Document-only vs prototype.

## Templates

### Hypothesis card
- Theme:
- One-liner:
- Target user:
- Mechanism:
- Why now:
- Top 3 assumptions:
- Fastest falsification test (≤1 day):

### Falsification questions (examples)
- What observation would immediately disprove this?
- What is the hidden cost that kills the ROI?
- What is the operational bottleneck?
- What regulatory/security constraint blocks deployment?
