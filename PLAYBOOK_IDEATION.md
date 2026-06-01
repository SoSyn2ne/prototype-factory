# Playbook — Ideation (Desire Board + Controlled Speculation)

Use this playbook to generate *high‑leverage* ideas quickly without becoming sloppy.

## North star

PF ideation is not a search-summary exercise. The daily board must convert
external signals into sharp prototype bets by answering:

- What human weakness, fear, desire, or status pressure is being touched?
- What concrete loss, embarrassment, or missed upside makes the user act now?
- What interaction mechanic makes the prototype feel different from another
  dashboard, planner, scanner, or board?

Daily candidates should feel like a user could understand the pain in 3 seconds
and either want the tool, share the result, or argue with the verdict.

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
- `daily/YYYY-MM-DD/ideas.md` using the idea-board sections in `docs/IDEA_BOARD.md`
- `spec/prd.md`
- `spec/assumptions.md` (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` (5–7 questions)
- For daily PF batches, each candidate must include an explicit `theme:` line mapping it to one operator-approved human driver/theme.
- Daily PF default is a 4-candidate batch and must scaffold `p001` through `p004` with no missing slot.

## Daily idea-board pipeline

Use this exact shape for `/pf idea` and daily Phase A:

`Signal Inbox -> Desire Ledger -> Mechanic Matrix -> Candidate Drafts -> Kill List -> Final 4 -> Stitch Prompts`

The middle steps are mandatory. Do not jump directly from search signals to final
candidates.

### 1) Signal Inbox
- Record 5-10 raw signals before synthesis.
- Prefer lived complaints, screenshots, workarounds, jealousy, shame, budget
  anxiety, deadline panic, and "what should I do?" posts over polished articles.
- Each signal should capture: source, complaint/desire, who feels it, why now,
  workaround behavior, and possible willingness-to-pay or shareability.

### 2) Desire Ledger
For each promising signal, name the human pressure underneath it.

- Loss: money, time, status, body, romance, family opportunity, control.
- Shame audience: spouse, boss, client, classmates, parents, community, future self.
- Trigger moment: bill arrives, deadline opens, account freezes, comparison happens,
  event approaches, symptom appears, friend posts, child falls behind.
- Existing workaround: spreadsheet, screenshots, chat threads, notes, manual
  checking, asking strangers, duct-taped calculators.
- Buyer: who pays, who shares, who needs the evidence.
- Why existing tools fail: too generic, too polite, too slow, too private,
  too hard to trust, or missing the emotional/social job.

### 3) Mechanic Matrix
Assign every serious candidate a primary prototype mechanic. A batch should not
collapse into four dashboards.

- `Receipt`: turns loss, regret, or hidden cost into a shareable bill.
- `Interrogator`: cross-examines documents, claims, excuses, or choices.
- `Simulator`: lets the user feel future regret or upside before acting.
- `Proof Kit`: packages evidence to convince, defend, appeal, or negotiate.
- `Status Mirror`: shows where the user stands against peers, rivals, or norms.
- `Negotiation Room`: helps tune pressure, concessions, and relationship risk.
- `Panic Button`: gives the next 3 urgent moves under a deadline.
- `Confession Booth`: privately reveals the uncomfortable truth the user avoids.
- `Tradeoff Court`: stages competing choices and delivers a verdict.
- `Flex/Defense Poster`: produces a result worth sharing or showing to someone.

### 4) Candidate Drafts
Draft 8-12 candidates before selecting the final four. Each draft needs:

- Theme from the binding framework.
- Mechanic from the matrix.
- Trigger moment.
- Target user and buyer/share audience.
- One-line "3-second sting".
- Data/input needed.
- Output artifact: receipt, report, script, proof pack, verdict, poster, map, etc.
- Scores: Pain, Shame, Urgency, Workaround, Share, Visual, WTP (1-5 each).

### 5) Kill List
Reject weak candidates explicitly. A good board should show what was killed and why.

Use these tags:

- `just-dashboard`: mostly a generic board/table.
- `weak-buyer`: unclear payer or owner.
- `article-only`: article summary without lived complaint.
- `saas-clone`: existing SaaS with a new label.
- `no-3-sec-sting`: first screen requires too much explanation.
- `theme-wash`: assigned theme is decorative, not core to the UX.
- `stitch-bland-risk`: likely to generate a generic CRM/admin screen.
- `low-urgency`: useful someday, not painful now.
- `no-output-artifact`: nothing memorable to export/share/use.

### 6) Final 4
Default final batch composition:

- 1 money/assets defense idea.
- 1 face/body/status/relationship anxiety idea.
- 1 education/health/family pressure idea.
- 1 strange, shareable, or portfolio-worthy experiment.

Hard gates:

- At least one final idea must not be a dashboard/board/scanner/planner.
- At least one final idea must be a consumer desire or anxiety tool.
- At least one final idea may be B2B/ops, but it still needs a visible human
  pressure such as fear, blame, lost revenue, or reputation risk.
- Every final idea needs a shareable or actionable output artifact.
- Every Stitch prompt must name the mechanic, emotional pressure, trigger moment,
  output artifact, and first-screen promise.

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
- Do not generate final PF candidates until this sweep is written into `daily/YYYY-MM-DD/ideas.md` under the `Signal Inbox` section.

1.5) **Desire and mechanic pass (required)**
- Fill the `Desire Ledger` for the strongest signals before drafting candidates.
- Assign a mechanic from the `Mechanic Matrix` before writing the title.
- If the best mechanic is still "dashboard", challenge it with at least two
  alternatives: receipt, interrogator, proof kit, simulator, or panic button.

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
- Produce 8–12 candidate drafts, score them, kill the weak ones, then select 4.
- Each draft must include: user value, mechanism, and a minimal test.
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
- Reject or rewrite any final candidate whose first screen would read as a
  generic `Dashboard`, `Board`, `Planner`, `Scanner`, `Console`, or `CRM`.

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
- Mechanic:
- Trigger moment:
- One-liner:
- Target user:
- Buyer/share audience:
- Mechanism:
- Output artifact:
- Why now:
- Scores: Pain / Shame / Urgency / Workaround / Share / Visual / WTP
- Top 3 assumptions:
- Fastest falsification test (≤1 day):

### Falsification questions (examples)
- What observation would immediately disprove this?
- What is the hidden cost that kills the ROI?
- What is the operational bottleneck?
- What regulatory/security constraint blocks deployment?
