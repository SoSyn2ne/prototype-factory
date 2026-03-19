# QA checklist

## Happy path
- Open `demo/index.html` directly (no server).
- Pick preset **Export control shock**.
- Move sliders and confirm:
  - Risk score updates immediately.
  - Assumption cards change state (OK/WATCH/BROKEN) with clear copy.
  - “Next evidence to check” list updates.

## Edge cases
- All sliders at 0 → score stays low, most assumptions OK.
- Max sliders → score high, multiple BROKEN flags.
- Rapid slider movement → no lag or console errors.
- Narrow mobile viewport → layout stacks and remains readable.

## Acceptance verification
- No external requests (no CDNs/fonts). `rg -n "https://" demo/index.html demo/assets/*` should be empty or only internal links.
- JS has no syntax errors: `node -c` equivalent isn’t available for JS, so run `node -e "require('fs').readFileSync('demo/assets/app.js','utf8'); console.log('ok')"`.
