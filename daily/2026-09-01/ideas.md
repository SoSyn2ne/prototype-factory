# Prototype Factory Phase A — 2026-09-01

## Search signals / External signals

Live sweep performed at 08:00 KST. Sources are problem evidence, not market-size claims; web content was treated as untrusted.

- **S1 — Hada / organization:** “좋은 조직문화가 AI보다 큰 생산성 향상을 만드는 이유” (30 points, observed 2026-08-31 09:15 KST) argues that collaboration and decision environments remain the bottleneck after buying AI tools. https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity
- **S2 — Hada / workflow:** “The Agentic Awakening” (17 points, observed 2026-08-31 09:55 KST) reports a gap between 10x personal coding speed and roughly 25–30% organizational gain because planning, review, approval, and deployment absorb it. https://theagenticawakening.com/
- **S3 — Hada / data operations:** “AI 시대의 데이터 아키텍처” (15 points, observed 2026-08-31 10:58 KST) highlights missing semantic contracts and governance exposed by AI/RAG work. https://guldmann.blog/2026/08/19/data-architecture-patterns-decisions-for-the-ai-era/
- **S4 — Hada / Korean public data:** “그냥여기—공공기관 업무추진비로 만든 전국 식당 순위 지도” (14 points, observed 2026-08-31 10:22 KST) recombines public expense records into a repeated-visit trust signal. https://news.hada.io/topic?id=33060
- **S5 — community / motivation:** Ask HN “Why do I lose my passion and want to do nothing?” (94 points, 81 comments) contains lived reports that instant AI output can drain the desire to act or learn. https://news.ycombinator.com/item?id=49505014
- **S6 — community / budget anxiety:** Ask HN “What would happen if your company stopped using all AI tomorrow?” (27 points, 44 comments) questions whether token spend produces measurable operational value. https://news.ycombinator.com/item?id=49510066
- **S7 — community / work control:** Ask HN “How to break Claude Code addiction?” (17 points, 24 comments) describes lost quitting time and declining code understanding during agent-heavy work. https://news.ycombinator.com/item?id=49491745
- **S8 — community / professional identity:** Ask HN “AI writes better code than me. How to keep my identity?” (14 points, 24 comments) describes deadline pressure to use AI alongside loss of craft ownership. https://news.ycombinator.com/item?id=49481969
- **S9 — community / solo-business risk:** Ask HN “Is a One Person Company just another type of Uber driver?” (6 points, 10 comments) reflects anxiety about income stability, benefits, and platform dependence. https://news.ycombinator.com/item?id=49501729
- **S10 — community / digital preservation:** Ask HN “Best way to archive 25 years of emails” (5 points, 9 comments) shows the difficulty of making a huge inbox portable, searchable, and recoverable decades later. https://news.ycombinator.com/item?id=49489306
- **S11 — community / privacy:** Ask HN asks how to ensure ChatGPT, Claude, or Gemini forget prior conversations after memory is disabled; users report weak confidence in clean-slate behavior. https://news.ycombinator.com/item?id=49498450
- **S12 — policy / surveillance:** Florida ordered removal of Flock license-plate cameras from state highways, exposing installation-authority and data-retention conflict around ambient surveillance. https://www.businessinsider.com/florida-orders-removal-flock-camera-state-highways-license-plate-readers-2026-8

Community requirement: S5–S11 are community threads containing lived pain, uncertainty, workaround behavior, or budget anxiety.

## Hada Signals

Observed the `news.hada.io` front/latest feed around 2026-09-01 08:00 KST. Hada is used as behavior radar, not demand proof.

1. **좋은 조직문화가 AI보다 큰 생산성 향상을 만드는 이유** — 30 points, observed 2026-08-31 09:15 KST. https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity — Behavior signal: teams need to expose decision latency, not merely add AI tools.
2. **The Agentic Awakening** — 17 points, observed 2026-08-31 09:55 KST. https://theagenticawakening.com/ — Behavior signal: personal execution acceleration shifts the bottleneck into review and approval.
3. **AI 시대의 데이터 아키텍처** — 15 points, observed 2026-08-31 10:58 KST. https://guldmann.blog/2026/08/19/data-architecture-patterns-decisions-for-the-ai-era/ — Behavior signal: reusable AI output needs explicit data meaning and contracts.
4. **그냥여기—공공기관 업무추진비로 만든 전국 식당 순위 지도** — 14 points, observed 2026-08-31 10:22 KST. https://news.hada.io/topic?id=33060 — Behavior signal: public spending trails can become a legible local discovery mechanic.
5. **mu—에이전트가 들어 있는 개인 서버** — 7 points, observed 2026-08-31 09:30 KST. https://github.com/micro/mu — Behavior signal: users want mail, chat, files, and calendar under a portable personal boundary.

