# PRD — Meeting Replay Link Exposure Drill

## Problem / target
Meeting SaaS users do not know which replay links are public or how to revoke them. Target: startup ops, recruiting, sales, and agencies.

## Core UX
Paste links → exposure class → blast radius → ordered revoke queue → redacted receipt. First screen: URL intake beside risk strip. Sections: intake, link table, blast map, action queue, receipt.

## Design / theme / evidence
- Profile: `operator-dense`; theme: 자산 방어.
- Sources: S1 https://news.ycombinator.com/item?id=49242739; S4 https://news.hada.io/topic?id=32332.
- QA: risk visible in 3 seconds; resolved state proves status change; simulated checks clearly labeled; mobile table remains usable.

## Stitch prompt
Design a responsive web app named “Meeting Replay Link Exposure Drill.” Build a dense first screen where a startup operator pastes up to five meeting replay URLs and immediately sees Public, Domain-only, Expired, or Private status. Include an exposure traffic-light strip, a participant/topic blast-radius map, a draggable revoke-order queue with owners, a before/after permission comparison, and a redacted incident receipt export. Use realistic sample links and show empty, scanning, risky, and resolved states. Do not imply live access; label checks as simulated. Design direction: follow the operator-dense profile with compact tables, crisp status chips, restrained navy/amber/red, square-ish cards, and high information density without a decorative hero.
