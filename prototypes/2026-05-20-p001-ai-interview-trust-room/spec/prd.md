# PRD — AI Interview Trust Room

## One-liner
A hiring-room console that separates acceptable AI fluency from fake-candidate risk before an offer goes out.

## Type
Practical / Commercial

## Problem
Users are dealing with a time-sensitive, high-stakes workflow where evidence, documents, or trust signals are scattered across systems and the penalty for delay is financial loss, missed opportunity, or public embarrassment.

## Target user
Technical hiring managers, recruiting leads, and interview panels hiring remote or hybrid data/software candidates.

## Key UX
Upload or paste interview notes, candidate disclosures, work-sample links, panel observations, and policy rules. The room produces a three-lane decision board: acceptable AI use, unresolved identity/integrity risk, and follow-up proof needed before offer.

## Required UI sections
- Candidate and role header
- Interview artifact intake
- AI-use policy selector
- Risk timeline and evidence board
- Follow-up script builder
- Offer hold / proceed decision strip
- Audit notes export

## Design profile
- field-ops

## Theme
- 자산 방어

## External signal references
- Signal 4: HR Dive candidate trust damage around opaque AI interviews - https://www.hrdive.com/news/job-seekers-walk-away-from-AI-interviews/819443/
- Signal 5: Reddit hiring-manager complaint about fake candidates and cheating - https://www.reddit.com/r/datascience/comments/1t1vvh6/hiring_manager_fake_candidates_and_cheating/

## Stitch prompt
Build a web app prototype called "AI Interview Trust Room" for technical hiring managers who need to distinguish acceptable AI fluency from fake-candidate risk. The interface should include a candidate/role header, artifact intake panel for interview notes and work-sample links, AI-use policy selector, risk timeline, evidence board, follow-up script builder, offer hold/proceed decision strip, and audit notes export. Use realistic sample data for a remote senior data scientist interview with possible AI assistance, proxy risk, and incomplete disclosure. Design direction: apply the `field-ops` profile with a practical command-room feel, crisp status colors, durable forms, and high-contrast operational panels built for stressful hiring decisions.

## Constraints
- Phase A only: spec and scaffold, no custom implementation.
- Demo must later preserve the original Stitch export environment.

## Success metrics
- User can understand the core workflow from first screen.
- Prototype presents a concrete, copyable artifact or decision output.
- Prompt includes design direction aligned with the assigned profile.
