# Prototype Factory — OMX Team Runbook (3‑person)

Goal: Run a lightweight **PM + Dev + QA** team every day.

This runbook assumes:
- You are inside the repo root: `prototype-factory/`
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

Start a tmux session in the repo root:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory

# create or attach
TMUX_SESSION=pf

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

---

## 5) Suggested cadence (60–120m)

1) PM (10–20m)
2) Dev (30–70m)
3) QA (15–30m)
4) Fix loop (10–30m)

Done.
