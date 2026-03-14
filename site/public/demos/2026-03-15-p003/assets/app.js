const elAmbient = document.getElementById('ambient');
const elTarget = document.getElementById('target');
const elBaseline = document.getElementById('baseline');
const elFan = document.getElementById('fan');
const elCaps = document.getElementById('caps');
const elCustomCap = document.getElementById('customCap');
const elMsg = document.getElementById('msg');
const elResults = document.getElementById('results');
const elLogs = document.getElementById('logs');

const btnAddCap = document.getElementById('btnAddCap');
const btnClearLogs = document.getElementById('btnClearLogs');
const form = document.getElementById('form');

const RTH = {
  quiet: 0.26,
  balanced: 0.22,
  aggressive: 0.18,
};

const STORAGE_KEY = 'pf_gpu_thermal_budget_logs_v1';

const STATE = {
  caps: [220, 200, 180],
  selected: new Set([220, 200, 180]),
  logs: [],
};

function supportsStorage() {
  try {
    const k = '__pf_test__';
    localStorage.setItem(k, '1');
    localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

function setMsg(msg) {
  elMsg.textContent = msg || '';
}

function clampNum(x, lo, hi) {
  if (!Number.isFinite(x)) return null;
  return Math.max(lo, Math.min(hi, x));
}

function loadLogs() {
  if (!supportsStorage()) {
    STATE.logs = [];
    return;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    STATE.logs = raw ? JSON.parse(raw) : [];
    if (!Array.isArray(STATE.logs)) STATE.logs = [];
  } catch {
    STATE.logs = [];
  }
}

function saveLogs() {
  if (!supportsStorage()) return false;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(STATE.logs));
    return true;
  } catch {
    return false;
  }
}

function addCap(cap) {
  const c = Math.round(cap);
  if (STATE.caps.includes(c)) return false;
  STATE.caps.push(c);
  STATE.caps.sort((a, b) => b - a);
  STATE.selected.add(c);
  return true;
}

function removeCap(cap) {
  STATE.caps = STATE.caps.filter((x) => x !== cap);
  STATE.selected.delete(cap);
}

function renderCaps() {
  elCaps.innerHTML = '';
  for (const cap of STATE.caps) {
    const wrap = document.createElement('label');
    wrap.className = 'cap';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = STATE.selected.has(cap);
    cb.addEventListener('change', () => {
      if (cb.checked) STATE.selected.add(cap);
      else STATE.selected.delete(cap);
    });

    const txt = document.createElement('span');
    txt.textContent = `${cap}W`;

    wrap.appendChild(cb);
    wrap.appendChild(txt);

    if (![220, 200, 180].includes(cap)) {
      const del = document.createElement('button');
      del.type = 'button';
      del.className = 'btnMini';
      del.textContent = '×';
      del.title = 'Remove cap';
      del.addEventListener('click', () => {
        removeCap(cap);
        renderCaps();
      });
      wrap.appendChild(del);
    }

    elCaps.appendChild(wrap);
  }
}

function riskLabel(margin) {
  if (margin >= 5) return { key: 'ok', text: 'OK' };
  if (margin >= 0) return { key: 'watch', text: 'Watch' };
  return { key: 'high', text: 'High' };
}

function simulate() {
  const ambient = clampNum(Number(elAmbient.value), -10, 60);
  const target = clampNum(Number(elTarget.value), 0, 120);
  const baseline = clampNum(Number(elBaseline.value), 10, 600);
  const fanKey = elFan.value in RTH ? elFan.value : 'balanced';
  const rth = RTH[fanKey];

  if (ambient == null || target == null || baseline == null) {
    setMsg('Enter valid numeric inputs.');
    return null;
  }

  const caps = [...STATE.selected].sort((a, b) => b - a);
  if (!caps.length) {
    setMsg('Select at least one power-cap scenario.');
    return null;
  }

  setMsg('');

  const rows = caps.map((cap) => {
    const pEff = Math.min(baseline, cap);
    const tEst = ambient + pEff * rth;
    const margin = target - tEst;
    const risk = riskLabel(margin);
    return {
      cap,
      ambient,
      target,
      baseline,
      fanKey,
      rth,
      pEff,
      tEst: Math.round(tEst * 10) / 10,
      margin: Math.round(margin * 10) / 10,
      risk,
    };
  });

  return rows;
}

