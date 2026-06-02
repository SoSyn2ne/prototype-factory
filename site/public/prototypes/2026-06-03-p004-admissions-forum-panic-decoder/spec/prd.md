# PRD - Admissions Forum Panic Decoder

## Problem
- A playful advice detox booth that turns terrifying college forum threads into calm next actions and noise labels.
- Source signals: S10, S11, S12 from daily/2026-06-03/ideas.md.

## Target user
- College applicants, anxious parents, school counselors, and tutors overwhelmed by admissions forums, chance-me threads, rankings panic, and conflicting advice.

## Key UX
- Paste a forum post or advice snippet, label panic triggers, separate evidence from rumor, convert valid concerns into next actions, and print a tiny calm-card for the week.

## Required UI sections
- Thread paste booth
- Panic trigger highlighter
- Rumor vs action sorter
- Decision deadline lane
- Parent emotion tone meter
- Next-action calm card
- Advice source credibility chips
- Shareable panic detox poster

## Design profile
- playful-experimental

## Theme
- 사교육

## Constraints
- Time: Phase A spec only; Stitch generation happens in the separate 08:30 job.
- Budget: no custom demo implementation in Phase A.
- Platform: Stitch web prototype prompt, responsive UI.

## Non-goals
- Do not implement a custom demo during Phase A.
- Do not claim market size from the external signals.

## Success metrics
- Stitch prompt can be pasted directly and produce a full first-screen prototype.
- Prototype preserves the named design profile and required sections.
- User can identify the core action in under 10 seconds.

## Stitch prompt
Create a responsive web app prototype called "Admissions Forum Panic Decoder" for college applicants and parents overwhelmed by admissions forum advice. The app should let a user paste a forum post or advice snippet, highlight panic triggers, separate rumor from action, map real deadlines, tune parent emotional tone, and generate a small calm-card for the week. Required sections: thread paste booth, panic trigger highlighter, rumor vs action sorter, decision deadline lane, parent emotion tone meter, next-action calm card, advice source credibility chips, and shareable panic detox poster. Keep it playful and supportive, not medical or counseling software. Design direction: use the `playful-experimental` profile with forum-thread textures, bright panic-to-calm transitions, sticker-like credibility labels, and screenshot-ready cards that make anxious advice feel sortable and a little funny.
