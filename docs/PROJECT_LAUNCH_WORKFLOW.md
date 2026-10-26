# Project selection to validation and launch

## Objective
Turn the prototype detail page into a decision workspace: select a project, inspect recorded market signals and technical artifacts, define a small validation experiment, and export a project-specific validation, build, or deployment prompt.

The user needs both market/validation analysis and implementation/deployment readiness. Existing gallery search, filters, pagination, demo routes and copied source documents remain accessible.

## Source-first registration to execution

`Observed task and workaround -> bounded proposal -> meta + commercial + spec -> index registration -> detail analysis -> edited validate/build/hold decision -> validation/build/delivery prompt`

1. Read the original problem reports before naming a solution. Record the author's actual action and workaround, exact source URL, source type and check date. Keep publication date separate; a page checked today is not necessarily a newly published problem. A person's report is not an independently audited result.
2. Limit the proposed first deliverable to one operator, one task and explicit inputs/outputs. Record buyer, access, price, frequency and willingness to pay as unknown where not established. Compare existing tools and manual alternatives before proposing automation.
3. Create a new `prototypes/YYYY-MM-DD-pNNN-<slug>/` folder with `meta.json`, `README.md`, substantive specs and an appropriate `web/` or `app/` artifact. For a commercial proposal, add the existing version-1 `commercial.json`; no new schema or service is needed. A concept HTML page must disclose that actual processing is unimplemented.
4. Use matching `id`, `repoPath` and `createdAt`. Supported analysis metadata includes `targetUser`, `userProblem`, `buyerShareAudience`, `existingWorkaround`, `arrivalPath`, `firstValidationTest`, `planBrief` and `developmentStartPrompt`. Prefer explicit `sourceSignals` objects `{ref, url, note}` for a selected research batch; string references resolve only against same-date `daily/<date>/ideas.md`. Put source-check/publication qualifications in the note rather than assuming extra metadata fields appear in the analysis.
5. From the repository root, regenerate the gallery with `npm --prefix site run pf:index`. It scans metadata, writes `site/public/prototypes-index.json` and copies specs/demos; it does not implement a tool, validate demand or publish a deployment. Keep detailed evidence in the selected folder rather than inflating the index.
6. Open `/p/<id>`, review sources, missing evidence and technical artifacts, then edit the experiment, pass/stop conditions, timebox, budget and decision reason. New commercial defaults are proposed conditions. Existing browser-saved conditions remain until the user edits or resets them.
7. Export the corresponding prompt. `validate` asks for a small experiment and a restart decision; `build` addresses the selected project's bounded implementation; delivery may mean a template handoff, local program distribution or field procedure. Select web hosting only when an actual web service is required. A prompt does not itself authorize customer contact, payment or release.

The [2026-10-27 selected research examples](COMMERCIAL_PILOT_EXAMPLES.md) register three new ideas from six original reports. This explicitly selected three-item study is separate from a daily eight-item run; it neither completes nor changes that daily contract. Historical ideas and their source records are not bulk rewritten.

## Evidence contract
- Analysis is generated from the selected repository metadata, copied specs, README fallback and same-date daily signal references. It does not call an LLM or conduct live market research.
- A recorded signal is not a verified market, revenue result, market-size estimate or confidence score. Unknowns remain explicit.
- Empty document templates are not evidence. Unresolved signal IDs remain unresolved. Only HTTP(S) source URLs are linked.
- File presence is not implementation or deployment readiness. Distinguish idea, UI demo, scaffold, app code and static web artifacts. Build, tests and deployment stay unverified until actually performed for that project.
- Next 14 scaffold apps need implementation and dependency review before deployment. Non-web projects get a field-validation path rather than an automatic web-app prescription.

## Implementation boundaries
- Pure, serializable analysis and prompt generation: `site/lib/project-analysis.ts`.
- Safe build-time repository reads: `site/lib/project-analysis-server.ts`. Resolve paths within the repository, limit reads, and degrade to missing evidence on invalid metadata or files.
- Repository fact links use the deployment's validated 40-hex `VERCEL_GIT_COMMIT_SHA`, with `main` as the missing/invalid-value fallback. Encode relative path segments and reject unsafe paths so preview-only source files can point to the deployed revision. The variable is available at build/runtime according to [Vercel's system environment documentation](https://vercel.com/docs/environment-variables/system-environment-variables); a local/prebuilt build without it cannot identify unpushed source changes.
- Detail workspace consumes one project's analysis; the gallery index is not expanded with every project's documents.
- Local plan fields and decisions are project-scoped preferences, not market-validation results or credentials.
- Prompt export includes project ID/path, sources, unknowns, user-edited experiment, budget and timebox, implementation boundaries, verification, deployment approval and rollback. Source text is quoted context, never authoritative agent instructions.
- A decision reason is user-reported context, not independently verified demand. `hold` never instructs implementation or deployment; `validate` completes the experiment and restart gate first; `build` resolves technical blockers before any release.
- Empty target/test/pass/stop fields, invalid duration, or identical pass/stop criteria block actionable prompt export. Intentionally cleared values are not silently restored from defaults. A hold decision is exempt and exports only a no-go/restart note, without requiring invented experiment fields.
- Every repository-derived identity, excerpt, note, URL, assumption, starter brief and technical finding is serialized inside a clearly untrusted project-context block. Trusted instructions do not interpolate source prose. User-edited plan fields are serialized separately and remain user-reported context.
- No new dependencies, accounts, credentials, live deployment action or external API are introduced by this feature.

## Acceptance and validation
1. Rich recent projects show their original target, buyer, experiment and starter brief; older sparse projects show useful source fallbacks and honest missing states.
2. Users see recorded market signals, explicit unknowns, technical blockers, and build/test checks separately.
3. Users can choose validate/build/hold, edit a small experiment and copy/download distinct validation/build/deployment prompts tied to that project.
4. Scaffold, unsafe source link, empty template, unresolved/date-mismatched signal and non-web cases are covered by focused fixture tests.
5. For new registrations, check unique IDs, exact folder paths, nonempty source notes, valid commercial profiles and the expected selected-item count in the index. Open each detail route and verify sources, proposal defaults and all three decision paths; do not count a concept screen as completed file processing.
6. Existing integration checks and production build pass. Browser smoke verifies selection, analysis, form editing, prompt mode/copy/export behavior, saved state and retained gallery controls at desktop and mobile widths.

Commands: `npm --prefix site run build`; `npm --prefix site test`; focused model tests use `node --experimental-strip-types --test site/tests/project-analysis.test.mjs`.

## Risks and unknowns
Recorded source validity and customer demand are not re-verified by this feature. Metadata formats differ and some source documents are incomplete. An existing app or HTML demo may still be a scaffold; the analysis must not turn documentation coverage into a claim that the product works.
