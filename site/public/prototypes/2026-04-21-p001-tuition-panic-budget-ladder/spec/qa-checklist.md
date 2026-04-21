# QA checklist

## Happy path
- The prototype title, one-liner, theme, and design profile align across meta.json and spec files.
- The UI can prominently represent these sections: education spend pressure summary, subject-by-subject ROI ladder, family cashflow strain panel, student overload signal tracker, next-month cut-or-keep simulator, parent decision memo drawer.
- The Stitch prompt is copy-paste ready and consistent with the assigned design profile.

## Edge cases
- Dense information still stays readable on a laptop-width desktop layout.
- Empty-state or low-data views do not break the main story of the product.
- The visual direction remains coherent even if future implementation simplifies one section.

## Acceptance verification
- p001 exists for 2026-04-21.
- No placeholder bullets remain in spec/*.md for this prototype.
- Theme 사교육 and design profile financial-analyst are present in meta.json and PRD notes.
