# QA checklist

## Happy path
- The prototype title, one-liner, theme, and design profile align across meta.json and spec files.
- The UI can prominently represent these sections: cash-burn emergency summary, bill triage priority queue, cut-delay-negotiate simulator, bridge-cash option matrix, 14-day stabilization board, don’t-make-it-worse warning drawer.
- The Stitch prompt is copy-paste ready and consistent with the assigned design profile.

## Edge cases
- Dense information still stays readable on a laptop-width desktop layout.
- Empty-state or low-data views do not break the main story of the product.
- The visual direction remains coherent even if future implementation simplifies one section.

## Acceptance verification
- p003 exists for 2026-04-21.
- No placeholder bullets remain in spec/*.md for this prototype.
- Theme 자산 방어 and design profile operator-dense are present in meta.json and PRD notes.
