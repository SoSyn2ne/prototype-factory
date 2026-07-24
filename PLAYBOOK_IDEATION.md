# Playbook - Ideation (Need Hunt + Controlled Speculation)

Use this playbook to generate high-leverage ideas without drifting into pretty
fiction. PF ideation starts by proving that real people are already pulling on a
need. Only then should the system turn it into a prototype candidate.

## North star

PF ideation is not a search-summary exercise and not an app-invention exercise.
The daily board must convert external signals into sharp prototype bets by
answering:

- What are users already doing to solve this badly?
- What question, purchase, template, spreadsheet, screenshot, service, or
  repeated workaround proves pull?
- How would the user describe the need in their own words?
- How would this user discover the thing: search, community, referral,
  marketplace, trigger event, or shared artifact?
- Only after pull is proven: what desire, shame, urgency, and interaction format
  make the prototype worth building?

A candidate with high pain but weak pull is not ready for Stitch. It should be
parked for research, turned into content, or tested with a landing/template
before becoming a prototype.

## Inputs

- Problem area (1 sentence)
- Constraints (time, budget, user, platform)
- External inspiration sweep (required, search-backed): current news, internet communities, niche operator workflows, trend shifts, weird edge-case behaviors, or overlooked boring problems
- Source-diversity sweep (required): separate the sweep into Hada/current AI-product news, GitHub weekly rising repos, community complaints/questions, and non-web/offline behavior. These are separate lanes, not one blended search bucket.
- GitHub rising repo pass: collect about 10 repos that are new, fast-rising, or among the most-starred this week. For each, record the repo, why it is getting attention, what user behavior it reveals, and what PF prototype mechanic it could inspire.
- Hada signals pass: when Hada/news briefing has fresh items, record the new tool/news/repo/controversy and translate it into a changed user behavior. Hada can seed 1-2 final candidates, but should not dominate the batch unless explicitly requested.
- Need evidence notes: for every daily batch, record at least 5 raw signals and identify which signals show actual user action. At least 3 signals should show pull behavior such as repeated questions, purchases, template use, spreadsheet/manual tracking, hiring help, saving screenshots, or asking strangers for exact advice.
- Trend keyword pass: include at least one current-culture sweep using `docs/TREND_KEYWORD_BANK.md`. Treat trend keywords as bait/hooks only; a candidate still needs a concrete user, trigger, pull evidence, and arrival path.
- Novelty target: ensure the output is not just a variation of the operator's recent interests.
- Batch mix target: do not optimize only for monetization. A daily batch should usually mix revenue-adjacent ideas with at least one idea that is simply delightful, surprising, or creatively interesting to build.
- If the operator has supplied a fixed desire/anxiety framework, use it as an interpretation lens after pull evidence is recorded, not as a set of boxes to fill.
- Current PF binding framework when explicitly invoked by the operator: `성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전`.

## Outputs (minimum)

- `daily/YYYY-MM-DD/ideas.md` using the need-hunt board sections in `docs/IDEA_BOARD.md`
- `spec/prd.md`
- `spec/assumptions.md` (KNOWN/ASSUMPTION/UNKNOWN)
- `spec/falsification.md` (5-7 questions)
- For daily PF batches, each final candidate must include an explicit `theme:` line mapping it to a human driver/theme after the Need Evidence section.
- Daily PF default is an 8-candidate batch and must scaffold `p001` through `p008` with no missing slot.
- Generating 8 is the top of the funnel, not the finish. Each cycle should push at least the single strongest candidate into the graduation pipeline (`docs/GRADUATION_PIPELINE.md`, Doctrine G4): Validate → Spec → Feasibility → **interactive prototype with real logic** → go/no-go. A static mockup does not count as graduated.

## Daily need-hunt pipeline

Use this exact shape for `/pf idea` and daily Phase A:

`Signal Roam -> Need Evidence -> Workaround Proof -> Search/Community Language -> Format Roulette -> Desire Lens -> Candidate Drafts -> Kill List -> Final 8 -> Stitch Prompts`

