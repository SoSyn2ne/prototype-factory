# Assumptions (KNOWN / ASSUMPTION / UNKNOWN)

## KNOWN
- For a given cooler + case airflow, **steady-state** GPU temperature is approximately linear with power:  
  `T_gpu ≈ T_ambient + (P × R_th)` where `R_th` is an effective thermal resistance (°C/W).
- “Power cap” (power limit) typically reduces average board power and therefore reduces steady-state temperature (at the cost of performance).
- Fan behavior materially changes `R_th`: higher fan speeds generally reduce thermal resistance (more airflow → lower ΔT for the same watts).
- Heat-soak matters: the number you care about for stability is often the temperature after **10–20 minutes** at a stable load, not the first 60 seconds.
- Common telemetry is easy to read:
  - Linux/NVIDIA: `nvidia-smi` can report temperature and power draw (fan speed may be available depending on GPU).
  - Windows: HWiNFO / MSI Afterburner can log temperature, power, fan, clocks.

## ASSUMPTION
- We can represent a “fan curve preset” as a single, constant `R_th` value (quiet/balanced/aggressive), even though real curves change fan speed with temperature.
- Baseline power draw (user input) is a reasonable proxy for the workload’s “uncapped” power consumption under sustained load.
- Effective power under a cap can be approximated as `P_effective = min(P_baseline, P_cap)` (ignores transient spikes and power reporting differences).
- The rig has “typical” desktop airflow (front intake + rear/top exhaust), not a sealed ITX oven or an open bench.
- The operator’s “target max GPU temp” is a practical threshold for stability/noise, not the silicon’s absolute maximum rating.

## UNKNOWN
- Cooler condition: dust loading, fin cleanliness, fan bearing health, thermal paste quality, and pad contact all shift `R_th`.
- Ambient measurement error: a room thermostat can be several °C off from intake air temperature.
- Sensor definition: GPU “temp” might mean edge/core; hotspot and VRAM temps can be significantly higher.
- GPU Boost behavior: frequency/voltage changes with temperature and power limit, which changes efficiency and thus heat per unit work.
- Case-specific effects: side panel on/off, intake filter restriction, nearby heat sources, and negative/positive pressure tuning.
