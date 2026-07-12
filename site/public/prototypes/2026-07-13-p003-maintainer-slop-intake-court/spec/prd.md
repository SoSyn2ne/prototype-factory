# PRD - Maintainer Slop Intake Court

## Problem
- Open-source maintainers triage AI-looking issues and PRs before spending review time on low-understanding submissions.

## Target user
- Maintainers of popular open-source projects, foundation staff, and volunteer reviewer teams facing high-volume low-quality reports.

## Key UX
- Score incoming issues by reproducibility, author understanding, code-risk, maintainer time cost, and required evidence; then issue a polite verdict.

## Required UI sections
  - Submission intake queue
  - Repro evidence checklist
  - Author-understanding signals
  - Maintainer time estimate
  - Risk verdict board
  - Polite response templates
  - Weekly burden receipt

## Design profile
- operator-dense

## Theme
- Open-source maintainer triage / AI slop defense

## Source signal references
- S4 (Financial Times coverage surfaced in search, published 2026-07-12; https://www.ft.com/content/cec8df9e-b43b-4cd1-8feb-c07e804e8d33); S5 (GitHub Community discussion #185387; https://github.com/orgs/community/discussions/185387)

## Output artifact
- submission triage verdict and burden receipt

## Stitch prompt

```text
Create a responsive web app called "Maintainer Slop Intake Court" for open-source maintainers overwhelmed by low-quality AI-generated issues and PRs. Show a submission intake queue, reproducibility checklist, author-understanding signals, maintainer time estimate, code-risk verdict board, polite response templates, and weekly burden receipt. Design direction: use the operator-dense profile with compact queues, judicial evidence labels, sharp verdict states, and a no-nonsense maintainer workflow.
```

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim source signals prove market size. Treat them as problem evidence only.

## Success metrics
- First screen communicates the one-liner within 5 seconds.
- Main interaction produces the output artifact with no placeholder content.
- Visual direction clearly matches the assigned operator-dense profile.