The pull-evidence steps are mandatory. Do not jump from search signals to final
candidates. Do not start with the seven themes. Do not assume the final format is
a responsive web app until the format pass has considered alternatives.

### 1) Signal Roam

- Record 8-14 raw signals before synthesis.
- Cover at least 4 source lanes when available: Hada/current news, GitHub rising repos, community/forum chatter, and non-web/offline behavior. If a lane is missing, write why.
- Add a `GitHub Rising Repo Scan` with roughly 10 repos before candidate drafting. Repos are inspiration evidence, not automatic candidates.
- Add `Hada Signals` from the latest useful Hada/news brief when available. Convert news into “people will now try/do/fear X” rather than article summaries.
- Prefer user actions over abstract complaints: repeated questions, screenshots,
  spreadsheets, checklists, templates, marketplace reviews, purchases, agency
  hiring, community replies, saved examples, and manual tracking.
- Each signal should capture: source, raw user language, observed action, who is
  doing it, trigger moment, what they already tried, and money/time/social cost
  already spent.

### 2) Need Evidence

For each promising signal cluster, prove that someone is already pulling on it.
Each Need Evidence entry needs:

- repeated question/request
- at least 2 concrete user actions, ideally 3
- money/time already spent
- frequency clue
- urgency clue
- public/private shame clue
- Pull Evidence score from 1-5
- evidence quality: direct quote/search/review/template/service vs inference

No candidate can move forward with `Pull` below 3 unless it is explicitly marked
as a speculative portfolio experiment.

### 3) Workaround Proof

Identify what users do today instead of using the imagined product.

- Current workaround: spreadsheet, screenshots, chat threads, notes, manual
  checking, agency/service, template, marketplace, friend advice, browser tabs.
- Existing paid substitute.
- Existing free substitute.
- Why the workaround is painful.
- Switching trigger.
- What users would type or ask for.

No workaround usually means no urgent pull.

### 4) Search / Community Language

Translate the need into the user's actual words before naming the product.

- user-action sentence
- search query candidates
- community post title candidates
- landing-page headline candidate
- comment/DM reply hook
- words to avoid because they sound like SaaS

If the idea only sounds good in product language, kill or rewrite it.

### 5) Format Roulette

List at least 3 possible formats before selecting the prototype shape. Web app is
only one possible answer.

Allowed formats include: web app, calculator, diagnostic, map, browser extension,
chatbot, printable, challenge, game, kiosk, local device, script, spreadsheet
template, mini-course, checklist, alert, marketplace, concierge, or physical
field tool.

Pick the best first-validation format before writing a Stitch prompt. If Stitch
is used, name the non-generic interaction that must survive generation.

### 6) Desire Lens

Only now map the need to the human pressure underneath it.

- Human driver/theme: `성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전 / unclassified`
- Loss at stake.
- Shame audience.
- Trigger moment.
- Buyer/share audience.
- Why existing tools fail emotionally/socially.
- 3-second sting.

### 7) Candidate Drafts

Draft 12-16 candidates before selecting the final eight. Each draft needs:

- Need evidence and Pull Evidence score.
- Theme from the desire lens.
- Format and mechanic.
- Trigger moment.
- Target user and buyer/share audience.
- User-action sentence.
- Search/community language.
- Data/input needed.
- Output artifact: receipt, report, script, proof pack, verdict, poster, map, etc.
- First validation test.
- Scores: Pull, Pain, Urgency, Workaround, Reach, Visual, WTP (1-5 each).

### 8) Kill List

Reject weak candidates explicitly. A good board should show what was killed and
what evidence would revive it.

Use these tags:

