function $(id){return document.getElementById(id)}

const els={
  tempThresh: $("tempThresh"),
  utilThresh: $("utilThresh"),
  severityFilter: $("severityFilter"),
  logs: $("logs"),
  btnAnalyze: $("btnAnalyze"),
  btnExport: $("btnExport"),
  timeline: $("timeline"),
  summary: $("summary"),
  dlg: $("dlg"),
  dlgTitle: $("dlgTitle"),
  dlgMeta: $("dlgMeta"),
  dlgNote: $("dlgNote"),
  btnSaveNote: $("btnSaveNote"),
  toast: $("toast"),
};

let events=[]; // {id, ts, tsRaw, severity, kind, message, raw, note}
let activeEventId=null;

function showToast(text){
  els.toast.textContent=text;
  els.toast.hidden=false;
  clearTimeout(showToast._t);
  showToast._t=setTimeout(()=>{els.toast.hidden=true}, 1200);
}

function parseTimestamp(line){
  // ISO: 2026-03-09T05:12:33Z or 2026-03-09 05:12:33
  let m=line.match(/\b(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2}:\d{2})(?:\.\d+)?(Z)?\b/);
  if(m){
    const iso=`${m[1]}T${m[2]}${m[3] ? 'Z' : ''}`;
    const d=new Date(iso);
    if(!Number.isNaN(d.getTime())) return {ts:d.getTime(), raw:m[0]};
  }
  // Syslog-ish: Mar 9 05:12:33
  m=line.match(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\s+(\d{2}:\d{2}:\d{2})\b/);
  if(m){
    const months={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};
    const now=new Date();
    const d=new Date(now.getFullYear(), months[m[1]], Number(m[2]), ...m[3].split(':').map(Number));
    return {ts:d.getTime(), raw:m[0]};
  }
  return {ts:null, raw:""};
}

function classify(line, cfg){
  const s=line.toLowerCase();
  const {tempThresh, utilThresh}=cfg;

  // numeric patterns
  const tempMatch=line.match(/\btemp(?:erature)?\s*[=:]\s*(\d{2,3})\s*c\b/i);
  const utilMatch=line.match(/\butil(?:ization)?\s*[=:]\s*(\d{1,3})\s*%\b/i);

  const hasXid = /\bxid\b/.test(s);
  const hasThrottle = /throttl|clocks?\s*throttle|power\s*limit|thermal\s*limit/.test(s);
  const hasOOM = /out of memory|cuda\s*oom|cublas.*alloc|oom-killer/.test(s);
  const hasReset = /gpu\s*reset|driver\s*reset|fallen off the bus/.test(s);
  const hasSegfault = /segfault|illegal instruction|core dumped/.test(s);

  let severity="info";
  let kind="info";
  let message="";

  if(hasXid||hasReset){ severity="critical"; kind="driver"; message="Driver/GPU reset (Xid/reset)"; }
  else if(hasOOM){ severity="critical"; kind="oom"; message="Out-of-memory / allocation failure"; }
  else if(hasSegfault){ severity="warn"; kind="crash"; message="Process crash / segfault"; }
  else if(hasThrottle){ severity="warn"; kind="throttle"; message="Throttling / power/thermal limit"; }

  if(tempMatch){
    const t=Number(tempMatch[1]);
    if(t>=tempThresh){ severity= severity==="critical" ? "critical" : "warn"; kind="thermal"; message=`High temperature (${t}°C)`; }
  }
  if(utilMatch){
    const u=Number(utilMatch[1]);
    if(u>=utilThresh && severity==="info"){ severity="warn"; kind="util"; message=`Sustained utilization (${u}%)`; }
  }

  // If we recognized nothing, return null.
  if(severity==="info" && !tempMatch && !utilMatch && !/error|warn|critical|fail/.test(s)) return null;

  if(!message){
    if(/error|fail/.test(s)) { severity="warn"; kind="error"; message="Error"; }
    else if(/warn/.test(s)) { severity="warn"; kind="warn"; message="Warning"; }
    else { message="Signal"; }
  }

  return {severity, kind, message};
}

function analyze(){
  const cfg={
    tempThresh: Number(els.tempThresh.value||85),
    utilThresh: Number(els.utilThresh.value||98),
  };

  const lines=String(els.logs.value||"").split(/\r?\n/).map(l=>l.trim()).filter(Boolean);

  const out=[];
  const seen=new Set();
  lines.forEach((line, idx)=>{
    const cls=classify(line, cfg);
    if(!cls) return;

    const {ts, raw}=parseTimestamp(line);
    const key=`${raw}|${cls.severity}|${cls.kind}|${line}`;
    if(seen.has(key)) return;
    seen.add(key);

    out.push({
      id:`e${idx}_${Math.random().toString(16).slice(2)}`,
      ts,
      tsRaw: raw || "(time unknown)",
      severity: cls.severity,
      kind: cls.kind,
      message: cls.message,
      raw: line,
      note: "",
    });
  });

  out.sort((a,b)=>{
    if(a.ts==null && b.ts==null) return 0;
    if(a.ts==null) return 1;
    if(b.ts==null) return -1;
    return a.ts-b.ts;
  });

  events=out;
  render();
}

