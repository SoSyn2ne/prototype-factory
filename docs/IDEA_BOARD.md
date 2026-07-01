# PF Daily Need Hunt Board

Use this template for `/pf idea` and daily Phase A. The first job is not to
invent better app ideas. The first job is to prove that real people are already
pulling on the problem through searches, questions, purchases, templates,
spreadsheets, screenshots, comments, agencies, or repeated workarounds.

PF should not promote a candidate from signal to prototype until it has pull
evidence. Pain alone is not enough. A strong candidate shows that someone is
already spending money, time, reputation, or social effort to solve it badly.

## Board Flow

`Signal Roam -> Need Evidence -> Workaround Proof -> Search/Community Language -> Format Roulette -> Desire Lens -> Candidate Drafts -> Kill List -> Final 8 -> Stitch Prompts`

Do not start with the seven desire themes. They are lenses for interpreting a
validated pull signal, not boxes to fill. Do not start with a web-app mechanic.
First prove the user is already hunting for an answer.

## Daily Template

```markdown
# Prototype Factory Need Hunt - YYYY-MM-DD

## Signal Roam

### Source Lane Checklist
- Hada/current AI-product news checked:
- GitHub rising repo scan checked:
- Community/forum complaint scan checked:
- Non-web/offline behavior scan checked:
- Missing lane and reason:

## Hada Signals

### H1 - <tool/news/repo/controversy/date>
- URL/source:
- What is newly happening:
- User behavior this may change:
- Who will try/fear/copy this:
- PF mechanic seed:
- Keep as candidate seed? yes/no and why:

## GitHub Rising Repo Scan

### G1 - <repo owner/name>
- URL:
- Why it is rising this week:
- Stars/growth/time window, if available:
- What user behavior it reveals:
- Prototype mechanic seed:
- Avoid copying:

<!-- Repeat G1-G10 when live GitHub/trending search is available. -->

### S1 - <source/title/date>
- URL:
- Bucket: community question | purchase/review | template/workaround | service/agency | search trend | operator workflow | news/policy | weird behavior
- Raw user language:
- Observed action, not just complaint:
- Who is doing it:
- Trigger moment:
- What they already tried:
- Money/time/social cost already spent:
- Source type: community chatter | marketplace/review | search result | formal/news source | operator workflow | trend signal

<!-- Repeat S1-S14. Minimum 8, target 10-14. At least 5 should show user action, not just a stated problem. -->

## Need Evidence

### N1 - <short need name>
- Signals:
- Repeated question/request:
- Actual user actions seen:
  1.
  2.
  3.
- Money/time already spent:
- Frequency clue:
- Urgency clue:
- Public vs private shame clue:
- Pull evidence score: <1-5>
- Evidence quality: direct quote/search/review/template/service | inference

<!-- No candidate can move forward without at least 2 concrete user actions. -->

## Workaround Proof

### W1 - <workaround pattern>
- Need evidence linked:
- Current workaround:
- Existing paid substitute:
- Existing free substitute:
- Why the workaround is painful:
- Switching trigger:
- What users would type or ask for:
- Proof strength: weak | medium | strong

## Search / Community Language

### L1 - <need phrase>
- User would say:
- Search query candidates:
- Community post title candidates:
- Landing-page headline candidate:
- Comment/DM reply hook:
- Words to avoid because they sound like SaaS:

## Format Roulette

Before choosing a prototype, list at least 3 possible formats. Web app is only
one possible format.

### F1 - <need name>
- Format A: web app / calculator / diagnostic / map / browser extension / chatbot / printable / challenge / game / kiosk / local device / script / spreadsheet template / mini-course / checklist / alert / marketplace / concierge
- Format B:
- Format C:
- Best format for first validation:
- Why this should be a prototype, not just content/template/service:
- If Stitch/web is used, what non-generic interaction must survive:

## Desire Lens

### D1 - <pressure name>
- Need evidence linked:
- Human driver/theme: 성욕 | 외모 | 사교육 | 자산 방어 | 외로움 | 건강 | 역전 | unclassified
- Loss at stake:
- Shame audience:
- Trigger moment:
- Buyer/share audience:
- Why existing tools fail emotionally/socially:
- 3-second sting:

## Candidate Drafts

### C1 - <working title>
- Need evidence:
- Pull evidence score:
- Theme:
- Format:
- Mechanic:
- Trigger moment:
- Target user:
- Buyer/share audience:
- User-action sentence:
- Search/community language:
- Key input/data:
- Output artifact:
- First validation test:
- Scores: Pull <1-5> / Pain <1-5> / Urgency <1-5> / Workaround <1-5> / Reach <1-5> / Visual <1-5> / WTP <1-5>
- Keep/kill/rewrite:
- Notes:

<!-- Draft 12-16 candidates before final selection. -->

## Kill List

### K1 - <candidate title>
- Source draft:
- Kill tag: no-pull-evidence | no-user-action | no-workaround | unclear-arrival-path | article-only | just-dashboard | weak-buyer | saas-clone | no-3-sec-sting | theme-wash | stitch-bland-risk | low-urgency | no-output-artifact
- Reason:
- What evidence would revive it:
- Salvage path, if any:

## Novelty / Duplicate Check

- Checked recent batches:
- Rejected near-duplicates:
- Kept only because:
- Need/pull diversity check:
  - Candidates with direct user-action proof:
  - Candidates with existing workaround proof:
  - Candidates with clear arrival/search/community path:
  - Dashboard/board/scanner/planner count:
  - Non-web or non-SaaS first-validation formats:
  - Consumer desire/anxiety count:
  - B2B/ops count:

## Final 8

### Diversity Gate
- Source lane counts:
- Theme counts:
- Money-defense / appeal / proof-packet count:
- Hada-derived count:
- GitHub-derived count:
- Rebalanced or rejected due to over-concentration:

### p001 - <type>

### Title

### One-liner

### Need Evidence
- Signals:
- Actual user actions:
  1.
  2.
  3.
- Existing workaround:
- Arrival path:
- Pull evidence score:

### Theme

### Format

### Mechanic

### Trigger Moment

### Target User

### Buyer / Share Audience

### User-Action Sentence

### 3-Second Sting

### Key UX

### Output Artifact

### First Validation Test

### Required UI Sections
- 

### Scores
- Pull:
- Pain:
- Urgency:
- Workaround:
- Reach:
- Visual:
- WTP:

### Inspired By Signals

### Why This Survived

### Design Profile

### Stitch Prompt

Create a responsive web app called "<Title>" for <target user>. The app is based on observed user pull: <actual user actions and workaround>. The app should use a <format/mechanic> around the trigger moment "<trigger>" and make the first screen communicate "<3-second sting>". Use the user's own language: "<user-action sentence>". Build the core workflow around <key input/data> and produce <output artifact>. Required sections: <sections>. Emotional pressure to make visible: <theme/loss/shame/urgency>. Design direction: use the `<design-profile>` profile with <tailored visual direction>. Avoid generic dashboard framing; make the main interaction feel like <format/mechanic-specific experience>.

<!-- Repeat p002-p008. -->

## Expected Stitch Drop Folder

`/home/sy/Downloads/stitch_drop/YYYY-MM-DD/`

Expected files:
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p001/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p002/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p003/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p004/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p005/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p006/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p007/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p008/code.html` + `screen.png`
```

## Scoring Guide

- `Pull`: real evidence that users are already asking, searching, buying,
  downloading, sharing, hiring, building templates, or maintaining workarounds.
- `Pain`: actual money, time, opportunity, health, or relationship loss.
- `Urgency`: pressure to act today, this week, before a deadline, before a bill,
  before a comparison, or before a public event.
- `Workaround`: strength of current spreadsheets, screenshots, chat threads,
  notes, manual checking, agencies, templates, or stranger-advice behavior.
- `Reach`: whether the user can be reached through search, community posts,
  marketplaces, creator content, referrals, or a clear trigger moment.
- `Visual`: whether the first screen can be understood in 3 seconds.
- `WTP`: whether the payer, buyer, or economic owner is obvious.

Candidates with `Pull` below 3 should usually be killed, parked for research, or
turned into content/search tests instead of Stitch prototypes.

## Batch Gates

- Final batch has exactly `p001` through `p008`.
- Every final candidate has at least 2 concrete user actions as need evidence.
- At least 6 final candidates have clear workaround proof.
- Every final candidate has an arrival path: search phrase, community channel,
  marketplace, referral path, or trigger event.
- Final batch includes at least 5 distinct human-driver themes, but theme mapping
  happens after pull evidence.
- Final batch includes at least 5 distinct formats or mechanics.
- At least two final ideas are not dashboards, boards, scanners, planners, or consoles.
- At least two final ideas are consumer desire/anxiety tools.
- At least five final ideas are commercially practical.
- Every final idea has a concrete output artifact and a first validation test.
- Every final Stitch prompt includes pull evidence, user language, mechanic,
  trigger moment, emotional pressure, output artifact, and first-screen promise.
