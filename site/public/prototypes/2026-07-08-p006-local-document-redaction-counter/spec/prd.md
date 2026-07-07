# PRD - Local Document Redaction Counter

## Problem
- A privacy-first office desk for redacting PDFs and reading legacy XLS files locally before anything leaves the browser.
- Source evidence: S12 - Hacker News Show HN, 2026-07-08, Free PDF Document Redaction: New Show HN items include local/private document redaction and browser-based legacy XLS reading, pointing to demand for no-upload office utilities. S3 - Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context.

## Target user
- Small offices, legal assistants, school admins, clinic staff, and local agencies that handle sensitive PDFs or old spreadsheets but fear uploading them.

## Key UX
- Drag files into a no-upload workspace, mark sensitive fields, preview redactions, inspect legacy XLS sheets, and export a clean send-ready package checklist.

## Required UI sections
- No-upload trust banner
- PDF redaction canvas
- Legacy XLS sheet preview
- Sensitive field checklist
- Before/after compare
- Export package builder
- Send-risk receipt

## Assigned design profile
- operator-dense
- Design direction: compact office-utility styling, dense file queues, clear privacy states, and crisp before/after review controls.

## Theme
- 자산 방어

## Practical vs fun
- Practical / Commercial

## Source signal references
- S12: Hacker News Show HN, 2026-07-08, Free PDF Document Redaction — https://news.ycombinator.com/shownew
- S3: Hacker News Show HN, 2026-07-08, Scan your AI agents for dangerous capabilities — https://news.ycombinator.com/item?id=48804182

## Stitch prompt
Create a responsive web app called "Local Document Redaction Counter" for Small offices, legal assistants, school admins, clinic staff, and local agencies that handle sensitive PDFs or old spreadsheets but fear uploading them.. The app is based on observed user pull from S12: New Show HN items include local/private document redaction and browser-based legacy XLS reading, pointing to demand for no-upload office utilities. S3: Developers debate contextual access control for AI agents, arguing RBAC alone is too blunt when tool calls depend on live context. The app should use a Local Privacy Counter around the trigger moment "Drag files into a no-upload workspace, mark sensitive fields, preview redactions, inspect legacy XLS sheets, and export a clean send-ready package checklist." and make the first screen communicate "A privacy-first office desk for redacting PDFs and reading legacy XLS files locally before anything leaves the browser.". Build the core workflow around user-entered evidence and produce clean document export checklist. Required sections: No-upload trust banner; PDF redaction canvas; Legacy XLS sheet preview; Sensitive field checklist; Before/after compare; Export package builder; Send-risk receipt. Emotional pressure to make visible: 자산 방어. Design direction: use the operator-dense profile with compact office-utility styling, dense file queues, clear privacy states, and crisp before/after review controls. Avoid generic dashboard framing; make the main interaction feel like Local Privacy Counter.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
