/* Wedding Timeline Stress Tester — offline vanilla JS */

const el = {
  tasksTbody: document.getElementById("tasksTbody"),
  addForm: document.getElementById("addForm"),
  addName: document.getElementById("addName"),
  addStart: document.getElementById("addStart"),
  addDur: document.getElementById("addDur"),
  addOwner: document.getElementById("addOwner"),
  addLoc: document.getElementById("addLoc"),
  delayTask: document.getElementById("delayTask"),
  delayMin: document.getElementById("delayMin"),
  btnRun: document.getElementById("btnRun"),
  btnReset: document.getElementById("btnReset"),
  btnExport: document.getElementById("btnExport"),
  alerts: document.getElementById("alerts"),
  timeline: document.getElementById("timeline"),
};

/** @type {{id:string,name:string,start:string,duration:number,buffer:number,owner:string,location:string,travel:number}[]} */
let baseline = [];

function pad2(n) {
  return String(n).padStart(2, "0");
}

function parseTime(hhmm) {
  const m = /^\s*(\d{1,2}):(\d{2})\s*$/.exec(String(hhmm || ""));
  if (!m) return null;
  const hh = Number(m[1]);
  const mm = Number(m[2]);
  if (hh < 0 || hh > 23 || mm < 0 || mm > 59) return null;
  return hh * 60 + mm;
}

function fmtTime(mins) {
  const m = ((mins % 1440) + 1440) % 1440;
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  return `${pad2(hh)}:${pad2(mm)}`;
}

function cloneTasks(tasks) {
  return tasks.map((t) => ({ ...t }));
}

function sortByStart(tasks) {
  return [...tasks].sort((a, b) => parseTime(a.start) - parseTime(b.start));
}

function computeSchedule(tasks, delayedId, delayMin) {
  const sorted = sortByStart(tasks);
  const delay = Math.max(0, Number(delayMin || 0));

  // Convert to timeline mins.
  const sched = sorted.map((t) => {
    const startMin = parseTime(t.start) ?? 0;
    return {
      ...t,
      startMin,
      endMin: startMin + Math.max(0, Number(t.duration || 0)),
    };
  });

  // Apply delay and propagate downstream (single-track).
  let found = false;
  for (let i = 0; i < sched.length; i++) {
    const t = sched[i];
    if (t.id === delayedId) {
      found = true;
      t.startMin += delay;
      t.endMin += delay;
      // shift downstream to preserve order (no overlap by default, but we still alert)
      for (let j = i + 1; j < sched.length; j++) {
        const prev = sched[j - 1];
        const cur = sched[j];
        const minStart = prev.endMin; // base propagation
        const offset = minStart - cur.startMin;
        if (offset > 0) {
          cur.startMin += offset;
          cur.endMin += offset;
        }
      }
      break;
    }
  }

  // If delayedId not found, no propagation.
  return { sched, delayedApplied: found, delay };
}

function computeAlerts(sched) {
  const alerts = [];
  for (let i = 0; i < sched.length; i++) {
    const a = sched[i];
    const aBufferEnd = a.endMin + Math.max(0, Number(a.buffer || 0));
    const b = sched[i + 1];
    if (!b) continue;

    // Overlap
    if (a.endMin > b.startMin) {
      alerts.push({
        kind: "bad",
        title: `Overlap: ${a.name} → ${b.name}`,
        meta: `${fmtTime(a.endMin)} ends after ${fmtTime(b.startMin)} starts`,
      });
    }

    // Buffer violation
    if (aBufferEnd > b.startMin) {
      alerts.push({
        kind: "warn",
        title: `Buffer violated after ${a.name}`,
        meta: `Need buffer until ${fmtTime(aBufferEnd)}, next starts ${fmtTime(b.startMin)}`,
      });
    }

    // Travel impossible when location changes
    const travel = Math.max(0, Number(b.travel || 0));
    const locChange = String(a.location || "").trim() && String(b.location || "").trim() && a.location !== b.location;
    if (locChange && a.endMin + travel > b.startMin) {
      alerts.push({
        kind: "bad",
        title: `Travel impossible: ${a.location} → ${b.location}`,
        meta: `Need ${travel} min travel; gap is ${Math.max(0, b.startMin - a.endMin)} min`,
      });
    }
  }

  if (alerts.length === 0) {
    alerts.push({ kind: "good", title: "No collisions detected", meta: "With current propagation, the schedule is feasible." });
  }
  return alerts;
}

