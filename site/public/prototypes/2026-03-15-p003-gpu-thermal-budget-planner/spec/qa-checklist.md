# QA checklist

## Happy path
- Open `demo/index.html` directly from disk (`file://…`) with the network disconnected.
- Enter ambient / target max / baseline power; leave defaults for scenarios (220/200/180) and pick a fan preset.
- Click **Simulate**:
  - A results table renders with one row per selected cap.
  - Each row shows estimated steady-state temperature and a risk label.
  - The page states clearly that the model is a heuristic.
- Click **Log** on a scenario row, add notes (e.g. “Afterburner 200W + balanced curve, stable in 30m run”), save:
  - Entry appears in the experiment log with date/time and the scenario details.
  - Reloading the page preserves the log (localStorage).

## Edge cases
- Ambient is higher than target (e.g. 35°C ambient, 30°C target): UI still simulates and labels everything high risk; no crashes.
- Baseline power is lower than all caps (e.g. 120W baseline): effective power equals baseline; all scenarios tie on temperature.
- Invalid inputs (blank, negative, non-numeric): UI blocks simulation with a readable validation message.
- No scenarios selected: UI prompts the user to select at least one cap.
- localStorage unavailable (private mode / blocked): UI still simulates; logging shows a clear warning and doesn’t hard-fail.
- Very large/small values (ambient 0°C / 45°C, power 50W / 400W): UI remains responsive; table remains readable (scrolls if needed).

## Acceptance verification
- DevTools → Network shows **0** requests (no CDNs/fonts).
- DevTools → Console shows **no errors** on load, simulate, and log save/delete.
- The generated table values match the displayed formula:
  - `T_gpu = T_ambient + (min(P_baseline, P_cap) × R_th(preset))`
- Log entries include: timestamp, ambient, target, baseline, cap, fan preset, estimated temp, and user notes.
