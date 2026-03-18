# Earnings Call Red-Flag Highlighter

Paste an earnings-call transcript and get a ranked list of **potential red flags** (guidance, demand, pricing, inventory, capex, China/export controls, yield) with **quotes** and a simple confidence score.

This is intentionally **offline + deterministic**: no network calls, no AI. It’s meant as a *first-pass triage* tool before you do real analysis.

## Status
- prototype

## Quickstart (no build)
1. Open `demo/index.html` in your browser (works via `file://`).
2. Choose a **Preset** (or paste your own transcript).
3. Click **Find red flags**.
4. Click a flag to jump to and highlight the matching snippet in the rendered transcript.

Optional local server (avoids some browser `file://` quirks):
```bash
cd prototypes/2026-03-19-p001-earnings-call-red-flag-highlighter
python3 -m http.server 8080
# then open http://localhost:8080/demo/
```

## How the heuristic works (MVP)
- Splits transcript into rough “sentences” / lines.
- Runs a rule set per category (regex/keywords).
- Each match creates a **flag** with:
  - category
  - severity (Low/Med/High)
  - confidence (0–100) derived from rule weight + match strength
  - a quoted snippet (with minimal context)
- Results are ranked by severity, then confidence.

## Manual checklist
- Load Preset A and confirm you see at least one flag in **Guidance** and **Pricing/Inventory**.
- Toggle **Explain rules** and confirm each flag shows which rule(s) fired.
- Click a flag and confirm the transcript highlight updates and scrolls into view.
- Paste empty input → UI shows a clear message (no crash).

## Spec artifacts
- PRD: `spec/prd.md`
- Assumptions: `spec/assumptions.md`
- Falsification checklist: `spec/falsification.md`
- QA checklist: `spec/qa-checklist.md`
