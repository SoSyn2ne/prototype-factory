function $(id){return document.getElementById(id)}

const els={
  pool: $("pool"),
  poolCount: $("poolCount"),
  tables: $("tables"),
  guestA: $("guestA"),
  guestB: $("guestB"),
  btnAddConflict: $("btnAddConflict"),
  conflictList: $("conflictList"),
  btnExportJson: $("btnExportJson"),
  btnExportText: $("btnExportText"),
  toast: $("toast"),
};

const state={
  guests:[
    {id:"g1", name:"Minji", tag:"Bride side"},
    {id:"g2", name:"Joon", tag:"Groom side"},
    {id:"g3", name:"Sora", tag:"Friends"},
    {id:"g4", name:"Daniel", tag:"Friends"},
    {id:"g5", name:"Aunt Hye", tag:"Family"},
    {id:"g6", name:"Uncle Tae", tag:"Family"},
    {id:"g7", name:"Yuna", tag:"Coworkers"},
    {id:"g8", name:"Seok", tag:"Coworkers"},
    {id:"g9", name:"Hana", tag:"College"},
    {id:"g10", name:"Jisoo", tag:"College"},
  ],
  tables:[
    {id:"t1", name:"Table 1", cap:4, guestIds:[]},
    {id:"t2", name:"Table 2", cap:4, guestIds:[]},
    {id:"t3", name:"Table 3", cap:4, guestIds:[]},
    {id:"t4", name:"Table 4", cap:4, guestIds:[]},
  ],
  conflicts:[
    // {a:"g1", b:"g2"}
  ]
};

let dragGuestId=null;

function showToast(text){
  els.toast.textContent=text;
  els.toast.hidden=false;
  clearTimeout(showToast._t);
  showToast._t=setTimeout(()=>{els.toast.hidden=true}, 1200);
}

function guestById(id){return state.guests.find(g=>g.id===id)}

function seatedSet(){
  const s=new Set();
  state.tables.forEach(t=>t.guestIds.forEach(id=>s.add(id)));
  return s;
}

function inSameTable(a,b){
  return state.tables.some(t=>t.guestIds.includes(a) && t.guestIds.includes(b));
}

function normalizePair(a,b){
  return a < b ? {a,b} : {a:b, b:a};
}

function conflictKey(p){
  const n=normalizePair(p.a,p.b);
  return `${n.a}|${n.b}`;
}

function conflictsForTable(table){
  const ids=table.guestIds;
  const conflicts=[];
  for(const p of state.conflicts){
    if(ids.includes(p.a) && ids.includes(p.b)) conflicts.push(p);
  }
  return conflicts;
}

function moveGuestToTable(guestId, tableId){
  // Remove from any current table.
  state.tables.forEach(t=>{ t.guestIds = t.guestIds.filter(id=>id!==guestId); });
  if(tableId){
    const t=state.tables.find(x=>x.id===tableId);
    if(t && !t.guestIds.includes(guestId)) t.guestIds.push(guestId);
  }
  render();
}

function renderGuestCard(g){
  const el=document.createElement('div');
  el.className='guest';
  el.draggable=true;
  el.dataset.guestId=g.id;

  const left=document.createElement('div');
  const name=document.createElement('div');
  name.className='name';
  name.textContent=g.name;
  const tag=document.createElement('div');
  tag.className='tag';
  tag.textContent=g.tag;
  left.appendChild(name);
  left.appendChild(tag);

  const right=document.createElement('div');
  right.className='small';
  right.textContent='drag';

  el.appendChild(left);
  el.appendChild(right);

  el.addEventListener('dragstart', (ev)=>{
    dragGuestId=g.id;
    el.classList.add('dragging');
    ev.dataTransfer.effectAllowed='move';
    ev.dataTransfer.setData('text/plain', g.id);
  });
  el.addEventListener('dragend', ()=>{
    dragGuestId=null;
    el.classList.remove('dragging');
  });

  return el;
}

