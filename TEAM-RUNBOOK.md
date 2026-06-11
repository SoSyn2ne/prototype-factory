# Prototype Factory — OMX Team Runbook (3‑person)

Goal: Run a lightweight **PM + Dev + QA** team every day.

This runbook assumes:
- You start from the repo root: `prototype-factory/`
- You have `omx` installed and `tmux` available
- Repo rules live in `AGENTS.md` and `CONVENTIONS.md`

---

## 0) Team roles

### PM (Planner)
Output: a crisp spec that is testable.
- 1‑page PRD: problem, target user, constraints, non-goals
- Success criteria (measurable)
- Acceptance checklist (5–10 bullets)
- Risks/unknowns (top 3)

### Dev (Executor)
Output: working implementation.
- Minimal code to satisfy PM acceptance criteria
- Avoid overengineering
- Prefer deterministic behaviors

### QA (Verifier)
Output: verification + bug list.
- Test plan: happy path + 2 edge cases
- Regression checklist
- If bug: repro steps + expected vs actual

---

## 1) Daily folder template

Create a new prototype folder:
- `prototypes/YYYY-MM-DD-pNNN-<slug>/`

Minimum files (design-first):
- `meta.json`
- `README.md`
- `spec/prd.md`
- `spec/acceptance.md`
- `spec/qa-checklist.md`

(If coding)
- `web/` (static) or `app/` (Next.js)

---

## 2) How to run (tmux leader pane)

Create a fresh worktree for the day, then start tmux inside that linked checkout:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory

BRANCH="pf/$(date +%F)/daily-run"
WORKTREE="/home/sy/.openclaw/worktrees/prototype-factory/$BRANCH"

./scripts/worktree-new "$BRANCH" origin/main
cd "$WORKTREE"

TMUX_SESSION="pf-$(date +%Y%m%d)-daily"

tmux has-session -t "$TMUX_SESSION" 2>/dev/null \
  && tmux attach -t "$TMUX_SESSION" \
  || tmux new -s "$TMUX_SESSION"
```

Inside tmux (leader pane), run OMX team:

```bash
# 3 workers, same base type, we assign roles via instructions
omx team ralph 3:executor "Daily prototype: PM writes spec, Dev implements, QA verifies. Keep it small and shippable today."
```

Check status:

```bash
omx team status <team-name>
```

Shutdown when done:

```bash
omx team shutdown <team-name>
```

Squash merge back into `main`, then clean up from the primary checkout:

```bash
# run this inside the linked worktree
./scripts/worktree-merge-squash feat "daily PF run: <slug>" main

# then switch back to the primary checkout
cd /home/sy/.openclaw/workspace/prototype-factory
./scripts/worktree-rm "$BRANCH"
git worktree prune
```

---

## 3) Role assignment message (copy/paste)

Paste this into the leader pane after team start (or send via mailbox tooling if available):

### Worker-1 = PM
- Create/Update: `spec/prd.md`, `spec/acceptance.md`
- Provide: scope, non-goals, success criteria, risks
- Make acceptance criteria testable

### Worker-2 = Dev
- Implement the smallest solution that meets `spec/acceptance.md`
- Document run steps in `README.md`

### Worker-3 = QA
- Create/Update: `spec/qa-checklist.md`
- Run the app, validate acceptance criteria
- Report bugs with repro steps; propose minimal fixes

---

## 4) Default prompts / quality gates

- If anything is ambiguous: PM must ask or state assumptions.
- Dev must not add features beyond acceptance.
- QA must fail the build if acceptance criteria aren’t demonstrably met.
- For daily PF ideation batches, PM must verify every candidate is explicitly mapped to the current operator theme framework when one exists.
- QA must fail the batch if candidate count, scaffolded prototype count, and published count do not match.
- For the default daily run, QA must expect exactly 8 candidates and `p001` through `p008` to exist with no missing slot.
- QA must fail Stitch ingest if the main `/d/<id>` demo does not preserve the original Stitch environment.
- `/pf sti` is incomplete if any same-day candidate from `p001` to `p008` is left uninjected without an explicit operator exception.

---

## 5) Suggested cadence (60–120m)

1) PM (10–20m)
2) Dev (30–70m)
3) QA (15–30m)
4) Fix loop (10–30m)

Done.
