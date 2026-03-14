# PRD — GPU Thermal Budget Planner

## Problem
- Long-running GPU workloads (rendering, inference, training, video encode, fuzzing) often heat-soak a system: temps climb for 10–30 minutes, then the GPU begins to throttle, crash, or produce unstable clocks.
- Operators typically “tune by vibes” (power limit slider + fan curve) without a quick way to compare scenarios or keep a record of what actually worked on *their* box.
- Older-but-still-useful cards like the **GTX 1080 Ti (~250W class)** are especially common in hobby workstations and lab rigs; small changes in power cap (e.g. 220W → 180W) can be the difference between stable and constant throttling.

## Target user
- A single operator (“homelab SRE for a desktop”) who:
  - Runs long GPU jobs and cares about stability/noise.
  - Can read basic telemetry (GPU temp, power draw, fan % / RPM).
  - Applies caps/curves via MSI Afterburner (Windows) or `nvidia-smi` + vendor tooling (Linux).

## Constraints
- Time:
- Budget:
- Platform:
- Time: 1–2 hours to get a usable plan; 1 day total prototype.
- Budget: $0 (offline, no services).
- Platform: offline, static HTML/CSS/JS; works from `file://` without external CDNs.

## Non-goals
- Not a hardware controller (does not set power limits or fan curves).
- Not a physics-grade thermal simulator (no CFD, no transient modeling).
- Not a monitoring dashboard (no live sensor polling, no driver integration).
- Not GPU-model-specific (defaults are “air-cooled desktop GPU” heuristics; user validates with real telemetry).

## Success metrics
- **Decision speed**: user can compare 3 power-cap scenarios and pick one in < 2 minutes.
- **Operational usefulness**: user can log “what I tried + what happened” with notes and a timestamp.
- **Calibration path**: the UI clearly explains the heuristic and how to validate it with a 10–20 minute heat-soak test.
- **Offline integrity**: opening `demo/index.html` makes no network requests; no external fonts/CDNs.

## Notes
- Terminology: “GPU temp” in the UI refers to the commonly reported core/edge temperature. Many GPUs also expose **hotspot** and **VRAM** temps which can run ~10–20°C hotter; those are out of scope for the simple model and should be watched separately if available.
- Useful telemetry sources:
  - Linux: `nvidia-smi --query-gpu=temperature.gpu,power.draw,fan.speed --format=csv -l 1`
  - Windows: HWiNFO / Afterburner OSD logging
