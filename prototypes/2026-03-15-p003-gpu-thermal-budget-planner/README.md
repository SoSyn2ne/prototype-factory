# GPU Thermal Budget Planner

Model power-cap and fan-curve scenarios to keep the 1080 Ti stable under long jobs—and record what actually worked.

## Status
- prototype

## How to use
- Read the product + ops intent in `spec/`.
- Open the offline UI: `demo/index.html`
  - Enter:
    - Ambient temp (°C) — room temp near your case intake
    - Target max GPU temp (°C) — your “don’t exceed” threshold (e.g. 80–85°C)
    - Baseline power draw (W) — what your workload usually pulls without a power cap (watch `nvidia-smi` or HWiNFO)
  - Pick power-cap scenarios (e.g. 220W / 200W / 180W) and a fan-curve preset.
  - Click **Simulate** to estimate steady-state temperature per scenario (heuristic).
  - Save the scenario you ran into the experiment log with notes; logs persist in `localStorage`.

## What the model is (and isn’t)
- **Heuristic steady-state model** (for ranking scenarios quickly):
  - `T_gpu ≈ T_ambient + (P_effective × R_th)`
  - `P_effective = min(baseline power draw, power cap)`
  - `R_th` is an *effective* cooler+case thermal resistance implied by the fan-curve preset.
- It does **not** model transient spikes, VRAM/hotspot, dust, repaste quality, case restrictions, or GPU Boost behavior.

## Practical notes (ops)
- **Linux (NVIDIA)**: you can often apply a power limit with `sudo nvidia-smi -pl <watts>` (if supported on your GPU/driver); confirm with `nvidia-smi` power readings.
- **Windows**: MSI Afterburner (or vendor tools) typically handle both power limit and fan curve.
- Always verify with real telemetry: at minimum log **ambient**, **GPU temp**, **power draw**, and **fan speed** after the system heat-soaks (10–20 minutes).

## Links
- Offline demo: `demo/index.html`
- Specs: `spec/`
