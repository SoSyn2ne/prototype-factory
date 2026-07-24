# Graduation Pipeline

Prototype Factory generates 8 signal-backed ideas per day. That is the **top of
the funnel**. The graduation pipeline is the **bottom**: it carries a small
number of the strongest ideas past a pretty HTML mockup and all the way to a
build-ready go/no-go decision, backed by a prototype whose logic actually runs.

> Volume produces candidates. Depth produces conviction. The daily-8 stays; the
> pipeline is where 1–2 of them earn a real decision.

## Why this exists

The old output stopped at a static Stitch screen. A screenshot cannot prove pull,
cannot compute the number the idea promises, and cannot tell you whether the
thing is worth building. So ideas piled up without ever being decided. The
pipeline fixes that by making every graduated idea answer six questions in order.

## The six stages

| # | Stage | Question it answers | Artifact |
|---|-------|--------------------|----------|
| 1 | Signal → Idea | Is there a signal-backed idea? | `daily/YYYY-MM-DD/ideas*.md` |
| 2 | **Validate** | Is the pull real, cheaply proven? | `pipeline/01-validate.md` |
| 3 | **Spec** | What exactly gets built? | `pipeline/02-spec.md` |
| 4 | **Feasibility** | What does it cost to build? | `pipeline/03-feasibility.md` |
| 5 | **Interactive prototype** | Does the core logic actually work? | a real app under `site/app/lab/<slug>/` |
| 6 | **Decision** | Go, no-go, or pivot — with evidence? | `pipeline/04-decision.md` |

Every claim in stages 2–4 is tagged **KNOWN / ASSUMPTION / UNKNOWN** (Doctrine G1).

## Hard rules

- **Stage 5 must run.** A static HTML mockup does not satisfy the pipeline. The
  interactive prototype must have real state, real computation, and mock or
  user-entered data — it must produce the number the idea promised. It lives in
  the site (`/lab/<slug>`) so it deploys and is testable, no separate hosting.
- **No prototype before validation.** Stage 5 does not start until stage 2
  returns at least one real pull signal. Pain without pull is parked, not built.
- **Compute, don't display.** The prototype's job is a number the user cannot
  easily get (cost-per-kg, effective fee rate, run-rate). A dashboard that only
  arranges inputs is not a graduation.
- **The decision is evidence-backed.** Stage 6 cites the validate result, the
  utility the prototype demonstrated, and the feasibility estimate — not a vibe.

## How to graduate an idea

```bash
# 1. attach the pipeline scaffold to an existing prototype folder
node scripts/new-graduation.mjs 2026-07-09-p010-wegovy-reality-ledger

# 2. fill the docs in order: 01-validate → 02-spec → 03-feasibility
# 3. build the interactive prototype at site/app/lab/<slug>/
#    (real logic + mock data; add a <LabBanner/> at the top)
# 4. write 04-decision.md and set pipeline/state.json stages to "done"
# 5. rebuild the index so the site picks it up
node scripts/build-index.mjs
```

`build-index.mjs` scans every `prototypes/*/pipeline/state.json`, copies the
pipeline docs into the site, and writes `site/public/graduations.json`. The
`/pipeline` page and each graduated idea's detail page render from that file.

## Reference example

**Wegovy Reality Ledger** (`2026-07-09-p010`) is the first idea taken through all
six stages. Its interactive prototype (`/lab/wegovy-reality-ledger`) computes
cost-per-kg, a recent loss rate from weekly check-ins, an N-month spend/loss
scenario, and a continue/taper/stop recommendation — all client-side. Decision:
**GO**, pending one live fake-door test. Use it as the pattern for the next one.

## State schema (`pipeline/state.json`)

```json
{
  "id": "2026-07-09-p010",
  "idea": "Wegovy Reality Ledger",
  "slug": "wegovy-reality-ledger",
  "labUrl": "/lab/wegovy-reality-ledger",
  "updatedAt": "2026-07-24",
  "stages": [
    { "key": "signal|validate|spec|feasibility|interactive|decision",
      "label": "...", "status": "todo|doing|done",
      "evidence": "...", "artifact": "...", "decision": "go|no-go|pivot|pending" }
  ]
}
```
