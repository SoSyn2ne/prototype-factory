# QA checklist

## Happy path
- Load `demo/index.html` and confirm seeded prompt appears automatically in textarea.
- Click `Analyze` with seeded prompt and verify findings appear from all three categories.
- Confirm risk score renders between 0 and 100 and updates after re-analysis.
- Click a finding with a text match and verify cursor selection jumps to the matching phrase.
- Confirm top 2 rewrite snippets render and correspond to highest-severity findings.

## Edge cases
- Empty textarea: analyze should return no findings with a clear low-risk state.
- Extremely short prompt (1 line): app should not throw errors and should still show missing constraints.
- Prompt with no risky terms: risk score should stay low and findings panel should state clean result.
- Prompt containing repeated risky words: all matches should be listed without UI breakage.
- Click the same finding twice: highlight overlay should toggle off on second click.

## Acceptance verification
- No external network dependencies are required (inspect source: local CSS/JS only).
- Unsafe actions are flagged for tokens such as `delete`, `rm -rf`, `send to everyone`, `post publicly`.
- Ambiguous terms are flagged for language such as `quickly`, `as needed`, `etc`.
- Missing constraints are flagged when prompt lacks no-secrets, no-external-messages, or verify intent.
- Findings list is actionable: each finding includes a reason and top issues include rewrite guidance.
