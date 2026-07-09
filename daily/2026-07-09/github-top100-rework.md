# GitHub Top 100 Rework - 2026-07-09

Operator correction: the previous rework still was not actually based on GitHub top repositories. This file fixes that by using GitHub API search:

```text
created:>2026-06-25 sort:stars order:desc per_page=100
captured: 2026-07-09 KST
```

## Top Repo Signals Actually Used

1. `deepseek-ai/DeepSpec` - 6474 stars - speculative decoding training/eval stack.
2. `elder-plinius/T3MP3ST` - 3911 stars - multi-agent red-team harness.
3. `Krishnagangwal/CS-Fundamentals` - 1836 stars - curated placement/interview prep.
4. `synthetic-sciences/openscience` - 1804 stars - AI workbench for scientific research.
5. `isjiamu/gzh-design-skill` - 1580 stars - Markdown to polished WeChat article HTML.
6. `Shpigford/knockoff` - 1426 stars - Chrome extension filtering pseudo-brand junk on Amazon.
7. `HUANGCHIHHUNGLeo/claude-real-video` - 1423 stars - local video scene/frame/transcript understanding.
8. `ammaarreshi/Generals-Mac-iOS-iPad` - 1369 stars - legacy RTS engine running on Apple devices.
9. `jamesob/local-llm` - 1280 stars - practical guide to running LLMs locally.
10. `oomol-lab/open-connector` - 1016 stars - auth gateway connecting SaaS providers to AI agents.
11. `514-labs/dnsglobe` - 743 stars - DNS propagation checker on a world map.
12. `Kulaxyz/token-diet` - 566 stars - token-efficiency skill for coding agents.
13. `ComputeRoyale/Compute-Royale` - 500 stars - AI agents racing real GPUs, with staking.
14. `nagisanzenin/engram` - 440 stars - evidence-based learning engine with recall verification.
15. `xt4d/GameBlocks` - 329 stars - building blocks for browser-based 3D games.
16. `OStudi/short-video-generator-AI` - 322 stars - YouTube to viral short-video pipeline.
17. `SmileLikeYe/agent-chief` - 319 stars - local-first attention/interrupt filter for agents and alerts.
18. `nexu-io/motion-anything` - 310 stars - chat-native motion/animation engine.
19. `ivorpad/mercadona-cli` - 299 stars - agent-friendly grocery shopping CLI.
20. `funador/claude-code-merge-queue` - 293 stars - local merge queue for parallel coding agents.

## Corrected Candidate Slate From GitHub Top 100

### p001 - Coupang Knockoff Radar
- source repos: `Shpigford/knockoff`, `ivorpad/mercadona-cli`.
- reference_pattern: browser extension that filters pseudo-brand marketplace junk.
- twist: localize it for Coupang/Naver/AliExpress-style Korean shopping where users compare unknown brands, fake reviews, repeat factories, and suspicious price gaps.
- core screen: product grid with "known brand / factory clone / review farm / risky listing" lanes and a one-click hide filter.
- playable/shared hook: "send me a product page and I will mark the knockoffs in red."
- why this is better: this is a direct top-repo consumer pattern with Korean commerce adaptation, not a generic dashboard.

### p002 - Video Proof Scrubber
- source repos: `HUANGCHIHHUNGLeo/claude-real-video`, `OStudi/short-video-generator-AI`.
- reference_pattern: local video understanding plus clip extraction.
- twist: turn messy CCTV/dashcam/phone videos into a claim-ready visual timeline with key frames, captions, and contradictions.
- core screen: video strip, deduped frame clusters, transcript/events lane, "evidence card" export.
- playable/shared hook: drag a clip in, get "the 7 moments that matter" as a shareable receipt.
- why this is better: it comes from a repo people starred because local video comprehension is newly useful.

