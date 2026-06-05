# PRD - Cluster Tree Explorer

## Problem
The cluster board is useful for broad visual exploration, but operators also need a dense, deterministic way to find prototype batches by date, theme, market, and production state.

## Target User
Prototype Factory operators reviewing daily batches, Stitch outputs, domestic/overseas balance, and publication status.

## Core Workflow
1. Open a compact tree of dates and clusters.
2. Search for a prototype, theme, or production status.
3. Select a tree node to inspect related prototypes.
4. Open the matching demo or spec for follow-up review.

## Success Criteria
- The concept makes cluster navigation feel faster than scanning only the force map.
- The UI clearly suggests date/theme/status grouping.
- The Stitch export contains usable `code.html`, `screen.png`, and `DESIGN.md`.

## Source
- Hada topic 30191: Trees file-tree rendering library.
- Operator request: evaluate a tree-style cluster board and test updated Stitch automation.
