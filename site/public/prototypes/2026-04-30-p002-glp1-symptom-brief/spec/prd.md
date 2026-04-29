# PRD — GLP-1 Symptom Brief

## Type
- Practical / Commercial

## Theme
- 건강

## Design profile
- calm-consumer

## Problem
- A doctor-prep tracker for GLP-1 users who want to separate normal side effects from weird patterns worth discussing before they quit or panic.

## Target user
- People using or considering semaglutide/tirzepatide, caregivers, and clinic coaches preparing a short appointment summary.

## Key UX
- Log weekly dose, meals, side effects, cycle/temperature notes, and discontinuation worries; the app summarizes patterns, flags doctor questions, and exports a neutral visit brief.

## Required UI sections
- dose and week timeline
- symptom cluster cards
- meal/hydration context strip
- temperature/cycle note panel
- doctor question builder
- appointment brief export

## External signal references
- Signal 5 — News-Medical/Penn study on 400k+ Reddit GLP-1 posts: https://www.news-medical.net/news/20260410/AI-analyzes-Reddit-posts-to-find-underreported-GLP-1-side-effects.aspx
- Signal 6 — MedicalNewsToday GLP-1 side effects and discontinuation context: https://www.medicalnewstoday.com/articles/ai-study-reddit-posts-reveals-possible-new-side-effects-weight-loss-drugs

## Stitch prompt
Design a desktop/mobile-friendly health preparation tool called GLP-1 Symptom Brief for people using or considering semaglutide or tirzepatide, caregivers, and clinic coaches preparing short appointment summaries. It should let users log weekly dose, meals, side effects, cycle or temperature notes, and discontinuation worries, then summarize patterns, flag doctor questions, and export a neutral visit brief. Include a dose and week timeline, symptom cluster cards, meal/hydration context strip, temperature/cycle note panel, doctor question builder, and appointment brief export. Design direction: use a calm-consumer aesthetic with clinical-but-warm spacing, low-alarm color coding, accessible mobile cards, careful medical disclaimers, and reassuring progress language so the product feels useful without diagnosing.

## Constraints
- Phase A only: scaffold/spec, no custom implementation yet.
- Wait for Stitch export in /home/sy/Downloads/stitch_drop/2026-04-30/p002/

## Non-goals
- Do not claim market-size validation from search snippets.
- Do not implement production integrations in Phase A.

## Success metrics
- Stitch export can be generated from the prompt.
- p002 has complete meta/spec content and is visible in the daily index.