### p003 - Research Lab Notebook Duel
- source repos: `synthetic-sciences/openscience`, `ai4s-research/open-science`, `lzh-phd/topic-feasibility-screener`.
- reference_pattern: AI research workbench and feasibility screener.
- twist: make research planning a duel: three possible topics compete on data availability, novelty, replication risk, and "can I finish this month?"
- core screen: topic cards, evidence slots, feasibility meter, "kill / keep / narrow" verdict.
- playable/shared hook: students share a "topic survived / died" card with their advisor or lab chat.
- why this is better: it translates the GitHub open-science trend into a concrete first-screen decision game.

### p004 - Prompt Diet Receipt
- source repos: `Kulaxyz/token-diet`, `jamesob/local-llm`, `deepseek-ai/DeepSpec`.
- reference_pattern: token efficiency, local LLM operations, speculative decoding performance.
- twist: instead of another cost dashboard, show a before/after receipt for one prompt or agent run: wasted context, repeated instructions, cacheable chunks, cheaper-model handoff.
- core screen: paste prompt/run log, see "calories burned," cheaper rewrite, savings receipt, quality-risk warning.
- playable/shared hook: users post "my prompt lost 38 percent weight" cards.
- why this is better: it is still practical, but output-first and grounded in a real top100 coding-agent trend.

### p005 - Agent Permission Passport
- source repos: `oomol-lab/open-connector`, `SmileLikeYe/agent-chief`, `funador/claude-code-merge-queue`.
- reference_pattern: SaaS connector gateway plus agent interrupt/merge control.
- twist: show every app an AI agent can touch as a passport stamp with risk level, last action, revoke button, and "should this interrupt me?" rule.
- core screen: passport grid, app stamps, permission heat, pending interrupts, merge/approval queue.
- playable/shared hook: a team lead shares a redacted "agent passport" before letting an agent into a workflow.
- why this is better: it follows a top GitHub theme: agents now need control surfaces, not just chat boxes.

### p006 - DNS Launch Globe
- source repos: `514-labs/dnsglobe`, `antiwork/chromeless`, `louislam/uptime-kuma`.
- reference_pattern: world-map propagation monitor and screenshot-friendly launch QA.
- twist: for indie makers launching a domain, show DNS, SSL, first screenshot, uptime, and social preview readiness as a globe race.
- core screen: world map resolver dots, "ready to tweet?" checklist, SSL badge, screenshot preview, broken-region alerts.
- playable/shared hook: share a launch globe image that says "Seoul ready, Frankfurt waiting."
- why this is better: one clear visual mechanic from a starred repo, with a publishable artifact.

### p007 - Recall Boss Fight
- source repos: `nagisanzenin/engram`, `Krishnagangwal/CS-Fundamentals`, `EbookFoundation/free-programming-books`.
- reference_pattern: evidence-based learning, CS prep, free curriculum.
- twist: learning session becomes a boss fight: the boss only takes damage when the user recalls without looking, cites proof, or fixes a wrong answer.
- core screen: topic boss, recall input, spaced-review cards, proof receipt, weak-skill map.
- playable/shared hook: students share "I beat DBMS Normal Forms" receipts.
- why this is better: uses huge education repo demand but turns it into interaction, not another course list.

### p008 - Browser Game Block Forge
- source repos: `xt4d/GameBlocks`, `majidmanzarpour/threejs-procedural-dungeon`, `nexu-io/motion-anything`, `pocket-stack/pocketjs`.
- reference_pattern: browser 3D game building blocks and chat-native motion.
- twist: creators combine 3 blocks - control, obstacle, reveal - and instantly get a 15-second playable game spec plus wireframe.
- core screen: block shelf, rule composer, tiny 3D preview, "share challenge" card.
- playable/shared hook: "I made a playable rule in 3 blocks; beat my version."
- why this is better: it uses GitHub's visible browser-game/tooling energy and fits PF's wireframe-first HTML path.

## Selection Rule Going Forward

Every PF candidate must name:

- `source_repo`: one or more GitHub top/rising repos.
- `why_starred`: the behavior or tension behind the stars.
- `reference_pattern`: existing app/game/workflow type.
- `twist`: exactly what changes for the PF prototype.
- `first_screen`: what the user sees immediately.
- `share_or_play_loop`: why someone would show it to another person.

If those six fields are missing, do not call Phase A complete.