function renderAlerts(alerts) {
  el.alerts.innerHTML = "";
  for (const a of alerts) {
    const div = document.createElement("div");
    div.className = `alert ${a.kind}`;
    div.innerHTML = `<div class="title">${escapeHtml(a.title)}</div><div class="meta">${escapeHtml(a.meta)}</div>`;
    el.alerts.appendChild(div);
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderTimeline(sched, delayedId) {
  el.timeline.innerHTML = "";

  if (sched.length === 0) {
    el.timeline.innerHTML = '<div class="empty">Add tasks to see a timeline.</div>';
    return;
  }

  const minStart = Math.min(...sched.map((t) => t.startMin));
  const maxEnd = Math.max(...sched.map((t) => t.endMin));
  const span = Math.max(60, maxEnd - minStart);

  const pxPerMin = 6; // 10h => 3600px max-ish; scrollable
  const width = span * pxPerMin;

  const bar = document.createElement("div");
  bar.className = "tbar";
  bar.style.width = `${Math.max(760, width)}px`;

  for (const t of sched) {
    const left = (t.startMin - minStart) * pxPerMin;
    const w = Math.max(24, (t.endMin - t.startMin) * pxPerMin);

    const block = document.createElement("div");
    block.className = `block ${t.id === delayedId ? "bad" : ""}`;
    block.style.left = `${left}px`;
    block.style.width = `${w}px`;
    block.title = `${t.name} (${fmtTime(t.startMin)}–${fmtTime(t.endMin)})`;
    block.textContent = `${t.name} ${fmtTime(t.startMin)}`;
    bar.appendChild(block);
  }

  const tick = document.createElement("div");
  tick.className = "tickrow";
  tick.innerHTML = `<span>${fmtTime(minStart)}</span><span>${fmtTime(Math.floor((minStart + maxEnd) / 2))}</span><span>${fmtTime(maxEnd)}</span>`;

  el.timeline.appendChild(bar);
  el.timeline.appendChild(tick);
}

function renderTasksTable(tasks) {
  el.tasksTbody.innerHTML = "";
  for (const t of sortByStart(tasks)) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input data-k="name" data-id="${t.id}" value="${escapeHtml(t.name)}" /></td>
      <td><input data-k="start" data-id="${t.id}" value="${escapeHtml(t.start)}" placeholder="HH:MM" /></td>
      <td class="num"><input data-k="duration" data-id="${t.id}" type="number" min="0" value="${Number(t.duration || 0)}" /></td>
      <td class="num"><input data-k="buffer" data-id="${t.id}" type="number" min="0" value="${Number(t.buffer || 0)}" /></td>
      <td><input data-k="owner" data-id="${t.id}" value="${escapeHtml(t.owner)}" /></td>
      <td><input data-k="location" data-id="${t.id}" value="${escapeHtml(t.location)}" /></td>
      <td class="num"><input data-k="travel" data-id="${t.id}" type="number" min="0" value="${Number(t.travel || 0)}" /></td>
      <td class="num"><button class="btn" data-del="${t.id}" type="button">Delete</button></td>
    `;
    el.tasksTbody.appendChild(tr);
  }

  // Wire inputs
  el.tasksTbody.querySelectorAll("input[data-id]").forEach((inp) => {
    inp.addEventListener("input", () => {
      const id = inp.getAttribute("data-id");
      const k = inp.getAttribute("data-k");
      const idx = baseline.findIndex((x) => x.id === id);
      if (idx === -1) return;

      if (["duration", "buffer", "travel"].includes(k)) {
        baseline[idx][k] = Number(inp.value || 0);
      } else {
        baseline[idx][k] = inp.value;
      }
      refreshDelayOptions();
    });
  });

  el.tasksTbody.querySelectorAll("[data-del]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-del");
      baseline = baseline.filter((x) => x.id !== id);
      renderTasksTable(baseline);
      refreshDelayOptions();
      el.alerts.innerHTML = '<div class="empty">Run a stress test.</div>';
      el.timeline.innerHTML = "";
    });
  });
}

function refreshDelayOptions() {
  const cur = el.delayTask.value;
  el.delayTask.innerHTML = "";
  for (const t of sortByStart(baseline)) {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = `${t.name} (${t.start})`;
    el.delayTask.appendChild(opt);
  }
  if (cur) el.delayTask.value = cur;
}

function loadBaseline() {
  baseline = [
    {
      id: crypto.randomUUID(),
      name: "Hair & Makeup",
      start: "09:00",
      duration: 120,
      buffer: 10,
      owner: "HMU",
      location: "Hotel",
      travel: 0,
    },
    {
      id: crypto.randomUUID(),
      name: "First Look Photos",
      start: "11:30",
      duration: 45,
      buffer: 10,
      owner: "Photographer",
      location: "Garden",
      travel: 20,
    },
    {
      id: crypto.randomUUID(),
      name: "Ceremony",
      start: "13:00",
      duration: 30,
      buffer: 15,
      owner: "Venue",
      location: "Venue Hall",
      travel: 15,
    },
    {
      id: crypto.randomUUID(),
      name: "Family Photos",
      start: "13:45",
      duration: 35,
      buffer: 10,
      owner: "Photographer",
      location: "Venue Lobby",
      travel: 5,
    },
    {
      id: crypto.randomUUID(),
      name: "Reception Entrance",
      start: "15:00",
      duration: 10,
      buffer: 5,
      owner: "MC",
      location: "Reception",
      travel: 5,
    },
  ];
}

function exportJson() {
  const payload = { version: 1, createdAt: new Date().toISOString(), tasks: sortByStart(baseline) };
  const text = JSON.stringify(payload, null, 2);

  const blob = new Blob([text], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "wedding-timeline-plan.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function run() {
  if (baseline.length === 0) {
    el.alerts.innerHTML = '<div class="empty">Add tasks first.</div>';
    return;
  }

  const delayedId = el.delayTask.value;
  const delayMin = Number(el.delayMin.value || 0);

  const { sched, delayedApplied } = computeSchedule(cloneTasks(baseline), delayedId, delayMin);
  if (!delayedApplied) {
    el.alerts.innerHTML = '<div class="empty">Select a task to delay.</div>';
    return;
  }

  const alerts = computeAlerts(sched);
  renderAlerts(alerts);
  renderTimeline(sched, delayedId);
}

el.addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = String(el.addName.value || "").trim();
  const start = String(el.addStart.value || "").trim();
  const dur = Number(el.addDur.value || 0);
  const owner = String(el.addOwner.value || "").trim();
  const loc = String(el.addLoc.value || "").trim();

  if (!name) return;
  if (parseTime(start) === null) {
    alert("Start time must be HH:MM");
    return;
  }

  baseline.push({
    id: crypto.randomUUID(),
    name,
    start,
    duration: Math.max(0, dur),
    buffer: 0,
    owner,
    location: loc,
    travel: 0,
  });

  el.addName.value = "";
  el.addStart.value = "";
  el.addDur.value = "";
  el.addOwner.value = "";
  el.addLoc.value = "";

  renderTasksTable(baseline);
  refreshDelayOptions();
});

el.btnRun.addEventListener("click", run);

el.btnReset.addEventListener("click", () => {
  loadBaseline();
  renderTasksTable(baseline);
  refreshDelayOptions();
  el.alerts.innerHTML = '<div class="empty">Run a stress test.</div>';
  el.timeline.innerHTML = "";
});

el.btnExport.addEventListener("click", exportJson);

loadBaseline();
renderTasksTable(baseline);
refreshDelayOptions();
