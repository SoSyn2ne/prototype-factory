# PRD — Medical Bill Appeal Deadline Vault

## Problem
- Patients turn denied claims, provider delays, and appeal clocks into a clean evidence packet before collections start.
- Source signals: S7, S8 from daily/2026-06-19/ideas.md.

## Target user
- Privately insured patients, parents managing family bills, patient advocates, and billing office helpers dealing with denial letters and appeal windows.

## Key UX
- User uploads or enters denial details, appeal deadlines, provider contact attempts, and billing threats; the app builds a timeline, call script, document checklist, and appeal packet.

## Required UI sections
- Denial panic header with claim amount, appeal deadline, and collections risk
- Timeline vault for EOBs, provider submissions, calls, letters, and portal messages
- Responsibility splitter for insurer, provider, employer benefits, and patient tasks
- Appeal evidence checklist with medical necessity, coding, in-network proof, and timely filing
- Call script and escalation ladder for insurer, provider, HR, DOI, and hospital billing
- Collections hold request letter and financial-assistance reminder
- Packet export panel with missing-document warnings

## Assigned design profile
- calm-consumer

## Theme
- 건강 / 자산 방어 - denied care, debt anxiety, and deadline control.

## Stitch prompt

Build a production-grade web app prototype called "Medical Bill Appeal Deadline Vault" for patients fighting denied health-insurance claims before appeal windows and collections pressure close in. The first screen must be a working consumer evidence workspace with a denial panic header, timeline vault, responsibility splitter, appeal evidence checklist, call script and escalation ladder, collections hold request letter, and packet export panel. Use realistic sample data: $2,240 preventive visit denial, provider filed corrected claim late, appeal deadline in 17 days, in-network phone confirmation, three call notes, missing medical-necessity letter, and a hospital billing account on hold. Design direction: use the calm-consumer profile with reassuring but serious surfaces, readable deadline hierarchy, soft trust colors, and obvious next-step buttons for stressed patients. Do not make a marketing landing page; the first screen must be the working app.

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
