# PRD - AI Interview Human Exit Card

## Problem
- A candidate control panel for deciding when to continue, request human review, or walk away from opaque AI interview funnels.
- Source evidence: S7 - The Guardian on UK job hunters frustrated by AI interviews: Nearly half of surveyed job seekers had experienced AI interviews and many described them as awkward, humiliating, or dehumanizing. S8 - Reddit r/jobhunting complaint thread about job hunting in 2026: Job seekers list fake jobs, fake recruiters, AI hysteria, and platform frustration as the dominant pain points.

## Target user
- Candidates facing timed video questions, AI-monitored interviews, and unclear hiring processes.

## Key UX
- Log the interview flow, disclosure quality, accommodation needs, and red flags; the app produces a decision card, human-review request, and personal prep script.

## Required UI sections
- Interview funnel timeline
- AI disclosure checker
- Accommodation and fairness notes
- Walk-away threshold slider
- Human-review email draft
- Timed-answer rehearsal cards
- Decision receipt

## Assigned design profile
- premium-editorial
- Design direction: editorial seriousness, composed typography, restrained contrast, and a polished career-document feel.

## Theme
- 외모 / 역전

## Source signal references
- S7: The Guardian on UK job hunters frustrated by AI interviews — https://www.theguardian.com/technology/2026/may/01/uk-job-hunters-frustration-ai-interviews
- S8: Reddit r/jobhunting complaint thread about job hunting in 2026 — https://www.reddit.com/r/jobhunting/comments/1sgqmko/what_do_you_dislike_the_most_about_job_hunting_in/

## Stitch prompt
Create a responsive web app called "AI Interview Human Exit Card" for Candidates facing timed video questions, AI-monitored interviews, and unclear hiring processes.. The app is based on observed user pull from S7: Nearly half of surveyed job seekers had experienced AI interviews and many described them as awkward, humiliating, or dehumanizing. S8: Job seekers list fake jobs, fake recruiters, AI hysteria, and platform frustration as the dominant pain points. The app should use a Negotiation Room around the trigger moment "Log the interview flow, disclosure quality, accommodation needs, and red flags; the app produces a decision card, human-review request, and personal prep script." and make the first screen communicate "A candidate control panel for deciding when to continue, request human review, or walk away from opaque AI interview funnels.". Build the core workflow around user-entered evidence and produce human-review request and continue/walk-away card. Required sections: Interview funnel timeline; AI disclosure checker; Accommodation and fairness notes; Walk-away threshold slider; Human-review email draft; Timed-answer rehearsal cards; Decision receipt. Emotional pressure to make visible: 외모 / 역전. Design direction: use the premium-editorial profile with editorial seriousness, composed typography, restrained contrast, and a polished career-document feel. Avoid generic dashboard framing; make the main interaction feel like Negotiation Room.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