## GitHub Rising Repo Scan

GitHub Search API criterion: `created:>2026-08-24`, sorted by stars descending; observed 2026-09-01 08:00 KST. Stars are snapshot evidence only.

1. `sapientinc/PRAXIST` — 5,446 stars — measurable execution-oriented autonomous research; UX seed: observable checkpoints rather than opaque agent output.
2. `HEJustinSun/my-girlfriend-jingtian-latex` — 4,191 stars — relationship/meme-shaped LaTeX artifact; UX seed: highly specific shareable output beats generic tooling.
3. `XiaoDuoYa/codex-with-chatgpt` — 1,823 stars — planning/execution role split; UX seed: explicit handoff boundaries.
4. `MetaMask-AI/metamask-desktop` — 1,228 stars — desktop Web3 browsing; UX seed: sensitive activity isolated in a dedicated workspace.
5. `Nanako0129/sepia` — 1,218 stars — restoring narrative/professional prose from AI style; UX seed: human authorship as an interaction, not a detector score.
6. `wide-trace/open-higgsfield` — 1,142 stars — model-specific controls and one output gallery; UX seed: comparable results with settings provenance.
7. `Tencent/WeMM-Embedding` — 1,000 stars — multimodal understanding/retrieval; UX seed: mixed-media archives with explainable retrieval.
8. `jub0t/Concat` — 884 stars — open-source CapCut alternative; UX seed: local portable creative timelines.
9. `cbrock84/headcount` — 841 stars — installable agent company with many roles and skills; UX seed: ownership maps and visible work queues.
10. `tradecatlabs/shulihuazixuecongshu` — 825 stars — specialized mathematical chemistry collection; UX seed: durable domain corpus packaging.

## Viral Interaction / Game Scan

- **Shakedown Rally**, first on itch.io new & popular when observed: click an icon and drive within seconds; exaggerated low-spec physics makes failures instantly clip-readable. https://nothke.itch.io/shakedown
- **Sheet Job:** physical office carrying tasks become a first-person sandbox where players unlock deliberately awkward automation machines. https://dedreflection.itch.io/sheet-job
- **Game About Botting in an MMORPG:** manual work becomes gold sales, bot modules, then full automation; automation progress itself is the reward. https://yaxworks.itch.io/game-about-botting-in-an-mmorpg

## Novelty / duplicate check

Compared against the seven most recent available batches: `2026-08-13`, `2026-08-14`, `2026-08-21`, `2026-08-24`, `2026-08-25`, `2026-08-26`, and `2026-08-27`.

- Rejected another agent stop-loss, approval gate, or evidence dashboard because 08-24 and 08-25 already cover agent receipts and purchase authority. `p001` survives because the new object is cross-person waiting time and the mechanic is a baton-style decision relay.
- Rejected another SaaS exit/migration board because 08-27 already has SaaS Exit Window.
- Rejected another generic human-writing proof tool because 08-27 has Human Draft Margin. `p003` instead requires an executable explanation-and-mutation checkout on a concrete code path.
- Rejected another stale community map because 08-26 has Living Info Freshness Relay. `p004` uses a distinct public expense dataset and repeated-agency visit trail.
- Rejected another generic privacy policy checklist. `p005` is an adversarial clean-room probe with planted canary facts and leakage results.
- Rejected another outage/continuity board. `p006` uses yearly archival capsules plus random restore drills for 25 years of email.
- Rejected another generic automation dashboard and another wearable haptic duel. `p007` is a spatial contraption toy; `p008` turns camera-recognized desk gestures into direct rally steering.