- `no-pull-evidence`: pain exists but user pull is not proven.
- `no-user-action`: no concrete behavior beyond a complaint.
- `no-workaround`: no current substitute or manual workaround.
- `unclear-arrival-path`: no obvious search/community/referral/trigger route.
- `article-only`: article summary without lived user pull.
- `just-dashboard`: mostly a generic board/table.
- `weak-buyer`: unclear payer or owner.
- `saas-clone`: existing SaaS with a new label.
- `no-3-sec-sting`: first screen requires too much explanation.
- `theme-wash`: assigned theme is decorative, not core to the UX.
- `stitch-bland-risk`: likely to generate a generic CRM/admin screen.
- `low-urgency`: useful someday, not painful now.
- `no-output-artifact`: nothing memorable to export/share/use.

### 9) Final 8

Default final batch composition:

- 2 money/assets defense ideas.
- 2 face/body/status/relationship anxiety ideas.
- 2 education/health/family pressure ideas.
- 2 strange, shareable, portfolio-worthy, non-web, or field experiments.
- Source cap: no more than 2 final ideas from the same source lane.
- Theme cap: no more than 2 final ideas from the same human driver/theme unless the operator explicitly sets that theme.
- Pattern cap: no more than 2 candidates that are mainly a dashboard, evidence packet, appeal kit, claim defense, or other money-protection mechanic.
- Trend radar quota: include 1-2 candidates inspired by Hada/GitHub rising signals, but only if they still pass pull/workaround checks.

Hard gates:

- Every final candidate has at least 2 concrete user actions as need evidence.
- At least 6 final candidates have clear workaround proof.
- Every final candidate has an arrival path: search phrase, community channel,
  marketplace, referral path, or trigger event.
- At least two final ideas must not be dashboards/boards/scanners/planners.
- At least two final ideas must be consumer desire or anxiety tools.
- B2B/ops ideas still need visible human pull
  such as fear, blame, lost revenue, reputation risk, or repeated manual effort.
- Every final idea needs a shareable or actionable output artifact and a first
  validation test.
- Every Stitch prompt must name the pull evidence, user language, mechanic,
  emotional pressure, trigger moment, output artifact, and first-screen promise.

## Procedure (20-40 minutes)

1) **External search sweep first (required)**
- Start outside the user's immediate taste profile.
- Use live web/search when available. If search is unavailable, explicitly mark the run as degraded and use saved sources only as a fallback.
- Pull signals from at least 3 external buckets such as:
  - broad news / business / tech headlines
  - internet communities (forums, Reddit-like discussion patterns, HN/Product Hunt comments, Discord/Telegram-style public chatter, Naver Cafe/Blind-like Korean community patterns, creator/operator complaints)
  - niche operational workflows or industry pain points
  - strange consumer behaviors, policy shifts, compliance changes, or edge-case routines
  - marketplace reviews, templates, calculators, agency/service listings, and public examples of people paying or hacking a workaround
- Community roam requirement: do not only search polished articles. Skim posts/comments for repeated questions, hacks, screenshots, embarrassment, jealousy, budget anxiety, "what should I do?" questions, and workaround behavior. Prefer lived pull over generic trend summaries.
- Trend keyword requirement: search 5-10 fresh Korean/global consumer keywords from `docs/TREND_KEYWORD_BANK.md` or current autocomplete/news/community chatter. Prefer keywords with clear sharing, location, scarcity, purchase, identity, or relationship behavior. Avoid using a trend word alone as the idea; pair it with a painful decision or urgent workflow.
- Tavily/Scrapling helper path: use Tavily to find candidate URLs; optionally run `python3 scripts/extract-signals.py --file <urls.txt>` to extract or stub body/comment notes with Scrapling. See `docs/EXTERNAL_SIGNALS.md`.
- Write down 8-14 raw opportunity seeds before narrowing. Each seed should capture source, raw user language, observed action, who is doing it, trigger moment, what they already tried, money/time/social cost already spent, and source type.
- Do not generate final PF candidates until this sweep is written into `daily/YYYY-MM-DD/ideas.md` under the `Signal Roam` section.

