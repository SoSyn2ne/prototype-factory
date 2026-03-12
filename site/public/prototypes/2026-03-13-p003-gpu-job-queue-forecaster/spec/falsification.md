# Falsification checklist (5–7)

1. Are runtime estimates too noisy for the finish-time forecast to stay trusted?
2. Does the two-lane model misrepresent real contention (VRAM, PCIe, I/O) badly enough to be misleading?
3. Do users care more about VRAM pressure or checkpoint windows than about finish time?
4. Does a thermal-risk flag without ambient/fan context become noise?
5. Are priorities too dynamic for a static forecast to be useful without drag-and-drop/preemption?
6. Would a spreadsheet or simple shell script beat this UI on speed?
7. Does usefulness collapse once the operator has multiple hosts/GPUs?
