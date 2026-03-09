function fmt(n) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);
}

function el(id) {
  return document.getElementById(id);
}

const PRESETS = {
  finetune: { powerW: 320, util: 92, price: 200, hours: 3, opp: 1500 },
  sd: { powerW: 260, util: 85, price: 200, hours: 1.5, opp: 800 },
  idle: { powerW: 60, util: 5, price: 200, hours: 6, opp: 0 },
};

let selectedPreset = "finetune";

function getNum(id) {
  const v = Number(el(id).value);
  return Number.isFinite(v) ? v : 0;
}

function setNum(id, v) {
  el(id).value = String(v);
}

function setPreset(key) {
  selectedPreset = key;
  document.querySelectorAll(".preset").forEach((b) => b.classList.toggle("active", b.dataset.preset === key));

  const p = PRESETS[key];
  if (!p) return;
  setNum("powerW", p.powerW);
  setNum("util", p.util);
  setNum("price", p.price);
  setNum("hours", p.hours);
  setNum("opp", p.opp);
  update();
}

function update() {
  const powerW = Math.max(0, getNum("powerW"));
  const util = Math.max(0, Math.min(100, getNum("util")));
  const price = Math.max(0, getNum("price"));
  const hours = Math.max(0, getNum("hours"));
  const oppPerHour = Math.max(0, getNum("opp"));

  const kwh = (powerW / 1000) * hours;
  const elec = kwh * price;
  const oppCost = hours * oppPerHour;
  const total = elec + oppCost;

  el("kwh").textContent = Number.isFinite(kwh) ? kwh.toFixed(2) : "—";
  el("elec").textContent = fmt(elec);
  el("oppCost").textContent = fmt(oppCost);
  el("total").textContent = fmt(total);

  const notes = [];

  if (hours === 0) {
    notes.push({ cls: "ok", text: "Runtime is 0h — total cost is 0. (Sanity check.)" });
  }

  if (powerW > 800) {
    notes.push({ cls: "bad", text: "Power draw >800W. Double-check input: is this GPU-only or entire system?" });
  } else if (powerW > 450) {
    notes.push({ cls: "warn", text: "High power draw. Consider undervolt/power cap if performance impact is small." });
  }

  if (util < 20 && hours > 0.25) {
    notes.push({ cls: "bad", text: "Utilization is very low (<20%). Check dataloader, batch size, or GPU throttling." });
  } else if (util < 50 && hours > 0.25) {
    notes.push({ cls: "warn", text: "Utilization is moderate. If this is expected (I/O-bound), cost/time may still be OK." });
  } else if (util >= 80 && hours > 0.25) {
    notes.push({ cls: "ok", text: "Utilization looks healthy. Your estimate is likely dominated by runtime and power cap." });
  }

  if (oppPerHour > 0) {
    notes.push({ cls: "ok", text: "Opportunity cost enabled — useful for choosing between local run vs waiting/queueing." });
  } else {
    notes.push({ cls: "warn", text: "Opportunity cost is 0. If your time/GPU scarcity matters, add a rough KRW/hour value." });
  }

  if (elec > 20000) {
    notes.push({ cls: "warn", text: "Electricity cost is sizable. Consider splitting runs, early stopping, or lower resolution/model size." });
  }

  const ul = el("notes");
  ul.innerHTML = "";
  for (const n of notes) {
    const li = document.createElement("li");
    li.className = n.cls;
    li.textContent = n.text;
    ul.appendChild(li);
  }

  const lines = [];
  lines.push("GPU Job Cost Meter");
  lines.push(`- Preset: ${selectedPreset}`);
  lines.push(`- Power (avg): ${powerW} W`);
  lines.push(`- Utilization: ${util}%`);
  lines.push(`- Electricity: ${price} KRW/kWh`);
  lines.push(`- Runtime: ${hours} h`);
  lines.push(`- Energy: ${kwh.toFixed(2)} kWh`);
  lines.push(`- Electricity cost: ${fmt(elec)} KRW`);
  lines.push(`- Opportunity cost: ${fmt(oppCost)} KRW`);
  lines.push(`- Total: ${fmt(total)} KRW`);
  lines.push("Notes:");
  for (const n of notes.slice(0, 4)) lines.push(`- ${n.text}`);

  el("box").value = lines.join("\n");
}

async function copyBox() {
  const status = el("copyStatus");
  try {
    await navigator.clipboard.writeText(el("box").value);
    status.textContent = "Copied.";
  } catch {
    status.textContent = "Copy failed (browser blocked clipboard).";
  }
  setTimeout(() => (status.textContent = ""), 1500);
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input").forEach((i) => i.addEventListener("input", update));
  document.querySelectorAll(".preset").forEach((b) => b.addEventListener("click", () => setPreset(b.dataset.preset)));
  el("copyBtn").addEventListener("click", copyBox);

  setPreset("finetune");
});
