# PRD — Hagwon Parent Complaint Firewall

## Problem
- Korean academy operators triage parent complaints, refund threats, and teacher burnout into consistent response lanes.
- Source signals: S15, S16 from daily/2026-06-19/ideas.md.

## Target user
- Small hagwon owners, academic managers, head teachers, and foreign teacher coordinators handling parent expectations and retention risk.

## Key UX
- Manager logs complaint, student history, teacher notes, contract terms, and refund risk; the app recommends a response lane, parent meeting script, teacher support action, and retention follow-up.

## Required UI sections
- Complaint heat header with tuition value, parent tone, refund risk, and teacher stress
- Student context timeline for grades, attendance, homework, behavior, and prior promises
- Response lane selector for explain, apologize, escalate, refund, transfer class, or hold boundary
- Teacher protection notes with workload, fairness, and contract-sensitive language
- Parent meeting script composer in calm Korean/English sections
- Retention risk board for siblings, referrals, and churn probability
- Aftercare checklist for follow-up message, class observation, and owner review

## Assigned design profile
- operator-dense

## Theme
- 사교육 / 자산 방어 / 외로움 - parent pressure, tuition retention, teacher burnout, and status anxiety.

## Stitch prompt

Build a production-grade web app prototype called "Hagwon Parent Complaint Firewall" for Korean academy operators handling parent complaints, refund threats, teacher burnout, and retention risk. The first screen must be a working academy operations console with a complaint heat header, student context timeline, response lane selector, teacher protection notes, parent meeting script composer, retention risk board, and aftercare checklist. Use realistic sample data: elementary English hagwon, one parent threatening refund after test score drop, teacher note about incomplete homework, sibling enrollment risk, Kakao message tone, contract clause, and owner follow-up deadline. Design direction: use the operator-dense profile with compact academy-management tables, bilingual Korean/English response blocks, restrained urgency colors, and one clear action accent for the recommended parent response lane. Do not make a marketing landing page; the first screen must be the working app.

## Constraints
- Time: Phase A spec only; Stitch generation/export happens in the separate 08:30 job.
- Budget: No custom demo implementation in Phase A.
- Platform: Stitch Web project, not App.

## Non-goals
- Do not implement a custom local demo during Phase A.
- Do not call external LLM APIs.
- Do not treat external source signals as market-size proof.

## Success metrics
- Stitch output clearly exposes the working app on the first screen.
- All required UI sections are visible or reachable without a marketing landing page.
- The assigned design profile is visibly reflected in layout, density, controls, and visual tone.