function severityRank(s){
  return s==="critical"?3:s==="warn"?2:1;
}

function render(){
  const filter=els.severityFilter.value;
  const filtered=filter==="all"?events:events.filter(e=>e.severity===filter);

  const counts={info:0,warn:0,critical:0};
  events.forEach(e=>counts[e.severity]++);

  els.summary.textContent=`Events: ${events.length} (critical ${counts.critical}, warn ${counts.warn}, info ${counts.info}). Thresholds: temp≥${els.tempThresh.value}°C, util≥${els.utilThresh.value}%. Click an event to annotate.`;

  els.timeline.innerHTML="";
  if(!filtered.length){
    const empty=document.createElement('div');
    empty.className='summary';
    empty.textContent='No events match the current filter. Try lowering thresholds or pasting logs with error/throttle/temp patterns.';
    els.timeline.appendChild(empty);
    return;
  }

  filtered.forEach(e=>{
    const btn=document.createElement('button');
    btn.type='button';
    btn.className='event';
    btn.setAttribute('aria-label', `Open event ${e.message}`);

    const when=document.createElement('div');
    when.className='when';
    when.textContent=e.tsRaw;

    const body=document.createElement('div');

    const msg=document.createElement('div');
    msg.className='msg';
    msg.textContent=e.message;

    const badges=document.createElement('div');
    badges.className='badges';

    const b1=document.createElement('span');
    b1.className=`badge ${e.severity}`;
    b1.textContent=e.severity;

    const b2=document.createElement('span');
    b2.className='badge';
    b2.textContent=e.kind;

    badges.appendChild(b1);
    badges.appendChild(b2);

    const raw=document.createElement('div');
    raw.className='note';
    raw.textContent=e.raw;

    if(e.note){
      const note=document.createElement('div');
      note.className='note';
      note.innerHTML=`<strong>Note:</strong> ${escapeHtml(e.note)}`;
      body.appendChild(note);
    }

    body.appendChild(msg);
    body.appendChild(badges);
    body.appendChild(raw);

    btn.appendChild(when);
    btn.appendChild(body);

    btn.addEventListener('click', ()=>openDialog(e.id));
    els.timeline.appendChild(btn);
  });
}

function escapeHtml(s){
  return String(s||"")
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function openDialog(id){
  const e=events.find(x=>x.id===id);
  if(!e) return;
  activeEventId=id;
  els.dlgTitle.textContent=e.message;
  els.dlgMeta.textContent=`${e.tsRaw} · ${e.severity.toUpperCase()} · ${e.kind}`;
  els.dlgNote.value=e.note || "";
  els.dlg.showModal();
  els.dlgNote.focus();
}

els.btnSaveNote.addEventListener('click', (ev)=>{
  ev.preventDefault();
  const e=events.find(x=>x.id===activeEventId);
  if(!e) return;
  e.note=String(els.dlgNote.value||"").trim();
  els.dlg.close();
  render();
  showToast('Saved');
});

els.btnAnalyze.addEventListener('click', ()=>{analyze(); showToast('Analyzed');});
els.severityFilter.addEventListener('change', render);

els.btnExport.addEventListener('click', async ()=>{
  if(!events.length){ showToast('Nothing to export'); return; }

  const counts={info:0,warn:0,critical:0};
  events.forEach(e=>counts[e.severity]++);

  const lines=[];
  lines.push(`# GPU Incident Timeline (Draft)`);
  lines.push('');
  lines.push(`- Thresholds: temp ≥ ${els.tempThresh.value}°C, util ≥ ${els.utilThresh.value}%`);
  lines.push(`- Events: ${events.length} (critical ${counts.critical}, warn ${counts.warn}, info ${counts.info})`);
  lines.push('');
  lines.push('## Events');
  lines.push('');

  events.forEach(e=>{
    const sev=e.severity.toUpperCase();
    lines.push(`- **${e.tsRaw}** · **${sev}** · ${e.message}`);
    lines.push(`  - Raw: \\`${e.raw}\\``);
    if(e.note) lines.push(`  - Note: ${e.note}`);
  });

  await navigator.clipboard.writeText(lines.join('\n'));
  showToast('Markdown copied');
});

// Seed sample logs
els.logs.value = [
  '2026-03-09T05:10:01Z nvidia-smi GPU0 temp=78C util=72%',
  '2026-03-09T05:11:12Z nvidia-smi GPU0 temp=86C util=99%',
  '2026-03-09T05:11:55Z kernel: NVRM: Xid (PCI:0000:01:00): 79, GPU has fallen off the bus.',
  '2026-03-09T05:12:33Z app: RuntimeError: CUDA out of memory. Tried to allocate 2.00 GiB',
  'Mar  9 05:13:02 host dockerd[1234]: container exited with code 137 (OOM-killer)',
  '2026-03-09T05:14:20Z nvidia-smi GPU0 temp=88C util=100% thermal limit',
  '2026-03-09T05:16:08Z app: WARNING: retrying inference batch (timeout)',
].join('\n');

analyze();
