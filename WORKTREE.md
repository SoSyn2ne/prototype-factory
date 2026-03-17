# Prototype Factory — Worktree Workflow

Use git worktrees so the primary checkout on `main` stays clean while daily PF runs, one-off fixes, and review work happen in isolated directories.

## Why worktrees

- Daily PF runs no longer block each other or dirty the main checkout.
- Cron/manual runs can create a fresh branch and path every time.
- Squash merge-back keeps `main` history readable even if the worktree branch was noisy.

## Naming and location

- Branches: `pf/YYYY-MM-DD/<slug>`
- Worktree paths: `/home/sy/.openclaw/worktrees/prototype-factory/<branch>`
- Examples:
  - `pf/2026-03-18/daily-p001-export-control-shock`
  - `pf/2026-03-18/fix-readme`
  - `pf/2026-03-18/review-pr-142`

## Standard commands

Daily run:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory

BRANCH="pf/$(date +%F)/daily-<slug>"
./scripts/worktree-new "$BRANCH" origin/main
cd "/home/sy/.openclaw/worktrees/prototype-factory/$BRANCH"
```

One-off fix:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory
./scripts/worktree-new "pf/$(date +%F)/fix-<slug>" origin/main
```

Review:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory
./scripts/worktree-new "pf/$(date +%F)/review-<slug>" origin/main
```

List active worktrees:

```bash
./scripts/worktree-list
```

Squash merge back into `main` from inside the linked worktree:

```bash
./scripts/worktree-merge-squash feat "daily PF run: <slug>" main
```

## Cleanup

Remove a clean worktree and delete its local branch if Git allows it:

```bash
cd /home/sy/.openclaw/workspace/prototype-factory
./scripts/worktree-rm "pf/2026-03-18/fix-<slug>"
git worktree prune
```

`worktree-rm` refuses to remove a dirty worktree. Clean, commit, or stash first.
