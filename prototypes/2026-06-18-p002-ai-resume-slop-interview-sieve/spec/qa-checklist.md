# QA checklist

## Phase A completeness
- Title is present: AI Resume Slop Interview Sieve
- One-liner is present: Hiring teams convert AI-polished applicant floods into skill-proof batches, work samples, and fair interview lanes.
- Target user is present: Startup founders, HR managers, technical recruiters, and hiring managers overwhelmed by AI-tailored resumes and low-signal applications.
- Key UX is present: Recruiter imports a candidate batch, sees slop similarity clusters, chooses evidence-based screening lanes, and generates a small paid-work-trial or skills-check plan without relying on AI-detector accusations.
- Assigned design profile is exactly one profile: operator-dense
- Theme is present: 역전 / 자산 방어 - hiring signal recovery, team time protection, and avoiding polished-but-fake candidates.
- Source signal references are present:
- S3: AI-generated resumes slow hiring teams (https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring)
- S4: Recruiting communities complain every tech resume looks AI-generated (https://www.reddit.com/r/recruitinghell/comments/1qhjlsx/hiring_in_tech_has_become_impossible_every_resume/)
- Copy/paste-ready Stitch prompt is present.

## Stitch prompt acceptance
- First screen is the working app, not a landing page.
- Required UI sections appear in the prompt.
- Sample data is realistic and tied to the source signals.
- Design direction sentence is tailored to operator-dense.
- Prompt does not ask Stitch to call external APIs.

## Review gate before Phase B
- Slot p002 exists under prototypes/2026-06-18-p002-ai-resume-slop-interview-sieve.
- No placeholder bullets remain in spec files.
- The 08:30 job should export to /home/sy/Downloads/stitch_drop/2026-06-18/p002/code.html and /home/sy/Downloads/stitch_drop/2026-06-18/p002/screen.png.

## Prompt
Build a production-grade web app prototype called "AI Resume Slop Interview Sieve" for hiring teams drowning in AI-polished applications. The first screen must be a working recruiting operations console with an applicant flood header, similarity cluster map, skill-proof lane builder, fairness guardrail panel, batch interview calendar, candidate evidence cards, and hiring-manager briefing packet. Use realistic sample data: 412 applicants for a junior full-stack role, repeated AI phrasing, GitHub/project claims, ATS scores, five work-sample lanes, and a manager who needs six interviews by Friday. Design direction: use the operator-dense profile with compact B2B tables, crisp cluster badges, charcoal/fog surfaces, tabular numbers, and one sharp action accent for moving candidates into proof lanes. Do not make a marketing landing page; the first screen must be the working app.
