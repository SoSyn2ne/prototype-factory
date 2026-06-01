# PF Daily Idea Board

Use this template for `/pf idea` and daily Phase A. The purpose is to stop
PF from producing polite SaaS summaries and force each candidate through human
desire, urgency, mechanic, rejection, and Stitch-readiness gates.

## Board Flow

`Signal Inbox -> Desire Ledger -> Mechanic Matrix -> Candidate Drafts -> Kill List -> Final 4 -> Stitch Prompts`

Do not skip the middle. A search signal is not an idea until it has a desire
ledger entry, a prototype mechanic, and a 3-second sting.

## Daily Template

```markdown
# Prototype Factory Ideas - YYYY-MM-DD

## Signal Inbox

### S1 - <source/title/date>
- URL:
- Bucket: news/business | communities/forums | niche workflow | trend/policy | weird consumer behavior
- Observed complaint/desire:
- Who feels it:
- Why now:
- Current workaround:
- WTP/shareability:
- Source type: community chatter | formal/news source | operator workflow | trend signal

<!-- Repeat S1-S10. Minimum 5, target 8-10. At least 2 should be community-style when available. -->

## Desire Ledger

### D1 - <short pressure name>
- Signals:
- Human driver/theme: 성욕 | 외모 | 사교육 | 자산 방어 | 외로움 | 건강 | 역전
- Loss at stake:
- Shame audience:
- Trigger moment:
- Existing workaround:
- Buyer/share audience:
- Why existing tools fail:
- 3-second sting:

<!-- Create D entries only for signals that might become candidates. -->

## Mechanic Matrix

| Mechanic | Candidate use | Why it fits | Bland-risk check |
| --- | --- | --- | --- |
| Receipt |  | Turns hidden loss/regret into a bill | Would this be more than a report? |
| Interrogator |  | Cross-examines docs/claims/choices | Does it reveal something uncomfortable? |
| Simulator |  | Lets the user feel future regret/upside | Is the future state visual and specific? |
| Proof Kit |  | Packages evidence for persuasion/defense | Is there a real audience to convince? |
| Status Mirror |  | Shows peer/rival/norm gap | Is comparison central, not decorative? |
| Negotiation Room |  | Tunes pressure/concessions/risk | Is there a relationship or money conflict? |
| Panic Button |  | Produces next urgent moves | Is the deadline real? |
| Confession Booth |  | Reveals the avoided truth privately | Is the admission emotionally sharp? |
| Tradeoff Court |  | Puts options on trial | Is the verdict useful and debatable? |
| Flex/Defense Poster |  | Creates a shareable result | Would someone actually show it? |

## Candidate Drafts

### C1 - <working title>
- Theme:
- Mechanic:
- Trigger moment:
- Target user:
- Buyer/share audience:
- 3-second sting:
- Key input/data:
- Output artifact:
- Inspired by signals:
- Scores: Pain <1-5> / Shame <1-5> / Urgency <1-5> / Workaround <1-5> / Share <1-5> / Visual <1-5> / WTP <1-5>
- Keep/kill/rewrite:
- Notes:

<!-- Draft 8-12 candidates before final selection. -->

## Kill List

### K1 - <candidate title>
- Source draft:
- Kill tag: just-dashboard | weak-buyer | article-only | saas-clone | no-3-sec-sting | theme-wash | stitch-bland-risk | low-urgency | no-output-artifact
- Reason:
- Salvage path, if any:

## Novelty / Duplicate Check

- Checked recent batches:
- Rejected near-duplicates:
- Kept only because:
- Shape diversity check:
  - Dashboard/board/scanner/planner count:
  - Non-dashboard mechanic count:
  - Consumer desire/anxiety count:
  - B2B/ops count:
  - Shareable/actionable artifact count:

## Final 4

### p001 - <type>

### Title

### One-liner

### Theme

### Mechanic

### Trigger Moment

### Target User

### Buyer / Share Audience

### 3-Second Sting

### Key UX

### Output Artifact

### Required UI Sections
- 

### Scores
- Pain:
- Shame:
- Urgency:
- Workaround:
- Share:
- Visual:
- WTP:

### Inspired By Signals

### Why This Survived

### Design Profile

### Stitch Prompt

Create a responsive web app called "<Title>" for <target user>. The app should use a <mechanic> mechanic around the trigger moment "<trigger>" and make the first screen communicate "<3-second sting>". Build the core workflow around <key input/data> and produce <output artifact>. Required sections: <sections>. Emotional pressure to make visible: <theme/loss/shame/urgency>. Design direction: use the `<design-profile>` profile with <tailored visual direction>. Avoid generic dashboard framing; make the main interaction feel like <mechanic-specific experience>.

<!-- Repeat p002-p004. -->

## Expected Stitch Drop Folder

`/home/sy/Downloads/stitch_drop/YYYY-MM-DD/`

Expected files:
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p001/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p002/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p003/code.html` + `screen.png`
- `/home/sy/Downloads/stitch_drop/YYYY-MM-DD/p004/code.html` + `screen.png`
```

## Scoring Guide

- `Pain`: actual money, time, opportunity, health, or relationship loss.
- `Shame`: embarrassment if exposed to spouse, boss, client, peers, parents,
  community, or future self.
- `Urgency`: pressure to act today, this week, before a deadline, before a bill,
  before a comparison, or before a public event.
- `Workaround`: evidence that people already use spreadsheets, screenshots,
  chat threads, notes, manual checking, or strangers' advice.
- `Share`: whether the result is worth showing, sending, posting, or using to
  persuade someone.
- `Visual`: whether the first screen can be understood in 3 seconds.
- `WTP`: whether the payer, buyer, or economic owner is obvious.

Candidates with no score above 4 should usually be killed or rewritten.

## Batch Gates

- Final batch has exactly `p001` through `p004`.
- Final batch includes at least 3 distinct human-driver themes.
- Final batch includes at least 3 distinct mechanics.
- At least one final idea is not a dashboard, board, scanner, planner, or console.
- At least one final idea is a consumer desire/anxiety tool.
- At least one final idea is commercially practical.
- Every final idea has a concrete output artifact.
- Every final Stitch prompt includes mechanic, trigger moment, emotional pressure,
  output artifact, and first-screen promise.
