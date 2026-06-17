# PRD - AI Resume Slop Interview Sieve

## Problem
Hiring teams convert AI-polished applicant floods into skill-proof batches, work samples, and fair interview lanes.

## Target user
Startup founders, HR managers, technical recruiters, and hiring managers overwhelmed by AI-tailored resumes and low-signal applications.

## Key UX
Recruiter imports a candidate batch, sees slop similarity clusters, chooses evidence-based screening lanes, and generates a small paid-work-trial or skills-check plan without relying on AI-detector accusations.

## Required UI sections
- Applicant flood header with volume, duplicate phrasing, and role urgency
- Similarity cluster map for resume language, project claims, and keyword stuffing
- Skill-proof lane builder for portfolio review, short task, phone screen, and reference check
- Fairness guardrail panel that avoids unverifiable AI-use accusations
- Batch interview calendar with balanced ATS and non-ATS picks
- Candidate evidence cards linking claims to work samples
- Hiring-manager briefing packet with questions and score rubric

## Design profile
operator-dense

## Theme
역전 / 자산 방어 - hiring signal recovery, team time protection, and avoiding polished-but-fake candidates.

## Source signal references
- S3: AI-generated resumes slow hiring teams (https://press.roberthalf.com/2026-03-10-Robert-Half-survey-67-of-HR-leaders-report-AI-generated-applications-are-slowing-hiring)
- S4: Recruiting communities complain every tech resume looks AI-generated (https://www.reddit.com/r/recruitinghell/comments/1qhjlsx/hiring_in_tech_has_become_impossible_every_resume/)

## Stitch prompt
Build a production-grade web app prototype called "AI Resume Slop Interview Sieve" for hiring teams drowning in AI-polished applications. The first screen must be a working recruiting operations console with an applicant flood header, similarity cluster map, skill-proof lane builder, fairness guardrail panel, batch interview calendar, candidate evidence cards, and hiring-manager briefing packet. Use realistic sample data: 412 applicants for a junior full-stack role, repeated AI phrasing, GitHub/project claims, ATS scores, five work-sample lanes, and a manager who needs six interviews by Friday. Design direction: use the operator-dense profile with compact B2B tables, crisp cluster badges, charcoal/fog surfaces, tabular numbers, and one sharp action accent for moving candidates into proof lanes. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Do not build a marketing landing page for Phase A.
- Do not implement a custom demo during Phase A.
- Do not claim external sources prove market size; they are problem evidence only.

## Success metrics
- User can understand the problem, target user, key workflow, and visual direction from the spec.
- Stitch can paste the prompt directly and generate a working first-screen app prototype.
- The prototype slot has no placeholder requirement fields.