function render(){
  // Pool
  const seated=seatedSet();
  const poolGuests=state.guests.filter(g=>!seated.has(g.id));
  els.pool.innerHTML='';
  poolGuests.forEach(g=>els.pool.appendChild(renderGuestCard(g)));
  els.poolCount.textContent = `${poolGuests.length} available`;

  // Tables
  els.tables.innerHTML='';
  state.tables.forEach(t=>{
    const box=document.createElement('section');
    box.className='table';
    box.dataset.tableId=t.id;

    const head=document.createElement('div');
    head.className='table__head';

    const name=document.createElement('div');
    name.className='table__name';
    name.textContent=t.name;

    const meta=document.createElement('div');
    meta.className='table__meta';
    meta.textContent=`${t.guestIds.length}/${t.cap} seats`;

    head.appendChild(name);
    head.appendChild(meta);

    const zone=document.createElement('div');
    zone.className='dropzone';
    zone.setAttribute('role','list');
    zone.setAttribute('aria-label', `${t.name} guests`);

    t.guestIds.map(guestById).filter(Boolean).forEach(g=>zone.appendChild(renderGuestCard(g)));

    // warnings
    const capBad = t.guestIds.length > t.cap;
    const cfs = conflictsForTable(t);
    const conflictBad = cfs.length > 0;

    box.classList.toggle('capacity-bad', capBad);
    box.classList.toggle('conflict-bad', conflictBad);

    const warn=document.createElement('div');
    warn.className='warnline';

    const parts=[];
    if(capBad) parts.push(`<strong>Capacity:</strong> too many guests.`);
    if(conflictBad){
      const pairs=cfs.map(p=>`${guestById(p.a)?.name||p.a} × ${guestById(p.b)?.name||p.b}`).join(', ');
      parts.push(`<span class="bad"><strong>Conflicts:</strong> ${escapeHtml(pairs)}</span>`);
    }
    warn.innerHTML = parts.length ? parts.join(' ') : '<span>OK</span>';

    // DnD handlers
    box.addEventListener('dragover', (ev)=>{ev.preventDefault(); box.classList.add('over'); ev.dataTransfer.dropEffect='move';});
    box.addEventListener('dragleave', ()=>box.classList.remove('over'));
    box.addEventListener('drop', (ev)=>{
      ev.preventDefault();
      box.classList.remove('over');
      const id = ev.dataTransfer.getData('text/plain') || dragGuestId;
      if(!id) return;
      moveGuestToTable(id, t.id);
      showToast('Moved');
    });

    box.appendChild(head);
    box.appendChild(zone);
    box.appendChild(warn);
    els.tables.appendChild(box);
  });

  // Pool drop (remove from table)
  els.pool.addEventListener('dragover', (ev)=>{ev.preventDefault(); ev.dataTransfer.dropEffect='move';});
  els.pool.addEventListener('drop', (ev)=>{
    ev.preventDefault();
    const id = ev.dataTransfer.getData('text/plain') || dragGuestId;
    if(!id) return;
    moveGuestToTable(id, null);
    showToast('Returned to pool');
  });

  // Selects
  const opts = state.guests.map(g=>({value:g.id, label:g.name}));
  renderSelect(els.guestA, opts);
  renderSelect(els.guestB, opts);

  // Conflicts list
  els.conflictList.innerHTML='';
  if(!state.conflicts.length){
    const empty=document.createElement('div');
    empty.className='small';
    empty.textContent='No conflicts yet. Add one to see warnings when those guests sit together.';
    els.conflictList.appendChild(empty);
  } else {
    state.conflicts.forEach((p, idx)=>{
      const item=document.createElement('div');
      item.className='conflictItem';
      const pair=document.createElement('div');
      pair.className='pair';
      pair.textContent=`${guestById(p.a)?.name||p.a} × ${guestById(p.b)?.name||p.b}`;
      const btn=document.createElement('button');
      btn.className='btn';
      btn.type='button';
      btn.textContent='Remove';
      btn.addEventListener('click', ()=>{
        state.conflicts.splice(idx,1);
        render();
        showToast('Removed');
      });
      item.appendChild(pair);
      item.appendChild(btn);
      els.conflictList.appendChild(item);
    });
  }
}

function renderSelect(select, opts){
  const current=select.value;
  select.innerHTML='';
  opts.forEach(o=>{
    const opt=document.createElement('option');
    opt.value=o.value;
    opt.textContent=o.label;
    select.appendChild(opt);
  });
  if(current) select.value=current;
}

function escapeHtml(s){
  return String(s||"")
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

els.btnAddConflict.addEventListener('click', ()=>{
  const a=els.guestA.value;
  const b=els.guestB.value;
  if(!a || !b || a===b){ showToast('Pick two different guests'); return; }

  const key=conflictKey({a,b});
  const exists=new Set(state.conflicts.map(conflictKey));
  if(exists.has(key)){ showToast('Conflict already exists'); return; }

  state.conflicts.push(normalizePair(a,b));
  render();
  showToast('Conflict added');
});

function seatingPlan(){
  return {
    tables: state.tables.map(t=>({
      id:t.id,
      name:t.name,
      cap:t.cap,
      guests: t.guestIds.map(id=>guestById(id)).filter(Boolean),
      conflicts: conflictsForTable(t).map(p=>({a:p.a,b:p.b}))
    })),
    unseated: state.guests.filter(g=>!seatedSet().has(g.id)),
    conflictPairs: state.conflicts.map(p=>({a:p.a,b:p.b}))
  };
}

els.btnExportJson.addEventListener('click', async ()=>{
  const payload=seatingPlan();
  await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
  showToast('JSON copied');
});

els.btnExportText.addEventListener('click', async ()=>{
  const payload=seatingPlan();
  const lines=[];
  lines.push('Wedding Seating Plan (draft)');
  lines.push('');
  payload.tables.forEach(t=>{
    lines.push(`${t.name} (${t.guests.length}/${t.cap})`);
    t.guests.forEach(g=>lines.push(`- ${g.name} (${g.tag})`));
    if(t.conflicts.length){
      lines.push('  Conflicts:');
      t.conflicts.forEach(p=>lines.push(`  - ${guestById(p.a)?.name||p.a} × ${guestById(p.b)?.name||p.b}`));
    }
    lines.push('');
  });
  if(payload.unseated.length){
    lines.push('Unseated:');
    payload.unseated.forEach(g=>lines.push(`- ${g.name} (${g.tag})`));
    lines.push('');
  }

  await navigator.clipboard.writeText(lines.join('\n'));
  showToast('Text copied');
});

// Seed a conflict pair for the demo.
state.conflicts.push(normalizePair('g3','g4'));
render();