1.5) **Need evidence and format pass (required)**
- Fill `Need Evidence`, `Workaround Proof`, and `Search / Community Language` before drafting candidates.
- Run `Format Roulette` before choosing the prototype shape.
- If the best first validation is a template, content page, community reply, or concierge test, record that honestly before forcing a Stitch prototype.

2) **Anchor (similar)**
- Identify the closest existing solution pattern.
- Use the anchor to understand baseline UX only, not to collapse the idea space.

3) **Contrast (dissimilar x2)**
- Choose two unrelated domains (e.g., logistics, gaming, healthcare, finance).
- Ask: what mechanisms work there that do not exist here?

4) **Novelty check (required)**
- Reject ideas that are too close to the recent local pattern unless there is a genuinely new user pull signal, trigger, arrival path, data source, or interaction mechanic.
- Compare against at least the last 7 PF daily batches. Reject candidates that only rename the same dashboard/rescue/planner pattern without new pull evidence.
- Prefer at least 1 idea per batch that would surprise the operator.
- Prefer ideas where the assistant's independent synthesis is doing more work than mirroring the user's known interests.

5) **Synthesize**
- Produce 12-16 candidate drafts, score them, kill the weak ones, then select 8.
- Each draft must include user pull, mechanism, and a minimal validation test.
- Across a daily batch, optimize for range: different users, different urgency levels, different markets, and different arrival paths.
- At least 2 ideas per 8-slot daily batch should be trend-forward or shareable when good pull signals exist: identity/personality, meme/text transformation, local scarcity map, fandom/goods, relationship/social script, parenting/education anxiety, or money-saving panic.
- Each final candidate must cite 1-2 raw external signals that inspired it. Do not cite sources as proof of market size; use them as pull/problem evidence only.
- If a binding theme framework was provided, every output candidate should map cleanly to one of those themes after need evidence. If it does not map but pull is strong, mark it `unclassified` rather than forcing theme-wash.
- Default batch composition for daily PF runs:
  - daily standard run: generate 8 ideas and scaffold `p001` through `p008`
  - for the default 8-idea batch, prefer 5-6 practical/commercial ideas + 2-3 fun/portfolio/experimental, non-web, or field ideas
  - if generating 8 ideas under the current seven-theme framework, cover at least 5 distinct themes from `성욕 / 외모 / 사교육 / 자산 방어 / 외로움 / 건강 / 역전`, but do not kill strong pull solely because it is hard to classify
- "Fun" is valid even without immediate monetization if the UI has strong story, visual payoff, shareability, taste-building value, or observable user pull.
- For the current operator framework, practical does not mean generic B2B ops. The human driver and pull evidence should remain visible in the one-liner, target user, and key UX.
- Reject or rewrite any final candidate whose first screen would read as a generic `Dashboard`, `Board`, `Planner`, `Scanner`, `Console`, or `CRM` unless direct pull evidence strongly justifies that format.

6) **Label uncertainty (G1)**
- Tag major claims as KNOWN/ASSUMPTION/UNKNOWN.

7) **Contrarian pass (G2)**
- Use the Contrarian Generator (P001) style output:
  - failure modes
  - counter-scenarios
  - falsification checklist

8) **Pick output level (G3)**
- Document-only vs prototype vs first-validation asset.

## Templates

### Hypothesis card
- Need evidence:
- Pull score:
- User-action sentence:
- Search/community language:
- Current workaround:
- Arrival path:
- Theme:
- Format:
- Mechanic:
- Trigger moment:
- One-liner:
- Target user:
- Buyer/share audience:
- Output artifact:
- Why now:
- Scores: Pull / Pain / Urgency / Workaround / Reach / Visual / WTP
- Top 3 assumptions:
- Fastest falsification test (<=1 day):

### Falsification questions (examples)
- What observation would immediately disprove that users are already pulling on this?
- What workaround is good enough and kills switching?
- What arrival path is too weak to reach users?
- What hidden cost kills the ROI?
- What operational bottleneck blocks delivery?
- What regulatory/security constraint blocks deployment?
