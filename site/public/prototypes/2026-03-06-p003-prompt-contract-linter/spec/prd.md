# PRD — Prompt Contract Linter

## Problem
Prompt authors regularly ship operational prompts that contain vague terms (for example, "quickly" or "as needed"), omit critical safety constraints, or explicitly allow dangerous behavior. Review usually happens ad hoc and late, causing avoidable incidents in internal automation workflows.

## Target user
- AI operations leads maintaining reusable system prompts
- Prompt engineers handing off SOPs to implementation teams
- Security/compliance reviewers who need a fast preflight check
- Product teams standardizing prompt quality before deployment

## Constraints
- Must run fully offline in a browser (no API calls)
- Must be understandable by non-ML specialists in under 2 minutes
- Must produce deterministic results for the same input text
- Must stay lightweight enough for prototype review sessions

## Non-goals
- Not a semantic correctness checker for task logic
- Not a replacement for legal/security policy review
- Not a model behavior simulator or benchmark harness
- Not an auto-fix tool that rewrites the full prompt end-to-end

## Success metrics
- 90%+ of intentionally seeded risky phrases in test prompts are flagged
- Median time from paste to actionable feedback is under 5 seconds
- Users can identify top 2 remediation actions without external guidance
- At least 70% of pilot reviewers report the tool improved prompt clarity

## Core workflow
1. User pastes a system prompt/SOP into the editor.
2. User runs `Analyze`.
3. Linter applies three heuristic rule families:
   - ambiguous instructions
   - missing constraints
   - unsafe actions
4. UI calculates a 0-100 risk score based on findings severity.
5. UI displays findings list and rewrite snippets for the top 2 issues.
6. User clicks findings to jump/select relevant text and iterates prompt edits.

## Risks/unknowns
- Heuristics may generate false positives for benign wording in domain-specific prompts.
- Missing-constraint detection can misclassify prompts that express safety using unusual phrasing.
- Users may over-trust risk score as a compliance guarantee.
- Different teams may require different risk weighting models.
- Unsafe pattern list may lag behind real operational misuse patterns.
