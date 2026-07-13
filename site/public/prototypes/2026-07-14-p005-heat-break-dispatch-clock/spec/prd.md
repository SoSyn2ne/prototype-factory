# PRD — Heat Break Dispatch Clock

## Problem
- Field supervisors convert heat alerts into crew breaks, route changes, and proof logs without slowing the day.

## Target user
- Construction, delivery, facilities, landscaping, and outdoor-service supervisors managing crews during heat warnings.

## Key UX
- Pull a heat alert, assign crew risk levels, schedule break/shade/water intervals, adjust routes, and create a proof log for compliance or client explanation.

## Required UI sections
- heat alert banner
- crew risk roster
- break scheduler
- route/task adjustment board
- hydration/shade checklist
- proof log export

## Design profile
- field-ops

## Theme
- heatwave operations, worker safety, dispatch proof

## Source signal references
- S11 South Korea grave heatwave warnings
- S12 worker heat protection trend

## Stitch prompt
Build a polished web prototype called "Heat Break Dispatch Clock" for field supervisors working through severe heat alerts. The first screen should convert a heat warning into crew risk levels, break windows, route adjustments, hydration and shade checks, and a proof log for compliance. Required sections: heat alert banner, crew roster, break scheduler, task adjustment board, safety checklist, and proof export. Design direction: use the field-ops profile with reliable operational visuals, legible pressure-state rows, large touch targets, and small but unmistakable heat-risk badges.

## Constraints
- Phase A only: do not implement a custom demo here.
- The 08:30 Stitch automation should export code.html and screen.png into the expected drop folder.

## Success metrics
- A reviewer can understand the first screen, target user, source evidence, and design profile without additional context.
- Stitch prompt is copy/paste-ready and contains the tailored profile direction.