All accepted concepts change at least one of user, trigger, data source, or core interaction. Mix: six practical/commercial concepts (`p001`–`p006`) and two fun/portfolio experiments (`p007`–`p008`). Each uses exactly one PF design profile.

## Candidate schema / Phase B handoff

- **p001:** source_repo: `cbrock84/headcount`; why_starred: role-rich agent work makes ownership boundaries visible; reference_pattern: relay baton; twist: measure waiting between decisions instead of task completion; first_screen: one delayed launch with a glowing current owner; share_or_play_loop: weekly latency replay; plan_brief: reduce approval time on one AI-assisted delivery lane; development_start_prompt: use the full p001 Stitch prompt below.
- **p002:** source_repo: `sapientinc/PRAXIST`; why_starred: measurable autonomous execution invites measurable ROI; reference_pattern: disaster rehearsal; twist: simulate one AI-free workday against cost and output; first_screen: token bill beside five critical jobs; share_or_play_loop: finance/ops blackout receipt; plan_brief: identify AI use that is essential, replaceable, or pure habit; development_start_prompt: use the full p002 Stitch prompt below.
- **p003:** source_repo: `XiaoDuoYa/codex-with-chatgpt`; why_starred: role separation makes handoff quality critical; reference_pattern: checkout interview; twist: explanation plus safe code mutation unlocks session completion; first_screen: changed code path and three comprehension checkpoints; share_or_play_loop: mentor-ready checkout card; plan_brief: preserve developer ownership after agent work; development_start_prompt: use the full p003 Stitch prompt below.
- **p004:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: local guide map; twist: rank repeat public-agency visits rather than reviews; first_screen: lunch-radius map with agency-return badges; share_or_play_loop: shareable “public servants came back” trail; plan_brief: test a public-data trust proxy for lunch discovery; development_start_prompt: use the full p004 Stitch prompt below.
- **p005:** source_repo: `MetaMask-AI/metamask-desktop`; why_starred: dedicated sensitive workspaces make boundary testing legible; reference_pattern: clean-room assay; twist: canary facts reveal retained memory across providers/workspaces; first_screen: sensitive reuse scenario and three planted facts; share_or_play_loop: privacy handoff certificate; plan_brief: verify clean-slate claims before sensitive reuse; development_start_prompt: use the full p005 Stitch prompt below.
- **p006:** source_repo: `Tencent/WeMM-Embedding`; why_starred: mixed-media retrieval is useful for long-lived archives; reference_pattern: time capsule; twist: yearly portable bundles must pass random restore drills; first_screen: 25-year conveyor with red unverified years; share_or_play_loop: family/firm archive receipt; plan_brief: prove old mail remains searchable outside its vendor; development_start_prompt: use the full p006 Stitch prompt below.
- **p007:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: factory contraption sandbox; twist: office paperwork becomes physical conveyors, stamps, fans, and failure clips; first_screen: one messy desk and a blank floor grid; share_or_play_loop: eight-second jam replay; plan_brief: make automation logic tactile and funny; development_start_prompt: use the full p007 Stitch prompt below.
- **p008:** source_repo: not GitHub-derived; why_starred: not applicable; reference_pattern: micro-rally time trial; twist: tiny camera-recognized desk gestures steer an absurd vehicle; first_screen: three-second gesture calibration over a rally start gate; share_or_play_loop: ghost race and wipeout clip; plan_brief: validate instant comprehension and ten-second rematch; development_start_prompt: use the full p008 Stitch prompt below.

## p001 — Practical / Commercial — Approval Latency Relay

- **Title:** Approval Latency Relay
- **One-liner:** Turn stalled AI-assisted work into an owner-by-owner decision relay with visible wait time.
- **Target user:** Product, engineering, legal, and operations leads shipping AI-assisted work across several approvers.
- **Key UX:** A work item moves as a baton; each owner must choose approve, ask one bounded question, or reroute, while the relay visualizes active work versus waiting time.
- **Required UI sections:** delayed-work intake; relay track; current-owner decision card; question budget; wait-time replay; latency receipt.
- **Assigned design profile:** `operator-dense`
- **Theme:** 시간 방어
- **Source signal references:** S1, S2
- **Copy/paste-ready Stitch prompt:**

