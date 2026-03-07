const els = {
  chart: document.getElementById('chart'),
  scrubber: document.getElementById('scrubber'),
  timeLabel: document.getElementById('timeLabel'),
  readout: document.getElementById('readout'),
  notes: document.getElementById('notes'),
  showAnoms: document.getElementById('showAnoms'),
  tempTh: document.getElementById('tempTh'),
  pwrTh: document.getElementById('pwrTh'),
  tempVal: document.getElementById('tempVal'),
  pwrVal: document.getElementById('pwrVal'),
};

// Sample dataset (1 point per 10s): time_s,temp_c,fan_pct,power_w
const SAMPLE = `time_s,temp_c,fan_pct,power_w
0,45,28,35
10,46,28,38
20,47,29,40
30,48,30,42
40,50,30,45
50,52,31,48
60,54,32,52
70,56,33,58
80,60,35,120
90,66,40,160
100,72,46,190
110,78,52,210
120,83,58,220
130,86,62,225
140,88,66,230
150,90,70,235
160,91,72,238
170,89,74,240
180,85,70,200
190,78,62,160
200,72,55,120
210,66,48,80
220,61,42,60
230,57,38,52
240,54,35,48
250,52,33,45
260,50,32,42
270,49,31,40
280,48,30,38
290,47,29,36
300,46,28,35
`;

function parseCSV(text) {
  const lines = String(text || '').trim().split(/\n+/);
  const head = lines.shift().split(',').map((s) => s.trim());
  const rows = [];
  for (const line of lines) {
    const parts = line.split(',');
    if (parts.length !== head.length) continue;
    const obj = {};
    for (let i = 0; i < head.length; i++) obj[head[i]] = Number(parts[i]);
    rows.push(obj);
  }
  return rows;
}

const data = parseCSV(SAMPLE);
let idx = 0;

function chip(label, value, cls = '') {
  const div = document.createElement('div');
  div.className = `chip ${cls}`.trim();
  div.innerHTML = `${escapeHtml(label)} <strong>${escapeHtml(String(value))}</strong>`;
  return div;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function computeAnomalies() {
  const tempTh = Number(els.tempTh.value);
  const pwrJump = Number(els.pwrTh.value);

  const anoms = [];
  for (let i = 0; i < data.length; i++) {
    const p = data[i];
    const prev = data[i - 1];
    const dPwr = prev ? p.power_w - prev.power_w : 0;
    const dTemp = prev ? p.temp_c - prev.temp_c : 0;

    const tempAnom = p.temp_c >= tempTh;
    const jumpAnom = dPwr >= pwrJump;

    if (tempAnom || jumpAnom) {
      anoms.push({
        i,
        time_s: p.time_s,
        kind: tempAnom && jumpAnom ? 'Thermal + Power' : (tempAnom ? 'Thermal' : 'Power jump'),
        severity: tempAnom ? 'danger' : 'warn',
        note: buildNote(p, prev, { tempAnom, jumpAnom, dPwr, dTemp }),
      });
    }
  }

  // De-noise: keep only local maxima-ish (avoid flooding notes)
  const reduced = [];
  let last = -999;
  for (const a of anoms) {
    if (a.i - last < 2) continue;
    reduced.push(a);
    last = a.i;
  }
  return reduced;
}

function buildNote(p, prev, ctx) {
  const parts = [];
  if (ctx.jumpAnom) parts.push(`Power jumped +${Math.round(ctx.dPwr)}W`);
  if (ctx.tempAnom) parts.push(`Temp reached ${Math.round(p.temp_c)}°C`);

  if (prev) {
    if (ctx.dTemp >= 6) parts.push(`Temp rose fast (+${Math.round(ctx.dTemp)}°C step)`);
    if (p.fan_pct < prev.fan_pct + 4 && ctx.tempAnom) parts.push('Fan response looks laggy');
  }

  if (!parts.length) parts.push('Out-of-band point');
  return parts.join(' • ');
}

function renderNotes(anoms) {
  els.notes.innerHTML = '';
  if (!els.showAnoms.checked) {
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = 'Anomaly display is off.';
    els.notes.appendChild(p);
    return;
  }
  if (!anoms.length) {
    const p = document.createElement('p');
    p.className = 'muted';
    p.textContent = 'No anomalies at current thresholds.';
    els.notes.appendChild(p);
    return;
  }

  for (const a of anoms) {
    const div = document.createElement('div');
    div.className = 'note';
    div.innerHTML = `
      <div class="noteTop">
        <p class="noteTitle">t=${a.time_s}s — ${escapeHtml(a.kind)}</p>
        <div class="tag ${a.severity}">${a.severity === 'danger' ? 'HOT' : 'SPIKE'}</div>
      </div>
      <p class="noteBody">${escapeHtml(a.note)}</p>
    `;
    div.addEventListener('click', () => {
      idx = a.i;
      els.scrubber.value = String(idx);
      updateAll();
    });
    els.notes.appendChild(div);
  }
}

function setupCanvas(canvas) {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const cssW = canvas.clientWidth;
  const cssH = Math.round((cssW / 980) * 320);
  canvas.style.height = `${cssH}px`;
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: cssW, h: cssH };
}

