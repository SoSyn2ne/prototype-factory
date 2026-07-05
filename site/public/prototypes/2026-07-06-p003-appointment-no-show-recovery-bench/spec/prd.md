# PRD — Appointment No-Show Recovery Bench

## Problem
- A small-service operator console that turns missed appointments into deposits, waitlist offers, and polite recovery scripts.
- Source evidence: S7 - Reddit r/smallbusiness: reducing no-shows for service appointments: Service operators ask whether reminders, deposits, confirmations, cancellation policies, or fees actually reduce no-shows. S8 - Reddit r/smallbusiness: whether charging no-show deposits feels rude: Owners worry the policy that protects revenue may make them look rude or greedy.

## Target user
- Salon, clinic, repair, tutoring, coaching, and consultation businesses that lose revenue to no-shows.

## Key UX
- Choose a service type and no-show pattern; the bench recommends deposit size, confirmation timing, waitlist fill actions, and customer-safe wording.

## Required UI sections
- No-show queue
- Deposit policy simulator
- Tone-safe SMS scripts
- Waitlist fill lane
- Lost revenue counter
- Policy A/B notes

## Design profile
- operator-dense
- Design direction must be tailored inside the Stitch prompt and avoid generic dashboard styling.

## Theme
- 자산 방어 / 운영

## Source signal references
- S7: Reddit r/smallbusiness: reducing no-shows for service appointments — https://www.reddit.com/r/smallbusiness/comments/1tz6m53/how_do_you_reduce_noshows_for_service/
- S8: Reddit r/smallbusiness: whether charging no-show deposits feels rude — https://www.reddit.com/r/smallbusiness/comments/1rb2lh4/am_i_being_rude_for_wanting_to_charge_noshow/

## Stitch prompt
Create a responsive web prototype for "Appointment No-Show Recovery Bench". Target user: small appointment-based operators such as salons, clinics, tutors, repair services, and coaches. Core UX: the operator reviews recent missed appointments, selects service value and customer relationship risk, and receives a deposit policy, confirmation cadence, waitlist recovery action, and polite SMS scripts. Required sections: compact no-show queue, lost revenue counter, policy simulator, script variants, waitlist replacement lane, and weekly policy notes. Use the operator-dense design profile: disciplined B2B console styling, compact rows, tabular numbers, one sharp action accent, no decorative hero, and crisp queue/table hierarchy.

## Success metrics
- A Stitch operator can paste the prompt without rewriting it.
- The first screen shows the actual workflow, not a landing page.
- The output artifact is visible before the fold or immediately after the primary input.