```text
Design a responsive B2B workflow product called “Approval Latency Relay” for teams whose AI-assisted execution is fast but review and approval remain slow. The first screen shows one delayed launch as a horizontal relay track across product, engineering, legal, and operations, with a glowing baton on the current owner and a split of 42 minutes active work versus 3.4 days waiting. Each owner can approve, ask one bounded question, or reroute with a reason; unanswered questions consume a visible question budget. Include delayed-work intake, relay track, current-owner decision card, question budget, wait-time replay, and a shareable latency receipt. Show normal, overdue, rerouted, blocked, and completed states with realistic timestamps. Design direction for the operator-dense profile: compact charcoal workbench, one amber action accent, 8px controls, dense owner rows, monospace elapsed times, and no decorative gradient hero or generic KPI dashboard.
```

## p002 — Practical / Commercial — AI Blackout Ledger

- **Title:** AI Blackout Ledger
- **One-liner:** Rehearse one workday without AI to separate real operational value from token spend and habit.
- **Target user:** Small-company founders, finance leads, and team managers questioning rising AI subscriptions and usage costs.
- **Key UX:** Choose five critical jobs, simulate an AI-off day, record fallback time and quality, then classify each use as essential, replaceable, or habit.
- **Required UI sections:** spend snapshot; critical-job deck; blackout timeline; fallback recorder; value classification; decision receipt.
- **Assigned design profile:** `financial-analyst`
- **Theme:** 자산 방어
- **Source signal references:** S6, S2
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive finance-and-operations tool named “AI Blackout Ledger” for small companies that cannot tell whether rising AI spend creates durable value. Open with the monthly model/subscription bill beside five critical jobs and a dominant “Rehearse an AI-off day” action. For each job, let the team record the manual fallback, extra minutes, quality change, missed dependency, and whether customer delivery still succeeds. End by classifying usage as essential, replaceable, or habit and producing a finance-ready keep/cut/test receipt. Required sections: spend snapshot; critical-job deck; blackout timeline; fallback recorder; value classification; decision receipt. Include no-baseline, failed fallback, unexpectedly better manual result, essential dependency, and completed rehearsal states. Design direction for the financial-analyst profile: off-white ledger, navy structure, one cobalt action accent, 8px cards, tabular cost/time deltas, explicit confidence labels, and no glossy fintech marketing or vague savings score.
```

## p003 — Practical / Commercial — Code Comprehension Checkout

- **Title:** Code Comprehension Checkout
- **One-liner:** End an agent coding session only after the developer can explain and safely alter the critical path.
- **Target user:** Developers and team leads using coding agents under deadline pressure without wanting craft ownership to decay.
- **Key UX:** The system selects one changed critical path, asks the developer to explain cause/effect, then requires a small safe mutation and test prediction before checkout.
- **Required UI sections:** changed-path map; explanation prompts; prediction card; safe mutation sandbox; test outcome; checkout artifact.
- **Assigned design profile:** `premium-editorial`
- **Theme:** 역전
- **Source signal references:** S7, S8
- **Copy/paste-ready Stitch prompt:**

```text
Design a desktop-first developer learning workspace called “Code Comprehension Checkout.” The first screen shows the agent’s changed critical path as a calm annotated code excerpt, then three human checkpoints: explain why the branch exists, predict what one test will do, and make a small safe mutation in a sandbox. Do not provide generated replacement answers; show hints only after the developer commits a prediction. Compare predicted versus actual test behavior and produce a compact checkout artifact for a mentor or future self. Required sections: changed-path map; explanation prompts; prediction card; safe mutation sandbox; test outcome; checkout artifact. Include uncertain answer, wrong prediction, flaky test, safe rollback, and passed checkout states. Design direction for the premium-editorial profile: warm paper canvas, ink-black code and prose, one restrained cobalt annotation accent, 8px panels, generous reading margins, visible handwritten-style review marks, and no neon terminal cosplay or generic score dashboard.
```

## p004 — Practical / Commercial / Korea — Public Lunch Signal Map

- **Title:** Public Lunch Signal Map
- **One-liner:** Turn Korean public-agency expense records into a repeat-visit restaurant discovery trail.
- **Target user:** Korean office workers, business travelers, and local diners who distrust sponsored reviews.
- **Key UX:** Search a lunch radius, inspect which public teams returned to a restaurant and when, then build a walkable meal trail with provenance links.
- **Required UI sections:** radius search; map; repeat-visit badges; agency timeline; price/context card; provenance drawer; shareable trail.
- **Assigned design profile:** `calm-consumer`
- **Theme:** 발견
- **Source signal references:** S4
- **Copy/paste-ready Stitch prompt:**

```text
Design a Korean mobile-first discovery product called “Public Lunch Signal Map.” The first screen asks for a station or district and immediately shows a calm map of nearby restaurants ranked by repeat visits found in public-agency business-expense records, not star reviews. Tapping a place reveals which agency teams returned, visit dates, party-size clues, typical recorded spend, source-document links, and a plain warning that public spending is only a discovery signal. Let users assemble a three-stop walkable lunch trail and share it. Required sections: radius search; map; repeat-visit badges; agency timeline; price/context card; provenance drawer; shareable trail. Include sparse-data, one-off visit, repeated-team visit, closed venue, and source-error states. Design direction for the calm-consumer profile: soft sage map surfaces, one teal action accent, 12px friendly cards, roomy 44px controls, progressive disclosure, plain Korean explanations, and no noisy ad tiles or leaderboard casino styling.
```

## p005 — Practical / Commercial — Clean-Slate Memory Probe

- **Title:** Clean-Slate Memory Probe
- **One-liner:** Test whether an AI workspace really forgot prior context before sensitive reuse or handoff.
- **Target user:** Consultants, recruiters, lawyers, researchers, and teams reusing AI workspaces across clients or sensitive topics.
- **Key UX:** Plant three harmless canary facts, disable or clear memory, start a new workspace, and run adversarial prompts that reveal any retained trace without exposing real secrets.
- **Required UI sections:** reuse scenario; canary-fact setup; reset checklist; probe runner; leakage matrix; clean-slate certificate.
- **Assigned design profile:** `operator-dense`
- **Theme:** 안전
- **Source signal references:** S11, S12
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive privacy testing console called “Clean-Slate Memory Probe” for professionals reusing AI workspaces across clients. The first screen shows a sensitive handoff scenario and three harmless planted canary facts, with a dominant “Run clean-slate probe” action. Guide the user through provider memory settings, conversation deletion, a genuinely new workspace, and a sequence of direct, indirect, and semantic prompts. Display only canary leakage—not real private content—in a provider-by-provider matrix, then issue a dated pass, fail, or inconclusive certificate with limitations. Required sections: reuse scenario; canary-fact setup; reset checklist; probe runner; leakage matrix; clean-slate certificate. Include reset-unverified, direct leak, paraphrased leak, false alarm, inconclusive, and passed states. Design direction for the operator-dense profile: compact graphite console, one cyan action accent, 8px bordered panels, dense probe rows, crisp red/amber/green evidence states, monospace event IDs, and no hacker theatrics or generic privacy score.
```

