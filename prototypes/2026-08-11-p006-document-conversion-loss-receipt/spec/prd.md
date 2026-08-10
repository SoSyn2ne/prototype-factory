# PRD — Document Conversion Loss Receipt

## Problem / target
AI-ready document conversion hides lost tables, images, reading order, and meaning. Target: RAG/agent builders, legal ops, researchers, and conversion vendors.

## Core UX
Drop file → synchronized source/Markdown viewer → loss overlays → severity triage → approve/fix → receipt. Sections: queue, paired viewer, order rail, heatmap, triage, receipt.

## Design / theme / evidence
- Profile: `operator-dense`; theme: 자산 방어/지식 무결성.
- Sources: S12 https://github.com/firecrawl/anydoc and https://github.com/magicrew/doc7; S8 https://news.ycombinator.com/item?id=48996526.
- QA: paired regions stay synchronized; unresolved loss cannot be approved silently; receipt lists coverage and gaps.

## Stitch prompt
Design a desktop-first web app named “Document Conversion Loss Receipt.” Build a file queue and a synchronized split viewer: original PDF/PPT page on the left, generated Markdown on the right. Overlay numbered reading-order paths, missing-table and missing-image heatmaps, and severity chips for lost, reordered, flattened, or uncertain content. Include a triage queue, per-region approve/fix controls, coverage metrics, and a signed conversion receipt export. Use realistic contract, slide, and spreadsheet examples. Design direction: follow the operator-dense profile with compact grids, neutral ink surfaces, one cyan accent, precise dividers, sticky inspection tools, and no oversized marketing hero.
