'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceRadial,
  forceSimulation,
  forceX,
  forceY,
} from 'd3-force';
import type { ReactNode } from 'react';
import type { PrototypeIndexItem } from '@/lib/index';

type Props = {
  items: PrototypeIndexItem[];
  headerExtra?: ReactNode;
};

type MMKind = 'root' | 'cluster' | 'month' | 'idea';

type MMNode = {
  id: string;
  kind: MMKind;
  label: string;
  parentId?: string;
  color: string;
  count?: number;
  item?: PrototypeIndexItem;
  depth: number;
  r: number;
  w: number;
  collideR: number;
  x: number;
  y: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
};

type MMLink = { source: string; target: string; kind: MMKind };

type ClusterGroup = {
  tag: string;
  count: number;
  items: PrototypeIndexItem[];
  months: Map<string, PrototypeIndexItem[]>;
  color: string;
};

// Dark categorical palette validated against surface #0f172a
// (dataviz six-checks: band/chroma/contrast pass; every node carries a
// direct text label as the secondary encoding).
const CLUSTER_PALETTE = [
  '#3987e5',
  '#199e70',
  '#c98500',
  '#008300',
  '#9085e9',
  '#e66767',
  '#d55181',
  '#d95926',
];
const NEUTRAL_COLOR = '#64748b';

const MAX_CLUSTERS = 18;
const MONTH_SPLIT_THRESHOLD = 13;

function isCjk(ch: string) {
  const code = ch.charCodeAt(0);
  return code >= 0x1100 && code <= 0xffdc;
}

function estTextWidth(label: string, px: number) {
  let w = 0;
  for (const ch of label) w += isCjk(ch) ? px * 0.98 : px * 0.56;
  return w;
}

function shorten(label: string, n: number) {
  return label.length > n ? `${label.slice(0, n)}…` : label;
}