## p006 — Practical / Commercial / Field — Inbox Time-Capsule Conveyor

- **Title:** Inbox Time-Capsule Conveyor
- **One-liner:** Convert decades of email into portable, searchable yearly capsules with recovery drills.
- **Target user:** Retiring professionals, family archivists, small firms, and researchers preserving 10–25 years of mail.
- **Key UX:** Mail flows year by year through export, attachment capture, open-format packaging, local indexing, and a random restore drill that must succeed before sealing.
- **Required UI sections:** archive intake; year conveyor; attachment exceptions; format manifest; restore drill; storage labels; seal receipt.
- **Assigned design profile:** `field-ops`
- **Theme:** 자산 방어
- **Source signal references:** S10, S3
- **Copy/paste-ready Stitch prompt:**

```text
Design a tablet-first archival operations tool called “Inbox Time-Capsule Conveyor” for people preserving 10–25 years of email outside one vendor. The first screen is a year-by-year conveyor from mailbox export through attachment capture, open-format packaging, local search indexing, checksum, and random restore drill; unverified years are visibly red. Let the operator resolve oversized attachments, missing dates, duplicate threads, and encrypted messages, then print storage labels and a seal receipt only after a random message and attachment restore correctly. Required sections: archive intake; year conveyor; attachment exceptions; format manifest; restore drill; storage labels; seal receipt. Include export interrupted, attachment missing, checksum mismatch, index rebuilt, restore failed, and sealed states. Design direction for the field-ops profile: bright durable work surface, deep navy structure, one safety-orange action accent, 8px cards, 48px tap targets, large year labels, barcode-like manifests, and no decorative inbox charts.
```

