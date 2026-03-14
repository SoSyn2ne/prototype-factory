# Falsification checklist (5–7)

1. **Heat-soak reality check:** pick a workload that holds power reasonably steady for 15 minutes (a real training loop, Blender render loop, or a repeatable benchmark). If power is bouncing wildly, the simple steady-state model is the wrong tool.
2. **Ambient accuracy:** measure ambient at the case intake (cheap probe thermometer or at least “room temp near intake”). If the ambient measurement is off by 3°C, the prediction will be off by ~3°C.
3. **Baseline capture:** run uncapped (or your current “stock” settings) for 15 minutes, then record:
   - `P_baseline` (average power draw)
   - `T_gpu` (stabilized temp)
   - `T_ambient`
4. **Back-calculate your actual thermal resistance:** compute  
   `R_th_measured = (T_gpu − T_ambient) / P_baseline`.  
   If this is far from the UI’s implied presets (e.g. your rig is much worse due to airflow), treat the tool as “relative comparison only”.
5. **Scenario validation:** apply a cap (e.g. 200W) and repeat the 15-minute run. Compare measured steady-state temperature to the prediction. If error is consistently > 8°C, the preset `R_th` values are not representative for this rig.
6. **Fan preset sensitivity:** repeat once with a clearly different fan behavior (quiet vs aggressive). If the measured temperature barely changes, the fan curve isn’t actually changing (locked fan, curve not applied, or airflow bottleneck elsewhere).
7. **Edge-case falsifier:** run with the side panel removed (or with intake filters removed) and see if `R_th_measured` improves dramatically. If yes, the primary variable is case restriction rather than GPU cooler/fan curve.
