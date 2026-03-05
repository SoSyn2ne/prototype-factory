# Prompt Contract Linter

Prompt Contract Linter is a local-first QA tool for system prompts and SOPs. It scans instructions for ambiguity, missing safety constraints, and explicit unsafe actions before the prompt is used in production.

## Status
- Prototype complete for concept validation
- Spec-first documentation included in `spec/`
- Standalone demo included in `demo/` (no network calls)

## Why this exists
Teams often treat prompts like informal notes. That causes vague behavior, policy drift, and high-risk operations slipping into automation. This prototype enforces a basic "contract" by flagging weak instruction language and missing guardrails.

## How to use
1. Open `demo/index.html` in a browser.
2. Paste a system prompt or SOP into the textarea.
3. Click `Analyze`.
4. Review risk score, findings, and rewrite suggestions.
5. Click a finding to jump/select the matching text and toggle the highlight overlay.

## Spec docs
- `spec/prd.md`: product definition, workflow, and success metrics
- `spec/assumptions.md`: knowns, assumptions, and unknowns
- `spec/falsification.md`: questions that could invalidate the concept
- `spec/qa-checklist.md`: test checklist for behavior verification

## Demo scope
- Local heuristic linter only (no AI or external APIs)
- Three rule families:
  - Ambiguous instructions
  - Missing constraints
  - Unsafe actions
- Outputs:
  - Risk score (0-100)
  - Clickable findings list
  - Rewrite snippets for top two findings

## Build notes
- Implemented with vanilla HTML/CSS/JS under `demo/`.
- No CDNs, external fonts, or network requests.
<!-- Build summary: Replaced all placeholder docs with concrete Prompt Contract Linter specs and shipped an interactive local linter demo with clickable findings, risk scoring, and rewrite suggestions. -->
