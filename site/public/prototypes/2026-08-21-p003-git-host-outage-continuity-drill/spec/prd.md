# PRD — Git Host Outage Continuity Drill

## Problem
Turn a hosted Git outage into a tested local-first recovery card for small engineering teams.

## Target user
Small product teams dependent on one hosted Git provider

## Key UX
Select critical repos, simulate host loss, verify peer/removable mirrors and CI secrets, then print a timed continuity runbook.

## Required UI sections
- outage scenario selector
- critical repo roster
- clone/fetch freshness test
- peer and removable mirror map
- CI/deploy dependency check
- timed runbook receipt

## Design profile
- operator-dense

## Theme
- infrastructure concentration / delivery continuity

## Source signal references
- S4: GitHub described its August 17 outage; HN comments show frustration with hosted-code concentration and recovery dependence. (https://news.ycombinator.com/item?id=49378957)
- S5: Cursor published Git at any scale, reinforcing demand for reliable repo workflows beyond one hosted UI. (https://cursor.com/blog/git-at-any-scale)

## Reference pattern / twist
- Pattern: business continuity drill
- Twist: Makes Git recovery a timed playable rehearsal instead of a passive backup checklist.
- Small-group fit: Small teams know local clones exist but rarely test whether they can ship without hosted UI or CI.
- Spread trigger: Pass/fail drill receipt gives founders and clients concrete resilience proof.

## Stitch prompt

```text
Create a working web app called "Git Host Outage Continuity Drill" for small engineering teams. First screen: choose a 30-minute outage scenario and see critical repositories with last verified independent copy. Core interaction: simulate host loss, test local clone freshness, map peer/removable mirrors, check CI and deploy dependencies, and finish a timed continuity runbook receipt. Required sections: scenario selector, repo roster, freshness test, mirror topology, CI/deploy dependency check, drill timer, receipt export. Design direction: use the operator-dense profile with dense incident rows, neutral graphite panels, one red semantic outage color plus indigo action accent, 8px radius, visible stale/missing/passed states, and no marketing hero.
```

## QA / screenshot criteria
- First screen communicates the core job in 3 seconds.
- All required sections and meaningful empty/error/success states appear.
- Exactly one design profile is used: operator-dense.
- Desktop and mobile remain usable.
