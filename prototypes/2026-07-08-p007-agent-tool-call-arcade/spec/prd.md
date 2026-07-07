# PRD - Agent Tool-Call Arcade

## Problem
- A playful permission game where teammates race to catch risky AI tool calls before the fake agent spends money, deletes files, or emails a client.
- Source evidence: S3 - Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context. S4 - Hacker News Show HN, Git for AI Agents: Agent users want prompt-level history and undo because multiple prompts can produce one meaningful code change.

## Target user
- Product teams, dev shops, and AI-curious operators who need a memorable way to learn agent safety without another policy deck.

## Key UX
- Players review rapid-fire fake agent actions, slap approve/block/escalate buttons, watch consequences, and compare team reflex scores.

## Required UI sections
- Round timer
- Fake agent command feed
- Approve/block/escalate controls
- Consequence animation panel
- Team risk score
- Scenario deck selector
- Shareable safety poster

## Assigned design profile
- playful-experimental
- Design direction: bold training-game composition with high contrast, one strong accent, readable arcade scoring, and tactile controls.

## Theme
- 역전

## Practical vs fun
- Fun / Portfolio / Experimental

## Source signal references
- S3: Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities — https://news.ycombinator.com/item?id=48804182
- S4: Hacker News Show HN, Git for AI Agents — https://news.ycombinator.com/item?id=48063548

## Stitch prompt
Create a responsive web app called "Agent Tool-Call Arcade" for Product teams, dev shops, and AI-curious operators who need a memorable way to learn agent safety without another policy deck.. The app is based on observed user pull from S3: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context. S4: Agent users want prompt-level history and undo because multiple prompts can produce one meaningful code change. The app should use a Tool-Call Reflex Game around the trigger moment "Players review rapid-fire fake agent actions, slap approve/block/escalate buttons, watch consequences, and compare team reflex scores." and make the first screen communicate "A playful permission game where teammates race to catch risky AI tool calls before the fake agent spends money, deletes files, or emails a client.". Build the core workflow around user-entered evidence and produce team agent-safety score poster. Required sections: Round timer; Fake agent command feed; Approve/block/escalate controls; Consequence animation panel; Team risk score; Scenario deck selector; Shareable safety poster. Emotional pressure to make visible: 역전. Toy rule / playable hook: Approve, block, or escalate the fake agent before the countdown lets it act. Design direction: use the playful-experimental profile with bold training-game composition with high contrast, one strong accent, readable arcade scoring, and tactile controls. Avoid generic dashboard framing; make the main interaction feel like Tool-Call Reflex Game.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