function drawChart(cursorIndex, anoms) {
  const { ctx, w, h } = setupCanvas(els.chart);

  ctx.clearRect(0, 0, w, h);

  const pad = 26;
  const plotW = w - pad * 2;
  const plotH = h - pad * 2;

  const temps = data.map((d) => d.temp_c);
  const pwrs = data.map((d) => d.power_w);
  const maxT = Math.max(...temps, 1);
  const minT = Math.min(...temps, 0);
  const maxP = Math.max(...pwrs, 1);

  function xFor(i) {
    const t = i / Math.max(1, data.length - 1);
    return pad + t * plotW;
  }
  function yTemp(t) {
    const norm = (t - minT) / Math.max(1e-6, maxT - minT);
    return pad + (1 - norm) * plotH;
  }
  function yPwr(p) {
    const norm = p / Math.max(1e-6, maxP);
    return pad + (1 - norm) * plotH;
  }

  // grid
  ctx.strokeStyle = 'rgba(255,255,255,.08)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = pad + (i / 4) * plotH;
    ctx.beginPath();
    ctx.moveTo(pad, y);
    ctx.lineTo(pad + plotW, y);
    ctx.stroke();
  }

  // anomalies shading
  if (els.showAnoms.checked && anoms.length) {
    ctx.fillStyle = 'rgba(255,0,110,.10)';
    for (const a of anoms) {
      const x = xFor(a.i);
      ctx.fillRect(x - 6, pad, 12, plotH);
    }
  }

  // temp line
  ctx.strokeStyle = 'rgba(58,134,255,.95)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = xFor(i);
    const y = yTemp(d.temp_c);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // power line
  ctx.strokeStyle = 'rgba(255,190,11,.9)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((d, i) => {
    const x = xFor(i);
    const y = yPwr(d.power_w);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // cursor
  const cx = xFor(cursorIndex);
  ctx.strokeStyle = 'rgba(255,255,255,.55)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx, pad);
  ctx.lineTo(cx, pad + plotH);
  ctx.stroke();

  // cursor dot
  const point = data[cursorIndex];
  if (point) {
    const ty = yTemp(point.temp_c);
    ctx.fillStyle = 'rgba(58,134,255,1)';
    ctx.beginPath();
    ctx.arc(cx, ty, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // legend
  ctx.fillStyle = 'rgba(255,255,255,.75)';
  ctx.font = '12px ui-sans-serif, system-ui';
  ctx.fillText('Temp (°C)', pad, 16);
  ctx.fillStyle = 'rgba(255,190,11,.9)';
  ctx.fillText('Power (W)', pad + 92, 16);
}

function updateReadout() {
  const p = data[idx];
  if (!p) return;
  els.timeLabel.textContent = `t=${p.time_s}s`;

  els.readout.innerHTML = '';
  els.readout.appendChild(chip('Temp', `${p.temp_c.toFixed(0)}°C`));
  els.readout.appendChild(chip('Fan', `${p.fan_pct.toFixed(0)}%`));
  els.readout.appendChild(chip('Power', `${p.power_w.toFixed(0)}W`));
}

function updateAll() {
  els.tempVal.textContent = els.tempTh.value;
  els.pwrVal.textContent = els.pwrTh.value;

  const anoms = computeAnomalies();
  updateReadout();
  drawChart(idx, anoms);
  renderNotes(anoms);
}

function init() {
  els.scrubber.max = String(Math.max(0, data.length - 1));
  els.scrubber.value = '0';
  idx = 0;

  els.scrubber.addEventListener('input', () => {
    idx = Number(els.scrubber.value);
    updateAll();
  });
  els.showAnoms.addEventListener('change', updateAll);
  els.tempTh.addEventListener('input', updateAll);
  els.pwrTh.addEventListener('input', updateAll);
  window.addEventListener('resize', updateAll);

  updateAll();
}

init();