## p007 — Fun / Portfolio / Experimental — Paperwork Contraption Floor

- **Title:** Paperwork Contraption Floor
- **One-liner:** Drag physical office tasks into a deliberately janky automation line and race its failures.
- **Target user:** Streamers, coworkers, students, and automation-curious players who enjoy short sandbox challenges.
- **Key UX:** Drag conveyors, stampers, fans, interns, and shredders onto a floor grid to route paperwork; physics jams become instant replay clips.
- **Required UI sections:** challenge card; contraption floor; parts tray; live throughput; jam camera; result replay; rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S7 and the Sheet Job viral scan
- **Copy/paste-ready Stitch prompt:**

```text
Create a responsive contraption sandbox game called “Paperwork Contraption Floor.” The one-line rule is: drag office machines onto the floor, press Start, and get ten forms stamped and sorted before the line jams. The first screen shows one messy desk, a blank grid, a tactile parts tray with conveyors, stampers, desk fans, interns, coffee cups, and shredders, plus an oversized Start lever. Simulate readable paper physics, throughput combos, absurd jams, slow-motion failure camera, and an eight-second vertical replay card. Required sections: challenge card; contraption floor; parts tray; live throughput; jam camera; result replay; rematch. Include wrong stamp, coffee spill, infinite loop, heroic intern save, perfect run, and one-tap retry states. Design direction for the playful-experimental profile: dark ink-blue play floor, one hot-coral action accent, 12px chunky machine tiles, elastic paper motion, huge tactile controls, comic impact frames, and no generic automation dashboard or tiny configuration tables.
```

## p008 — Fun / Portfolio / Experimental — Three-Second Drift Desk

- **Title:** Three-Second Drift Desk
- **One-liner:** Turn tiny desk gestures into absurd rally steering for instant office leaderboard runs.
- **Target user:** Office friends, classrooms, streamers, and low-spec browser players wanting a ten-second camera game.
- **Key UX:** Calibrate one gesture—coffee mug tilt, pen slide, or palm lean—in three seconds; that motion directly steers a ridiculous rally vehicle through a short physics course.
- **Required UI sections:** gesture picker; camera calibration; start gate; rally course; ghost line; wipeout replay; leaderboard; rematch.
- **Assigned design profile:** `playful-experimental`
- **Theme:** 재미
- **Source signal references:** S5 and the Shakedown Rally viral scan
- **Copy/paste-ready Stitch prompt:**

```text
Design a mobile-and-desktop camera microgame called “Three-Second Drift Desk.” The one-line rule is: choose one desk gesture, calibrate it in three seconds, then use only that motion to steer a ridiculous rally car for a ten-second run. Start with three giant choices—tilt a coffee mug, slide a pen, or lean a palm—over a visible privacy-first camera crop. Show an instant start gate, exaggerated drift physics, a friend’s ghost line, spectacular desk-safe wipeouts, and a six-second share clip with the gesture and car side by side. Required sections: gesture picker; camera calibration; start gate; rally course; ghost line; wipeout replay; leaderboard; rematch. Include low light, missing object, accessibility keyboard fallback, false gesture, clean run, wipeout, and instant retry states. Design direction for the playful-experimental profile: midnight course, one neon-coral action accent, 14px bold tiles, huge readable countdowns, elastic speed lines, playful but clean camera framing, and no menus before the first drive or generic esports dashboard.
```

## Phase A completion checklist

- Exactly eight candidates: yes.
- Practical/commercial/field: 6; fun/portfolio/experimental: 2.
- Exactly one PF design profile per candidate: yes.
- Every candidate cites 1–2 raw signals: yes.
- Community signals: 7.
- Seven-batch duplicate check: complete.
- Custom demos implemented: no.
- Scaffolded: `p001` through `p008`.
- Expected Stitch drop folder: `/home/sy/Downloads/stitch_drop/2026-09-01/`.
