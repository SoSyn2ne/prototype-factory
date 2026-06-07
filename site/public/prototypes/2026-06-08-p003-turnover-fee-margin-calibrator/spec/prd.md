# PRD - Turnover Fee Margin Calibrator

## Problem
- Short-term-rental hosts are squeezed between cleaner costs, guest fee resentment, checkout chore expectations, and platform fee visibility rules.

## Target user
- Airbnb/short-term-rental hosts, cohosts, and small property managers managing cleaner costs and guest trust.

## Key UX
- A margin-calibration cockpit that compares cleaner quotes, visible vs baked-in fee strategy, checkout task burden, guest complaint risk, and per-booking profit across stay lengths.

## Required UI sections
- Turnover cost model.
- Fee strategy switcher.
- Guest backlash meter.
- Calendar simulator by stay length.
- Checkout task policy editor.
- Cleaner/cohost quote comparison.
- Recommended listing-message snippet.

## Design profile
- operator-dense: compact tables, margin KPIs, disciplined B2B surfaces, one urgency accent for risky choices.

## Theme
- 자산 방어: protecting small-host margin without triggering fee resentment or platform disputes.

## Source signal references
- S6: Reddit r/airbnb_hosts cleaning fee pricing debate.
- S7: Reddit r/AirBnBHosts post-booking cleaning fee dispute.

## Stitch prompt
Build a B2B operator web app prototype called "Turnover Fee Margin Calibrator" for short-term-rental hosts deciding how to price cleaning and checkout tasks. The first screen should be a dense host console with a turnover cost model, fee strategy switcher, guest backlash meter, stay-length calendar simulator, checkout task policy editor, cleaner/cohost quote comparison, and a recommended listing-message snippet. Use realistic host data: studio vs 3-bedroom, cleaner quote, supplies, laundry, deep-clean reserve, one-night vs long-stay margin, and a post-booking fee dispute warning. Design direction: use the operator-dense profile with crisp compact tables, practical margin KPIs, charcoal/fog surfaces, and one sharp urgency accent for risky fee choices. Do not make a marketing landing page; the first screen must be the working app.

## Non-goals
- Property management suite.
- Guest messaging automation beyond suggested snippets.
- Platform policy enforcement.

## Success metrics
- Host can see per-stay margin for multiple fee strategies.
- Risky post-booking fee behavior is clearly warned against.
- Checkout task copy explains what the fee covers.
