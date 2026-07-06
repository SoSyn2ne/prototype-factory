# PRD - Ghost Job Time Loss Radar

## Problem
- A job-seeker evidence scanner that scores postings for ghost-job risk and turns wasted applications into a smarter apply-or-skip decision.
- Source evidence: S8 - Reddit r/jobhunting complaint thread about job hunting in 2026: Job seekers list fake jobs, fake recruiters, AI hysteria, and platform frustration as the dominant pain points. S9 - Reddit r/jobsearchhacks post compiling ghost-job data: The post cites platform and survey claims that a meaningful share of listings may be ghost jobs and that candidates can be interviewed for roles not planned to fill.

## Target user
- Active job seekers who are tired of tailoring applications for stale, fake, reposted, or pre-filled roles.

## Key UX
- Paste a job URL or description; the app asks for posting age, repost history, recruiter signals, company activity, and interview friction, then gives an apply/skip/low-effort recommendation.

## Required UI sections
- Job URL intake
- Ghost-risk score
- Repost and age checklist
- Recruiter signal log
- Application time budget
- Apply/skip recommendation
- Personal evidence notebook

## Assigned design profile
- calm-consumer
- Design direction: steady consumer guidance, soft warning states, readable checklists, and confidence-building copy.

## Theme
- 자산 방어 / 역전

## Source signal references
- S8: Reddit r/jobhunting complaint thread about job hunting in 2026 — https://www.reddit.com/r/jobhunting/comments/1sgqmko/what_do_you_dislike_the_most_about_job_hunting_in/
- S9: Reddit r/jobsearchhacks post compiling ghost-job data — https://www.reddit.com/r/jobsearchhacks/comments/1rj2cz8/here_is_what_the_data_actually_says_about_ghost/

## Stitch prompt
Create a responsive web app called "Ghost Job Time Loss Radar" for Active job seekers who are tired of tailoring applications for stale, fake, reposted, or pre-filled roles.. The app is based on observed user pull from S8: Job seekers list fake jobs, fake recruiters, AI hysteria, and platform frustration as the dominant pain points. S9: The post cites platform and survey claims that a meaningful share of listings may be ghost jobs and that candidates can be interviewed for roles not planned to fill. The app should use a Risk Radar around the trigger moment "Paste a job URL or description; the app asks for posting age, repost history, recruiter signals, company activity, and interview friction, then gives an apply/skip/low-effort recommendation." and make the first screen communicate "A job-seeker evidence scanner that scores postings for ghost-job risk and turns wasted applications into a smarter apply-or-skip decision.". Build the core workflow around user-entered evidence and produce apply-or-skip evidence card. Required sections: Job URL intake; Ghost-risk score; Repost and age checklist; Recruiter signal log; Application time budget; Apply/skip recommendation; Personal evidence notebook. Emotional pressure to make visible: 자산 방어 / 역전. Design direction: use the calm-consumer profile with steady consumer guidance, soft warning states, readable checklists, and confidence-building copy. Avoid generic dashboard framing; make the main interaction feel like Risk Radar.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
