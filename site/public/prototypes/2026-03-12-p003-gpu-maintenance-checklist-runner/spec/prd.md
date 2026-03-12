# PRD — GPU Maintenance Checklist Runner

## Problem
- Solo operators often perform GPU maintenance from memory or across scattered docs, which leads to skipped checks, incomplete notes, and weak handoff records.
- Maintenance work mixes timed actions and observational tasks, but there is no lightweight UI that keeps the sequence, elapsed time, and notes in one place.
- When something regresses after maintenance, operators need a simple text log showing what was done, what looked risky, and when the session happened.
- Existing ops tools are either too generic, require privileged integration, or assume a team workflow instead of a single maintainer.

## Target user
- A solo operator maintaining one or more local or remote GPU workstations/servers.
- Comfortable with infrastructure tasks, but not interested in setting up a full CMDB, ticketing flow, or agent-based maintenance suite.
- Needs a browser-based runbook that can stay open beside terminal windows during a maintenance session.
- Values speed, traceability, and a consistent checklist more than deep automation.

## Constraints
- Time: The demo should support short maintenance windows, with the full flow scannable in under a minute before execution starts.
- Budget: Prototype only; no paid services, hosted APIs, or external asset dependencies.
- Platform: Vanilla HTML/CSS/JS running locally in a browser with no build step.
- Security: No secrets stored or requested; all session data stays in browser `localStorage` until the operator clears it.
- Privilege model: No root-required actions, shell execution, or system integration inside the UI.
- Data output: Export must be plain text so it can be pasted into tickets, incident docs, or operator notes.

## Non-goals
- Automatic driver installation, cache pruning, or thermal diagnostics.
- Multi-user collaboration, approvals, or role-based permissions.
- Historical dashboards, analytics, or long-term maintenance scheduling.
- Secure evidence storage, compliance workflows, or tamper-proof audit trails.
- Host inventory management or live telemetry ingestion from GPUs.

## Success metrics
- The operator can start a session, complete tasks, add notes, and generate a readable log without leaving the page.
- A reload during the session preserves the draft checklist state, notes, risk flags, and timer start time.
- The exported text log clearly records session timestamps, completed tasks, incomplete tasks, risk flags, and operator notes.
- First-time users can understand the page structure and begin the checklist within 30 seconds.
- The prototype remains legible and usable on desktop and narrow laptop/mobile widths.

## Notes
- Recommended checklist scope for the prototype: driver/version confirmation, thermals inspection, fan curve check, disk cleanup, model cache prune, smoke test, and final summary.
- The UI should feel like an operations console rather than a marketing landing page.
- Risk flags act as quick incident breadcrumbs, not exhaustive diagnostics.
- If the concept proves useful, later iterations could add multiple checklist templates or import/export of saved runbooks.