function renderResults(rows) {
  if (!rows) return;

  const table = document.createElement('table');
  table.className = 'table';

  table.innerHTML = `
    <thead>
      <tr>
        <th>Cap</th>
        <th>Eff. power</th>
        <th>T_est</th>
        <th>Margin</th>
        <th>Risk</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector('tbody');

  for (const r of rows) {
    const tr = document.createElement('tr');

    const risk = document.createElement('span');
    risk.className = `pill ${r.risk.key}`;
    risk.textContent = r.risk.text;

    const btnLog = document.createElement('button');
    btnLog.type = 'button';
    btnLog.className = 'btnMini';
    btnLog.textContent = 'Log';
    btnLog.addEventListener('click', () => {
      if (!supportsStorage()) {
        alert('localStorage unavailable (logging disabled).');
        return;
      }
      const notes = prompt('Notes for this run (optional):', '') || '';
      const entry = {
        id: Math.random().toString(16).slice(2) + Date.now().toString(16),
        at: new Date().toISOString(),
        notes: String(notes).slice(0, 5000),
        ...r,
      };
      STATE.logs.unshift(entry);
      saveLogs();
      renderLogs();
    });

    tr.innerHTML = `
      <td>${r.cap}W</td>
      <td>${r.pEff}W</td>
      <td>${r.tEst}°C</td>
      <td>${r.margin}°C</td>
      <td></td>
      <td></td>
    `;

    tr.children[4].appendChild(risk);
    tr.children[5].appendChild(btnLog);

    tbody.appendChild(tr);
  }

  elResults.innerHTML = '';
  elResults.appendChild(table);
}

function renderLogs() {
  if (!supportsStorage()) {
    elLogs.innerHTML = '<p class="hint">localStorage unavailable in this browser mode. Logging disabled.</p>';
    return;
  }

  if (!STATE.logs.length) {
    elLogs.innerHTML = '<p class="hint">No logs yet. Simulate a scenario and click Log.</p>';
    return;
  }

  elLogs.innerHTML = '';
  for (const e of STATE.logs) {
    const wrap = document.createElement('div');
    wrap.className = 'log';

    const top = document.createElement('div');
    top.className = 'logTop';

    const left = document.createElement('div');
    left.innerHTML = `
      <div><b>${e.cap}W</b> · ${e.fanKey} (R_th ${e.rth}) · <span class="pill ${e.risk.key}">${e.risk.text}</span></div>
      <div class="hint">${new Date(e.at).toLocaleString()} · ambient ${e.ambient}°C · baseline ${e.baseline}W · target ${e.target}°C · T_est ${e.tEst}°C</div>
      ${e.notes ? `<div class="hint" style="margin-top:6px">Notes: ${escapeHtml(e.notes)}</div>` : ''}
    `;

    const right = document.createElement('div');
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'btnMini';
    del.textContent = 'Delete';
    del.addEventListener('click', () => {
      STATE.logs = STATE.logs.filter((x) => x.id !== e.id);
      saveLogs();
      renderLogs();
    });
    right.appendChild(del);

    top.appendChild(left);
    top.appendChild(right);
    wrap.appendChild(top);
    elLogs.appendChild(wrap);
  }
}

function escapeHtml(s) {
  return String(s || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

btnAddCap.addEventListener('click', () => {
  const v = clampNum(Number(elCustomCap.value), 10, 600);
  if (v == null) {
    setMsg('Enter a custom cap between 10 and 600W.');
    return;
  }
  const ok = addCap(v);
  if (!ok) setMsg('That cap already exists.');
  else setMsg('Added.');
  elCustomCap.value = '';
  renderCaps();
});

btnClearLogs.addEventListener('click', () => {
  if (!supportsStorage()) return;
  if (!confirm('Clear all logs?')) return;
  STATE.logs = [];
  saveLogs();
  renderLogs();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const rows = simulate();
  renderResults(rows);
});

// init
loadLogs();
renderCaps();
renderLogs();