function monthOf(item: PrototypeIndexItem) {
  const src = item.createdAt || item.id;
  const m = src.match(/(\d{4})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}` : 'etc';
}

function buildClusters(items: PrototypeIndexItem[]): ClusterGroup[] {
  const map = new Map<string, PrototypeIndexItem[]>();
  for (const item of items) {
    for (const tag of item.tags || []) {
      const list = map.get(tag) || [];
      list.push(item);
      map.set(tag, list);
    }
  }
  return [...map.entries()]
    .map(([tag, list]) => ({ tag, list }))
    .sort((a, b) => b.list.length - a.list.length || a.tag.localeCompare(b.tag))
    .slice(0, MAX_CLUSTERS)
    .map(({ tag, list }, i) => {
      const months = new Map<string, PrototypeIndexItem[]>();
      for (const item of list) {
        const key = monthOf(item);
        const bucket = months.get(key) || [];
        bucket.push(item);
        months.set(key, bucket);
      }
      return {
        tag,
        count: list.length,
        items: list,
        months,
        color: i < CLUSTER_PALETTE.length ? CLUSTER_PALETTE[i] : NEUTRAL_COLOR,
      };
    });
}

function clusterRadius(count: number) {
  return Math.max(34, Math.min(60, 26 + Math.sqrt(count) * 4.6));
}

type Transform = { x: number; y: number; k: number };

export default function MindMapCanvas({ items, headerExtra }: Props) {
  const router = useRouter();
  const clusters = useMemo(() => buildClusters(items), [items]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 1280, h: 900 });
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [panelOpen, setPanelOpen] = useState(true);
  const [, setTick] = useState(0);

  const transformRef = useRef<Transform>({ x: 0, y: 0, k: 1 });
  const posRef = useRef<Map<string, { x: number; y: number }>>(new Map());
  const simRef = useRef<ReturnType<typeof forceSimulation> | null>(null);
  const nodesRef = useRef<MMNode[]>([]);
  const linksRef = useRef<MMLink[]>([]);
  const panDragRef = useRef<{ px: number; py: number; tx: number; ty: number } | null>(null);
  const nodeDragRef = useRef<{ id: string; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  const flyRef = useRef<number | null>(null);
  const didFitRef = useRef(false);

  // ---- search --------------------------------------------------------------
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [] as PrototypeIndexItem[];
    return items
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          (item.oneLiner || '').toLowerCase().includes(q) ||
          (item.tags || []).some((t) => t.toLowerCase().includes(q))
      )
      .slice(0, 40);
  }, [items, query]);
  const matchedIds = useMemo(() => new Set(matches.map((m) => m.id)), [matches]);

  // ---- graph structure -----------------------------------------------------
  const structure = useMemo(() => {
    const cx = size.w / 2;
    const cy = size.h / 2;
    const nodes: MMNode[] = [];
    const links: MMLink[] = [];

    nodes.push({
      id: 'root',
      kind: 'root',
      label: 'PF Brain',
      color: '#7dd3fc',
      count: items.length,
      depth: 0,
      r: 56,
      w: 112,
      collideR: 96,
      x: cx,
      y: cy,
      fx: cx,
      fy: cy,
    });

    clusters.forEach((group, i) => {
      const clusterId = `tag:${group.tag}`;
      const angle = (i / clusters.length) * Math.PI * 2 - Math.PI / 2;
      const r = clusterRadius(group.count);
      nodes.push({
        id: clusterId,
        kind: 'cluster',
        label: `#${group.tag}`,
        parentId: 'root',
        color: group.color,
        count: group.count,
        depth: 1,
        r,
        w: r * 2,
        collideR: r + 26,
        x: cx + Math.cos(angle) * 360,
        y: cy + Math.sin(angle) * 360,
      });
      links.push({ source: 'root', target: clusterId, kind: 'cluster' });

      if (!expanded.has(clusterId)) return;

      const useMonths = group.count >= MONTH_SPLIT_THRESHOLD && group.months.size > 1;
      const addIdea = (item: PrototypeIndexItem, parentId: string, depth: number) => {
        const ideaId = `idea:${group.tag}:${item.id}`;
        const label = shorten(item.title, 34);
        const w = Math.min(250, 20 + estTextWidth(label, 12));
        nodes.push({
          id: ideaId,
          kind: 'idea',
          label,
          parentId,
          color: group.color,
          item,
          depth,
          r: 13,
          w,
          collideR: w / 2 + 12,
          x: 0,
          y: 0,
        });
        links.push({ source: parentId, target: ideaId, kind: 'idea' });
      };

      if (useMonths) {
        const monthKeys = [...group.months.keys()].sort().reverse();
        for (const key of monthKeys) {
          const monthId = `month:${group.tag}:${key}`;
          const bucket = group.months.get(key) || [];
          nodes.push({
            id: monthId,
            kind: 'month',
            label: key,
            parentId: clusterId,
            color: group.color,
            count: bucket.length,
            depth: 2,
            r: 24,
            w: 48,
            collideR: 42,
            x: 0,
            y: 0,
          });
          links.push({ source: clusterId, target: monthId, kind: 'month' });
          if (expanded.has(monthId)) bucket.forEach((item) => addIdea(item, monthId, 3));
        }
      } else {
        group.items.forEach((item) => addIdea(item, clusterId, 2));
      }
    });

    return { nodes, links };
  }, [clusters, expanded, items.length, size.w, size.h]);

  // ---- simulation lifecycle ------------------------------------------------
  useEffect(() => {
    const cx = size.w / 2;
    const cy = size.h / 2;
    const prev = posRef.current;

    const simNodes = structure.nodes.map((node) => {
      const kept = prev.get(node.id);
      if (kept) return { ...node, x: kept.x, y: kept.y };
      if (node.parentId) {
        const parent = prev.get(node.parentId);
        if (parent) {
          return {
            ...node,
            x: parent.x + (Math.random() - 0.5) * 40,
            y: parent.y + (Math.random() - 0.5) * 40,
          };
        }
      }
      if (node.kind === 'root') return { ...node, x: cx, y: cy, fx: cx, fy: cy };
      return { ...node, x: node.x || cx + (Math.random() - 0.5) * 80, y: node.y || cy + (Math.random() - 0.5) * 80 };
    });
    const simLinks = structure.links.map((link) => ({ ...link }));

    simRef.current?.stop();

    const sim = forceSimulation(simNodes as any)
      .force(
        'charge',
        forceManyBody().strength((node: any) =>
          node.kind === 'root' ? -1400 : node.kind === 'cluster' ? -720 : node.kind === 'month' ? -320 : -150
        )
      )
      .force(
        'link',
        forceLink(simLinks as any)
          .id((node: any) => node.id)
          .distance((link: any) => {
            const target = link.target;
            if (target.kind === 'cluster') return 250 + target.r;
            if (target.kind === 'month') return 120;
            return 86 + target.w / 2;
          })
          .strength((link: any) => (link.kind === 'cluster' ? 0.85 : link.kind === 'month' ? 0.75 : 0.6))
      )
      .force(
        'collide',
        forceCollide()
          .radius((node: any) => node.collideR)
          .strength(0.9)
          .iterations(2)
      )
      .force(
        'radial',
        forceRadial(360, cx, cy).strength((node: any) => (node.kind === 'cluster' ? 0.28 : 0))
      )
      .force('x', forceX(cx).strength(0.015))
      .force('y', forceY(cy).strength(0.015))
      .velocityDecay(0.36)
      .alpha(0.9)
      .alphaDecay(0.03)
      .on('tick', () => {
        for (const node of sim.nodes() as any[]) {
          posRef.current.set(node.id, { x: node.x, y: node.y });
        }
        setTick((t) => t + 1);
      });

    simRef.current = sim as any;
    nodesRef.current = simNodes as any;
    linksRef.current = simLinks as any;

    return () => {
      sim.stop();
    };
  }, [structure, size.w, size.h]);

  // ---- container sizing ----------------------------------------------------
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.clientWidth || 1280, h: el.clientHeight || 900 });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ---- viewport helpers ------------------------------------------------------
  const applyTransform = useCallback((next: Transform) => {
    transformRef.current = next;
    setTick((t) => t + 1);
  }, []);

  const flyTo = useCallback(
    (targetX: number, targetY: number, targetK = 1.05) => {
      if (flyRef.current) cancelAnimationFrame(flyRef.current);
      const from = { ...transformRef.current };
      const to: Transform = {
        k: targetK,
        x: size.w / 2 - targetX * targetK,
        y: size.h / 2 - targetY * targetK,
      };
      const started = performance.now();
      const duration = 420;
      const step = (now: number) => {
        const t = Math.min(1, (now - started) / duration);
        const e = 1 - Math.pow(1 - t, 3);
        applyTransform({
          x: from.x + (to.x - from.x) * e,
          y: from.y + (to.y - from.y) * e,
          k: from.k + (to.k - from.k) * e,
        });
        if (t < 1) flyRef.current = requestAnimationFrame(step);
      };
      flyRef.current = requestAnimationFrame(step);
    },
    [applyTransform, size.w, size.h]
  );

  const fitView = useCallback(() => {
    const nodes = nodesRef.current;
    if (!nodes.length) return;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const node of nodes) {
      const pos = posRef.current.get(node.id);
      if (!pos) continue;
      const half = Math.max(node.collideR, node.w / 2);
      minX = Math.min(minX, pos.x - half);
      maxX = Math.max(maxX, pos.x + half);
      minY = Math.min(minY, pos.y - node.collideR);
      maxY = Math.max(maxY, pos.y + node.collideR);
    }
    if (!Number.isFinite(minX)) return;
    const bw = Math.max(200, maxX - minX);
    const bh = Math.max(200, maxY - minY);
    const k = Math.min(1.6, Math.min((size.w - 120) / bw, (size.h - 120) / bh));
    flyTo((minX + maxX) / 2, (minY + maxY) / 2, k);
  }, [flyTo, size.w, size.h]);

  useEffect(() => {
    if (didFitRef.current) return;
    didFitRef.current = true;
    const timer = setTimeout(() => fitView(), 700);
    return () => clearTimeout(timer);
  }, [fitView]);

  // ---- expand helpers --------------------------------------------------------
  const reheat = useCallback(() => {
    simRef.current?.alpha(0.65).restart();
  }, []);

  const toggleExpand = useCallback(
    (nodeId: string) => {
      setExpanded((prevSet) => {
        const next = new Set(prevSet);
        if (next.has(nodeId)) {
          next.delete(nodeId);
          const prefix = nodeId.startsWith('tag:') ? `month:${nodeId.slice(4)}:` : null;
          if (prefix) for (const id of [...next]) if (id.startsWith(prefix)) next.delete(id);
        } else {
          next.add(nodeId);
        }
        return next;
      });
    },
    []
  );

  const expandAll = useCallback(() => {
    const next = new Set<string>();
    for (const group of clusters) {
      next.add(`tag:${group.tag}`);
      if (group.count >= MONTH_SPLIT_THRESHOLD && group.months.size > 1) {
        for (const key of group.months.keys()) next.add(`month:${group.tag}:${key}`);
      }
    }
    setExpanded(next);
  }, [clusters]);

  const collapseAll = useCallback(() => setExpanded(new Set()), []);

  // auto-expand paths to search matches
  useEffect(() => {
    if (!matches.length) return;
    setExpanded((prevSet) => {
      const next = new Set(prevSet);
      for (const group of clusters) {
        const hit = group.items.filter((item) => matchedIds.has(item.id));
        if (!hit.length) continue;
        next.add(`tag:${group.tag}`);
        if (group.count >= MONTH_SPLIT_THRESHOLD && group.months.size > 1) {
          for (const item of hit) next.add(`month:${group.tag}:${monthOf(item)}`);
        }
      }
      return next;
    });
  }, [matches, matchedIds, clusters]);

  useEffect(() => {
    reheat();
  }, [expanded, reheat]);

  // ---- pointer interaction ---------------------------------------------------
  const toWorld = useCallback((clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    const t = transformRef.current;
    const sx = clientX - (rect?.left || 0);
    const sy = clientY - (rect?.top || 0);
    return { x: (sx - t.x) / t.k, y: (sy - t.y) / t.k };
  }, []);

  // React root wheel listeners are passive, so attach a native non-passive
  // listener for cursor-anchored zoom.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      const t = transformRef.current;
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const factor = e.deltaY > 0 ? 0.88 : 1.14;
      const k = Math.max(0.22, Math.min(3.2, t.k * factor));
      applyTransform({
        k,
        x: mx - ((mx - t.x) / t.k) * k,
        y: my - ((my - t.y) / t.k) * k,
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [applyTransform]);

  const zoomBy = useCallback(
    (factor: number) => {
      const t = transformRef.current;
      const k = Math.max(0.22, Math.min(3.2, t.k * factor));
      const mx = size.w / 2;
      const my = size.h / 2;
      applyTransform({ k, x: mx - ((mx - t.x) / t.k) * k, y: my - ((my - t.y) / t.k) * k });
    },
    [applyTransform, size.w, size.h]
  );

  const startNodeDrag = useCallback(
    (nodeId: string, e: React.PointerEvent) => {
      e.stopPropagation();
      (e.target as Element).setPointerCapture?.(e.pointerId);
      nodeDragRef.current = { id: nodeId, moved: false };
      const node = (nodesRef.current as any[]).find((n) => n.id === nodeId);
      if (node) {
        const world = toWorld(e.clientX, e.clientY);
        node.fx = world.x;
        node.fy = world.y;
        simRef.current?.alphaTarget(0.22).restart();
      }
    },
    [toWorld]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (nodeDragRef.current) {
        const drag = nodeDragRef.current;
        drag.moved = true;
        const node = (nodesRef.current as any[]).find((n) => n.id === drag.id);
        if (node) {
          const world = toWorld(e.clientX, e.clientY);
          node.fx = world.x;
          node.fy = world.y;
        }
        return;
      }
      if (panDragRef.current) {
        const drag = panDragRef.current;
        applyTransform({
          ...transformRef.current,
          x: drag.tx + (e.clientX - drag.px),
          y: drag.ty + (e.clientY - drag.py),
        });
      }
    },
    [applyTransform, toWorld]
  );

  const endDrag = useCallback(() => {
    if (nodeDragRef.current) {
      suppressClickRef.current = nodeDragRef.current.moved;
      const node = (nodesRef.current as any[]).find((n) => n.id === nodeDragRef.current?.id);
      if (node && node.kind !== 'root') {
        node.fx = null;
        node.fy = null;
      }
      simRef.current?.alphaTarget(0);
    }
    nodeDragRef.current = null;
    panDragRef.current = null;
  }, []);

  const nodeClicked = useCallback(
    (node: MMNode) => {
      if (suppressClickRef.current) {
        suppressClickRef.current = false;
        return;
      }
      if (node.kind === 'cluster' || node.kind === 'month') {
        toggleExpand(node.id);
        setSelectedId(node.id);
      } else if (node.kind === 'idea') {
        setSelectedId(node.id);
      } else {
        fitView();
      }
    },
    [toggleExpand, fitView]
  );

  const flyToNodeId = useCallback(
    (nodeId: string) => {
      const pos = posRef.current.get(nodeId);
      if (pos) flyTo(pos.x, pos.y, Math.max(transformRef.current.k, 1.05));
    },
    [flyTo]
  );

  // ---- render ------------------------------------------------------------------
  const t = transformRef.current;
  const nodes = nodesRef.current as MMNode[];
  const links = linksRef.current as any[];

  const selectedNode = selectedId ? nodes.find((n) => n.id === selectedId) : null;
  const hoveredNode = hoveredId ? nodes.find((n) => n.id === hoveredId) : null;
  const activeItem = selectedNode?.item || hoveredNode?.item || null;

  const connectedIds = useMemo(() => {
    const focus = hoveredId || selectedId;
    if (!focus) return null;
    const set = new Set<string>([focus]);
    for (const link of linksRef.current as any[]) {
      const sid = typeof link.source === 'object' ? link.source.id : link.source;
      const tid = typeof link.target === 'object' ? link.target.id : link.target;
      if (sid === focus) set.add(tid);
      if (tid === focus) set.add(sid);
    }
    return set;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredId, selectedId, structure]);

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      {/* left panel */}
      <div className="absolute left-0 top-0 z-30 flex h-full">
        <div className={`${panelOpen ? 'w-[312px]' : 'w-[52px]'} flex flex-col border-r border-slate-800 bg-slate-950/88 backdrop-blur-xl transition-all duration-200`}>
          <div className="flex items-center justify-between border-b border-slate-800 px-3 py-3">
            {panelOpen ? (
              <div>
                <div className="text-xs font-black uppercase text-emerald-300">PF Brainroom</div>
                <div className="mt-1 text-sm font-bold text-white">Mind map</div>
              </div>
            ) : null}
            <button
              type="button"
              onClick={() => setPanelOpen((v) => !v)}
              className="rounded-lg border border-slate-700 px-2.5 py-2 text-xs font-black text-slate-200 hover:bg-slate-800"
            >
              {panelOpen ? '◀' : '▶'}
            </button>
          </div>

          {panelOpen ? (
            <>
              {headerExtra ? <div className="border-b border-slate-800 px-3 py-3">{headerExtra}</div> : null}

              <div className="border-b border-slate-800 px-3 py-3">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="아이디어 검색 (제목/태그/한줄)"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-400"
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  <button type="button" onClick={expandAll} className="rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11px] font-black text-slate-200 hover:bg-slate-800">Expand all</button>
                  <button type="button" onClick={collapseAll} className="rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11px] font-black text-slate-200 hover:bg-slate-800">Collapse</button>
                  <button type="button" onClick={fitView} className="rounded-lg border border-slate-700 px-2.5 py-1.5 text-[11px] font-black text-slate-200 hover:bg-slate-800">Fit</button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-2 py-2">
                {query.trim().length >= 2 ? (
                  <div className="mb-2 px-1">
                    <div className="px-1 text-[11px] font-black uppercase tracking-wider text-emerald-300">
                      {matches.length} matches
                    </div>
                    <div className="mt-1 space-y-1">
                      {matches.map((item) => {
                        const group = clusters.find((g) => g.items.some((x) => x.id === item.id));
                        const nodeId = group ? `idea:${group.tag}:${item.id}` : null;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => {
                              if (!nodeId) {
                                router.push(`/p/${item.id}`);
                                return;
                              }
                              setSelectedId(nodeId);
                              setTimeout(() => flyToNodeId(nodeId), 300);
                            }}
                            className="block w-full truncate rounded-lg px-2 py-1.5 text-left text-xs text-slate-300 hover:bg-slate-800 hover:text-white"
                          >
                            {item.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  clusters.map((group) => {
                    const clusterId = `tag:${group.tag}`;
                    const open = expanded.has(clusterId);
                    return (
                      <button
                        key={group.tag}
                        type="button"
                        onClick={() => {
                          toggleExpand(clusterId);
                          requestAnimationFrame(() => flyToNodeId(clusterId));
                        }}
                        className="mb-1 flex w-full items-center gap-2 rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-left hover:border-slate-600"
                      >
                        <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: group.color }} />
                        <span className={`min-w-0 flex-1 truncate text-sm font-bold ${open ? 'text-white' : 'text-slate-300'}`}>
                          #{group.tag}
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">{group.count}</span>
                        <span className="text-[10px] font-black text-slate-500">{open ? '−' : '+'}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* zoom controls */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-950/70 px-2 py-2 backdrop-blur-xl">
        <button type="button" aria-label="Zoom out" onClick={() => zoomBy(0.8)} className="h-9 w-9 rounded-lg border border-slate-700 text-xs font-black text-slate-200 hover:bg-slate-800">−</button>
        <button type="button" aria-label="Zoom in" onClick={() => zoomBy(1.25)} className="h-9 w-9 rounded-lg border border-slate-700 text-xs font-black text-slate-200 hover:bg-slate-800">+</button>
        <button type="button" onClick={fitView} className="h-9 rounded-lg bg-emerald-400 px-3 text-xs font-black text-slate-950 hover:bg-emerald-300">Fit</button>
        <div className="hidden border-l border-slate-800 pl-2 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:block">
          wheel zoom · drag pan · node drag · dbl-click open
        </div>
      </div>

      {/* summary card */}
      {activeItem ? (
        <div className="absolute bottom-4 right-4 z-20 w-[340px] rounded-2xl border border-slate-800 bg-slate-950/82 p-4 text-sm text-slate-200 shadow-sm backdrop-blur-xl">
          <div className="text-[11px] font-black uppercase tracking-[0.22em] text-emerald-300">Idea</div>
          <div className="mt-2 text-base font-black text-white">{activeItem.title}</div>
          <div className="mt-2 text-xs leading-6 text-slate-300">{activeItem.oneLiner || '요약 없음'}</div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {(activeItem.tags || []).slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-[10px] font-black text-cyan-300">#{tag}</span>
            ))}
          </div>
          <div className="mt-3 text-[11px] font-bold text-slate-400">{activeItem.createdAt}</div>
          <div className="mt-3 flex gap-2">
            {activeItem.demoUrl ? (
              <Link href={activeItem.demoUrl} className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-black text-slate-950 hover:bg-emerald-300 hover:no-underline">Open demo</Link>
            ) : null}
            <Link href={`/p/${activeItem.id}`} className="rounded-lg border border-slate-700 px-3 py-2 text-xs font-black text-slate-200 hover:bg-slate-800 hover:no-underline">Detail</Link>
          </div>
        </div>
      ) : null}

      {/* canvas */}
      <div
        className="h-full w-full cursor-grab touch-none active:cursor-grabbing"
        onPointerDown={(e) => {
          if ((e.target as HTMLElement).closest('[data-node="true"]')) return;
          panDragRef.current = {
            px: e.clientX,
            py: e.clientY,
            tx: transformRef.current.x,
            ty: transformRef.current.y,
          };
        }}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <svg width="100%" height="100%">
          <g transform={`translate(${t.x} ${t.y}) scale(${t.k})`}>
            {links.map((link: any, idx: number) => {
              const source = typeof link.source === 'object' ? link.source : null;
              const target = typeof link.target === 'object' ? link.target : null;
              if (!source || !target) return null;
              const dx = target.x - source.x;
              const dy = target.y - source.y;
              const mx = source.x + dx / 2 - dy * 0.14;
              const my = source.y + dy / 2 + dx * 0.14;
              const active = connectedIds ? connectedIds.has(source.id) && connectedIds.has(target.id) : false;
              const dim = connectedIds && !active;
              return (
                <path
                  key={`link-${idx}`}
                  d={`M ${source.x} ${source.y} Q ${mx} ${my} ${target.x} ${target.y}`}
                  fill="none"
                  stroke={active ? target.color : `${target.color}`}
                  strokeOpacity={active ? 0.85 : dim ? 0.1 : link.kind === 'cluster' ? 0.5 : 0.3}
                  strokeWidth={active ? 3 : link.kind === 'cluster' ? 2.4 : link.kind === 'month' ? 1.7 : 1.2}
                />
              );
            })}

            {nodes.map((node) => {
              const active = hoveredId === node.id || selectedId === node.id;
              const dim = connectedIds ? !connectedIds.has(node.id) : false;
              const isMatch = node.kind === 'idea' && node.item ? matchedIds.has(node.item.id) : false;

              const common = {
                'data-node': 'true' as const,
                onMouseEnter: () => setHoveredId(node.id),
                onMouseLeave: () => setHoveredId(null),
                onPointerDown: (e: React.PointerEvent) => startNodeDrag(node.id, e),
                onClick: () => nodeClicked(node),
                style: { cursor: 'pointer' },
              };

              if (node.kind === 'root') {
                return (
                  <g key={node.id} {...common} opacity={dim ? 0.35 : 1}>
                    <circle cx={node.x} cy={node.y} r={node.r + 26} fill="rgba(125,211,252,0.08)" stroke="rgba(125,211,252,0.35)" strokeWidth={2} />
                    <circle cx={node.x} cy={node.y} r={node.r} fill="rgba(15,23,42,0.98)" stroke="rgba(125,211,252,0.7)" strokeWidth={2.5} />
                    <text x={node.x} y={node.y - 2} textAnchor="middle" className="fill-white text-[19px] font-black">
                      {node.label}
                    </text>
                    <text x={node.x} y={node.y + 18} textAnchor="middle" className="fill-slate-400 text-[11px] font-bold">
                      {node.count} ideas
                    </text>
                  </g>
                );
              }

              if (node.kind === 'cluster') {
                const open = expanded.has(node.id);
                return (
                  <g key={node.id} {...common} opacity={dim ? 0.3 : 1}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={active ? node.r + 4 : node.r}
                      fill={`${node.color}26`}
                      stroke={node.color}
                      strokeOpacity={active || open ? 0.95 : 0.65}
                      strokeWidth={active ? 3.4 : 2.4}
                    />
                    <text x={node.x} y={node.y - 1} textAnchor="middle" className="fill-white text-[13px] font-black">
                      {shorten(node.label, 16)}
                    </text>
                    <text x={node.x} y={node.y + 15} textAnchor="middle" className="fill-slate-300 text-[10px] font-bold">
                      {node.count} · {open ? '−' : '+'}
                    </text>
                  </g>
                );
              }

              if (node.kind === 'month') {
                const open = expanded.has(node.id);
                return (
                  <g key={node.id} {...common} opacity={dim ? 0.3 : 1}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={active ? node.r + 3 : node.r}
                      fill="rgba(15,23,42,0.94)"
                      stroke={node.color}
                      strokeOpacity={open || active ? 0.9 : 0.55}
                      strokeWidth={active ? 2.6 : 1.8}
                    />
                    <text x={node.x} y={node.y + 1} textAnchor="middle" className="fill-slate-200 text-[10px] font-black">
                      {node.label.slice(2)}
                    </text>
                    <text x={node.x} y={node.y + 12} textAnchor="middle" className="fill-slate-400 text-[9px] font-bold">
                      {node.count}{open ? ' −' : ' +'}
                    </text>
                  </g>
                );
              }

              const h = 26;
              return (
                <g
                  key={node.id}
                  {...common}
                  onDoubleClick={() => node.item && router.push(`/p/${node.item.id}`)}
                  opacity={dim && !isMatch ? 0.22 : 1}
                >
                  <rect
                    x={node.x - node.w / 2}
                    y={node.y - h / 2}
                    width={node.w}
                    height={h}
                    rx={13}
                    fill={active ? 'rgba(30,41,59,1)' : 'rgba(15,23,42,0.95)'}
                    stroke={isMatch ? '#34d399' : node.color}
                    strokeOpacity={active || isMatch ? 1 : 0.55}
                    strokeWidth={active || isMatch ? 2.4 : 1.4}
                  />
                  <circle cx={node.x - node.w / 2 + 12} cy={node.y} r={3.5} fill={node.color} />
                  <text x={node.x + 6} y={node.y + 4} textAnchor="middle" className={`text-[12px] ${active ? 'fill-white font-bold' : 'fill-slate-200'}`}>
                    {node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
