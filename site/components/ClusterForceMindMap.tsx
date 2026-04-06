'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force';
import type { PrototypeIndexItem } from '@/lib/index';

type Props = {
  items: PrototypeIndexItem[];
};

type GraphNode = {
  id: string;
  label: string;
  kind: 'root' | 'tag' | 'idea';
  count?: number;
  href?: string;
  fx?: number;
  fy?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  radius: number;
};

type GraphLink = {
  source: string | GraphNode;
  target: string | GraphNode;
  strength?: number;
};

function buildGraph(items: PrototypeIndexItem[]) {
  const root: GraphNode = {
    id: 'root',
    label: 'PF Brain',
    kind: 'root',
    radius: 44,
  };

  const tagMap = new Map<string, { count: number; items: PrototypeIndexItem[] }>();
  for (const item of items) {
    for (const tag of item.tags || []) {
      const current = tagMap.get(tag) || { count: 0, items: [] };
      current.count += 1;
      if (current.items.length < 4) current.items.push(item);
      tagMap.set(tag, current);
    }
  }

  const topTags = [...tagMap.entries()]
    .sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]))
    .slice(0, 10);

  const nodes: GraphNode[] = [root];
  const links: GraphLink[] = [];

  for (const [tag, value] of topTags) {
    const tagNode: GraphNode = {
      id: `tag:${tag}`,
      label: `#${tag}`,
      kind: 'tag',
      count: value.count,
      radius: Math.max(28, Math.min(46, 22 + value.count * 2.2)),
    };
    nodes.push(tagNode);
    links.push({ source: root.id, target: tagNode.id, strength: 0.9 });

    value.items.forEach((item) => {
      const ideaId = `idea:${item.id}:${tag}`;
      nodes.push({
        id: ideaId,
        label: item.title,
        kind: 'idea',
        href: `/p/${item.id}`,
        radius: 14,
      });
      links.push({ source: tagNode.id, target: ideaId, strength: 0.55 });
    });
  }

  return { nodes, links };
}

export default function ClusterForceMindMap({ items }: Props) {
  const { nodes, links, width, height } = useMemo(() => {
    const width = 1200;
    const height = 820;
    const graph = buildGraph(items);

    const simNodes = graph.nodes.map((node) => ({ ...node }));
    const simLinks = graph.links.map((link) => ({ ...link }));

    const root = simNodes.find((n) => n.kind === 'root');
    if (root) {
      root.fx = width / 2;
      root.fy = height / 2;
      root.x = width / 2;
      root.y = height / 2;
    }

    const simulation = forceSimulation(simNodes as any)
      .force('charge', forceManyBody().strength((node: any) => (node.kind === 'idea' ? -90 : -260)))
      .force('center', forceCenter(width / 2, height / 2))
      .force('link', forceLink(simLinks as any).id((node: any) => node.id).distance((link: any) => {
        const sourceKind = typeof link.source === 'object' ? link.source.kind : 'idea';
        return sourceKind === 'root' ? 190 : 88;
      }).strength((link: any) => link.strength ?? 0.5))
      .force('collide', forceCollide().radius((node: any) => node.radius + (node.kind === 'idea' ? 30 : 18)).iterations(2));

    for (let i = 0; i < 220; i += 1) simulation.tick();
    simulation.stop();

    return { nodes: simNodes, links: simLinks, width, height };
  }, [items]);

  return (
    <div className="overflow-x-auto p-4 sm:p-6">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto min-w-[1100px] w-full">
        {links.map((link, idx) => {
          const source = typeof link.source === 'object' ? link.source : nodes.find((n) => n.id === link.source);
          const target = typeof link.target === 'object' ? link.target : nodes.find((n) => n.id === link.target);
          if (!source || !target) return null;
          return (
            <line
              key={`link-${idx}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={source.kind === 'root' ? 'rgba(59,130,246,0.42)' : 'rgba(148,163,184,0.35)'}
              strokeWidth={source.kind === 'root' ? 2.8 : 1.8}
            />
          );
        })}

        {nodes.map((node) => {
          if (node.kind === 'idea') {
            return (
              <g key={node.id}>
                <Link href={node.href || '/'}>
                  <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.5)" strokeWidth="2" />
                </Link>
                <text x={(node.x || 0) + 22} y={(node.y || 0) + 4} className="fill-slate-700 dark:fill-slate-200 text-[12px] font-medium">
                  {node.label.length > 34 ? `${node.label.slice(0, 34)}…` : node.label}
                </text>
              </g>
            );
          }

          if (node.kind === 'tag') {
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.radius}
                  fill="rgba(59,130,246,0.16)"
                  stroke="rgba(59,130,246,0.74)"
                  strokeWidth="3"
                />
                <text x={node.x} y={(node.y || 0) - 2} textAnchor="middle" className="fill-slate-900 dark:fill-white text-[16px] font-bold">
                  {node.label}
                </text>
                <text x={node.x} y={(node.y || 0) + 18} textAnchor="middle" className="fill-slate-500 dark:fill-slate-300 text-[11px] font-bold">
                  {node.count} ideas
                </text>
              </g>
            );
          }

          return (
            <g key={node.id}>
              <circle cx={node.x} cy={node.y} r={node.radius + 18} fill="rgba(14,165,233,0.14)" stroke="rgba(14,165,233,0.45)" strokeWidth="2.5" />
              <circle cx={node.x} cy={node.y} r={node.radius} fill="rgba(15,23,42,0.95)" stroke="rgba(125,211,252,0.35)" strokeWidth="2" />
              <text x={node.x} y={(node.y || 0) - 4} textAnchor="middle" className="fill-white text-[22px] font-bold">
                {node.label}
              </text>
              <text x={node.x} y={(node.y || 0) + 18} textAnchor="middle" className="fill-slate-300 text-[12px] font-medium">
                force-directed cluster map
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
