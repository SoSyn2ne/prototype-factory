# PRD — Interview Repo Airlock

## Problem
Open take-home coding repos inside a disposable risk rehearsal before any local command runs.

## Target user
Job candidates, recruiting teams, freelance developers

## Key UX
Paste a repo URL, inspect autorun/build hooks and dependency risk, rehearse in a disposable sandbox, then issue a safe-open card.

## Required UI sections
- repo intake
- autorun and editor-hook scan
- dependency risk queue
- sandbox rehearsal log
- safe-open decision
- recruiter clarification script

## Design profile
- operator-dense

## Theme
- career opportunity versus device security

## Source signal references
- S2: HN: malicious Rust crate arrayref-proc-macro1 executed a build-time payload; commenters note Node-style supply-chain attacks spreading ecosystems. (https://news.ycombinator.com/item?id=49374269)
- S3: HN: a coding job-interview repository can compromise a system through editor auto-loading or project execution. (https://news.ycombinator.com/item?id=49376332)

## Reference pattern / twist
- Pattern: security preflight scanner
- Twist: Applies supply-chain scanning at the emotionally pressured interview moment before clone/open/run.
- Small-group fit: Candidates routinely trust take-home repos because refusing feels costly; a five-minute airlock lowers that pressure.
- Spread trigger: Safe-open card can be sent to recruiter and reused by candidate communities.

## Stitch prompt

```text
Build a production-grade app prototype called "Interview Repo Airlock" for job candidates and freelance developers receiving unfamiliar coding-test repositories. First screen: repo URL intake beside a risk verdict covering editor auto-load, postinstall/build hooks, unsigned binaries, and suspicious dependencies. Core interaction: scan, rehearse commands in a disposable sandbox, compare file/network events, and issue a safe-open card or recruiter clarification request. Required sections: repo intake, hook scan, dependency queue, sandbox event log, verdict, recruiter message export. Use realistic malicious-build and VS Code auto-load examples. Design direction: use the operator-dense profile with compact terminal-like evidence rows, graphite surfaces, one amber action accent, square 8px controls, explicit pass/warn/block states, and no generic KPI dashboard.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: operator-dense.
- Desktop and mobile remain usable.
